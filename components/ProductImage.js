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
  "auraglow-sunrise-lamp": (
    <>
      <path d="M14 30a10 10 0 0 1 20 0" />
      <ellipse cx="24" cy="33" rx="13" ry="2.4" />
      <path d="M24 9v6M12.5 15.5l4.2 4.2M35.5 15.5l-4.2 4.2" strokeLinecap="round" />
    </>
  ),
  "driftsilent-mini-humidifier": (
    <>
      <path d="M16 40V25a8 8 0 0 1 16 0v15z" />
      <rect x="20" y="13" width="8" height="6" rx="1.5" />
      <path d="M17 8c2 2 2 4 0 6M24 6c2 2 2 4 0 6M31 8c2 2 2 4 0 6" strokeLinecap="round" />
    </>
  ),
  "nesttidy-drawer-organizer-set": (
    <>
      <rect x="9" y="14" width="30" height="20" rx="2" />
      <path d="M24 14v20M9 24h30M16.5 14v10M31.5 14v10" />
    </>
  ),
  "lumenstrip-led-light-bar": (
    <>
      <rect x="9" y="22" width="30" height="6" rx="3" />
      <path d="M13 16h4M22 14h4M31 16h4" strokeLinecap="round" />
      <path d="M13 32h4M22 34h4M31 32h4" strokeLinecap="round" opacity="0.6" />
    </>
  ),
  "gripease-magnetic-mount": (
    <>
      <rect x="17" y="9" width="14" height="23" rx="3" />
      <path d="M24 32v4M18 40h12" strokeLinecap="round" />
      <circle cx="21" cy="20.5" r="1.2" />
      <circle cx="27" cy="20.5" r="1.2" />
    </>
  ),
  "snapstore-stackable-jars": (
    <>
      <rect x="15" y="23" width="17" height="13" rx="2" />
      <rect x="17.5" y="18.5" width="12" height="4.5" rx="1.2" />
      <rect x="31" y="27" width="11" height="9" rx="2" opacity="0.85" />
      <rect x="32.7" y="23.5" width="7.6" height="3.5" rx="1" opacity="0.85" />
    </>
  ),
  "brewbuddy-cold-brew-maker": (
    <>
      <path d="M15 13h18l-2.3 23.5a4 4 0 0 1-4 3.5h-5.4a4 4 0 0 1-4-3.5z" />
      <path d="M33 17c4.5 0 7 2.3 7 6.5s-2.5 6.5-7 6.5" />
      <circle cx="24" cy="9" r="1.4" />
    </>
  ),
  "precisepro-digital-kitchen-scale": (
    <>
      <rect x="10" y="20" width="28" height="18" rx="3" />
      <rect x="17" y="26" width="14" height="6" rx="1" opacity="0.85" />
      <path d="M16 20v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
    </>
  ),
  "frothworks-handheld-milk-frother": (
    <>
      <path d="M14 38h20l-2-16H16z" />
      <rect x="20" y="6" width="8" height="17" rx="3" />
      <path d="M24 38v3" strokeLinecap="round" />
    </>
  ),
  "wavecharge-wireless-charging-stand": (
    <>
      <path d="M9 34l15-9 15 9" />
      <rect x="14" y="14" width="20" height="13" rx="2" />
      <path d="M24 27v7" />
    </>
  ),
};

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

export default function ProductImage({ product, className = "", rounded = "rounded-2xl", zoomOnHover = false }) {
  const [photoFailed, setPhotoFailed] = useState(false);

  if (!photoFailed) {
    return (
      <div className={`relative overflow-hidden ${rounded} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/products/${product.slug}.jpg`}
          alt={product.name}
          className={`h-full w-full object-cover ${zoomOnHover ? "transition-transform duration-500 ease-out group-hover:scale-110" : ""}`}
          onError={() => setPhotoFailed(true)}
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
