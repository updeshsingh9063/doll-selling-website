export const MEADOW = {
  name: "Meadow",
  role: "the Explorer",
  bio: "Meadow keeps a field journal in her back pocket and a compass around her neck. Every American Doll collection starts with one of her sketches — a flower she pressed, a gate she photographed, a language she's only just learning to say hello in.",
};

export type Destination = {
  id: string;
  name: string;
  detail: string;
  icon: "leaf" | "dune" | "torii" | "thistle" | "peak" | "wave";
};

export const DESTINATIONS: Destination[] = [
  { id: "amazon", name: "Amazon Rainforest", detail: "Canopy walks & fireflies", icon: "leaf" },
  { id: "sahara", name: "Sahara Desert", detail: "Dunes at golden hour", icon: "dune" },
  { id: "kyoto", name: "Kyoto Gardens", detail: "Paper lanterns & koi ponds", icon: "torii" },
  { id: "highlands", name: "Scottish Highlands", detail: "Thistles & stone bridges", icon: "thistle" },
  { id: "alps", name: "Alpine Meadows", detail: "Wildflowers above the clouds", icon: "peak" },
  { id: "reef", name: "Coral Reef", detail: "Tide pools & sea glass", icon: "wave" },
];

export const COMPANION = {
  name: "Pip",
  species: "the Fox",
  bio: "Pip rides in Meadow's satchel on every expedition, ready with a spare button, a snack, or a good excuse to stop and rest.",
  features: [
    { title: "Always along", body: "Pip clips onto any bag or bedpost." },
    { title: "Soft-sculpted", body: "Hand-finished felt, safe from 18 months up." },
    { title: "One of a kind", body: "Comes with his own tiny travel badge." },
  ],
};

export const BUILD_STEPS = [
  { label: "Choose skin tone" },
  { label: "Choose hair" },
  { label: "Choose outfit" },
  { label: "Choose accessories" },
  { label: "Create her story" },
];
