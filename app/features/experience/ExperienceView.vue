<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue'

import Reveal from '~/components/Reveal.vue'
import {jobs} from '~/features/experience/content'
import {withBase} from '~/services/url'
import BaseCard from '~/ui/BaseCard.vue'

const runtime = useRuntimeConfig()
const track = ref<HTMLElement | null>(null)
const place = ref(0)
const tail = ref(0)
const upward = ref(false)
const lit = ref(0)
const current = ref(0)
const nodeTops = ref<string[]>([])
const railTop = ref('0px')
const railSpan = ref('0px')

let lastY = 0
let velocity = 0
let frame = 0
let reduced = false
let targetPlace = 0
let shown = 0

function mark(path: string) {
  return withBase(runtime.app.baseURL, path)
}

function read() {
  const node = track.value
  if (!node) {
    return
  }
  const articles = [...node.querySelectorAll<HTMLElement>('.job')]
  if (!articles.length) {
    return
  }
  const rect = node.getBoundingClientRect()
  const mids = articles.map((article) => {
    const box = article.getBoundingClientRect()
    return box.top + box.height / 2 - rect.top
  })
  nodeTops.value = mids.map(mid => `${mid}px`)
  const first = articles[0]
  const last = articles[articles.length - 1]
  if (!first || !last) {
    return
  }
  const firstBox = first.getBoundingClientRect()
  const lastBox = last.getBoundingClientRect()
  const start = firstBox.top - rect.top + 10
  const end = lastBox.bottom - rect.top - 10
  const span = Math.max(end - start, 1)
  railTop.value = `${start}px`
  railSpan.value = `${span}px`
  const mid = window.innerHeight / 2
  const screenStart = rect.top + start
  const screenEnd = rect.top + end
  if (mid > screenEnd) {
    lit.value = 1
    targetPlace = 1
  }
  else if (mid < screenStart) {
    lit.value = 0
    targetPlace = 0
  }
  else {
    lit.value = 1
    targetPlace = (mid - screenStart) / span
  }
  let closest = 0
  let best = Number.POSITIVE_INFINITY
  mids.forEach((item, index) => {
    const gap = Math.abs(rect.top + item - mid)
    if (gap < best) {
      best = gap
      closest = index
    }
  })
  current.value = closest
}

function tick() {
  const delta = targetPlace - shown
  shown = reduced || Math.abs(delta) < 0.004 ? targetPlace : shown + delta * 0.2
  place.value = shown
  velocity *= 0.84
  tail.value = reduced ? 0 : Math.min(72, Math.abs(velocity) * 1.6)
  upward.value = velocity < 0
  if (Math.abs(targetPlace - shown) > 0.004 || Math.abs(velocity) > 0.3) {
    frame = requestAnimationFrame(tick)
  }
  else {
    frame = 0
    tail.value = 0
  }
}

function onScroll() {
  const delta = window.scrollY - lastY
  lastY = window.scrollY
  velocity = velocity * 0.45 + delta * 0.55
  upward.value = velocity < 0
  tail.value = reduced ? 0 : Math.min(72, Math.abs(velocity) * 1.6)
  read()
  if (!frame) {
    frame = requestAnimationFrame(tick)
  }
}

onMounted(() => {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  lastY = window.scrollY
  read()
  window.addEventListener('scroll', onScroll, {passive: true})
  window.addEventListener('resize', read)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', read)
  if (frame) {
    cancelAnimationFrame(frame)
  }
})
</script>

<template>
  <section id="experience" class="section">
    <Reveal><h2>Опыт</h2></Reveal>
    <div
      ref="track"
      class="timeline"
      :style="{
        '--rail-top': railTop,
        '--rail-span': railSpan,
        '--p': String(place),
        '--tail': `${tail}px`,
        '--on': String(lit),
      }"
    >
      <span class="rail" aria-hidden="true"><span class="rail-fill" /></span>
      <span
        v-for="(job, jobIndex) in jobs"
        :key="`${job.id}-node`"
        v-show="nodeTops.length === jobs.length"
        class="node"
        :class="{current: jobIndex === current && lit === 1}"
        :style="{top: nodeTops[jobIndex] ?? '0px'}"
        aria-hidden="true"
      />
      <span class="scrub" :class="{up: upward}" aria-hidden="true" />
      <article v-for="job in jobs" :key="job.id" class="job">
        <BaseCard v-reveal class="job-card reveal">
          <p class="period">{{ job.period }}</p>
          <h3>{{ job.position }}</h3>
          <p class="company">
            <img class="mark" :class="{logo: job.logo, round: job.round}" :src="mark(job.mark)" alt="">
            <span>{{ job.company }}</span>
          </p>
          <p class="context">{{ job.context }}</p>
          <ul class="points">
            <li v-for="point in job.points" :key="point">{{ point }}</li>
          </ul>
          <p class="stack">{{ job.stack }}</p>
        </BaseCard>
      </article>
    </div>
  </section>
</template>
