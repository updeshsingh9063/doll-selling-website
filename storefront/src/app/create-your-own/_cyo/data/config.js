/**
 * Data model for the "Create Your Own" doll configurator.
 *
 * Everything is data-driven so you can drop in the real artwork later:
 *  - Each preset / option carries an optional `image` (grid thumbnail or stage art)
 *    and an optional `layer` image used to compose the doll on the stage.
 *  - Paths point at /public/assets/... (see public/assets/README.md).
 *  - When an image is missing, the UI falls back to a colored placeholder so the
 *    whole flow is usable before the assets exist.
 */

// Product / marketing copy (from the live page).
export const PRODUCT = {
  title: 'Create Your Own doll',
  subtitle: 'Start with one below, then customize from head to toe',
  priceLabel: 'Create Your Own Doll - $275',
  shipLabel: 'Ships in 3 weeks',
  price: 275,
}

// ---------------------------------------------------------------------------
// Preset "starter" dolls shown in the opening carousel.
// swatch = placeholder gradient used until you drop a real `image` in.
// ---------------------------------------------------------------------------
// `native`     = the outfit option that matches the doll's own clothes (so we
//                don't recolor until the user actually picks something else).
// `outfitMask` = a clean garment mask exists at /assets/layers/<id>/outfit-mask.png,
//                enabling live clothing recolor on the flat photo.
export const PRESETS = [
  { 
    id: 'skylar', name: 'Skylar', gender: 'girl', image: '/assets/presets/skylar.png', swatch: ['#a9c4e6', '#5a7ab0'], native: 'butterflies-and-unicorns',
    baseConfig: { 'face-shape': 'sonali', 'skin-tone': '05', freckles: 'freckles-none', haircut: 'long-wavy', hairstyle: 'default', 'hair-color': 'blonde', eyeLeft: 'lightblue', eyeRight: 'lightblue' }
  },
  { 
    id: 'aurora', name: 'Aurora', gender: 'girl', image: '/assets/presets/aurora.png', swatch: ['#e6b8f0', '#a97ad0'], native: 'city-style',
    baseConfig: { 'face-shape': 'classic', 'skin-tone': '05', freckles: 'freckles-none', haircut: 'long-straight', hairstyle: 'default', 'hair-color': 'pink', eyeLeft: 'grey', eyeRight: 'grey' }
  },
  { 
    id: 'rosie', name: 'Rosie', gender: 'girl', image: '/assets/presets/rosie.png', swatch: ['#f6b8d0', '#e77aa8'], native: 'fun-with-fashion',
    baseConfig: { 'face-shape': 'jess', 'skin-tone': '25', freckles: 'freckles-none', haircut: 'long-texture', hairstyle: 'default', 'hair-color': 'light-brown', eyeLeft: 'hazel', eyeRight: 'hazel' }
  },
  { 
    id: 'jasmine', name: 'Jasmine', gender: 'girl', image: '/assets/presets/jasmine.png', swatch: ['#f4a6c0', '#d46a92'], native: 'lets-party',
    baseConfig: { 'face-shape': 'addy', 'skin-tone': 'dark', freckles: 'freckles-none', haircut: 'natural-long', hairstyle: 'default', 'hair-color': 'black', eyeLeft: 'brown', eyeRight: 'brown' }
  },
  { 
    id: 'max', name: 'Max', gender: 'boy', image: '/assets/presets/max.png', swatch: ['#6a6ad0', '#3a3a90'], native: 'win-the-weekend',
    baseConfig: { 'face-shape': 'sonali', 'skin-tone': '35', freckles: 'freckles-none', haircut: 'short-curly', hairstyle: 'default', 'hair-color': 'dark-brown', eyeLeft: 'brown', eyeRight: 'brown' }
  },
  { 
    id: 'leo', name: 'Leo', gender: 'boy', image: '/assets/presets/leo.png', swatch: ['#6a6ad0', '#3a3a90'], native: 'relaxed-to-the-max',
    baseConfig: { 'face-shape': 'classic', 'skin-tone': '05', freckles: 'freckles-none', haircut: 'side-part-cut', hairstyle: 'default', 'hair-color': 'light-brown', eyeLeft: 'lightblue', eyeRight: 'lightblue' }
  },
]

// ---------------------------------------------------------------------------
// Option list helper — keeps the data terse.
// (id, label, swatch color(s) for the placeholder, optional image/layer)
// ---------------------------------------------------------------------------
const opt = (id, label, swatch, extra = {}) => ({
  id,
  label,
  swatch: Array.isArray(swatch) ? swatch : [swatch, swatch],
  image: `/assets/options/${extra.dir || id}.png`,
  layer: extra.layer || null,
  ...extra,
})

// ---------------------------------------------------------------------------
// Categories -> sub-categories -> options.
// Mirrors the real experience: face / hair / eyes / clothing / accessories.
// `icon` matches an entry in components/icons.jsx.
// ---------------------------------------------------------------------------
export const CATEGORIES = [
  {
    id: 'face',
    label: 'face',
    icon: 'face',
    subs: [
      {
        id: 'face-shape', label: 'face shape', icon: 'faceShape',
        options: [
          opt('jess', 'heart', '#f0c9a8'),
          opt('addy', 'square', '#eec6a3'),
          opt('classic', 'round open smile', '#f2cba9'),
          opt('kaya', 'round closed smile', '#f0c9a6'),
          opt('josephina', 'teardrop', '#eec4a0'),
          opt('sonali', 'oval', '#f1caa7'),
        ],
      },
      {
        id: 'skin-tone', label: 'skin tone', icon: 'skinTone',
        options: [
          opt('05', 'light warm olive', '#f3d3b5'),
          opt('25', 'tan warm neutral', '#e3b48c'),
          opt('35', 'light-medium warm', '#eac4a1'),
          opt('dark', 'deep neutral', '#8a5a3c'),
          opt('medium', 'tan neutral', '#c8996b'),
          opt('light', 'very deep neutral', '#5e3a26'),
        ],
      },
      {
        id: 'freckles', label: 'freckles', icon: 'freckles',
        options: [
          opt('freckles-none', 'none', '#f0c9a6'),
          opt('freckles-light', 'light', '#e8b98f'),
          opt('freckles-full', 'full', '#dca87c'),
        ],
      },
    ],
  },
  {
    id: 'hair',
    label: 'hair',
    icon: 'hair',
    subs: [
      {
        id: 'haircut', label: 'haircut', icon: 'haircut',
        options: [
          opt('long-wavy', 'long wavy', '#c9905a'),
          opt('long-straight', 'long straight', '#c9905a'),
          opt('long-texture', 'long texture', '#a9713f'),
          opt('medium-wavy', 'med wavy', '#c9905a'),
          opt('medium-straight', 'med straight', '#c9905a'),
          opt('medium-tight-curls', 'med tight curls', '#7a4a28'),
          opt('bob', 'bob', '#c9905a'),
          opt('short-curly', 'short curly', '#8a5a30'),
          opt('natural-long', 'natural long', '#3a281c'),
          opt('natural-short', 'natural short', '#3a281c'),
          opt('side-part-cut', 'side part', '#c9905a'),
          opt('hi-top-curly', 'hi-top curly', '#2e2018'),
        ],
      },
      {
        id: 'hairstyle', label: 'hairstyle', icon: 'hairstyle',
        options: [
          opt('default', 'down', '#c9905a'),
          opt('headband', 'half up', '#c9905a'),
          opt('double-pony', 'ponytail', '#c9905a'),
          opt('double-braids', 'braids', '#c9905a'),
          opt('low-pigtails', 'space buns', '#c9905a'),
        ],
      },
      {
        id: 'hair-color', label: 'hair color', icon: 'hairColor',
        options: [
          { ...opt('blonde',      'blonde',      '#e8cca0'),             image: '/assets/ag-cyo-assets/cyo/swatches/hair-blonde.png' },
          { ...opt('light-brown', 'light brown', '#a97a4a'),             image: '/assets/ag-cyo-assets/cyo/swatches/hair-light-brown.png' },
          { ...opt('dark-brown',  'dark brown',  '#4a2e1c'),             image: '/assets/ag-cyo-assets/cyo/swatches/hair-dark-brown.png' },
          { ...opt('black',       'black',       '#211a16'),             image: '/assets/ag-cyo-assets/cyo/swatches/hair-black.png' },
          { ...opt('red',         'red',         '#a63a1e'),             image: '/assets/ag-cyo-assets/cyo/swatches/hair-red.png' },
          { ...opt('pink',        'pink',        '#f2a6c4'),             image: '/assets/ag-cyo-assets/cyo/swatches/hair-pink.png' },
          { ...opt('purple',      'purple',      '#a97ad0'),             image: '/assets/ag-cyo-assets/cyo/swatches/hair-purple.jpg' },
          { ...opt('rainbow',     'rainbow',     ['#f2a6c4', '#8ac6f0']), image: '/assets/ag-cyo-assets/cyo/swatches/hair-rainbow.jpg' },
          { ...opt('platinum',    'platinum',    '#e6e6e6'),             image: '/assets/ag-cyo-assets/cyo/swatches/hair-platinum.png' },
        ],
      },
    ],
  },
  {
    id: 'eyes',
    label: 'eyes',
    icon: 'eyes',
    subs: [
      {
        id: 'eye-color', label: 'eye color', icon: 'eyeColor',
        multiEye: true,
        options: [
          { ...opt('green',      'green',       '#5a8a52'), image: '/assets/ag-cyo-assets/cyo/swatches/eye-green.svg' },
          { ...opt('hazel',      'hazel',       '#9a7a3a'), image: '/assets/ag-cyo-assets/cyo/swatches/eye-hazel.svg' },
          { ...opt('lightbrown', 'light brown', '#a97a4a'), image: '/assets/ag-cyo-assets/cyo/swatches/eye-lightbrown.svg' },
          { ...opt('brown',      'brown',       '#5a3a24'), image: '/assets/ag-cyo-assets/cyo/swatches/eye-brown.svg' },
          { ...opt('grey',       'gray',        '#8a9298'), image: '/assets/ag-cyo-assets/cyo/swatches/eye-grey.svg' },
          { ...opt('lightblue',  'light blue',  '#8ab6d6'), image: '/assets/ag-cyo-assets/cyo/swatches/eye-lightblue.svg' },
        ],
      },
    ],
  },
  {
    id: 'clothing',
    label: 'clothing',
    icon: 'clothing',
    subs: [
      {
        id: 'outfit', label: 'meet outfit', icon: 'clothing',
        options: [
          { ...opt('butterflies-and-unicorns', 'butterflies & unicorns', ['#a9c4e6', '#5a7ab0']), image: '/assets/ag-cyo-assets/cyo/dolls/outfit/outfit-butterflies-and-unicorns-sonali-long-wavy-default.png' },
          { ...opt('city-style', 'city style', ['#e6b8f0', '#a97ad0']),                          image: '/assets/ag-cyo-assets/cyo/dolls/outfit/outfit-city-style-sonali-long-wavy-default.png' },
          { ...opt('fun-with-fashion', 'fun fashion', ['#f4a6c0', '#d46a92']),                   image: '/assets/ag-cyo-assets/cyo/dolls/outfit/outfit-fun-with-fashion-sonali-long-wavy-default.png' },
          { ...opt('lets-party', 'lets party', ['#6a6ad0', '#3a3a90']),                          image: '/assets/ag-cyo-assets/cyo/dolls/outfit/outfit-lets-party-sonali-long-wavy-default.png' },
          { ...opt('relaxed-to-the-max', 'relax max', ['#7ac0a0', '#3a8a6a']),                   image: '/assets/ag-cyo-assets/cyo/dolls/outfit/outfit-relaxed-to-the-max-sonali-long-wavy-default.png' },
          { ...opt('win-the-weekend', 'win weekend', ['#a9a9b0', '#6a6a72']),                    image: '/assets/ag-cyo-assets/cyo/dolls/outfit/outfit-win-the-weekend-sonali-long-wavy-default.png' },
        ],
      },
    ],
  },
  {
    id: 'accessories',
    label: 'accessories',
    icon: 'accessories',
    subs: [
      {
        id: 'accessory-set', label: 'accessory set', icon: 'accessories',
        options: [
          opt('butterflies-and-unicorns', 'blue bag set', ['#a9c4e6', '#5a7ab0']),
          opt('city-style', 'scrunchies', ['#f4a6c0', '#d46a92']),
          opt('fun-with-fashion', 'crown set', ['#f0e0a0', '#d0b060']),
          opt('lets-party', 'backpack set', ['#b0a0e0', '#7a6ac0']),
          opt('relaxed-to-the-max', 'sport set', ['#a9a9b0', '#6a6a72']),
          opt('win-the-weekend', 'picnic set', ['#8ac0e0', '#5a90b0']),
        ],
      },
      {
        id: 'extras', label: 'extras', icon: 'extras',
        multi: true, // toggle multiple add-ons
        options: [
          opt('glasses-rose-gold', 'glasses · rose gold', '#e6c4a0'),
          opt('glasses-petal-pink', 'glasses · petal pink', '#f2a6c4'),
          opt('glasses-awesome-ombre', 'glasses · awesome ombre', ['#f2a6c4', '#8ac6f0']),
          opt('glasses-raspberry', 'glasses · cool jewel', '#6ac0d0'),
          opt('earrings', 'pierced ears', '#d0b060'),
          opt('hearing-aid-left', 'hearing aid (left)', '#c8b8a0'),
          opt('hearing-aid-right', 'hearing aid (right)', '#c8b8a0'),
          opt('hearing-aid-both', 'hearing aid (both)', '#c8b8a0'),
          opt('braces', 'braces', '#c0c8d0'),
        ],
      },
    ],
  },
]
// ---------------------------------------------------------------------------
// Valid hairstyle tokens per haircut (confirmed from actual asset files).
// Used to auto-reset hairstyle when haircut changes and to filter the options.
// ---------------------------------------------------------------------------
export const HAIRCUT_STYLES = {
  'bob':               ['default', 'double-braids', 'headband'],
  'hi-top-curly':      ['default', 'headband'],
  'long-straight':     ['default', 'double-braids', 'double-pony', 'headband', 'low-pigtails'],
  'long-texture':      ['default', 'double-braids', 'double-pony', 'headband', 'low-pigtails'],
  'long-wavy':         ['default', 'double-pony', 'headband', 'low-pigtails'],
  'medium-straight':   ['default', 'double-braids', 'double-pony', 'headband', 'low-pigtails'],
  'medium-tight-curls':['default', 'double-pony', 'headband', 'low-pigtails'],
  'medium-wavy':       ['default', 'double-pony', 'headband', 'low-pigtails'],
  'natural-long':      ['default', 'double-pony', 'headband', 'low-pigtails'],
  'natural-short':     ['default', 'headband'],
  'short-curly':       ['default', 'headband'],
  'side-part-cut':     ['default', 'headband'],
}

// Default configuration a brand-new doll starts with.
export const DEFAULT_CONFIG = {
  preset: 'skylar',
  'face-shape': 'sonali',
  'skin-tone': '05',
  freckles: 'freckles-none',
  haircut: 'long-wavy',
  hairstyle: 'default',
  'hair-color': 'blonde',
  eyeLeft: 'lightblue',
  eyeRight: 'lightblue',
  outfit: 'butterflies-and-unicorns',
  'accessory-set': 'butterflies-and-unicorns',
  extras: [],
}

// Convenience lookups
export const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]))
