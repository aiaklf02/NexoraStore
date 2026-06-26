"use client";

import { useEffect, useState } from "react";

// Builds the image gallery for a product: the real photo(s) on disk at
// /public/products/<slug>.jpg, /<slug>-2.jpg, /<slug>-3.jpg, whichever
// exist. If a product only has one real photo, a second "detail" thumbnail
// is generated from the same image (zoomed crop) so there's always more
// than one frame to browse, the same way a real listing shows a wide shot
// plus a close-up.

function probeImage(src) {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

export default function ProductGallery({ product }) {
  const base = `/products/${product.slug}`;
  const [views, setViews] = useState([{ src: `${base}.jpg`, zoom: false }]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function build() {
      const candidates = [`${base}.jpg`, `${base}-2.jpg`, `${base}-3.jpg`];
      const found = await Promise.all(candidates.map(probeImage));
      const real = candidates.filter((_, i) => found[i]).map((src) => ({ src, zoom: false }));
      const next = real.length > 0 ? real : [{ src: `${base}.jpg`, zoom: false }];
      if (next.length < 2) {
        next.push({ src: next[0].src, zoom: true });
      }
      if (!cancelled) {
        setViews(next);
        setActive(0);
      }
    }

    build();
    return () => {
      cancelled = true;
    };
  }, [base]);

  const current = views[active] || views[0];

  return (
    <div>
      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-clay/70">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src + current.zoom}
          src={current.src}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          style={current.zoom ? { transform: "scale(1.6)", objectPosition: "center 35%" } : undefined}
        />
      </div>

      {views.length > 1 && (
        <div className="mt-4 grid grid-cols-3 gap-3">
          {views.map((v, i) => (
            <button
              key={v.src + v.zoom + i}
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={`aspect-square overflow-hidden rounded-xl ring-1 transition ${
                active === i ? "ring-2 ring-brand" : "ring-clay/70 hover:ring-ink/30"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={v.src}
                alt=""
                className="h-full w-full object-cover"
                style={v.zoom ? { transform: "scale(1.6)", objectPosition: "center 35%" } : undefined}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
