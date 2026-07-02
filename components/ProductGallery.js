"use client";

import { useEffect, useState } from "react";

// Builds the image gallery for a product: the real photo(s) on disk at
// /public/products/<slug>.<ext>, /<slug>-2.<ext>, /<slug>-3.<ext>, trying
// jpg/png/jpeg/webp for each so a file saved in any common format is found.
// If a product only has one real photo, a second "detail" thumbnail is
// generated from the same image (zoomed crop) so there's always more than
// one frame to browse, the same way a real listing shows a wide shot plus
// a close-up.

const ALL_EXTS = ["jpg", "png", "jpeg", "webp"];

function extOrder(knownExt) {
  if (!knownExt) return ALL_EXTS;
  return [knownExt, ...ALL_EXTS.filter((e) => e !== knownExt)];
}

function probeImage(src) {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

async function findWorkingSrc(base, knownExt) {
  for (const ext of extOrder(knownExt)) {
    const src = `${base}.${ext}`;
    if (await probeImage(src)) return src;
  }
  return null;
}

export default function ProductGallery({ product }) {
  const base = `/products/${product.slug}`;
  const [views, setViews] = useState([{ src: `${base}.jpg`, zoom: false }]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function build() {
      const bases = [base, `${base}-2`, `${base}-3`];
      const found = await Promise.all(bases.map((b) => findWorkingSrc(b, product.imgExt)));
      const real = found.filter(Boolean).map((src) => ({ src, zoom: false }));
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
