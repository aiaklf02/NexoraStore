"use client";

import { useWishlist } from "@/context/WishlistContext";

export default function WishlistButton({ slug, className = "" }) {
  const { has, toggle } = useWishlist();
  const active = has(slug);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={active}
      className={`inline-flex items-center justify-center rounded-full transition ${className}`}
    >
      <svg
        key={active}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={active ? "#d98a44" : "none"}
        stroke={active ? "#d98a44" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active ? "animate-pop" : ""}
      >
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
      </svg>
    </button>
  );
}
