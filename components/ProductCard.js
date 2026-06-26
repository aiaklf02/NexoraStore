"use client";

import Link from "next/link";
import ProductImage from "./ProductImage";
import WishlistButton from "./WishlistButton";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group card flex flex-col overflow-hidden transition hover:shadow-soft">
      <Link href={`/products/${product.slug}`} className="relative block overflow-hidden">
        <ProductImage product={product} rounded="rounded-none" className="aspect-[4/3]" zoomOnHover />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/90 px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}
        <WishlistButton
          slug={product.slug}
          className="absolute right-3 top-3 h-9 w-9 bg-white/90 shadow-card hover:bg-white"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1 text-xs text-ink/55">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#d98a44"><path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.3 5.8 20.9l1.6-6.8L2.2 8.9l6.9-.6z"/></svg>
          <span className="font-medium text-ink/70">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>

        <Link href={`/products/${product.slug}`} className="mt-1.5">
          <h3 className="font-semibold leading-snug hover:text-brand">{product.name}</h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-ink/60">{product.short}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">{formatPrice(product.price)}</span>
          <button
            onClick={() => addItem(product, 1)}
            className="btn-primary px-4 py-2 text-xs"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
