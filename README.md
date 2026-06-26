# NEXORA — E-commerce Store

A modern, premium e-commerce website for **NEXORA TRADING LLC**, selling home & lifestyle
gadgets. Built with **Next.js 14 (App Router) + React + Tailwind CSS**. Includes a full
product catalog, product detail pages, and a persistent shopping cart (panier) with checkout.

> All branding, product names, descriptions and imagery are **original** and created for NEXORA.
> No third-party logos, copyrighted photos or copied marketing text are used, so the site is
> safe to host publicly.

---

## Features

- **Home page** — hero, value props, category grid, popular products, newsletter
- **Catalog** (`/products`) — live search, category filter, sorting (price / rating)
- **Product detail** (`/products/[slug]`) — gallery, specs, features, quantity, related items
- **Cart / Panier** (`/cart`) — add / remove / change quantity, live totals, free-shipping bar
  - Cart is saved in the browser (`localStorage`) so it survives page refresh
- **Checkout** (`/checkout`) — shipping + payment form with an order-confirmation screen
  - ⚠️ Demo only — **no real payment is processed**
- **Account** (`/account/register`, `/account/login`, `/account`) — create an account, sign in,
  and view order history tied to your account
  - ⚠️ Demo only — accounts are stored in browser `localStorage`, **not a real backend**
- **About** & **Contact** pages with the company's real details
- Fully **responsive** (mobile + desktop), accessible, SEO metadata, custom 404

---

## Run it locally

Requires **Node.js 18+** (you have v22).

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server
```

Then open **http://localhost:3000**.

Other commands:

```bash
npm run build    # production build
npm start        # run the production build locally
```

---

## Project structure

```
app/                     # pages (Next.js App Router)
  layout.js              # root layout, wraps everything in AuthProvider + CartProvider
  page.js                # home page
  products/page.js       # catalog (search + filter)
  products/[slug]/page.js# product detail
  cart/page.js           # shopping cart
  checkout/page.js       # checkout + confirmation
  account/login/page.js  # sign in
  account/register/page.js # create account
  account/page.js        # account dashboard + order history
  about/ contact/        # info pages
components/              # Header, Footer, ProductCard, AddToCartButton, ProductImage, Logo
context/CartContext.js   # cart state + localStorage persistence
context/AuthContext.js   # demo account/session state + localStorage persistence
lib/products.js          # the product catalog (edit products & prices here)
lib/orders.js            # order history storage (written by checkout, read by /account)
```

---

## Editing products & prices

Open [`lib/products.js`](lib/products.js). Each product is an object — change `name`, `price`,
`description`, `features`, `specs`, `category` or `badge`. To add a product, copy an existing
block and give it a unique `slug`. Prices are plain numbers (USD).

---

## Product photos

Every product ships with a real photo in `public/products/<slug>.jpg`, sourced from Pexels
(Pexels License — free for commercial use, no attribution required, no third-party logos or
brand names visible in any shot). [`components/ProductImage.js`](components/ProductImage.js)
renders that file automatically; if a photo is ever missing or fails to load, it falls back to
a generated original SVG illustration instead of a broken image icon.

To swap in your own photography (e.g. once you have real product shots): just replace the file
at `public/products/<slug>.jpg` — no code changes needed. To add a new product without a photo
yet, leave the file out and the SVG fallback will cover it until you add one.

---

## Hosting (deploy online)

The easiest free option is **Vercel** (the company behind Next.js).

### Option A — Vercel (recommended)
1. Push this folder to a GitHub repository.
2. Go to **vercel.com**, sign in with GitHub, click **Add New → Project**.
3. Select the repo and click **Deploy**. No configuration needed — Vercel detects Next.js.
4. You get a live URL like `https://nexora.vercel.app`. You can attach a custom domain later.

### Option B — Netlify
1. Push to GitHub.
2. On **netlify.com**: **Add new site → Import from Git**.
3. Build command: `npm run build`, publish handled by the Next.js runtime plugin. Deploy.

### Quick deploy from your machine (Vercel CLI)
```bash
npm i -g vercel
vercel            # follow the prompts; then `vercel --prod` for production
```

---

## Notes

- This is a front-end store. Checkout is a **demonstration** and does not charge cards or ship
  goods. To accept real payments, integrate a provider such as Stripe Checkout before going live.
- Accounts (`/account/register`, `/account/login`) are a **demonstration** auth system stored in
  the browser's `localStorage` — passwords are not hashed or sent to any server. Do not encourage
  real users to reuse real passwords. Before handling real customer accounts, replace
  `context/AuthContext.js` with a real backend (e.g. NextAuth.js with a hashed-password database).
- Company details (name, address, phone, email) appear in the footer, About and Contact pages —
  update them in those files if anything changes.

© NEXORA TRADING LLC. All rights reserved.
