<template>
  <n-config-provider
      :theme="themeStore.currentTheme"
      :theme-overrides="themeStore.currentThemeOverrides">
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <n-loading-bar-provider>
            <component :is="layout">
              <router-view />
            </component>
          </n-loading-bar-provider>
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue'
import { useThemeStore } from '@/stores/theme'

export default {
  name: 'App',

  components: {
    AppLayout,
  },

  setup() {
    // Инициализируем темы при создании компонента
    const themeStore = useThemeStore()
    themeStore.initTheme()

    return {
      themeStore
    }
  },

  computed: {
    // Определяем текущий шаблон на основе маршрута
    layout() {
      const layoutName = 'app'
      return {
        'app': AppLayout,
      }[layoutName]
    }
  },
}
</script>
