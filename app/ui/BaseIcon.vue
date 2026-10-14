<script setup lang="ts">
import {Logs, Mail, Phone} from '@lucide/vue'
import type {Component} from 'vue'
import {
  siDocker,
  siFastapi,
  siGit,
  siGithub,
  siGrafana,
  siLaravel,
  siMysql,
  siNginx,
  siNodedotjs,
  siNuxt,
  siPhp,
  siPinia,
  siPostgresql,
  siPrimevue,
  siPrometheus,
  siPython,
  siRedis,
  siTelegram,
  siTypescript,
  siVuedotjs,
} from 'simple-icons'

defineProps<{
  name: string
  size?: number
}>()

const strokes: Record<string, Component> = {
  loki: Logs,
  mail: Mail,
  phone: Phone,
}

const brands: Record<string, string> = {
  docker: siDocker.path,
  fastapi: siFastapi.path,
  git: siGit.path,
  github: siGithub.path,
  grafana: siGrafana.path,
  laravel: siLaravel.path,
  mysql: siMysql.path,
  nginx: siNginx.path,
  node: siNodedotjs.path,
  nuxt: siNuxt.path,
  php: siPhp.path,
  pinia: siPinia.path,
  postgresql: siPostgresql.path,
  primevue: siPrimevue.path,
  prometheus: siPrometheus.path,
  python: siPython.path,
  redis: siRedis.path,
  telegram: siTelegram.path,
  typescript: siTypescript.path,
  vue: siVuedotjs.path,
}
</script>

<template>
  <component
    :is="strokes[name]"
    v-if="strokes[name]"
    class="base-icon"
    :size="size ?? 16"
    aria-hidden="true"
  />
  <svg
    v-else-if="brands[name]"
    class="base-icon"
    :width="size ?? 16"
    :height="size ?? 16"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path fill="currentColor" :d="brands[name]" />
  </svg>
</template>
