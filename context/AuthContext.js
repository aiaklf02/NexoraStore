"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

// Demo account system: this is a front-end only store with no server or
// database, so accounts and sessions live in localStorage. This is fine for
// a portfolio/demo deployment but is NOT secure authentication. Do not
// reuse real passwords here, and replace with a real backend (e.g. NextAuth
// + a hashed-password database) before handling real customer accounts.

const ACCOUNTS_KEY = "nexora_accounts_v1";
const SESSION_KEY = "nexora_session_v1";

const AuthContext = createContext(null);

function readAccounts() {
  try {
    return JSON.parse(localStorage.getItem(ACCOUNTS_KEY)) || [];
  } catch {
    return [];
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const session = JSON.parse(localStorage.getItem(SESSION_KEY));
      if (session) setUser(session);
    } catch {
      /* ignore corrupt storage */
    }
    setReady(true);
  }, []);

  const value = useMemo(() => {
    function register({ name, email, password }) {
      const accounts = readAccounts();
      const normalizedEmail = email.trim().toLowerCase();
      if (accounts.some((a) => a.email === normalizedEmail)) {
        return { ok: false, error: "An account with that email already exists." };
      }
      const account = { name: name.trim(), email: normalizedEmail, password };
      localStorage.setItem(ACCOUNTS_KEY, JSON.stringify([...accounts, account]));
      const session = { name: account.name, email: account.email };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      setUser(session);
      return { ok: true };
    }

    function login({ email, password }) {
      const accounts = readAccounts();
      const normalizedEmail = email.trim().toLowerCase();
      const account = accounts.find((a) => a.email === normalizedEmail);
      if (!account || account.password !== password) {
        return { ok: false, error: "Incorrect email or password." };
      }
      const session = { name: account.name, email: account.email };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      setUser(session);
      return { ok: true };
    }

    function logout() {
      localStorage.removeItem(SESSION_KEY);
      setUser(null);
    }

    return { user, ready, register, login, logout };
  }, [user, ready]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
