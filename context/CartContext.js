"use client";

import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "nexora_cart_v1";

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return action.items;
    case "ADD": {
      const { product, qty } = action;
      const existing = state.find((i) => i.slug === product.slug);
      if (existing) {
        return state.map((i) =>
          i.slug === product.slug ? { ...i, qty: Math.min(i.qty + qty, 99) } : i
        );
      }
      return [
        ...state,
        { slug: product.slug, name: product.name, price: product.price, category: product.category, qty },
      ];
    }
    case "SET_QTY":
      return state
        .map((i) => (i.slug === action.slug ? { ...i, qty: Math.max(0, action.qty) } : i))
        .filter((i) => i.qty > 0);
    case "REMOVE":
      return state.filter((i) => i.slug !== action.slug);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, []);
  const [notice, setNotice] = useState(null);

  // Load saved cart on first mount (client only).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "HYDRATE", items: JSON.parse(raw) });
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  // Persist on every change.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage may be unavailable */
    }
  }, [items]);

  const value = useMemo(() => {
    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0);
    const shipping = items.length === 0 || subtotal >= 75 ? 0 : 6.95;
    const total = subtotal + shipping;
    return {
      items,
      count,
      subtotal,
      shipping,
      total,
      notice,
      dismissNotice: () => setNotice(null),
      addItem: (product, qty = 1) => {
        dispatch({ type: "ADD", product, qty });
        setNotice({ id: Date.now(), name: product.name, slug: product.slug });
      },
      setQty: (slug, qty) => dispatch({ type: "SET_QTY", slug, qty }),
      removeItem: (slug) => dispatch({ type: "REMOVE", slug }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [items, notice]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
