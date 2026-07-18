export type SkinTone = { id: string; label: string; skin: string; blush: string };
export type HairColor = { id: string; label: string; hex: string };
export type EyeColor = { id: string; label: string; hex: string };
export type HairstyleId = "long-straight" | "wavy-bob" | "braided-pigtails";
export type OutfitId = "starlight-parade" | "orchard-overalls" | "explorer-vest" | "rainy-day-slicker";

export const SKIN_TONES: SkinTone[] = [
  { id: "deep", label: "Deep", skin: "#8a5a3c", blush: "#7a4630" },
  { id: "tan", label: "Tan", skin: "#c98a5c", blush: "#b96f45" },
  { id: "fair", label: "Fair", skin: "#f2c9a3", blush: "#e8a688" },
];

export const HAIR_COLORS: HairColor[] = [
  { id: "chestnut", label: "Chestnut", hex: "#4a2c22" },
  { id: "honey", label: "Honey Blonde", hex: "#c99a4d" },
  { id: "raven", label: "Raven Black", hex: "#221a17" },
  { id: "copper", label: "Copper", hex: "#a8502c" },
];

export const EYE_COLORS: EyeColor[] = [
  { id: "hazel", label: "Hazel", hex: "#7a5a34" },
  { id: "sky", label: "Sky Blue", hex: "#4f7ea6" },
  { id: "moss", label: "Moss Green", hex: "#5c7a4a" },
  { id: "charcoal", label: "Charcoal", hex: "#3a332f" },
  { id: "amber", label: "Amber", hex: "#b0722f" },
];

export const HAIRSTYLES: { id: HairstyleId; label: string }[] = [
  { id: "long-straight", label: "Long & Straight" },
  { id: "wavy-bob", label: "Wavy Bob" },
  { id: "braided-pigtails", label: "Braided Pigtails" },
];

export const OUTFITS: { id: OutfitId; label: string; price: number }[] = [
  { id: "starlight-parade", label: "Starlight Parade Set", price: 0 },
  { id: "orchard-overalls", label: "Orchard Overalls", price: 0 },
  { id: "explorer-vest", label: "Explorer Vest", price: 0 },
  { id: "rainy-day-slicker", label: "Rainy Day Slicker", price: 0 },
];

export type DollConfig = {
  skin: string;
  hair: string;
  hairstyle: HairstyleId;
  eyes: string;
  outfit: OutfitId;
  glasses: boolean;
  name: string;
};

export const DEFAULT_DOLL_CONFIG: DollConfig = {
  skin: SKIN_TONES[1].id,
  hair: HAIR_COLORS[0].id,
  hairstyle: "long-straight",
  eyes: EYE_COLORS[0].id,
  outfit: "starlight-parade",
  glasses: false,
  name: "",
};

export const BASE_PRICE = 118;
