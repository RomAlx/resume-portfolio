<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue'

import {bindReveal} from '~/services/reveal'

const root = ref<HTMLElement | null>(null)
const shown = ref(false)
let stop = () => {}

onMounted(() => {
  if (!root.value) {
    return
  }
  stop = bindReveal(root.value, (value) => {
    shown.value = value
  })
})

onBeforeUnmount(() => {
  stop()
})
</script>

<template>
  <div ref="root" class="reveal" :class="{shown}">
    <slot />
  </div>
</template>
