import {definePreset} from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.700}',
      600: '{orange.800}',
      700: '{orange.900}',
      800: '{orange.900}',
      900: '{orange.950}',
      950: '{orange.950}',
    },
  },
})

export const themeConfig = {
  theme: {
    preset,
    options: {
      darkModeSelector: '.app-dark',
    },
  },
}
