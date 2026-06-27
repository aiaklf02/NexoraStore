"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { ordersForEmail } from "@/lib/orders";
import { formatPrice } from "@/lib/products";

export default function AccountPage() {
  const { user, ready, logout } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (ready && !user) router.replace("/account/login");
  }, [ready, user, router]);

  useEffect(() => {
    if (user) setOrders(ordersForEmail(user.email));
  }, [user]);

  if (!ready || !user) {
    return <div className="shell py-20 text-center text-ink/50">Loading account…</div>;
  }

  return (
    <div className="shell py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold">Hi, {user.name.split(" ")[0]}</h1>
          <p className="mt-1 text-ink/60">{user.email}</p>
        </div>
        <button
          onClick={() => { logout(); router.push("/"); }}
          className="btn-ghost"
        >
          Sign out
        </button>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="card p-6 lg:col-span-1">
          <h2 className="font-semibold">Account</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-ink/50">Name</dt>
              <dd className="font-medium">{user.name}</dd>
            </div>
            <div>
              <dt className="text-ink/50">Email</dt>
              <dd className="font-medium">{user.email}</dd>
            </div>
          </dl>
          <Link href="/products" className="btn-primary mt-6 w-full py-3">Continue shopping</Link>
        </div>

        <div className="card p-6 lg:col-span-2">
          <h2 className="font-semibold">Order history</h2>
          {orders.length === 0 ? (
            <p className="mt-3 text-sm text-ink/60">
              No orders yet. Once you check out, your orders will show up here.
            </p>
          ) : (
            <ul className="mt-4 space-y-4">
              {orders.map((o) => (
                <li key={o.id} className="rounded-xl border border-clay p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold">{o.id}</span>
                    <span className="text-sm text-ink/55">{new Date(o.date).toLocaleDateString()}</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-ink/70">
                    {o.items.map((i) => (
                      <li key={i.slug} className="flex justify-between">
                        <span>{i.name} × {i.qty}</span>
                        <span>{formatPrice(i.price * i.qty)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex justify-between border-t border-clay pt-2 text-sm font-bold">
                    <span>Total</span>
                    <span>{formatPrice(o.total)}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
