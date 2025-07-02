<template>
  <n-layout-header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b">
    <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

      <!-- Логотип -->
      <div class="flex items-center space-x-3 cursor-pointer" @click="scrollToTop">
        <n-avatar
            size="large"
            :src="profilePhoto"
            :style="{ background: 'linear-gradient(45deg, #00C851, #4CAF50)' }"
        />
        <div class="hidden sm:block">
          <n-text strong class="text-lg">Fullstack Developer</n-text>
          <n-text depth="3" class="block text-xs uppercase tracking-wider">Portfolio</n-text>
        </div>
      </div>

      <!-- Десктопная навигация -->
      <nav class="hidden lg:flex">
        <n-space>
          <n-button
              v-for="item in navigationItems"
              :key="item.section"
              :type="activeSection === item.section ? 'primary' : 'default'"
              :ghost="activeSection !== item.section"
              @click="navigateToSection(item.section)"
              size="medium"
          >
            <template #icon>
              <n-icon><component :is="item.icon" /></n-icon>
            </template>
            {{ item.label }}
          </n-button>
        </n-space>
      </nav>

      <!-- Правые кнопки -->
      <div class="flex items-center space-x-3">
        <!-- Переключатель темы -->
        <n-button
            circle
            quaternary
            @click="themeStore.toggleTheme"
            class="hidden lg:flex"
        >
          <template #icon>
            <n-icon size="20">
              <SunnySharp v-if="!themeStore.isDarkMode" />
              <MoonSharp v-else />
            </n-icon>
          </template>
        </n-button>

        <!-- Кнопка связаться -->
        <n-button
            type="primary"
            @click="navigateToSection('contacts')"
            class="hidden lg:flex"
        >
          <template #icon>
            <n-icon><SendSharp /></n-icon>
          </template>
          Связаться
        </n-button>

        <!-- Мобильное меню -->
        <n-button
            circle
            quaternary
            @click="toggleMobileMenu"
            class="lg:hidden"
        >
          <template #icon>
            <n-icon size="20">
              <MenuSharp v-if="!showMobileMenu" />
              <CloseSharp v-else />
            </n-icon>
          </template>
        </n-button>
      </div>
    </div>

    <!-- Прогресс-бар -->
    <div class="absolute bottom-0 left-0 right-0 h-1 bg-transparent">
      <div
          class="h-full transition-all duration-100"
          :style="{
          width: scrollProgress + '%',
          background: 'linear-gradient(to right, #00C851, #4CAF50)'
        }"
      />
    </div>
  </n-layout-header>

  <!-- Мобильное меню -->
  <n-drawer
      v-model:show="showMobileMenu"
      placement="right"
      :width="isMobile ? '100%' : 400"
      :z-index="40"
      style="margin-top: 64px; height: calc(100vh - 64px);"
  >
    <n-drawer-content
        :show-footer="false"
        :native-scrollbar="false"
    >
      <div class="space-y-6">
        <!-- Навигационные ссылки -->
        <div>
          <n-text depth="3" class="text-xs font-semibold uppercase tracking-wider mb-3 block">
            Разделы
          </n-text>
          <n-space vertical>
            <n-button
                v-for="item in navigationItems"
                :key="item.section"
                :type="activeSection === item.section ? 'primary' : 'default'"
                :ghost="activeSection !== item.section"
                @click="navigateToSection(item.section)"
                block
                size="large"
            >
              <template #icon>
                <n-icon><component :is="item.icon" /></n-icon>
              </template>
              {{ item.label }}
            </n-button>
          </n-space>
        </div>

        <!-- Быстрые действия -->
        <div>
          <n-text depth="3" class="text-xs font-semibold uppercase tracking-wider mb-3 block">
            Действия
          </n-text>
          <n-space vertical>
            <n-button
                type="primary"
                @click="navigateToSection('contacts')"
                block
                size="large"
            >
              <template #icon>
                <n-icon><SendSharp /></n-icon>
              </template>
              Связаться со мной
            </n-button>

            <div class="grid grid-cols-2 gap-3">
              <n-button
                  tag="a"
                  href="mailto:aaromanovsky@ya.ru"
                  ghost
              >
                <template #icon>
                  <n-icon><MailSharp /></n-icon>
                </template>
                Email
              </n-button>
              <n-button
                  tag="a"
                  href="https://t.me/AlekseyRomanovsky"
                  target="_blank"
                  ghost
              >
                <template #icon>
                  <n-icon><PaperPlaneSharp /></n-icon>
                </template>
                Telegram
              </n-button>
            </div>
          </n-space>
        </div>

        <!-- Переключатель темы -->
        <div class="flex items-center justify-between bg-transparent backdrop-blur-xl">
          <div class="flex items-center space-x-3">
            <n-icon size="16">
              <SunnySharp v-if="!themeStore.isDarkMode" />
              <MoonSharp v-else />
            </n-icon>
            <div>
              <n-text strong class="text-sm">Тема</n-text>
              <n-text depth="3" class="block text-xs">
                {{ themeStore.isDarkMode ? 'Темная' : 'Светлая' }}
              </n-text>
            </div>
          </div>
          <n-switch
              :value="themeStore.isDarkMode"
              @update:value="themeStore.toggleTheme"
              size="medium"
          />
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue'
import {
  SunnySharp,
  MoonSharp,
  MenuSharp,
  CloseSharp,
  PersonSharp,
  BriefcaseSharp,
  SettingsSharp,
  LayersSharp,
  CallSharp,
  CodeSlashSharp,
  SendSharp,
  MailSharp,
  PaperPlaneSharp
} from '@vicons/ionicons5'
import { useDevice } from '../composables/useDevice'
import { useThemeStore } from '@/stores/theme'
import profilePhoto from '@/assets/images/profile-photo.jpeg'

export default defineComponent({
  name: 'AppHeader',
  components: {
    SunnySharp,
    MoonSharp,
    MenuSharp,
    CloseSharp,
    PersonSharp,
    BriefcaseSharp,
    SettingsSharp,
    LayersSharp,
    CallSharp,
    CodeSlashSharp,
    SendSharp,
    MailSharp,
    PaperPlaneSharp
  },
  setup() {
    const { isMobile } = useDevice()
    const themeStore = useThemeStore()
    const showMobileMenu = ref(false)
    const activeSection = ref('')
    const scrollProgress = ref(0)

    const navigationItems = [
      { section: 'about', label: 'О себе', icon: 'PersonSharp' },
      { section: 'experience', label: 'Опыт', icon: 'BriefcaseSharp' },
      { section: 'skills', label: 'Навыки', icon: 'SettingsSharp' },
      { section: 'projects', label: 'Проекты', icon: 'LayersSharp' },
      { section: 'contacts', label: 'Контакты', icon: 'CallSharp' }
    ]

    const toggleMobileMenu = () => {
      showMobileMenu.value = !showMobileMenu.value
    }

    const navigateToSection = (sectionName) => {
      activeSection.value = sectionName

      const element = document.querySelector(`[data-section="${sectionName}"]`) ||
          document.querySelector(`#${sectionName}`)

      if (element) {
        const headerHeight = 64
        const elementPosition = element.offsetTop - headerHeight

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }

      showMobileMenu.value = false
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      activeSection.value = ''
    }

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress.value = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0
    }

    const updateActiveSection = () => {
      const sections = ['about', 'experience', 'skills', 'projects', 'contacts']
      const scrollTop = window.pageYOffset + 100

      for (const section of sections) {
        const element = document.querySelector(`[data-section="${section}"]`) ||
            document.querySelector(`#${section}`)

        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollTop >= offsetTop - 120 && scrollTop < offsetTop + offsetHeight - 120) {
            activeSection.value = section
            break
          }
        }
      }
    }

    const handleScroll = () => {
      updateScrollProgress()
      updateActiveSection()
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isMobile,
      themeStore,
      profilePhoto,
      showMobileMenu,
      activeSection,
      scrollProgress,
      navigationItems,
      toggleMobileMenu,
      navigateToSection,
      scrollToTop
    }
  }
})
</script>

<style scoped>
/* Минимальные стили для анимаций */
.transition-all {
  transition: all 0.3s ease;
}
</style>