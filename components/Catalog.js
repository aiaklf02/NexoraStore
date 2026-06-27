"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/lib/products";

const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
];

export default function Catalog() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");

  const products = useMemo(() => {
    let list = [...PRODUCTS];
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.short.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return list;
  }, [query, sort]);

  return (
    <div className="shell py-10">
      <header className="mb-8">
        <h1 className="font-serif text-3xl font-bold">The Kitchen Collection</h1>
        <p className="mt-2 text-ink/60">Appliances and tools, chosen for everyday cooking.</p>
      </header>

      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
        <div className="relative">
          <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/40" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            className="field !w-full pl-9 sm:w-60"
          />
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="field sm:w-52">
          {SORTS.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      {products.length === 0 ? (
        <div className="card p-12 text-center text-ink/60">
          No products match that search. Try a different term.
        </div>
      ) : (
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
