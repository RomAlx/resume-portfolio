<script setup lang="ts">
import Chip from 'primevue/chip'

defineOptions({inheritAttrs: false})
</script>

<template>
  <Chip class="base-chip" v-bind="$attrs">
    <slot />
  </Chip>
</template>
