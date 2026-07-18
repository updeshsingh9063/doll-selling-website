import { useState } from 'react'
import Icons from './icons.jsx'
import DollPreview from './DollPreview.jsx'
import { PRESETS, PRODUCT, DEFAULT_CONFIG } from '../data/config.js'

/**
 * Opening screen: pick a starter doll, then customize.
 * Each card renders a mini layered DollPreview using the preset's real assets
 * (same system as the design stage), so what you see in the carousel is
 * exactly what you'll get in the editor — no flat marketing photos.
 */
export default function StartCarousel({ onChoose }) {
  const [index, setIndex] = useState(0)
  const n = PRESETS.length

  const move = (d) => {
    setIndex((i) => (i + d + n) % n)
  }

  const at = (offset) => PRESETS[(index + offset + n) % n]

  return (
    <div className="start">
      <header className="start__head">
        <h1 className="start__title">{PRODUCT.title}</h1>
        <p className="start__subtitle">{PRODUCT.subtitle}</p>
      </header>

      <div className="start__carousel">
        <button type="button" className="carousel-arrow carousel-arrow--left" onClick={() => move(-1)} aria-label="Previous doll">
          {Icons.chevronLeft}
        </button>

        <div className="carousel-track">
          {[
            { offset: -2, depth: 2 },
            { offset: -1, depth: 1 },
            { offset: 0, depth: 0, focused: true },
            { offset: 1, depth: 1 },
            { offset: 2, depth: 2 },
          ].map(({ offset, depth, focused }) => {
            const preset = at(offset)
            return (
              <PresetCard
                key={`slot-${offset}-${preset.id}`}
                preset={preset}
                depth={depth}
                focused={focused}
                onChoose={onChoose}
              />
            )
          })}
        </div>

        <button type="button" className="carousel-arrow carousel-arrow--right" onClick={() => move(1)} aria-label="Next doll">
          {Icons.chevronRight}
        </button>
      </div>

      <div className="start__price">
        <div className="start__price-line">{PRODUCT.priceLabel}</div>
        <div className="start__ship-line">{PRODUCT.shipLabel}</div>
      </div>
    </div>
  )
}

/** Build the full config for a preset so DollPreview can render it correctly */
function presetToConfig(preset) {
  return {
    ...DEFAULT_CONFIG,
    ...preset.baseConfig,
    preset: preset.id,
    outfit: preset.native,
    'accessory-set': preset.native,
  }
}

function PresetCard({ preset, depth, focused = false, onChoose }) {
  const config = presetToConfig(preset)

  return (
    <button
      type="button"
      className={`preset-card depth-${depth} ${focused ? 'is-focused' : ''}`}
      onClick={focused ? () => onChoose(preset) : undefined}
      tabIndex={focused ? 0 : -1}
      aria-hidden={!focused}
    >
      {/* Clip the layered doll into the card dimensions */}
      <div className="preset-card__doll-wrap">
        <DollPreview config={config} />
      </div>
      {focused && <span className="preset-card__cta">start with {preset.name}</span>}
    </button>
  )
}
