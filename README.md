# Doll Selling Website

An e-commerce storefront for custom dolls, with an in-browser "Create Your Own"
doll configurator.

## Projects

- **`storefront/`** — the main Next.js 16 (App Router, React 19, Tailwind v4)
  storefront: home, shop, product, cart, blog, account, and the
  **Create Your Own** doll configurator at `/create-your-own`.
- **`doll creaion page/`** — the standalone Vite + React prototype of the
  Create Your Own configurator (layered doll rendering, starter carousel,
  category/sub-category/option navigation). This has been ported into the
  storefront.

## Running the storefront locally

```bash
cd storefront
npm install
npm run dev
```

Then open http://localhost:3000

The Create Your Own configurator is at http://localhost:3000/create-your-own
