<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref, watch} from 'vue'

import {useThemeStore} from '~/services/theme/store'

const theme = useThemeStore()
const canvas = ref<HTMLCanvasElement | null>(null)

let frame = 0
let pointerX = -10_000
let pointerY = -10_000
let amount = 0
let target = 0
let touch = false
let coarse = false
let reduced = false
let running = false

function color(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

function paint(hex: string, alpha: number) {
  const value = hex.replace('#', '')
  const full = value.length === 3 ? value.split('').map(part => part + part).join('') : value
  const bits = Number.parseInt(full, 16)
  const red = (bits >> 16) & 255
  const green = (bits >> 8) & 255
  const blue = bits & 255
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

function warp(x: number, y: number) {
  const dx = x - pointerX
  const dy = y - pointerY
  const distance = Math.hypot(dx, dy) || 1
  const pull = reduced ? 0 : Math.exp(-(distance * distance) / (2 * 41 * 41)) * 8 * amount
  return {
    x: x + (dx / distance) * pull,
    y: y + (dy / distance) * pull,
  }
}

function strokeGrid(context: CanvasRenderingContext2D, width: number, height: number) {
  const step = 28
  const pad = 16
  const startX = -(((window.scrollX % step) + step) % step)
  const startY = -(((window.scrollY % step) + step) % step)
  context.beginPath()
  for (let x = startX; x <= width + pad; x += step) {
    let started = false
    for (let y = startY - pad; y <= height + pad; y += 8) {
      const point = warp(x, y)
      if (!started) {
        context.moveTo(point.x, point.y)
        started = true
      }
      else {
        context.lineTo(point.x, point.y)
      }
    }
  }
  for (let y = startY; y <= height + pad; y += step) {
    let started = false
    for (let x = startX - pad; x <= width + pad; x += 8) {
      const point = warp(x, y)
      if (!started) {
        context.moveTo(point.x, point.y)
        started = true
      }
      else {
        context.lineTo(point.x, point.y)
      }
    }
  }
  context.stroke()
}

function draw() {
  const node = canvas.value
  if (!node) {
    return
  }
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  const bounds = node.getBoundingClientRect()
  const width = bounds.width || document.documentElement.clientWidth
  const height = bounds.height || window.innerHeight
  const pixelWidth = Math.floor(width * ratio)
  const pixelHeight = Math.floor(height * ratio)
  if (node.width !== pixelWidth || node.height !== pixelHeight) {
    node.width = pixelWidth
    node.height = pixelHeight
  }
  const context = node.getContext('2d')
  if (!context) {
    return
  }
  context.setTransform(ratio, 0, 0, ratio, 0, 0)
  context.clearRect(0, 0, width, height)
  context.lineWidth = 1
  context.strokeStyle = color('--grid') || 'rgba(17, 18, 20, 0.05)'
  strokeGrid(context, width, height)

  if (amount < 0.01 || pointerX < -1000) {
    return
  }
  const accent = color('--accent') || '#1d4ed8'
  const glow = context.createRadialGradient(pointerX, pointerY, 0, pointerX, pointerY, 53)
  glow.addColorStop(0, paint(accent, 0.2 * amount))
  glow.addColorStop(1, 'transparent')
  context.fillStyle = glow
  context.fillRect(0, 0, width, height)

  context.save()
  context.beginPath()
  context.arc(pointerX, pointerY, 39, 0, Math.PI * 2)
  context.clip()
  context.strokeStyle = accent
  context.globalAlpha = 0.45 * amount
  strokeGrid(context, width, height)
  context.restore()
}

function schedule() {
  if (frame) {
    return
  }
  frame = requestAnimationFrame(() => {
    frame = 0
    draw()
  })
}

function fade() {
  if (running) {
    return
  }
  running = true
  const step = () => {
    if (reduced) {
      amount = target
    }
    else {
      const rate = target > amount ? 0.07 : 0.16
      amount += (target - amount) * rate
      if (Math.abs(target - amount) < 0.012) {
        amount = target
      }
    }
    draw()
    if (amount !== target) {
      requestAnimationFrame(step)
    }
    else {
      running = false
    }
  }
  requestAnimationFrame(step)
}

function place(x: number, y: number) {
  pointerX = x
  pointerY = y
}

function track(event: PointerEvent) {
  place(event.clientX, event.clientY)
  amount = 1
  target = 1
  schedule()
}

function reveal(x: number, y: number) {
  place(x, y)
  target = 1
  if (reduced || amount >= 1) {
    amount = 1
    schedule()
    return
  }
  fade()
}

function onTouchMove(event: TouchEvent) {
  const point = event.touches[0]
  if (!point) {
    return
  }
  touch = true
  reveal(point.clientX, point.clientY)
}

function onTouchEnd(event: TouchEvent) {
  const point = event.touches[0]
  if (point) {
    place(point.clientX, point.clientY)
    return
  }
  touch = false
  target = 0
  fade()
}

function finger(event: PointerEvent) {
  return event.pointerType === 'touch' || coarse
}

function onDown(event: PointerEvent) {
  if (!finger(event)) {
    return
  }
  touch = true
  reveal(event.clientX, event.clientY)
}

function onMove(event: PointerEvent) {
  if (finger(event)) {
    touch = true
    reveal(event.clientX, event.clientY)
    return
  }
  if (touch) {
    return
  }
  track(event)
}

function onUp(event: PointerEvent) {
  if (!finger(event)) {
    return
  }
  touch = false
  target = 0
  fade()
}

onMounted(() => {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches
  draw()
  window.addEventListener('pointerdown', onDown, {passive: true})
  window.addEventListener('pointermove', onMove, {passive: true})
  window.addEventListener('pointerup', onUp, {passive: true})
  window.addEventListener('touchmove', onTouchMove, {passive: true})
  window.addEventListener('touchend', onTouchEnd, {passive: true})
  window.addEventListener('touchcancel', onTouchEnd, {passive: true})
  window.addEventListener('resize', schedule)
  window.addEventListener('scroll', schedule, {passive: true})
})

watch(() => theme.dark, schedule)

onBeforeUnmount(() => {
  window.removeEventListener('pointerdown', onDown)
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerup', onUp)
  window.removeEventListener('touchmove', onTouchMove)
  window.removeEventListener('touchend', onTouchEnd)
  window.removeEventListener('touchcancel', onTouchEnd)
  window.removeEventListener('resize', schedule)
  window.removeEventListener('scroll', schedule)
  if (frame) {
    cancelAnimationFrame(frame)
  }
})
</script>

<template>
  <canvas ref="canvas" class="grid-field" aria-hidden="true" />
</template>
