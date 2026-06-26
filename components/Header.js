"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useWishlist } from "@/context/WishlistContext";

const NAV = [
  { href: "/products", label: "Shop" },
  { href: "/products?category=kitchen", label: "Kitchen" },
  { href: "/products?category=living", label: "Living" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { count } = useCart();
  const { count: wishCount } = useWishlist();
  const { user, ready, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-clay/70 bg-sand/85 backdrop-blur">
      <div className="bg-brand-deep text-center text-xs font-medium text-white/90">
        <p className="py-2">Free US shipping on orders over $75 · 30-day returns</p>
      </div>
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="NEXORA home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition hover:text-brand ${
                pathname === item.href ? "text-brand" : "text-ink/75"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {ready && (
            user ? (
              <div className="relative hidden md:block">
                <button
                  onClick={() => setAccountOpen((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-full border border-clay bg-white px-4 py-2 text-sm font-semibold hover:border-ink/30"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  {user.name.split(" ")[0]}
                </button>
                {accountOpen && (
                  <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-clay bg-white p-1.5 shadow-soft" onMouseLeave={() => setAccountOpen(false)}>
                    <Link href="/account" onClick={() => setAccountOpen(false)} className="block rounded-lg px-3 py-2 text-sm hover:bg-sand">My account</Link>
                    <button
                      onClick={() => { setAccountOpen(false); logout(); router.push("/"); }}
                      className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-sand"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/account/login" className="hidden items-center gap-2 rounded-full border border-clay bg-white px-4 py-2 text-sm font-semibold hover:border-ink/30 md:inline-flex">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Sign in
              </Link>
            )
          )}
          <Link href="/wishlist" className="relative hidden h-10 w-10 items-center justify-center rounded-full border border-clay bg-white hover:border-ink/30 sm:inline-flex" aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
            {wishCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs font-bold text-white">
                {wishCount}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative inline-flex items-center gap-2 rounded-full border border-clay bg-white px-4 py-2 text-sm font-semibold hover:border-ink/30">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
            </svg>
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-clay bg-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-clay/70 bg-sand md:hidden">
          <div className="shell flex flex-col py-2">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-ink/80"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/wishlist" onClick={() => setOpen(false)} className="py-3 text-sm font-medium text-ink/80">
              Wishlist{wishCount > 0 ? ` (${wishCount})` : ""}
            </Link>
            <div className="my-1 border-t border-clay/70" />
            {user ? (
              <>
                <Link href="/account" onClick={() => setOpen(false)} className="py-3 text-sm font-medium text-ink/80">My account</Link>
                <button
                  onClick={() => { setOpen(false); logout(); router.push("/"); }}
                  className="py-3 text-left text-sm font-medium text-ink/80"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link href="/account/login" onClick={() => setOpen(false)} className="py-3 text-sm font-medium text-ink/80">Sign in</Link>
                <Link href="/account/register" onClick={() => setOpen(false)} className="py-3 text-sm font-medium text-ink/80">Create account</Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
