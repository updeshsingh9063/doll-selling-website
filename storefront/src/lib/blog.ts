export type BlogPost = {
  slug: string;
  title: string;
  blurb: string;
  body: string;
  tag: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "five-braid-styles",
    title: "5 braid styles for long doll hair",
    tag: "Doll care",
    blurb: "A step-by-step guide for keeping long styles smooth between play sessions.",
    body:
      "Long, straight hair looks beautiful but tangles easily during play. Start by gently detangling from the ends upward, never from the roots. A simple three-strand braid worn overnight keeps hair smooth for days, while a half-up style works well for shorter outings. Always use a wide-tooth comb, and avoid brushing hair while it's wet.",
  },
  {
    slug: "first-budget-lessons",
    title: "Teaching first money lessons through play",
    tag: "Advice",
    blurb: "How pretend shopping trips build real financial habits.",
    body:
      "Kids absorb money concepts faster through play than lectures. Setting a small 'allowance' for doll accessories, letting a child choose between two purchases, and talking through the idea of saving for something bigger are all lessons that transfer surprisingly well to real budgeting later on.",
  },
  {
    slug: "meet-rosalind",
    title: "Meet Rosalind, this year's character",
    tag: "Celebrations",
    blurb: "The story behind our newest doll of the year.",
    body:
      "Rosalind spends her afternoons testing recipes for the county fair baking contest. Her storybook follows one especially chaotic week of flour, floods, and friendship — and the blue ribbon she almost didn't win.",
  },
  {
    slug: "packing-for-a-sleepover",
    title: "Packing the perfect doll sleepover bag",
    tag: "Activities",
    blurb: "A printable checklist for overnight adventures.",
    body:
      "A good sleepover bag has three things: a change of clothes, a hairbrush, and something to read. We put together a printable checklist so packing becomes part of the fun instead of a scramble out the door.",
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
