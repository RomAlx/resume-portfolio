<script setup lang="ts">
import Button from 'primevue/button'

defineOptions({inheritAttrs: false})
</script>

<template>
  <Button class="base-button" v-bind="$attrs">
    <slot />
  </Button>
</template>
