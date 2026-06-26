"use client";

import { useState } from "react";
import { reviewsFor } from "@/lib/reviews";

const TABS = ["Description", "Specifications", "Reviews"];

export default function ProductTabs({ product }) {
  const [tab, setTab] = useState(TABS[0]);
  const reviews = reviewsFor(product.slug);

  return (
    <div className="mt-10">
      <div className="flex gap-6 border-b border-clay">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative pb-3 text-sm font-semibold transition ${
              tab === t ? "text-ink" : "text-ink/45 hover:text-ink/70"
            }`}
          >
            {t === "Reviews" ? `Reviews (${reviews.length})` : t}
            {tab === t && <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand" />}
          </button>
        ))}
      </div>

      <div className="py-6">
        {tab === "Description" && (
          <div>
            <p className="leading-relaxed text-ink/70">{product.description}</p>
            <ul className="mt-5 space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ink/75">
                  <svg className="mt-0.5 shrink-0 text-brand" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {tab === "Specifications" && (
          <dl className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
            {Object.entries(product.specs).map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-clay/60 py-2">
                <dt className="text-ink/55">{k}</dt>
                <dd className="font-medium text-ink/80">{v}</dd>
              </div>
            ))}
          </dl>
        )}

        {tab === "Reviews" && (
          <div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-extrabold">{product.rating}</span>
              <div>
                <div className="flex text-accent">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className={i < Math.round(product.rating) ? "" : "text-clay"}>★</span>
                  ))}
                </div>
                <p className="text-xs text-ink/55">Based on {product.reviews} ratings</p>
              </div>
            </div>

            <ul className="mt-6 space-y-5">
              {reviews.map((r) => (
                <li key={r.name + r.date} className="border-b border-clay/60 pb-5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{r.name}</span>
                    <span className="text-xs text-ink/45">{new Date(r.date).toLocaleDateString()}</span>
                  </div>
                  <div className="mt-1 flex text-accent">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i} className={i < r.rating ? "" : "text-clay"}>★</span>
                    ))}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{r.text}</p>
                </li>
              ))}
              {reviews.length === 0 && (
                <p className="text-sm text-ink/55">No written reviews yet for this product.</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
