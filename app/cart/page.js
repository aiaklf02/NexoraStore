"use client";

import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { useCart } from "@/context/CartContext";
import { formatPrice, getProduct } from "@/lib/products";

export default function CartPage() {
  const { items, subtotal, shipping, total, setQty, removeItem, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="shell py-20 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-clay">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
        </div>
        <h1 className="mt-6 text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-ink/60">Looks like you haven&apos;t added anything yet.</p>
        <Link href="/products" className="btn-primary mt-6 px-7 py-3.5">Start shopping</Link>
      </div>
    );
  }

  return (
    <div className="shell py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">Your cart</h1>
        <button onClick={clear} className="text-sm text-ink/50 hover:text-red-600">Clear cart</button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <ul className="space-y-4">
          {items.map((item) => {
            const product = getProduct(item.slug) || item;
            return (
              <li key={item.slug} className="card flex gap-4 p-4">
                <Link href={`/products/${item.slug}`} className="shrink-0">
                  <ProductImage product={product} className="h-24 w-28" />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-3">
                    <Link href={`/products/${item.slug}`} className="font-semibold leading-snug hover:text-brand">
                      {item.name}
                    </Link>
                    <span className="font-bold">{formatPrice(item.price * item.qty)}</span>
                  </div>
                  <p className="text-sm text-ink/55">{formatPrice(item.price)} each</p>

                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="inline-flex items-center rounded-full border border-clay">
                      <button onClick={() => setQty(item.slug, item.qty - 1)} className="flex h-9 w-9 items-center justify-center text-ink/70 hover:text-ink" aria-label="Decrease">−</button>
                      <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                      <button onClick={() => setQty(item.slug, item.qty + 1)} className="flex h-9 w-9 items-center justify-center text-ink/70 hover:text-ink" aria-label="Increase">+</button>
                    </div>
                    <button onClick={() => removeItem(item.slug)} className="text-sm text-ink/50 hover:text-red-600">Remove</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <aside className="card h-fit p-6 lg:sticky lg:top-28">
          <h2 className="text-lg font-bold">Order summary</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-ink/60">Subtotal</dt><dd className="font-medium">{formatPrice(subtotal)}</dd></div>
            <div className="flex justify-between">
              <dt className="text-ink/60">Shipping</dt>
              <dd className="font-medium">{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
            </div>
            {shipping > 0 && (
              <p className="rounded-lg bg-brand/5 px-3 py-2 text-xs text-brand-dark">
                Add {formatPrice(75 - subtotal)} more for free shipping.
              </p>
            )}
            <div className="flex justify-between border-t border-clay pt-3 text-base">
              <dt className="font-semibold">Total</dt>
              <dd className="font-bold">{formatPrice(total)}</dd>
            </div>
          </dl>
          <Link href="/checkout" className="btn-primary mt-6 w-full py-3.5">Proceed to checkout</Link>
          <Link href="/products" className="mt-3 block text-center text-sm text-ink/55 hover:text-brand">Continue shopping</Link>
        </aside>
      </div>
    </div>
  );
}
