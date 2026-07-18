# Artwork drop-in guide

The app is fully data-driven and works right now with colored placeholders.
To use the real images, drop PNG/JPG/WebP files at the paths below. Anything
missing keeps showing its placeholder — no code changes needed.

Transparent PNGs are recommended for dolls/options so they sit nicely on the
pink stage.

## Preset starter dolls  → `public/assets/presets/`
Full-body images shown in the opening carousel (and used as the stage doll
when present). Recommended ~600×1200, transparent background.

| file          | preset  | notes |
|---------------|---------|-------|
| `skylar.png`  | Skylar  | girl — Girl Club tie-dye hoodie |
| `aurora.png`  | Aurora  | girl — pink hair + tiara |
| `rosie.png`   | Rosie   | girl — pink jacket + floral dress |
| `jasmine.png` | Jasmine | girl — pink sequin dress + tiara |
| `max.png`     | Max     | boy — varsity jacket |
| `leo.png`     | Leo     | boy — varsity jacket, deeper skin |

> These six are already populated from the AVIF files you provided. Replace a
> file in place (same name) to swap a doll.

## Option thumbnails  → `public/assets/options/`
Round-cropped thumbnails (~160×160) shown in the option grids. File name = the
option `id` in `src/data/config.js`. Examples:

- Haircuts:  `long-wavy.png`, `long-straight.png`, `bob.png`, `short-curly.png`, …
- Hair color: `blonde.png`, `red.png`, `pink.png`, `rainbow.png`, …
- Skin tone: `skin-1.png` … `skin-6.png`
- Face shape: `heart.png`, `oval.png`, `teardrop.png`, …
- Eye color: `green.png`, `hazel.png`, `light-blue.png`, …
- Outfits:   `outfit-girlclub.png`, `outfit-iridescent.png`, …
- Accessory sets: `acc-blue-bag.png`, `acc-crown.png`, …
- Extras:    `glasses-rose-gold.png`, `hearing-aids.png`, `braces.png`, …

> The full, authoritative list of ids lives in `src/data/config.js`.

## Going further: a layered doll stage
For a true "live" doll that recomposes as you pick options (instead of one image
per preset), give each option a transparent `layer` PNG (skin / hair-back /
hair-front / eyes / outfit / accessory) and stack them in
`src/components/DollPreview.jsx`. The `layer` field already exists on every
option in the data model for exactly this.
