<script setup lang="ts">
import {onMounted} from 'vue'

import GridField from '~/components/GridField.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import SiteHeader from '~/components/SiteHeader.vue'
import {useThemeStore} from '~/services/theme/store'

const theme = useThemeStore()

onMounted(() => {
  theme.init()
})
</script>

<template>
  <GridField />
  <a class="skip" href="#about">К содержанию</a>
  <SiteHeader />
  <slot />
  <SiteFooter />
</template>
