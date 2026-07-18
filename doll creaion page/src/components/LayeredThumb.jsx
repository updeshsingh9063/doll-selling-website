/**
 * LayeredThumb — a mini composited doll-head preview for option grid buttons.
 *
 * Used for haircut and face-shape options so users see a real doll preview
 * instead of a colored circle. Layers are zoomed + cropped to show just the
 * head/hair area inside the circular option ring.
 *
 * Props:
 *   optionType  — 'haircut' | 'face-shape'
 *   optionId    — the specific option being previewed (e.g. 'bob', 'sonali')
 *   config      — current doll config (skin-tone, face-shape, haircut, hair-color, outfit)
 *   swatch      — fallback gradient colors if images fail to load
 */
import { useState } from 'react'
import { gradientOf } from '../data/selectors.js'
import { HAIRCUT_STYLES } from '../data/config.js'

const BASE = '/assets/ag-cyo-assets/cyo/dolls'

const ZOOM_STYLE = {
  position: 'absolute',
  width: '260%',
  left: '-80%',
  top: '-5%',
  height: 'auto',
  pointerEvents: 'none',
}

export default function LayeredThumb({ optionType, optionId, config, swatch, alt }) {
  const [failCount, setFailCount] = useState(0)

  const skin    = config['skin-tone']  || '05'
  const mold    = optionType === 'face-shape' ? optionId : (config['face-shape'] || 'sonali')
  const haircut = optionType === 'haircut'    ? optionId : (config.haircut       || 'long-wavy')
  // Always use 'default' hairstyle for the thumbnail preview
  const hairstyle = 'default'
  const color   = config['hair-color'] || 'blonde'
  const outfit  = config.outfit        || 'butterflies-and-unicorns'

  // If this haircut doesn't support the current hairstyle, fall back to default
  const validStyles = HAIRCUT_STYLES[haircut] || ['default']
  const safeStyle = validStyles.includes(hairstyle) ? hairstyle : 'default'

  const layers = [
    `${BASE}/body/body-${skin}.png`,
    `${BASE}/face/face-${mold}-${skin}-${haircut}-${safeStyle}.png`,
    `${BASE}/hair/hair-${haircut}-${safeStyle}-${color}-default-${outfit}.png`,
  ]

  const handleError = () => setFailCount(c => c + 1)

  // If more than 1 layer fails (face or hair), show the gradient fallback
  if (failCount > 1) {
    return (
      <span
        className="thumb-placeholder option__thumb"
        style={{ background: gradientOf(swatch) }}
        role="img"
        aria-label={alt}
      />
    )
  }

  return (
    <div
      className="option__thumb"
      style={{ position: 'relative', overflow: 'hidden', borderRadius: '50%' }}
    >
      {layers.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          style={ZOOM_STYLE}
          onError={handleError}
        />
      ))}
    </div>
  )
}
