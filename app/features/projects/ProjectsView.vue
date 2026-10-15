<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted, ref} from 'vue'

import Reveal from '~/components/Reveal.vue'
import {projects} from '~/features/projects/content'
import {withBase} from '~/services/url'
import BaseButton from '~/ui/BaseButton.vue'
import BaseCard from '~/ui/BaseCard.vue'

const runtime = useRuntimeConfig()

function mark(path: string) {
  return withBase(runtime.app.baseURL, path)
}

const scroller = ref<HTMLElement | null>(null)
const page = ref(0)
const perView = ref(2)

const pages = computed(() => Math.max(1, projects.length - perView.value + 1))

function reduced() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function measure() {
  perView.value = window.matchMedia('(max-width: 800px)').matches ? 1 : 2
  if (page.value > pages.value - 1) {
    page.value = pages.value - 1
  }
}

function targetLeft(next: number) {
  const root = scroller.value
  if (!root) {
    return 0
  }
  const max = Math.max(0, root.scrollWidth - root.clientWidth)
  const card = root.children.item(next)
  if (!(card instanceof HTMLElement)) {
    return max
  }
  return Math.min(card.offsetLeft, max)
}

function show(next: number) {
  const root = scroller.value
  if (!root) {
    return
  }
  const count = pages.value
  const target = (next + count) % count
  root.scrollTo({
    left: targetLeft(target),
    behavior: reduced() ? 'auto' : 'smooth',
  })
  page.value = target
}

function onScroll() {
  const root = scroller.value
  if (!root) {
    return
  }
  let nearest = 0
  let distance = Number.POSITIVE_INFINITY
  for (let item = 0; item < pages.value; item += 1) {
    const gap = Math.abs(targetLeft(item) - root.scrollLeft)
    if (gap < distance) {
      distance = gap
      nearest = item
    }
  }
  page.value = nearest
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'ArrowRight') {
    show(page.value + 1)
  }
  if (event.key === 'ArrowLeft') {
    show(page.value - 1)
  }
}

onMounted(() => {
  measure()
  scroller.value?.addEventListener('scroll', onScroll, {passive: true})
  window.addEventListener('resize', measure)
})

onBeforeUnmount(() => {
  scroller.value?.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', measure)
})
</script>

<template>
  <section id="projects" class="section" tabindex="0" aria-roledescription="carousel" @keydown="onKey">
    <div class="section-head">
      <Reveal><h2>Проекты</h2></Reveal>
      <div class="carousel-nav">
        <BaseButton text rounded type="button" aria-label="Предыдущий проект" @click="show(page - 1)">←</BaseButton>
        <BaseButton text rounded type="button" aria-label="Следующий проект" @click="show(page + 1)">→</BaseButton>
      </div>
    </div>
    <div ref="scroller" class="carousel">
      <BaseCard
        v-for="(project, projectIndex) in projects"
        :key="project.name"
        v-reveal
        class="project reveal"
      >
        <p class="kicker">{{ String(projectIndex + 1).padStart(2, '0') }}</p>
        <h3 class="project-name">
          <img class="mark logo" :src="mark(project.mark)" alt="">
          <span>{{ project.name }}</span>
        </h3>
        <p>{{ project.place }}</p>
        <p class="period">{{ project.period }}</p>
        <p class="context">{{ project.summary }}</p>
      </BaseCard>
    </div>
    <div class="dots" role="group" aria-label="Позиция в карусели">
      <BaseButton
        v-for="dot in pages"
        :key="dot"
        class="dot"
        text
        rounded
        type="button"
        :class="{active: page === dot - 1}"
        :aria-label="projects[dot - 1]?.name"
        :aria-current="page === dot - 1 ? 'true' : undefined"
        @click="show(dot - 1)"
      />
    </div>
  </section>
</template>
