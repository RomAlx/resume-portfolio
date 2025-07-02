<template>
  <section class="min-h-screen w-full flex items-center justify-center relative">
    <!-- Основной контент -->
    <div class="relative z-10 w-full max-w-6xl mx-auto px-4 text-center space-y-8">

      <!-- Простой аватар -->
      <div>
        <n-avatar
            :size="isMobile ? 120 : 160"
            :src="profilePhoto"
            round
        />
      </div>

      <!-- Простое имя -->
      <div class="space-y-4">
        <h1 class="font-medium"
            :class="isMobile ? 'text-3xl' : 'text-6xl'">
          Романовский Алексей
        </h1>

        <!-- Теги -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <n-tag
              type="primary"
              :size="isMobile ? 'medium' : 'large'"
              round
              class="px-6 py-3 font-semibold shadow-lg hover:scale-95 transition-transform"
          >
            <template #icon>
              <n-icon class="mx-2"><CodeSlashSharp /></n-icon>
            </template>
            Middle Fullstack Developer
          </n-tag>

          <n-tag
              type="success"
              :size="isMobile ? 'medium' : 'large'"
              round
              class="px-4 py-2 hover:scale-95 animate-pulse"
          >
            Доступен для работы
          </n-tag>
        </div>
      </div>

      <!-- Кнопки действий -->
      <n-space justify="center" :wrap="false" :size="isMobile ? 'small' : 'medium'">
        <n-button
            type="primary"
            size="large"
            round
            tag="a"
            href="mailto:aaromanovsky@ya.ru"
            class="px-8 py-4 font-semibold shadow-xl hover:scale-105 transition-all duration-300"
        >
          <template #icon>
            <n-icon><MailSharp /></n-icon>
          </template>
          {{ isMobile ? 'Email' : 'Написать Email' }}
        </n-button>

        <n-button
            ghost
            size="large"
            round
            tag="a"
            href="https://t.me/AlekseyRomanovsky"
            target="_blank"
            class="px-8 py-4 font-semibold hover:scale-105 transition-all duration-300"
        >
          <template #icon>
            <n-icon><PaperPlaneSharp /></n-icon>
          </template>
          Telegram
        </n-button>
      </n-space>

      <!-- Индикатор прокрутки -->
      <div class="pt-12 animate-bounce">
        <n-button
            circle
            quaternary
            size="large"
            @click="navigateToAbout()"
        >
          <template #icon>
            <n-icon size="24"><ChevronDownSharp /></n-icon>
          </template>
        </n-button>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { MailSharp, PaperPlaneSharp, CodeSlashSharp, ChevronDownSharp } from '@vicons/ionicons5'
import { useDevice } from '@/composables/useDevice.js'
import profilePhoto from '@/assets/images/profile-photo.jpeg'

export default defineComponent({
  name: 'HeroSection',
  components: {
    MailSharp,
    PaperPlaneSharp,
    CodeSlashSharp,
    ChevronDownSharp
  },

  methods:{
    navigateToAbout() {
      const element = document.querySelector(`[data-section=about]`) ||
          document.querySelector(`#about`)

      if (element) {
        const headerHeight = 64
        const elementPosition = element.offsetTop - headerHeight

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }
  },

  setup() {
    const { isMobile } = useDevice()

    return {
      isMobile,
      profilePhoto
    }
  }
})
</script>

<style scoped>
/* Уменьшение анимаций для пользователей с ограниченными возможностями */
@media (prefers-reduced-motion: reduce) {
  .animate-bounce {
    animation: none;
  }

  .hover\:scale-105:hover,
  .hover\:-translate-y-1:hover {
    transform: none;
  }
}
</style>