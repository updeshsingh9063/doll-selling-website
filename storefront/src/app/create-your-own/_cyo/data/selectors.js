import { CATEGORIES } from './config.js'

// Flat index of every option by id -> option object (with its sub/category ref).
const OPTION_INDEX = {}
for (const cat of CATEGORIES) {
  for (const sub of cat.subs) {
    for (const o of sub.options) {
      OPTION_INDEX[o.id] = { ...o, subId: sub.id, catId: cat.id }
    }
  }
}

export function getOption(id) {
  return OPTION_INDEX[id] || null
}

// First swatch color for an option id, with a sensible fallback.
export function swatchOf(id, fallback = '#e9c6a3') {
  const o = getOption(id)
  return o?.swatch?.[0] || fallback
}

// Build a CSS gradient string from an option's swatch pair.
export function gradientOf(swatch) {
  if (!swatch) return 'linear-gradient(135deg,#f0c0d8,#d98ab0)'
  const [a, b] = swatch
  return `linear-gradient(135deg, ${a}, ${b || a})`
}

// Resolve the live-preview palette from the current doll config.
export function paletteOf(config) {
  return {
    skin: swatchOf(config['skin-tone'], '#f3d3b5'),
    hair: swatchOf(config['hair-color'], '#d6a862'),
    eyeLeft: swatchOf(config.eyeLeft, '#8ab6d6'),
    eyeRight: swatchOf(config.eyeRight, '#8ab6d6'),
    outfit: getOption(config.outfit)?.swatch || ['#a9c4e6', '#5a7ab0'],
    accessory: getOption(config['accessory-set'])?.swatch || ['#a9c4e6', '#5a7ab0'],
    haircut: config.haircut || 'long-wavy',
  }
}
