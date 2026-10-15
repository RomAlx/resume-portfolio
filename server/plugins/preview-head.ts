import {defineNitroPlugin} from 'nitropack/runtime/plugin'

const baseURL = (globalThis as {process?: {env: Record<string, string | undefined>}}).process?.env.NUXT_APP_BASE_URL || '/'

function publicFile(name: string) {
  const prefix = baseURL.endsWith('/') ? baseURL : `${baseURL}/`
  return `${prefix}${name}`
}

const preview = [
  '<meta property="og:title" content="Алексей Романовский">',
  '<meta property="og:description" content="Fullstack developer">',
  '<meta property="og:site_name" content="Резюме">',
  '<meta property="og:type" content="website">',
  '<meta property="og:url" content="https://romalx.github.io/resume-portfolio/">',
  '<meta property="og:image" content="https://romalx.github.io/resume-portfolio/og.jpg">',
  '<meta property="og:image:type" content="image/jpeg">',
  '<meta property="og:image:width" content="512">',
  '<meta property="og:image:height" content="512">',
  '<meta property="og:image:alt" content="РА">',
  '<meta name="twitter:card" content="summary">',
  '<meta name="twitter:title" content="Алексей Романовский">',
  '<meta name="twitter:description" content="Fullstack developer">',
  '<meta name="twitter:image" content="https://romalx.github.io/resume-portfolio/og.jpg">',
].join('')

const styleTag = /<style\b[^>]*>[\s\S]*?<\/style>/gi

type FsModule = {
  mkdirSync: (path: string, options: {recursive: boolean}) => void
  writeFileSync: (path: string, data: string) => void
}

type PathModule = {
  resolve: (...parts: string[]) => string
}

function load(name: string) {
  return (new Function(`return import("${name}")`) as () => Promise<FsModule & PathModule>)()
}

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', async (html: {head: string[]}) => {
    html.head.unshift(preview)
    let css = ''
    html.head = html.head.map(chunk => chunk.replace(styleTag, (block) => {
      css += `${block.replace(/^<style\b[^>]*>/i, '').replace(/<\/style>$/i, '')}\n`
      return ''
    }))
    if (!css) {
      return
    }
    const fs = await load('node:fs')
    const path = await load('node:path')
    for (const dir of [path.resolve('public'), path.resolve('.output/public')]) {
      fs.mkdirSync(dir, {recursive: true})
      fs.writeFileSync(path.resolve(dir, 'primevue.css'), css)
    }
    html.head.push(`<link rel="stylesheet" href="${publicFile('primevue.css')}">`)
  })
})
