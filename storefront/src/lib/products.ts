export type Category = "dolls" | "outfits" | "accessories" | "books";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  age: string;
  blurb: string;
  description: string;
  swatch: string; // brand token name used to color the placeholder art
  badge?: "New" | "Sale" | "Bestseller";
  image?: string; // optional real product photo path under /public/products
};

export const PRODUCTS: Product[] = [
  {
    slug: "meadow-the-explorer",
    name: "Meadow, the Explorer",
    category: "dolls",
    price: 115,
    age: "6+",
    blurb: "Comes with a field journal and binoculars.",
    description:
      "Meadow loves cataloguing wildflowers on family hikes. She arrives in her signature canvas vest with a working compass charm and a 12-page illustrated field journal.",
    swatch: "sage",
    image: "/dollfinder/ag-sisters.avif",
  },
  {
    slug: "juniper-of-1912",
    name: "Juniper of 1912",
    category: "dolls",
    price: 130,
    age: "8+",
    blurb: "Historical character doll with keepsake locket.",
    description:
      "Juniper grew up above her family's print shop. Her collection includes a hand-set type charm necklace and a storybook about the year the presses nearly stopped.",
    swatch: "gold",
    badge: "Bestseller",
    image: "/products/juniper-of-1912.png",
  },
  {
    slug: "rosalind-baker",
    name: "Rosalind, Doll of the Year",
    category: "dolls",
    price: 145,
    age: "8+",
    blurb: "This year's character, a young baker and inventor.",
    description:
      "Rosalind is testing a new sourdough recipe for the county fair. She comes in a flour-dusted apron with a miniature rolling pin and a whisk that really spins.",
    swatch: "brand",
    badge: "New",
    image: "/products/rosalind-baker.png",
  },
  {
    slug: "little-sprout",
    name: "Little Sprout (Bitty-size)",
    category: "dolls",
    price: 68,
    age: "18m+",
    blurb: "A softer, smaller doll for the littlest collectors.",
    description:
      "Sized for smaller hands and nap-time hugs, Little Sprout is soft-bodied with embroidered features and a removable romper.",
    swatch: "sage",
    image: "/dollfinder/bitty-baby.avif",
  },
  {
    slug: "starlight-parade-set",
    name: "Starlight Parade Outfit",
    category: "outfits",
    price: 34,
    age: "6+",
    blurb: "Sequin jacket, star tee, and denim skirt.",
    description:
      "A three-piece set built for celebrations: a satin bomber with an embroidered star, a graphic tee, and an adjustable denim skirt with working pockets.",
    swatch: "brand",
    badge: "Bestseller",
    image: "/products/starlight-parade-set.png",
  },
  {
    slug: "orchard-picking-overalls",
    name: "Orchard Picking Overalls",
    category: "outfits",
    price: 22,
    originalPrice: 28,
    age: "6+",
    blurb: "Corduroy overalls with a fruit-print tee.",
    description: "Soft corduroy overalls with brass-tone buckles, layered over a hand-illustrated fruit-print tee.",
    swatch: "gold",
    badge: "Sale",
    image: "/products/orchard-picking-overalls.png",
  },
  {
    slug: "rainy-day-slicker",
    name: "Rainy Day Slicker Set",
    category: "outfits",
    price: 26,
    age: "6+",
    blurb: "Yellow slicker, rain boots, and a tiny umbrella.",
    description: "Everything needed for a puddle-jumping afternoon, right down to the miniature striped umbrella.",
    swatch: "sage",
  },
  {
    slug: "starlight-parade-sneakers",
    name: "Starlight Sneakers",
    category: "accessories",
    price: 12,
    age: "6+",
    blurb: "Matches the Starlight Parade outfit.",
    description: "Rainbow-striped high-tops with real laces and a hidden elastic closure for easy on/off.",
    swatch: "brand",
    image: "/products/starlight-parade-sneakers.png",
  },
  {
    slug: "reading-nook-bed",
    name: "Reading Nook Bed & Lamp",
    category: "accessories",
    price: 89,
    age: "6+",
    blurb: "A cozy bed set with a working lamp.",
    description: "A slat-frame bed with a quilted mattress, two pillows, and a battery-powered bedside lamp that really switches on.",
    swatch: "gold",
    badge: "New",
  },
  {
    slug: "field-journal-kit",
    name: "Field Journal & Binocular Kit",
    category: "accessories",
    price: 22,
    age: "6+",
    blurb: "Matches Meadow the Explorer.",
    description: "A doll-scale journal with blank pages for real doodles, plus binoculars on a cord.",
    swatch: "sage",
  },
  {
    slug: "bakery-cart",
    name: "Countertop Bakery Cart",
    category: "accessories",
    price: 54,
    age: "6+",
    blurb: "Matches Rosalind's baking set.",
    description: "A rolling bakery cart with five removable pastries and a chalkboard menu sign.",
    swatch: "brand",
  },
  {
    slug: "care-and-keeping-hair",
    name: "Care & Keeping of Hair",
    category: "books",
    price: 7,
    originalPrice: 11,
    age: "6+",
    blurb: "A styling guide for every hair type.",
    description: "Step-by-step styles, detangling tips, and a fold-out poster of braid patterns.",
    swatch: "gold",
    badge: "Sale",
  },
  {
    slug: "juniper-storybook",
    name: "Juniper and the Last Edition",
    category: "books",
    price: 9,
    age: "8+",
    blurb: "The full story behind Juniper of 1912.",
    description: "A 96-page illustrated chapter book about keeping a family business alive against the odds.",
    swatch: "sage",
  },
  {
    slug: "smart-girls-money-guide",
    name: "A Smart Girl's Guide: Money",
    category: "books",
    price: 10,
    age: "8+",
    blurb: "Saving, spending, and first budgets.",
    description: "Practical, age-appropriate money lessons with quizzes and a fold-out savings tracker.",
    swatch: "brand",
  },
  {
    slug: "rosalind-storybook",
    name: "Rosalind Bakes It Better",
    category: "books",
    price: 9,
    age: "8+",
    blurb: "The story behind this year's character.",
    description: "Follow Rosalind's county-fair baking adventure in this fully illustrated chapter book.",
    swatch: "gold",
    badge: "New",
  },
  {
    slug: "meadow-storybook",
    name: "Meadow's Field Guide",
    category: "books",
    price: 9,
    age: "6+",
    blurb: "A story and a real field-guide hybrid.",
    description: "Half storybook, half real wildflower field guide, with pressable-flower activity pages.",
    swatch: "sage",
  },
];

export const CATEGORY_LABELS: Record<Category, string> = {
  dolls: "Dolls",
  outfits: "Outfits",
  accessories: "Accessories",
  books: "Books",
};

export function getProductsByCategory(category: Category) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getNewProducts() {
  return PRODUCTS.filter((p) => p.badge === "New");
}

export function getSaleProducts() {
  return PRODUCTS.filter((p) => p.badge === "Sale");
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
