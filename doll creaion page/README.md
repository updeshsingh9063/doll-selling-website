# Create Your Own — Doll Configurator (React)

A React clone of the "Create Your Own" doll builder: a pink stage with a live
doll preview on the left, and a gradient rail on the right that steps through
**categories → sub-categories → option grids**, plus an opening starter-doll
carousel.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## What's implemented

- **Start screen** — starter-doll carousel with ‹ › arrows, `$275 / Ships in 3 weeks` line, "I'm done designing".
- **Design stage** — live doll preview, accessory tray, `start over` (top-left) + `share` (bottom-left).
- **Category rail** — face · hair · eyes · clothing · accessories.
- **Sub-categories** — e.g. hair → haircut / hairstyle / hair color, with prev/next category chevrons + "Confirm choices".
- **Option grid** — 2-column circular thumbnails with the magenta selection ring + "Confirm choice".
- **Special modes** — heterochromia (left/both/right eye toggle) and multi-select "extras" (glasses, hearing aids, braces, pierced ears).

Everything runs immediately using colored placeholders. The doll preview is an
original vector mannequin that updates live with your skin/hair/eye/outfit picks
until you add real artwork.

## Add your images

Drop files into `public/assets/` — see [`public/assets/README.md`](public/assets/README.md)
for the exact filenames (they map to option ids in `src/data/config.js`).
Missing files simply keep their placeholder, so you can add art incrementally.

## Structure

```
src/
  App.jsx                 # screen/panel state machine
  data/
    config.js             # presets + categories/subs/options + defaults
    selectors.js          # option lookups + live-preview palette
  components/
    StartCarousel.jsx     # opening starter-doll picker
    Stage.jsx             # left stage (start over / share)
    DollPreview.jsx       # live vector doll + accessory tray
    CategoryRail.jsx      # top-level rail + main CTA
    SubCategoryRail.jsx   # a category's sub-categories
    OptionGrid.jsx        # selectable option grid (single/multi/eye modes)
    CircleButton.jsx      # shared gradient circle button
    Thumb.jsx             # image with graceful placeholder fallback
    icons.jsx             # inline SVG icon set
  styles/index.css        # all styling
```

## Where to plug in real behavior

- `done()` in `App.jsx` → wire to cart / checkout.
- `share()` in `App.jsx` → already uses the Web Share API with clipboard fallback.
- `DollPreview.jsx` → swap the vector for a layered `<img>` stack for a photo-real live doll.
```
