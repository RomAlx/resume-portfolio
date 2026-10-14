type Item = {
  node: HTMLElement
  apply: (shown: boolean) => void
}

const items = new Set<Item>()
let opened = false
let frame = 0

export function inView(node: HTMLElement) {
  const box = node.getBoundingClientRect()
  if (box.width === 0 || box.height === 0) {
    return false
  }
  const top = Math.max(box.top, 0)
  const bottom = Math.min(box.bottom, window.innerHeight)
  return bottom - top >= 8
}

function paint() {
  if (!opened) {
    return
  }
  for (const item of items) {
    item.apply(inView(item.node))
  }
}

function schedule() {
  if (frame) {
    return
  }
  frame = requestAnimationFrame(() => {
    frame = 0
    paint()
  })
}

export function bindReveal(node: HTMLElement, apply: (shown: boolean) => void) {
  const item = {node, apply}
  items.add(item)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    apply(true)
    items.delete(item)
    return () => {}
  }
  if (opened) {
    apply(inView(node))
  }
  return () => items.delete(item)
}

export function syncReveal(node: HTMLElement) {
  if (!opened) {
    return
  }
  for (const item of items) {
    if (item.node === node) {
      item.apply(inView(node))
      return
    }
  }
}

export function openPage() {
  if (opened) {
    return
  }
  opened = true
  const visible = [...items]
    .filter(item => inView(item.node))
    .sort((a, b) => a.node.getBoundingClientRect().top - b.node.getBoundingClientRect().top)
  visible.forEach((item, index) => {
    item.node.style.transitionDelay = `${120 + Math.min(index, 8) * 55}ms`
  })
  paint()
  window.addEventListener('scroll', schedule, {passive: true})
  window.addEventListener('resize', schedule)
  window.setTimeout(() => {
    visible.forEach((item) => {
      item.node.style.transitionDelay = ''
    })
  }, 1200)
}
