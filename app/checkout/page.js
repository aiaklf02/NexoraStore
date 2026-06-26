"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/lib/products";
import { saveOrder } from "@/lib/orders";

export default function CheckoutPage() {
  const { items, subtotal, shipping, total, clear } = useCart();
  const { user } = useAuth();
  const [placed, setPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState(user?.email || "");

  function handleSubmit(e) {
    e.preventDefault();
    // Demo checkout. No real payment is processed.
    const id = "NX-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    saveOrder({
      id,
      date: new Date().toISOString(),
      email: (user?.email || email).trim().toLowerCase(),
      items,
      total,
    });
    setOrderId(id);
    setPlaced(true);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (placed) {
    return (
      <div className="shell py-20 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 text-brand">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <h1 className="mt-6 text-3xl font-extrabold">Thank you for your order!</h1>
        <p className="mt-3 text-ink/65">
          Your order <span className="font-semibold text-ink">{orderId}</span> has been received.
          A confirmation has been sent to your email.
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink/50">
          This is a demonstration store. No payment was charged and no goods will be shipped.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/products" className="btn-primary px-7 py-3.5">Keep shopping</Link>
          {user && <Link href="/account" className="btn-ghost px-7 py-3.5">View order history</Link>}
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="shell py-20 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-ink/60">Add a few products before checking out.</p>
        <Link href="/products" className="btn-primary mt-6 px-7 py-3.5">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="shell py-10">
      <h1 className="text-3xl font-extrabold">Checkout</h1>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <fieldset className="card p-6">
            <legend className="px-2 text-lg font-bold">Contact</legend>
            <div className="mt-3 grid gap-4">
              <div>
                <label className="label" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="field"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly={Boolean(user)}
                />
                {user && (
                  <p className="mt-1.5 text-xs text-ink/50">
                    Signed in as {user.email}. This order will be added to your account.
                  </p>
                )}
              </div>
            </div>
          </fieldset>

          <fieldset className="card p-6">
            <legend className="px-2 text-lg font-bold">Shipping address</legend>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div><label className="label" htmlFor="fn">First name</label><input id="fn" required className="field" /></div>
              <div><label className="label" htmlFor="ln">Last name</label><input id="ln" required className="field" /></div>
              <div className="sm:col-span-2"><label className="label" htmlFor="addr">Address</label><input id="addr" required className="field" /></div>
              <div><label className="label" htmlFor="city">City</label><input id="city" required className="field" /></div>
              <div><label className="label" htmlFor="state">State</label><input id="state" required className="field" /></div>
              <div><label className="label" htmlFor="zip">ZIP code</label><input id="zip" required className="field" inputMode="numeric" /></div>
              <div><label className="label" htmlFor="phone">Phone</label><input id="phone" className="field" inputMode="tel" /></div>
            </div>
          </fieldset>

          <fieldset className="card p-6">
            <legend className="px-2 text-lg font-bold">Payment</legend>
            <p className="mt-1 px-2 text-xs text-ink/50">Demo only. Do not enter real card details.</p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2"><label className="label" htmlFor="card">Card number</label><input id="card" required className="field" placeholder="4242 4242 4242 4242" /></div>
              <div><label className="label" htmlFor="exp">Expiry</label><input id="exp" required className="field" placeholder="MM/YY" /></div>
              <div><label className="label" htmlFor="cvc">CVC</label><input id="cvc" required className="field" placeholder="123" /></div>
            </div>
          </fieldset>
        </div>

        <aside className="card h-fit p-6 lg:sticky lg:top-28">
          <h2 className="text-lg font-bold">Your order</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map((i) => (
              <li key={i.slug} className="flex justify-between gap-2">
                <span className="text-ink/70">{i.name} <span className="text-ink/40">× {i.qty}</span></span>
                <span className="font-medium">{formatPrice(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-4 space-y-2 border-t border-clay pt-4 text-sm">
            <div className="flex justify-between"><dt className="text-ink/60">Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
            <div className="flex justify-between"><dt className="text-ink/60">Shipping</dt><dd>{shipping === 0 ? "Free" : formatPrice(shipping)}</dd></div>
            <div className="flex justify-between border-t border-clay pt-2 text-base font-bold"><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
          </dl>
          <button type="submit" className="btn-primary mt-6 w-full py-3.5">Place order</button>
          <Link href="/cart" className="mt-3 block text-center text-sm text-ink/55 hover:text-brand">Back to cart</Link>
        </aside>
      </form>
    </div>
  );
}
