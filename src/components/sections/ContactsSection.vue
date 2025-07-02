<template>
  <section id="contacts" data-section="contacts" class="py-5 relative">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-primary/5"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          Связаться со мной
        </h2>
        <p class="text-xl">
          Открыт для новых возможностей и интересных проектов
        </p>
      </div>

      <!-- Hero CTA -->
      <div class="text-center mb-16 py-12 px-8 rounded-3xl bg-gradient-to-r from-primary/10 via-success/5 to-primary/10 relative overflow-hidden backdrop-blur-sm">
        <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle, currentColor 2px, transparent 1px); background-size: 20px 20px;"></div>
        <div class="relative z-10">
          <div class="flex items-center justify-center mb-6">
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-r from-success to-primary rounded-full flex items-center justify-center shadow-lg">
                <n-icon size="32">
                  <CallSharp />
                </n-icon>
              </div>
              <div class="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full animate-pulse border-2 border-white"></div>
            </div>
            <n-tag type="success" size="medium" :bordered="false" class="ml-4 rounded-full px-4 py-2">
              Доступен для работы
            </n-tag>
          </div>

          <h3 class="text-2xl font-bold mb-4">
            Готов к обсуждению новых возможностей
          </h3>
          <p class="text-lg opacity-70 mb-8 max-w-2xl mx-auto">
            Обсудим ваш проект и как я могу быть полезен вашей команде. Всегда открыт для интересных предложений.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <n-button
                type="success"
                size="large"
                tag="a"
                href="https://t.me/AlekseyRomanovsky"
                target="_blank"
                class="shadow-xl hover:shadow-2xl rounded-xl px-8 py-3 min-w-[180px]"
            >
              <template #icon>
                <n-icon>
                  <PaperPlaneSharp />
                </n-icon>
              </template>
              Telegram
            </n-button>
            <n-button
                type="success"
                size="large"
                secondary
                tag="a"
                href="mailto:aaromanovsky@ya.ru"
                class="shadow-xl hover:shadow-2xl rounded-xl px-8 py-3 min-w-[180px]"
            >
              <template #icon>
                <n-icon>
                  <MailSharp />
                </n-icon>
              </template>
              Написать Email
            </n-button>
          </div>
        </div>
      </div>

      <!-- Contact cards grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <!-- Primary Contacts -->
        <n-card :bordered="true" class="bg-transparent backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <template #header>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-r from-primary to-success rounded-lg flex items-center justify-center shadow-md">
                <n-icon size="20">
                  <MailSharp />
                </n-icon>
              </div>
              <div>
                <h3 class="text-lg font-bold">Основные контакты</h3>
                <p class="text-sm opacity-70">Прямая связь</p>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <div
                v-for="(contact, index) in primaryContacts"
                :key="index"
                @click="handleContactClick(contact)"
                class="flex items-center space-x-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 cursor-pointer group hover:scale-95"
            >
              <div class="flex-shrink-0 p-3 rounded-lg bg-gradient-to-r from-primary/20 to-success/20 group-hover:from-primary/30 group-hover:to-success/30 transition-all duration-300">
                <n-icon :size="20" class="text-primary">
                  <component :is="contact.icon" />
                </n-icon>
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-semibold">
                  {{ contact.label }}
                </p>
                <p class="text-sm opacity-70 break-all">
                  {{ contact.value }}
                </p>
              </div>
            </div>
          </div>
        </n-card>

        <!-- Social Contacts -->
        <n-card :bordered="true" class="bg-transparent backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <template #header>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-r from-success to-info rounded-lg flex items-center justify-center shadow-md">
                <n-icon size="20">
                  <ShareSocialSharp />
                </n-icon>
              </div>
              <div>
                <h3 class="text-lg font-bold">Социальные сети</h3>
                <p class="text-sm opacity-70">Профессиональные профили</p>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <div
                v-for="(social, index) in socialContacts"
                :key="index"
                @click="handleSocialClick(social)"
                class="flex items-center space-x-4 p-4 rounded-xl bg-success/5 hover:bg-success/10 transition-all duration-300 cursor-pointer group hover:scale-95"
            >
              <div class="flex-shrink-0 p-3 rounded-lg bg-gradient-to-r from-success/20 to-info/20 transition-all duration-300">
                <n-icon :size="20" class="text-success">
                  <component :is="social.icon" />
                </n-icon>
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-semibold">
                  {{ social.label }}
                </p>
                <p class="text-sm opacity-70 break-all">
                  {{ social.value }}
                </p>
              </div>
            </div>
          </div>
        </n-card>
      </div>

      <!-- Availability status -->
      <n-card :bordered="false" class="bg-transparent backdrop-blur-xl">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-r from-success to-primary rounded-full flex items-center justify-center shadow-lg relative">
              <n-icon size="24">
                <CheckmarkSharp />
              </n-icon>
              <div class="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse"></div>
            </div>
            <div>
              <h4 class="text-lg font-bold text-success">Открыт для предложений</h4>
              <p class="text-sm opacity-70">Готов рассмотреть интересные возможности</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <n-tag size="medium" type="success" :bordered="false" class="rounded-full px-4 py-2">Москва</n-tag>
            <n-tag size="medium" type="info" :bordered="false" class="rounded-full px-4 py-2">Релокация</n-tag>
            <n-tag size="medium" type="warning" :bordered="false" class="rounded-full px-4 py-2">Гибрид</n-tag>
          </div>
        </div>
      </n-card>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { MailSharp, CallSharp, LocationSharp, LogoGithub, PaperPlaneSharp, OpenSharp, ShareSocialSharp, CheckmarkSharp } from '@vicons/ionicons5'

export default defineComponent({
  name: 'ContactsSection',
  components: {
    MailSharp,
    CallSharp,
    LocationSharp,
    LogoGithub,
    PaperPlaneSharp,
    OpenSharp,
    ShareSocialSharp,
    CheckmarkSharp
  },
  data() {
    return {
      primaryContacts: [
        {
          label: 'Email',
          value: 'aaromanovsky@ya.ru',
          href: 'mailto:aaromanovsky@ya.ru',
          external: false,
          icon: 'MailSharp'
        },
        {
          label: 'Телефон',
          value: '+7 (996) 678-95-13',
          href: 'tel:+79966789513',
          external: false,
          icon: 'CallSharp'
        },
      ],
      socialContacts: [
        {
          label: 'GitHub',
          value: 'github.com/RomAlx',
          href: 'https://github.com/RomAlx',
          icon: 'LogoGithub'
        },
        {
          label: 'Telegram',
          value: '@AlekseyRomanovsky',
          href: 'https://t.me/AlekseyRomanovsky',
          icon: 'PaperPlaneSharp'
        }
      ]
    }
  },
  methods: {
    handleContactClick(contact) {
      if (contact.external) {
        window.open(contact.href, '_blank', 'noopener,noreferrer')
      } else {
        window.location.href = contact.href
      }
    },
    handleSocialClick(social) {
      window.open(social.href, '_blank', 'noopener,noreferrer')
    }
  }
})
</script>
