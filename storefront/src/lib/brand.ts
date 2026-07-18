export const BRAND = {
  name: "American Doll",
  full: "American Doll",
  tagline: "A doll you help create.",
  supportPhone: "1-877-555-0142",
  rewardsName: "Heartclub",
} as const;

export const NAV_LINKS = [
  { href: "/shop/dolls", label: "Dolls" },
  { href: "/create-your-own", label: "Create Your Own" },
  { href: "/new", label: "New" },
  { href: "/shop/accessories", label: "Accessories" },
  { href: "/shop/outfits", label: "Clothing" },
  { href: "/shop/books", label: "Books" },
  { href: "/sale", label: "Sale" },
  { href: "/blog", label: "Blog" },
] as const;

export const UTILITY_LINKS = [
  { href: "/stores", label: "Stores" },
  { href: "/rewards", label: `${BRAND.rewardsName} Rewards` },
] as const;

export const PROMO_MESSAGE = "Free standard shipping on all orders $175+";

export const FOOTER_LINKS = {
  "How can we help?": [
    { href: "/faq", label: "Contact customer service" },
    { href: "/faq#shipping", label: "Shipping information" },
    { href: "/faq#returns", label: "Returns" },
    { href: "/account", label: "Order status" },
  ],
  "Want to see more from us?": [
    { href: "/blog", label: "Blog" },
    { href: "/create-your-own", label: "Create Your Own" },
  ],
  "Ready for a visit?": [
    { href: "/stores", label: "Find a store" },
  ],
  "Learn more about us": [
    { href: "/faq", label: "Frequently asked questions" },
    { href: "/rewards", label: `About ${BRAND.rewardsName} Rewards` },
  ],
} as const;
