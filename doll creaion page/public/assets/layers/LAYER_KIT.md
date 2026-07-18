# Layer generation kit (use YOUR own doll images)

Goal: turn each flat doll render in `public/assets/presets/` into a small set of
clean, transparent **layer PNGs** so the configurator changes the *real* doll
(skin tone, hair, outfit, accessories) — the same way the reference site stacks
`<img>` layers by z-index.

Run these prompts in a generative image editor (Gemini 2.5 Flash Image /
"nano-banana", Photoshop AI, etc.) using the matching preset PNG as the input
image. Save each output at the exact path shown. All outputs must be:

- **Transparent background (PNG)**
- **Same 540 × 892 canvas, same position** as the source (so layers register)
- No cropping / no re-posing — only isolate or recolor what the prompt says

Dolls: `skylar, aurora, rosie, jasmine, max, leo`
Folders already exist at `public/assets/layers/<doll>/…`.

---

## 1. Body / skin base  → `layers/<doll>/body/body-<tone>.png`

Base layer (everything below the hair). Generate one per skin tone you want.

Tones (ids used by the app): `skin-1` light warm olive · `skin-2` tan warm neutral ·
`skin-3` light-medium warm · `skin-4` deep neutral · `skin-5` tan neutral ·
`skin-6` very deep neutral.

Prompt (repeat per tone, swapping the tone name):
> "From this doll image, output ONLY the doll's body, face, neck, arms and legs
> with a transparent background. Remove the hair and clothing entirely. Keep the
> exact pose, size and position. Then recolor the skin to a **deep neutral** tone,
> keeping facial features, shading and proportions identical."

Save as `body/body-skin-4.png`, `body/body-skin-6.png`, … (skip recolor for the
doll's native tone and save that as its base).

## 2. Face detail  → `layers/<doll>/face/face-<shape>-<tone>-<cut>.png`

Optional if step 1 already includes the face. If you want separate face molds:
> "Output ONLY the face (eyes area, nose, mouth) on a transparent background,
> same position, for an oval face shape, deep neutral skin."

## 3. Eyes  → `layers/<doll>/eyes/eyes-left-<color>-<tone>.png` and `eyes-right-…`
> "Output ONLY the left iris as a small transparent PNG at its exact position,
> recolored to green. Nothing else visible."
Colors: `green, hazel, light-brown, brown, grey, light-blue`.

## 4. Freckles  → `layers/<doll>/freckles/freckles-light.png` (and `-full`)
> "Output ONLY light freckles across the cheeks and nose on a transparent
> background, positioned to match this face."

## 5. Hair (TOP layer)  → `layers/<doll>/hair/hair-<cut>-<color>-<outfit>.png`

The key layer — sits on top so it hides everything beneath it.
> "Output ONLY the doll's hair on a transparent background, same style, position
> and size. Clean, soft strand edges. No face, no body, no background."

Then recolor variants:
> "Recolor this isolated hair to **pink**, keeping the same style and shading."
Colors: `light-blonde, blonde, red, brown, dark-brown, black, pink, purple, rainbow`.
Cuts: `long-wavy, long-straight, long-texture, med-wavy, med-straight,
med-tight-curls, bob, short-curly, natural-long, natural-short, side-part, hi-top-curly`.

> Tip: you don't need every cut × color as separate files if you recolor hair in
> the browser. Start with one cut per doll + the color you want, then expand.

## 6. Outfit  → `layers/<doll>/outfit/outfit-<id>-<cut>.png`
> "Output ONLY the clothing/outfit as a transparent PNG at the same position;
> remove the doll's body, hair and background."
Outfit ids: `girlclub, iridescent, party-pink, varsity, floral, sporty, cozy`.

## 7. Glasses / extras  → `layers/<doll>/glasses/<id>.png`
> "Output ONLY glasses with rose-gold frames on a transparent background,
> positioned over this doll's eyes."
Extras ids: `glasses-rose-gold, glasses-petal-pink, glasses-ombre, glasses-jewel`.

---

## Turning it on

Once a doll has at least a `body/` + `hair/` set, add a `layers` field to that
preset in `src/data/config.js`:

```js
{ id: 'skylar', name: 'Skylar', /* … */,
  layers: { base: '/assets/layers/skylar', skin: 'skin-1' } }
```

`DollPreview` → `LayeredDoll` then renders the real stacked doll and every filter
swaps the matching layer. No code changes beyond that one line per doll.

Start with **one doll, body + hair only** to see it working, then expand.
