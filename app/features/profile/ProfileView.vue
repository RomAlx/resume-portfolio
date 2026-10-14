<script setup lang="ts">
import {computed} from 'vue'

import BaseCard from '~/ui/BaseCard.vue'
import BaseIcon from '~/ui/BaseIcon.vue'
import {profile} from '~/features/profile/content'
import {withBase} from '~/services/url'

const runtime = useRuntimeConfig()
const photo = computed(() => withBase(runtime.app.baseURL, profile.photo))

const contacts = [
  {label: 'Почта', icon: 'mail', value: profile.email, href: `mailto:${profile.email}`},
  {label: 'Telegram', icon: 'telegram', value: `@${profile.telegram.split('/').pop()}`, href: profile.telegram},
  {label: 'GitHub', icon: 'github', value: profile.github.split('/').pop() ?? profile.github, href: profile.github},
  {label: 'Телефон', icon: 'phone', value: profile.phone, href: profile.phoneHref},
]
</script>

<template>
  <section id="about" class="hero-screen">
    <BaseCard v-reveal class="hero reveal">
      <div class="hero-grid">
        <div class="portrait-frame">
          <img class="portrait" :src="photo" alt="">
        </div>
        <div class="hero-copy">
          <div>
            <h1>{{ profile.name }}</h1>
            <p class="role">{{ profile.role }} · {{ profile.city }}</p>
            <p class="summary">{{ profile.summary }}</p>
          </div>
          <ul class="contacts">
            <li v-for="contact in contacts" :key="contact.label">
              <a
                :href="contact.href"
                :target="contact.href.startsWith('http') ? '_blank' : undefined"
                :rel="contact.href.startsWith('http') ? 'noopener noreferrer' : undefined"
              >
                <span><BaseIcon :name="contact.icon" :size="14" /> {{ contact.label }}</span>
                {{ contact.value }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </BaseCard>
  </section>
</template>
