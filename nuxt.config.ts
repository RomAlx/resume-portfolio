import {defineNuxtConfig} from 'nuxt/config'
import type {NuxtPage} from '@nuxt/schema'

import {themeConfig} from './app/theme'
import {routes} from './routes'

const themeBoot = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('app-dark')}catch(e){}})()`

const title = 'Романовский Алексей | fullstack-developer'
const description = 'Романовский Алексей | fullstack-developer'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {lang: 'ru'},
      title,
      meta: [
        {name: 'description', content: description},
        {property: 'og:title', content: title},
        {property: 'og:description', content: description},
        {property: 'og:type', content: 'website'},
        {property: 'og:locale', content: 'ru_RU'},
        {property: 'og:url', content: 'https://romalx.github.io/resume-portfolio/'},
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:title', content: title},
        {name: 'twitter:description', content: description},
        {name: 'theme-color', content: '#eef0f3', media: '(prefers-color-scheme: light)'},
        {name: 'theme-color', content: '#090a0c', media: '(prefers-color-scheme: dark)'},
      ],
      link: [
        {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png'},
        {rel: 'apple-touch-icon', href: '/apple-touch-icon.png'},
      ],
      script: [{innerHTML: themeBoot, tagPriority: 'critical'}],
    },
  },
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/app.scss'],
  fonts: {
    families: [
      {name: 'IBM Plex Sans', provider: 'google', weights: [400, 500, 600]},
      {name: 'IBM Plex Mono', provider: 'google', weights: [400, 500]},
    ],
  },
  hooks: {
    'pages:extend'(pages: NuxtPage[]) {
      pages.splice(0, pages.length, ...routes)
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@primevue/nuxt-module',
  ],
  primevue: {
    options: themeConfig,
  },
  typescript: {
    typeCheck: true,
  },
})
