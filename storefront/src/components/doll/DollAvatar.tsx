import {
  SKIN_TONES,
  HAIR_COLORS,
  EYE_COLORS,
  type DollConfig,
} from "./dollOptions";

function resolve<T extends { id: string }>(list: T[], id: string, fallback: T) {
  return list.find((item) => item.id === id) ?? fallback;
}

/* ---------- Hair ---------- */

function Hair({ style, color, back }: { style: DollConfig["hairstyle"]; color: string; back: boolean }) {
  if (style === "long-straight") {
    if (back) {
      return (
        <g>
          <path
            d="M96 210 C 90 300, 92 340, 100 300 L 118 150 Z"
            fill={color}
          />
          <path
            d="M224 210 C 230 300, 228 340, 220 300 L 202 150 Z"
            fill={color}
          />
        </g>
      );
    }
    return (
      <g>
        <path
          d="M160 46 C 112 46, 90 88, 92 138 C 92 158, 100 170, 108 176 L 116 150 C 112 118, 120 88, 160 84 C 200 88, 208 118, 204 150 L 212 176 C 220 170, 228 158, 228 138 C 230 88, 208 46, 160 46 Z"
          fill={color}
        />
        <path d="M160 50 C 152 70, 150 96, 152 118" stroke="rgba(0,0,0,0.15)" strokeWidth={2} fill="none" strokeLinecap="round" />
      </g>
    );
  }

  if (style === "wavy-bob") {
    return (
      <g>
        <path
          d="M160 44 C 108 44, 86 84, 88 128 C 89 150, 96 168, 104 178 C 100 160, 104 150, 112 158 C 118 164, 116 174, 110 182 C 122 188, 132 176, 130 160 L 128 128 C 128 100, 140 84, 160 84 C 180 84, 192 100, 192 128 L 190 160 C 188 176, 198 188, 210 182 C 204 174, 202 164, 208 158 C 216 150, 220 160, 216 178 C 224 168, 231 150, 232 128 C 234 84, 212 44, 160 44 Z"
          fill={color}
        />
      </g>
    );
  }

  // braided-pigtails
  return (
    <g>
      {!back && (
        <path
          d="M160 46 C 114 46, 92 84, 94 126 C 95 144, 100 156, 108 162 L 114 140 C 110 112, 118 86, 160 82 C 202 86, 210 112, 206 140 L 212 162 C 220 156, 225 144, 226 126 C 228 84, 206 46, 160 46 Z"
          fill={color}
        />
      )}
      {back && (
        <g>
          <g>
            <ellipse cx="92" cy="150" rx="10" ry="7" fill={color} />
            <path d="M84 150 C 78 190, 86 230, 80 258 C 92 262, 100 250, 98 226 C 104 200, 100 170, 96 150 Z" fill={color} />
            <ellipse cx="88" cy="170" rx="11" ry="4" fill="rgba(0,0,0,0.12)" />
            <ellipse cx="86" cy="200" rx="11" ry="4" fill="rgba(0,0,0,0.12)" />
            <ellipse cx="84" cy="230" rx="10" ry="4" fill="rgba(0,0,0,0.12)" />
          </g>
          <g>
            <ellipse cx="228" cy="150" rx="10" ry="7" fill={color} />
            <path d="M236 150 C 242 190, 234 230, 240 258 C 228 262, 220 250, 222 226 C 216 200, 220 170, 224 150 Z" fill={color} />
            <ellipse cx="232" cy="170" rx="11" ry="4" fill="rgba(0,0,0,0.12)" />
            <ellipse cx="234" cy="200" rx="11" ry="4" fill="rgba(0,0,0,0.12)" />
            <ellipse cx="236" cy="230" rx="10" ry="4" fill="rgba(0,0,0,0.12)" />
          </g>
        </g>
      )}
    </g>
  );
}

/* ---------- Outfits ---------- */

function Outfit({ id }: { id: DollConfig["outfit"] }) {
  if (id === "starlight-parade") {
    return (
      <g>
        {/* skirt */}
        <path d="M112 320 L208 320 L218 400 C 180 412, 140 412, 102 400 Z" fill="#3d5a80" />
        <path d="M112 320 L208 320 L211 340 L109 340 Z" fill="#33496b" />
        {/* tee */}
        <path d="M122 210 L198 210 L198 322 L122 322 Z" fill="#fdf8f4" />
        <path d="M148 236 l6 -8 l6 8 l8 2 l-6 7 l1 9 l-9 -5 l-9 5 l1 -9 l-6 -7 Z" fill="var(--color-brand)" />
        {/* jacket */}
        <path d="M96 200 C 96 190, 106 182, 118 182 L 130 182 L 130 320 L 100 320 C 92 300, 90 240, 96 200 Z" fill="#fdf8f4" />
        <path d="M224 200 C 224 190, 214 182, 202 182 L 190 182 L 190 320 L 220 320 C 228 300, 230 240, 224 200 Z" fill="#fdf8f4" />
        <path d="M130 182 L190 182 L196 200 L188 322 L132 322 L124 200 Z" fill="var(--color-brand)" />
        <circle cx="160" cy="198" r="3.5" fill="#fdf8f4" />
        <circle cx="160" cy="214" r="3.5" fill="#fdf8f4" />
        <circle cx="160" cy="230" r="3.5" fill="#fdf8f4" />
      </g>
    );
  }

  if (id === "orchard-overalls") {
    return (
      <g>
        <path d="M120 210 L200 210 L200 322 L120 322 Z" fill="#fbf0da" />
        <path d="M118 322 C 100 340, 96 400, 106 456 L 150 456 L 150 340 L 118 340 Z" fill="#c99a4d" />
        <path d="M202 322 C 220 340, 224 400, 214 456 L 170 456 L 170 340 L 202 340 Z" fill="#c99a4d" />
        <path d="M150 322 L170 322 L172 456 L148 456 Z" fill="#b8894a" />
        <path d="M128 322 L146 322 L142 200 C 142 190, 132 186, 128 196 Z" fill="#c99a4d" />
        <path d="M192 322 L174 322 L178 200 C 178 190, 188 186, 192 196 Z" fill="#c99a4d" />
        <rect x="128" y="270" width="18" height="14" rx="3" fill="#8a6636" />
        <rect x="174" y="270" width="18" height="14" rx="3" fill="#8a6636" />
        <path d="M128 322 L192 322 L188 380 L132 380 Z" fill="#c99a4d" />
      </g>
    );
  }

  if (id === "explorer-vest") {
    return (
      <g>
        <path d="M118 200 L202 200 L202 400 L118 400 Z" fill="#fbf6ee" />
        <path d="M112 322 L208 322 L204 430 L116 430 Z" fill="#8a6a4a" />
        <path d="M100 200 C 96 190, 104 182, 116 184 L 128 322 L 100 330 C 92 290, 92 230, 100 200 Z" fill="#5f7a5f" />
        <path d="M220 200 C 224 190, 216 182, 204 184 L 192 322 L 220 330 C 228 290, 228 230, 220 200 Z" fill="#5f7a5f" />
        <path d="M128 190 L192 190 L192 322 L128 322 Z" fill="#5f7a5f" />
        <path d="M128 190 L192 190 L188 322 L132 322 Z" fill="#4d684d" fillOpacity="0.35" />
        <rect x="150" y="230" width="20" height="24" rx="3" fill="#496349" />
        <path d="M108 196 L206 300" stroke="#8a6a4a" strokeWidth="4" strokeLinecap="round" />
      </g>
    );
  }

  // rainy-day-slicker
  return (
    <g>
      <path d="M104 196 C 96 186, 108 180, 122 182 L 126 400 L 96 400 C 88 340, 90 240, 104 196 Z" fill="#e8b930" />
      <path d="M216 196 C 224 186, 212 180, 198 182 L 194 400 L 224 400 C 232 340, 230 240, 216 196 Z" fill="#e8b930" />
      <path d="M120 180 L200 180 L212 400 L108 400 Z" fill="#f0c94a" />
      <path d="M120 180 L200 180 L196 220 L124 220 Z" fill="#e0ae2c" />
      <circle cx="160" cy="240" r="4" fill="#c99423" />
      <circle cx="160" cy="264" r="4" fill="#c99423" />
      <circle cx="160" cy="288" r="4" fill="#c99423" />
      <path d="M140 182 C 145 170, 175 170, 180 182 Z" fill="#e0ae2c" />
    </g>
  );
}

function Shoes({ outfit }: { outfit: DollConfig["outfit"] }) {
  if (outfit === "rainy-day-slicker") {
    return (
      <g>
        <path d="M114 470 L146 470 L146 494 C 146 500, 108 500, 110 492 Z" fill="#e8b930" />
        <path d="M174 470 L206 470 L210 492 C 212 500, 174 500, 174 494 Z" fill="#e8b930" />
      </g>
    );
  }
  return (
    <g>
      <path d="M114 470 L146 470 L146 490 C 146 496, 108 496, 110 488 Z" fill="#fdf8f4" stroke="var(--color-brand)" strokeWidth="2" />
      <path d="M174 470 L206 470 L210 488 C 212 496, 174 496, 174 490 Z" fill="#fdf8f4" stroke="var(--color-brand)" strokeWidth="2" />
    </g>
  );
}

/* ---------- Main avatar ---------- */

export function DollAvatar({ config, className = "" }: { config: DollConfig; className?: string }) {
  const skin = resolve(SKIN_TONES, config.skin, SKIN_TONES[1]);
  const hair = resolve(HAIR_COLORS, config.hair, HAIR_COLORS[0]);
  const eyes = resolve(EYE_COLORS, config.eyes, EYE_COLORS[0]);

  return (
    <svg
      viewBox="0 0 320 520"
      className={className}
      role="img"
      aria-label={`A doll with ${skin.label.toLowerCase()} skin, ${hair.label.toLowerCase()} ${config.hairstyle.replace("-", " ")} hair, and ${eyes.label.toLowerCase()} eyes, wearing the ${config.outfit.replace(/-/g, " ")} outfit.`}
    >
      {/* back hair */}
      <Hair style={config.hairstyle} color={hair.hex} back />

      {/* arms */}
      <path d="M96 200 C 74 210, 62 250, 66 300 C 68 318, 78 330, 90 332 L 100 320 C 92 300, 90 250, 104 210 Z" fill={skin.skin} />
      <path d="M224 200 C 246 210, 258 250, 254 300 C 252 318, 242 330, 230 332 L 220 320 C 228 300, 230 250, 216 210 Z" fill={skin.skin} />
      <circle cx="76" cy="322" r="13" fill={skin.skin} />
      <circle cx="244" cy="322" r="13" fill={skin.skin} />

      {/* legs */}
      <rect x="123" y="340" width="26" height="132" rx="12" fill={skin.skin} />
      <rect x="171" y="340" width="26" height="132" rx="12" fill={skin.skin} />

      <Shoes outfit={config.outfit} />

      {/* torso */}
      <path d="M112 182 C 96 190, 92 260, 100 330 L 220 330 C 228 260, 224 190, 208 182 C 190 172, 130 172, 112 182 Z" fill={skin.skin} />

      <Outfit id={config.outfit} />

      {/* neck + head */}
      <rect x="144" y="152" width="32" height="34" rx="10" fill={skin.skin} />
      <circle cx="160" cy="108" r="62" fill={skin.skin} />
      <circle cx="100" cy="112" r="9" fill={skin.skin} />
      <circle cx="220" cy="112" r="9" fill={skin.skin} />

      {/* blush */}
      <ellipse cx="118" cy="132" rx="12" ry="7" fill={skin.blush} opacity={0.45} />
      <ellipse cx="202" cy="132" rx="12" ry="7" fill={skin.blush} opacity={0.45} />

      {/* eyes */}
      <ellipse cx="134" cy="106" rx="10" ry="12" fill="#fff" />
      <ellipse cx="186" cy="106" rx="10" ry="12" fill="#fff" />
      <circle cx="135" cy="108" r="6.5" fill={eyes.hex} />
      <circle cx="185" cy="108" r="6.5" fill={eyes.hex} />
      <circle cx="135" cy="108" r="2.6" fill="#211a17" />
      <circle cx="185" cy="108" r="2.6" fill="#211a17" />
      <circle cx="132.5" cy="105" r="1.4" fill="#fff" />
      <circle cx="182.5" cy="105" r="1.4" fill="#fff" />

      {/* eyebrows */}
      <path d="M122 90 C 128 85, 140 85, 146 90" stroke="rgba(43,35,32,0.55)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M174 90 C 180 85, 192 85, 198 90" stroke="rgba(43,35,32,0.55)" strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* nose + mouth */}
      <path d="M158 118 C 158 122, 160 124, 163 124" stroke="rgba(43,35,32,0.3)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M144 138 C 152 148, 168 148, 176 138" stroke="rgba(43,35,32,0.55)" strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {config.glasses && (
        <g>
          <circle cx="135" cy="108" r="15" fill="none" stroke="#33302c" strokeWidth="3" />
          <circle cx="185" cy="108" r="15" fill="none" stroke="#33302c" strokeWidth="3" />
          <path d="M150 106 L170 106" stroke="#33302c" strokeWidth="3" />
          <path d="M120 104 L108 100" stroke="#33302c" strokeWidth="3" strokeLinecap="round" />
          <path d="M200 104 L212 100" stroke="#33302c" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}

      {/* front hair */}
      <Hair style={config.hairstyle} color={hair.hex} back={false} />
    </svg>
  );
}
