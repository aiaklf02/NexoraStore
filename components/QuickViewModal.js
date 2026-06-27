"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductImage from "./ProductImage";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function QuickViewModal({ product, onClose }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-2xl gap-0 overflow-hidden rounded-2xl bg-white shadow-soft sm:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-card hover:bg-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>

        <ProductImage product={product} rounded="rounded-none" className="aspect-square sm:aspect-auto sm:h-full" />

        <div className="flex flex-col p-6">
          <h3 className="text-xl font-medium">{product.name}</h3>
          <p className="mt-2 text-2xl font-semibold">{formatPrice(product.price)}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">{product.short}</p>

          <div className="mt-6 flex items-center gap-3">
            <div className="inline-flex items-center rounded-full border border-clay">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-10 w-10 items-center justify-center text-lg text-ink/70 hover:text-ink"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-7 text-center text-sm font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => Math.min(99, q + 1))}
                className="flex h-10 w-10 items-center justify-center text-lg text-ink/70 hover:text-ink"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                addItem(product, qty);
                onClose();
              }}
              className="btn-primary flex-1"
            >
              Add to cart
            </button>
          </div>

          <Link
            href={`/products/${product.slug}`}
            onClick={onClose}
            className="mt-4 text-center text-sm font-semibold text-brand hover:text-brand-dark"
          >
            View full details →
          </Link>
        </div>
      </div>
    </div>
  );
}
