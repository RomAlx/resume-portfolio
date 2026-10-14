import {useThemeStore} from '~/services/theme/store'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    useThemeStore().init()
  })
})
