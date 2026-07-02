"use client";

import { useState } from "react";

// Renders the real photo at /public/products/<slug>.jpg when one exists.
// If a product has no photo on disk (or it fails to load), this falls back
// to an original, deterministic SVG illustration, so the catalog never
// shows a broken image, even for products added without a photo yet.

const PALETTES = [
  ["#0891b2", "#0e7490"], // blue turquoise
  ["#22d3ee", "#0891b2"], // bright cyan to blue turquoise
  ["#0d9488", "#0e7490"], // teal to blue turquoise
  ["#0ea5b8", "#155e75"], // deep blue turquoise
  ["#d98a44", "#b5651f"], // warm amber accent
  ["#e0976b", "#c2603a"], // coral accent
];

// One distinct, hand-drawn icon per product, drawn on a 0 0 48 48 grid.
const ICONS = {
  "crispair-digital-air-fryer": (
    <>
      <path d="M11 18a13 9 0 0 1 26 0v12a5 5 0 0 1-5 5H16a5 5 0 0 1-5-5z" />
      <rect x="20" y="11" width="8" height="3.4" rx="1.4" />
      <circle cx="24" cy="24" r="1.3" />
    </>
  ),
  "grillpress-panini-maker": (
    <>
      <rect x="9" y="15" width="30" height="6.5" rx="2.2" />
      <rect x="9" y="27" width="30" height="6.5" rx="2.2" />
      <path d="M13 21.5v6M22 21.5v6M31 21.5v6" strokeLinecap="round" opacity="0.7" />
    </>
  ),
  "cookcore-multi-cooker": (
    <>
      <path d="M11 23a13 5 0 0 1 26 0v9a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 11 32z" />
      <path d="M7 24h-2M43 24h2" strokeLinecap="round" />
      <circle cx="24" cy="18.5" r="1.3" />
    </>
  ),
  "blendpro-countertop-blender": (
    <>
      <path d="M17 13h14l-2 22a3 3 0 0 1-3 2.7h-4a3 3 0 0 1-3-2.7z" />
      <rect x="18.5" y="8" width="11" height="5.5" rx="1.5" />
      <path d="M19 20h10M19 26h10" strokeLinecap="round" opacity="0.7" />
    </>
  ),
  "chefedge-stainless-steel-pan": (
    <>
      <circle cx="20" cy="24" r="11" />
      <path d="M31 22h9" strokeLinecap="round" />
      <path d="M37 19v6" strokeLinecap="round" opacity="0.7" />
    </>
  ),
  "classic-drip-coffee-maker": (
    <>
      <path d="M11 13h20v8a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3z" />
      <path d="M16 27h10l-1.5 8a2 2 0 0 1-2 1.6h-3a2 2 0 0 1-2-1.6z" />
      <path d="M31 16h3a3 3 0 0 1 0 6h-3" />
    </>
  ),
  "egg-cooker": (
    <>
      <ellipse cx="24" cy="26" rx="10" ry="12" />
      <path d="M14 26c0-5.5 4.5-10 10-10s10 4.5 10 10" opacity="0.5" />
      <path d="M19 38h10" strokeLinecap="round" opacity="0.5" />
      <rect x="18" y="38" width="12" height="3" rx="1.5" opacity="0.4" />
    </>
  ),
  "red-rice-cooker": (
    <>
      <path d="M12 22a12 6 0 0 1 24 0v9a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4z" />
      <path d="M12 22a12 3 0 0 1 24 0" opacity="0.5" />
      <path d="M22 16v-4M26 16v-4" strokeLinecap="round" opacity="0.6" />
      <circle cx="24" cy="23" r="1.5" opacity="0.6" />
    </>
  ),
  "electric-griddle": (
    <>
      <rect x="8" y="20" width="32" height="12" rx="3" />
      <path d="M13 20v-3M20 20v-3M27 20v-3M34 20v-3" strokeLinecap="round" opacity="0.5" />
      <path d="M6 26h2M40 26h2" strokeLinecap="round" opacity="0.6" />
    </>
  ),
  "hand-mixer": (
    <>
      <rect x="16" y="10" width="16" height="12" rx="3" />
      <path d="M20 22v10M28 22v10" strokeLinecap="round" />
      <path d="M22 32h4" strokeLinecap="round" opacity="0.5" />
      <circle cx="24" cy="14" r="3" opacity="0.5" />
      <path d="M30 13h4a2 2 0 0 1 0 4h-4" />
    </>
  ),
  "electric-kettle": (
    <>
      <path d="M15 15h18v12a5 5 0 0 1-5 5H20a5 5 0 0 1-5-5z" />
      <path d="M33 19h3a3 3 0 0 1 0 6h-3" />
      <rect x="18" y="32" width="12" height="3" rx="1.5" opacity="0.5" />
      <path d="M22 15v-3M26 15v-3" strokeLinecap="round" opacity="0.5" />
    </>
  ),
  "sensart-dish-set": (
    <>
      <rect x="10" y="18" width="28" height="14" rx="3" />
      <path d="M10 22h28" opacity="0.4" />
      <rect x="15" y="23" width="8" height="6" rx="1.5" opacity="0.5" />
      <rect x="25" y="23" width="8" height="6" rx="1.5" opacity="0.5" />
    </>
  ),
  "ceramic-teapot": (
    <>
      <path d="M14 20a10 8 0 0 1 20 0v4a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4z" />
      <path d="M34 22h3a3.5 3.5 0 0 0 0-7h-3" />
      <path d="M21 20v-5M25 20v-7M29 20v-5" strokeLinecap="round" opacity="0.6" />
      <rect x="21" y="28" width="6" height="2" rx="1" opacity="0.5" />
    </>
  ),
  "serving-dish-set": (
    <>
      <ellipse cx="24" cy="26" rx="13" ry="5" />
      <path d="M11 26c0-2.8 5.8-8 13-8s13 5.2 13 8" />
      <ellipse cx="24" cy="26" rx="6" ry="2.2" opacity="0.5" />
      <path d="M18 15h12" strokeLinecap="round" opacity="0.4" />
    </>
  ),
  "ceramic-mixing-bowl": (
    <>
      <path d="M10 20h28a14 10 0 0 1-14 14A14 10 0 0 1 10 20z" />
      <path d="M10 20a14 4 0 0 1 28 0" />
      <path d="M28 17l3-5" strokeLinecap="round" opacity="0.6" />
      <path d="M28 12h5" strokeLinecap="round" opacity="0.5" />
    </>
  ),
};

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

const FALLBACK_EXTS = ["jpg", "png", "jpeg", "webp"];

export default function ProductImage({ product, className = "", rounded = "rounded-2xl", zoomOnHover = false }) {
  // Start at the known extension (from imgExt) so there are zero wasted 404 requests.
  // If that somehow fails, fall through the remaining extensions as a safety net.
  const knownExt = product.imgExt;
  const startExts = knownExt
    ? [knownExt, ...FALLBACK_EXTS.filter((e) => e !== knownExt)]
    : FALLBACK_EXTS;

  const [extIndex, setExtIndex] = useState(0);
  const photoFailed = extIndex >= startExts.length;

  if (!photoFailed) {
    return (
      <div className={`relative overflow-hidden bg-clay/30 ${rounded} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/products/${product.slug}.${startExts[extIndex]}`}
          alt={product.name}
          loading="eager"
          fetchpriority="high"
          className={`h-full w-full object-cover ${zoomOnHover ? "transition-transform duration-500 ease-out group-hover:scale-110" : ""}`}
          onError={() => setExtIndex((i) => i + 1)}
        />
      </div>
    );
  }

  const h = hash(product.slug);
  const [c1, c2] = PALETTES[h % PALETTES.length];
  const icon = ICONS[product.slug];
  const id = `g-${product.slug}`;

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#${id})`} />
        <circle cx="340" cy="40" r="130" fill="#ffffff" opacity="0.08" />
        <circle cx="50" cy="270" r="100" fill="#000000" opacity="0.10" />
        <circle cx="370" cy="250" r="3" fill="#ffffff" opacity="0.5" />
        <circle cx="40" cy="60" r="2.4" fill="#ffffff" opacity="0.4" />

        {/* Icon badge */}
        <circle cx="200" cy="118" r="58" fill="#ffffff" opacity="0.16" />
        <circle cx="200" cy="118" r="58" fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
        <g
          transform="translate(200 118) scale(2.05) translate(-24 -24)"
          stroke="#ffffff"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          {icon}
        </g>

        <text x="200" y="256" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="700" fill="#ffffff" opacity="0.95">
          NEXORA
        </text>
        <text x="200" y="278" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="13" fill="#ffffff" opacity="0.82">
          {product.name}
        </text>
      </svg>
    </div>
  );
}
