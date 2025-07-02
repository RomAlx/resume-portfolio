<template>
  <n-layout-footer
      class="pt-8 pb-10 px-4 md:px-6 bg-gradient-to-b from-transparent to-primary/5"
  >
    <div class="max-w-6xl mx-auto">
      <n-space vertical :size="24">
        <!-- Main footer content with enhanced layout -->
        <div class="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

          <!-- Left side - Personal info with avatar -->
          <div class="flex items-center space-x-4">
            <n-avatar
                :size="48"
                :src="profilePhoto"
                fallback-src="https://via.placeholder.com/48x48/00C851/white?text=AR"
            />
            <div class="text-center md:text-left">
              <n-text strong class="block text-lg">
                Романовский Алексей Андреевич
              </n-text>
              <n-text depth="2" class="text-sm">
                Middle Fullstack Developer
              </n-text>
            </div>
          </div>

          <!-- Right side - Quick contacts with enhanced design -->
          <div class="flex flex-col items-center space-y-4">
            <n-text depth="2" class="text-sm font-medium">
              Быстрая связь
            </n-text>
            <n-space :size="16">
              <n-button
                  v-for="contact in quickContacts"
                  :key="contact.label"
                  circle
                  text
                  size="large"
                  :tag="contact.tag"
                  :href="contact.href"
                  :target="contact.target"
                  :rel="contact.rel"
                  class="hover:scale-110 transition-transform duration-200 !w-12 !h-12"
                  :class="contact.hoverClass"
              >
                <template #icon>
                  <n-icon size="20">
                    <component :is="contact.icon" />
                  </n-icon>
                </template>
              </n-button>
            </n-space>
          </div>
        </div>

        <!-- Divider with gradient -->
        <n-divider class="!my-0 !border-primary/20" />

        <!-- Bottom section with enhanced info -->
        <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

          <!-- Tech stack -->
          <div class="flex items-center space-x-2">
            <n-text depth="3" class="text-xs">
              Создано на:
            </n-text>
            <n-space :size="8">
              <n-tag size="tiny" type="primary" :bordered="false" class="!rounded-md">
                Vue.js
              </n-tag>
              <n-tag size="tiny" type="info" :bordered="false" class="!rounded-md">
                Naive UI
              </n-tag>
              <n-tag size="tiny" type="success" :bordered="false" class="!rounded-md">
                Tailwind
              </n-tag>
            </n-space>
          </div>

          <!-- GitHub link -->
          <n-button
              text
              size="tiny"
              tag="a"
              href="https://github.com/RomAlx/resume-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              class="!text-primary hover:!underline"
          >
            <template #icon>
              <n-icon size="14">
                <LogoGithub />
              </n-icon>
            </template>
            Исходный код на GitHub
          </n-button>
        </div>
      </n-space>
    </div>
  </n-layout-footer>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { MailSharp, PaperPlaneSharp, LogoGithub, CallSharp } from '@vicons/ionicons5'
import profilePhoto from '@/assets/images/profile-photo.jpeg'

export default defineComponent({
  name: 'AppFooter',
  components: {
    MailSharp,
    PaperPlaneSharp,
    LogoGithub,
    CallSharp
  },
  setup() {
    const currentYear = computed(() => new Date().getFullYear())
    const lastUpdated = computed(() => {
      const date = new Date()
      return date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    })

    const quickContacts = [
      {
        label: 'Email',
        icon: 'MailSharp',
        tag: 'a',
        href: 'mailto:aaromanovsky@ya.ru',
        target: undefined,
        rel: undefined,
        hoverClass: 'hover:!text-primary hover:!bg-primary/10'
      },
      {
        label: 'Telegram',
        icon: 'PaperPlaneSharp',
        tag: 'a',
        href: 'https://t.me/AlekseyRomanovsky',
        target: '_blank',
        rel: 'noopener noreferrer',
        hoverClass: 'hover:!text-info hover:!bg-info/10'
      },
      {
        label: 'Phone',
        icon: 'CallSharp',
        tag: 'a',
        href: 'tel:+79966789513',
        target: undefined,
        rel: undefined,
        hoverClass: 'hover:!text-success hover:!bg-success/10'
      },
      {
        label: 'GitHub',
        icon: 'LogoGithub',
        tag: 'a',
        href: 'https://github.com/RomAlx',
        target: '_blank',
        rel: 'noopener noreferrer',
        hoverClass: 'hover:!text-warning hover:!bg-warning/10'
      }
    ]

    return {
      currentYear,
      lastUpdated,
      quickContacts,
      profilePhoto
    }
  }
})
</script>