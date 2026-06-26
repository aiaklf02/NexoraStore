"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const { slugs } = useWishlist();
  const items = PRODUCTS.filter((p) => slugs.includes(p.slug));

  if (items.length === 0) {
    return (
      <div className="shell py-20 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-clay">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        </div>
        <h1 className="mt-6 text-2xl font-bold">Your wishlist is empty</h1>
        <p className="mt-2 text-ink/60">Tap the heart on any product to save it for later.</p>
        <Link href="/products" className="btn-primary mt-6 px-7 py-3.5">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="shell py-10">
      <h1 className="text-3xl font-extrabold">Your wishlist</h1>
      <p className="mt-2 text-ink/60">{items.length} saved item{items.length === 1 ? "" : "s"}.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
