const preview = [
  '<meta property="og:title" content="Алексей Романовский">',
  '<meta property="og:description" content="Fullstack developer">',
  '<meta property="og:site_name" content="Резюме">',
  '<meta property="og:type" content="website">',
  '<meta property="og:locale" content="ru_RU">',
  '<meta property="og:url" content="https://romalx.github.io/resume-portfolio/">',
  '<meta property="og:image" content="https://romalx.github.io/resume-portfolio/og.png">',
  '<meta property="og:image:type" content="image/png">',
  '<meta property="og:image:width" content="512">',
  '<meta property="og:image:height" content="512">',
  '<meta property="og:image:alt" content="РА">',
  '<meta name="twitter:card" content="summary">',
  '<meta name="twitter:title" content="Алексей Романовский">',
  '<meta name="twitter:description" content="Fullstack developer">',
  '<meta name="twitter:image" content="https://romalx.github.io/resume-portfolio/og.png">',
].join('')

import {defineNitroPlugin} from 'nitropack/runtime/plugin'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html: {head: string[]}) => {
    html.head.unshift(preview)
  })
})
