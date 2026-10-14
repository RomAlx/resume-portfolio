<script setup lang="ts">
import Card from 'primevue/card'

defineOptions({inheritAttrs: false})
</script>

<template>
  <Card class="base-card" v-bind="$attrs">
    <template #content>
      <slot />
    </template>
  </Card>
</template>
