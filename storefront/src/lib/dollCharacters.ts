import type { DollConfig } from "@/components/doll/dollOptions";

export const DOLL_CHARACTERS: Record<string, DollConfig> = {
  "meadow-the-explorer": {
    skin: "tan",
    hair: "chestnut",
    hairstyle: "braided-pigtails",
    eyes: "moss",
    outfit: "explorer-vest",
    glasses: false,
    name: "Meadow",
  },
  "juniper-of-1912": {
    skin: "fair",
    hair: "honey",
    hairstyle: "wavy-bob",
    eyes: "hazel",
    outfit: "orchard-overalls",
    glasses: false,
    name: "Juniper",
  },
  "rosalind-baker": {
    skin: "deep",
    hair: "raven",
    hairstyle: "long-straight",
    eyes: "amber",
    outfit: "starlight-parade",
    glasses: false,
    name: "Rosalind",
  },
  "little-sprout": {
    skin: "fair",
    hair: "copper",
    hairstyle: "wavy-bob",
    eyes: "sky",
    outfit: "rainy-day-slicker",
    glasses: true,
    name: "Sprout",
  },
};
