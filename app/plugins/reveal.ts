import {bindReveal, syncReveal} from '~/services/reveal'

const stops = new WeakMap<HTMLElement, () => void>()

function host(value: unknown) {
  if (value instanceof HTMLElement) {
    return value
  }
  if (value && typeof value === 'object' && '$el' in value && value.$el instanceof HTMLElement) {
    return value.$el
  }
  return null
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(element) {
      const node = host(element)
      if (!node) {
        return
      }
      stops.set(node, bindReveal(node, shown => node.classList.toggle('shown', shown)))
    },
    updated(element) {
      const node = host(element)
      if (node) {
        syncReveal(node)
      }
    },
    unmounted(element) {
      const node = host(element)
      if (!node) {
        return
      }
      stops.get(node)?.()
      stops.delete(node)
    },
  })
})
