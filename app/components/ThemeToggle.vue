<script setup lang="ts">
import {Moon, Sun} from '@lucide/vue'
import {storeToRefs} from 'pinia'

import {useThemeStore} from '~/services/theme/store'
import BaseButton from '~/ui/BaseButton.vue'

const theme = useThemeStore()
const {dark} = storeToRefs(theme)
</script>

<template>
  <BaseButton
    text
    rounded
    type="button"
    :aria-pressed="dark"
    aria-label="Переключить тему"
    @click="theme.toggle()"
  >
    <Sun class="theme-sun" :size="18" />
    <Moon class="theme-moon" :size="18" />
  </BaseButton>
</template>
