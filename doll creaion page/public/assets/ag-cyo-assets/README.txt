Create Your Own — offline asset mirror
======================================

Complete set of layer art and UI resources used by the doll customizer
(mirrored from americangirl.com/a/create-your-own/create).

Layout
------
cyo/dolls/          Doll layer PNGs, one folder per compositing layer, stacked bottom-to-top:
  accessory/        Ground accessory sets, one per outfit theme (6)
  body/             Body base, one per skin tone (6)
  face/             Face plate: face-<mold>-<skin>-<haircut>-<hairstyle>.png
  eyes/             Eyes: eyes-<left|right>-<color>-<mold>-<skin>.png (432)
  freckles/         Freckle overlay, one per skin tone (6)
  glasses/          Glasses overlays (4)
  hearing-aid/      Hearing aid overlays: both / left / right (3)
  outfit/           Outfits: outfit-<theme>-<mold>-<haircut>-<hairstyle>.png
                    and headpieces: outfit-headpiece-<theme>-<haircut>-<hairstyle>.png
  hair/             Hair: hair-<haircut>-<hairstyle>-<color>-<part>-<outfit>.png
                    (<part> is "round" for medium-wavy, else "default")
  _missing.txt      6 combos that 404 on the source CDN + the stand-ins covering them

cyo/swatches/       Hair-color and eye-color swatch chips for the option grids
cyo/sprite-cyo-icon.svg  Step/category icon sprite for the customizer UI
fonts/              Site webfonts
icons.svg           Site icon sprite
favicon.svg         Site favicon

Only combos allowed by the source's own restriction rules exist as files
(e.g. hi-top-curly has no updo styles and only 4 natural hair colors).
The full doll = accessory + body + face + eyes + freckles? + glasses +
hearing-aid? + outfit + hair + headpiece?, aligned on a 990x1636 canvas.
