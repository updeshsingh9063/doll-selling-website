/**
 * DollPreview — renders either:
 *   • the preset "starter photo" when live=false
 *   • a z-stacked layer composition from ag-cyo-assets when live=true
 *
 * Asset path patterns (confirmed from actual folder listing):
 *   body       : body/body-{skin}.png
 *   face       : face/face-{mold}-{skin}-{haircut}-{hairstyle}.png
 *   eyes       : eyes/eyes-{left|right}-{eyeColor}-{mold}-{skin}.png
 *   hair       : hair/hair-{haircut}-{hairstyle}-{color}-default-{outfit}.png
 *   outfit     : outfit/outfit-{outfit}-{mold}-{haircut}-{hairstyle}.png
 *   accessory  : accessory/accessory-{outfit}.png
 *   freckles   : freckles/freckles-{skin}.png
 *   glasses    : glasses/{glasses-id}.png
 *   hearing-aid: hearing-aid/hearing-aid-{left|right|both}.png
 */

const BASE = '/assets/ag-cyo-assets/cyo/dolls'

export default function DollPreview({ config }) {
  // Always renders the layered PNG stack.
  // Both "starter photo" and "your design" tabs use this renderer;
  // the caller swaps which config object is passed.

  // ── destructure config ─────────────────────────────────────────────────────
  const skin      = config['skin-tone']     || '05'
  const mold      = config['face-shape']    || 'sonali'
  const haircut   = config.haircut          || 'long-wavy'
  const hairstyle = config.hairstyle        || 'default'
  const color     = config['hair-color']    || 'blonde'
  const eyeLeft   = config.eyeLeft          || 'lightblue'
  const eyeRight  = config.eyeRight         || 'lightblue'
  const outfit    = config.outfit           || 'butterflies-and-unicorns'
  const accessory = config['accessory-set'] || 'butterflies-and-unicorns'
  const freckles  = config.freckles         || 'freckles-none'
  const extras    = config.extras           || []

  // ── derived tokens ──────────────────────────────────────────────────────────
  // Face for "medium-wavy" uses hairstyle token; others use hairstyle directly
  // Hair always uses "default" as part token (confirmed from folder listing)
  const hairPart = 'default'

  const showFreckles    = freckles !== 'freckles-none'
  const frecklesOpacity = freckles === 'freckles-full' ? 0.75 : 0.4

  const glasses   = extras.find(e => e.startsWith('glasses')) || null
  const hasHA     = extras.includes('hearing-aid-both')  ? 'both'
                  : extras.includes('hearing-aid-left')  ? 'left'
                  : extras.includes('hearing-aid-right') ? 'right'
                  : null

  // ── layer stack ─────────────────────────────────────────────────────────────
  // outfit filename pattern: outfit-{outfit}-{mold}-{haircut}-{hairstyle}
  const layers = [
    {
      key: 'accessory',
      z: 1,
      src: `${BASE}/accessory/accessory-${accessory}.png`,
    },
    {
      key: 'body',
      z: 2,
      src: `${BASE}/body/body-${skin}.png`,
    },
    {
      key: 'face',
      z: 3,
      src: `${BASE}/face/face-${mold}-${skin}-${haircut}-${hairstyle}.png`,
    },
    {
      key: 'eye-left',
      z: 4,
      src: `${BASE}/eyes/eyes-left-${eyeLeft}-${mold}-${skin}.png`,
    },
    {
      key: 'eye-right',
      z: 5,
      src: `${BASE}/eyes/eyes-right-${eyeRight}-${mold}-${skin}.png`,
    },
    showFreckles && {
      key: 'freckles',
      z: 6,
      src: `${BASE}/freckles/freckles-${skin}.png`,
      opacity: frecklesOpacity,
    },
    glasses && {
      key: 'glasses',
      z: 7,
      src: `${BASE}/glasses/${glasses}.png`,
    },
    hasHA && {
      key: 'hearing-aid',
      z: 8,
      src: `${BASE}/hearing-aid/hearing-aid-${hasHA}.png`,
    },
    {
      key: 'outfit',
      z: 9,
      src: `${BASE}/outfit/outfit-${outfit}-${mold}-${haircut}-${hairstyle}.png`,
    },
    {
      key: 'hair',
      z: 10,
      src: `${BASE}/hair/hair-${haircut}-${hairstyle}-${color}-${hairPart}-${outfit}.png`,
    },
  ].filter(Boolean)

  return (
    <div className="doll-view doll-stack">
      {layers.map((l) => (
        <img
          key={l.key}
          className="doll-layer"
          style={{ zIndex: l.z, opacity: l.opacity ?? 1 }}
          src={l.src}
          alt=""
          onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
        />
      ))}
    </div>
  )
}

/** Accessories are now rendered as part of the live layer stack — no tray needed. */
export function AccessoryTray() {
  return null
}
