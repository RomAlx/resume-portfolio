<script setup lang="ts">
import {Menu, X} from '@lucide/vue'
import {onBeforeUnmount, onMounted, ref} from 'vue'

import PdfLink from '~/components/PdfLink.vue'
import ThemeToggle from '~/components/ThemeToggle.vue'
import {openPage} from '~/services/reveal'
import BaseButton from '~/ui/BaseButton.vue'

const links = [
  {id: 'about', label: 'О себе'},
  {id: 'experience', label: 'Опыт'},
  {id: 'projects', label: 'Проекты'},
  {id: 'skills', label: 'Навыки'},
  {id: 'education', label: 'Образование'},
]

const header = ref<HTMLElement | null>(null)
const arrived = ref(false)
const active = ref('about')
const progress = ref(0)
const open = ref(false)
const route = useRoute()

function measure() {
  const height = header.value?.offsetHeight ?? 72
  document.documentElement.style.setProperty('--header-h', `${height}px`)
}

function onScroll() {
  const root = document.documentElement
  const max = root.scrollHeight - root.clientHeight
  progress.value = max > 0 ? (root.scrollTop / max) * 100 : 0

  const line = (header.value?.offsetHeight ?? 72) + 8
  let current = links[0]?.id ?? 'about'
  for (const link of links) {
    const node = document.getElementById(link.id)
    if (node && node.getBoundingClientRect().top <= line) {
      current = link.id
    }
  }
  active.value = current
}

function go(event: MouseEvent, id: string) {
  open.value = false
  if (route.path !== '/') {
    return
  }
  const node = document.getElementById(id)
  if (!node) {
    return
  }
  event.preventDefault()
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  node.scrollIntoView({behavior: motion, block: 'start'})
  history.replaceState(null, '', `#${id}`)
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    open.value = false
  }
}

function onPointer(event: PointerEvent) {
  if (!open.value || !header.value) {
    return
  }
  if (event.target instanceof Node && !header.value.contains(event.target)) {
    open.value = false
  }
}

let observer: ResizeObserver | undefined

onMounted(() => {
  measure()
  onScroll()
  if (header.value) {
    observer = new ResizeObserver(measure)
    observer.observe(header.value)
  }
  window.addEventListener('scroll', onScroll, {passive: true})
  window.addEventListener('keydown', onKey)
  window.addEventListener('pointerdown', onPointer)
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion) {
    arrived.value = true
    openPage()
    return
  }
  requestAnimationFrame(() => {
    arrived.value = true
    openPage()
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('pointerdown', onPointer)
})
</script>

<template>
  <header ref="header" class="site-header" :class="{shown: arrived}">
    <NuxtLink class="brand" :to="{path: '/', hash: '#about'}" @click="go($event, 'about')">Алексей Романовский</NuxtLink>
    <BaseButton
      class="burger"
      text
      rounded
      type="button"
      :aria-expanded="open"
      aria-controls="site-menu"
      aria-label="Меню"
      @click="open = !open"
    >
      <X v-if="open" :size="18" />
      <Menu v-else :size="18" />
    </BaseButton>
    <nav id="site-menu" class="nav" :class="{open}" aria-label="Разделы">
      <NuxtLink
        v-for="link in links"
        :key="link.id"
        :class="{active: active === link.id}"
        :to="{path: '/', hash: `#${link.id}`}"
        @click="go($event, link.id)"
      >
        {{ link.label }}
      </NuxtLink>
      <PdfLink @click="open = false" />
      <ThemeToggle />
    </nav>
    <span class="progress" :style="{width: `${progress}%`}" />
  </header>
</template>
