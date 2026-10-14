<script setup lang="ts">
import {computed} from 'vue'

import {getCvFile} from '~/features/cv/boundary'
import {withBase} from '~/services/url'

const cv = getCvFile()
const runtime = useRuntimeConfig()

const href = computed(() => withBase(runtime.app.baseURL, `/${encodeURIComponent(cv.fileName)}`))
</script>

<template>
  <a
    v-if="cv.published"
    class="resume"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ cv.label }}
  </a>
</template>
