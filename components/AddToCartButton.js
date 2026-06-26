"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="inline-flex items-center rounded-full border border-clay bg-white">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="flex h-11 w-11 items-center justify-center text-lg text-ink/70 hover:text-ink"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-8 text-center text-sm font-semibold">{qty}</span>
        <button
          onClick={() => setQty((q) => Math.min(99, q + 1))}
          className="flex h-11 w-11 items-center justify-center text-lg text-ink/70 hover:text-ink"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <button onClick={handleAdd} className="btn-primary flex-1 py-3.5">
        {added ? "Added to cart ✓" : "Add to cart"}
      </button>
    </div>
  );
}
