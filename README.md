# जायका एक्सप्रेस — Jayka Express

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide.

## Setup
```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
npm run typecheck && npm run lint && npm run build
```

## Images (required, not bundled)
Add your real photographs (WebP, ~1200px):
- `public/images/hero/stall.png` — the food stall (4:3)
- `public/images/menu/<id>.png` — square. ids: samosa, chowmein, burger, egg-roll, momos,
  chilli-paneer, pizza, fish-fry, chicken-fry, chicken-biryani, veg-thali, non-veg-thali
- `public/images/gallery/g1.png … g6.png` — 4:3

Missing files render a labelled PLACEHOLDER tile instead of a broken image.

## Editing content
- Phone numbers / brand text: `src/lib/constants.ts`
- Menu & gallery: `src/data/menu.ts`

