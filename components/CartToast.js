"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartToast() {
  const { notice, dismissNotice } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!notice) return;
    setVisible(true);
    const hide = setTimeout(() => setVisible(false), 2600);
    const clear = setTimeout(() => dismissNotice(), 3000);
    return () => {
      clearTimeout(hide);
      clearTimeout(clear);
    };
  }, [notice, dismissNotice]);

  if (!notice) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-2xl bg-ink px-5 py-4 text-white shadow-soft transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand-light">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </span>
      <div className="text-sm">
        <p className="font-medium">Added to cart</p>
        <p className="text-white/60 line-clamp-1">{notice.name}</p>
      </div>
      <Link href="/cart" className="ml-2 shrink-0 text-xs font-semibold uppercase tracking-wide text-brand-light hover:text-brand">
        View cart
      </Link>
    </div>
  );
}
