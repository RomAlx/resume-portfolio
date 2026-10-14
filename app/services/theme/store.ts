import {defineStore} from 'pinia'
import {ref} from 'vue'

const storageKey = 'theme'

export const useThemeStore = defineStore('theme', () => {
  const dark = ref(false)

  function apply() {
    if (!import.meta.client) {
      return
    }
    document.documentElement.classList.toggle('app-dark', dark.value)
    localStorage.setItem(storageKey, dark.value ? 'dark' : 'light')
  }

  function init() {
    if (!import.meta.client) {
      return
    }
    dark.value = document.documentElement.classList.contains('app-dark')
  }

  function toggle() {
    dark.value = !dark.value
    apply()
  }

  return {dark, init, toggle}
})
