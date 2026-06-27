"use client";

import { useState } from "react";
import Link from "next/link";
import ProductImage from "./ProductImage";
import WishlistButton from "./WishlistButton";
import QuickViewModal from "./QuickViewModal";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [quickView, setQuickView] = useState(false);

  return (
    <div className="group flex flex-col">
      <Link href={`/products/${product.slug}`} className="relative block overflow-hidden rounded-2xl bg-white shadow-card transition-shadow duration-300 group-hover:shadow-soft">
        <ProductImage product={product} rounded="rounded-none" className="aspect-[5/4]" zoomOnHover />
        <WishlistButton
          slug={product.slug}
          className="absolute right-3 top-3 h-10 w-10 bg-white/90 shadow-card hover:bg-white"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setQuickView(true);
          }}
          className="absolute inset-x-3 bottom-3 translate-y-2 rounded-full bg-white/95 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink opacity-0 shadow-card transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick view
        </button>
      </Link>

      <div className="flex flex-1 flex-col pt-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-medium leading-snug hover:text-brand">{product.name}</h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-sm text-ink/55">{product.short}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-semibold">{formatPrice(product.price)}</span>
          <button
            onClick={() => addItem(product, 1)}
            className="text-xs font-semibold uppercase tracking-wide text-brand transition-transform hover:text-brand-dark hover:scale-105"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to cart
          </button>
        </div>
      </div>

      {quickView && <QuickViewModal product={product} onClose={() => setQuickView(false)} />}
    </div>
  );
}
