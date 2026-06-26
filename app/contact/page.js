"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="shell py-12">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <span className="chip">Contact</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight">We&apos;re here to help.</h1>
          <p className="mt-5 text-lg text-ink/70">
            Questions about an order, a product, or a return? Send us a note and a real person will get
            back to you within one business day.
          </p>

          <div className="mt-8 space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-brand">📍</span>
              <p className="text-ink/70">5 Mystic Ln, Unit 101<br />Glenmont, NY 12077, United States</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-brand">📞</span>
              <a href="tel:+15187631243" className="text-ink/70 hover:text-brand">+1 (518) 763-1243</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-brand">✉️</span>
              <a href="mailto:support@nexora-trading.com" className="text-ink/70 hover:text-brand">support@nexora-trading.com</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-brand">🕑</span>
              <p className="text-ink/70">Mon–Fri, 9:00 – 18:00 ET</p>
            </div>
          </div>
        </div>

        <div className="card p-7">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand text-2xl">✓</div>
              <h2 className="mt-4 text-xl font-bold">Message sent</h2>
              <p className="mt-2 text-sm text-ink/60">Thanks for reaching out. We&apos;ll reply soon.</p>
              <button onClick={() => setSent(false)} className="btn-ghost mt-6">Send another</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div>
                <label className="label" htmlFor="name">Name</label>
                <input id="name" required className="field" />
              </div>
              <div>
                <label className="label" htmlFor="cemail">Email</label>
                <input id="cemail" type="email" required className="field" />
              </div>
              <div>
                <label className="label" htmlFor="subject">Subject</label>
                <input id="subject" className="field" />
              </div>
              <div>
                <label className="label" htmlFor="msg">Message</label>
                <textarea id="msg" required rows={5} className="field resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full py-3.5">Send message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
