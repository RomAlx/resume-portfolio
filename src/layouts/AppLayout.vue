<template>
  <n-layout class="min-h-screen">
    <AppHeader />

    <!-- Добавляем отступ сверху равный высоте хедера (64px = h-16) -->
    <n-layout-content class="!pt-16">
      <div class="mx-auto">
        <slot />
      </div>
    </n-layout-content>

    <AppFooter />

    <!-- Back to top button -->
    <n-back-top :right="24" :bottom="24" />
  </n-layout>
</template>

<script>
import { defineComponent } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default defineComponent({
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter
  }
})
</script>