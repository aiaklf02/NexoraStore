import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductImage from "@/components/ProductImage";
import { PRODUCTS, CATEGORIES, formatPrice } from "@/lib/products";

export default function HomePage() {
  const featured = [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 3);
  const fresh = PRODUCTS.slice(0, 8);
  const [heroProduct, ...sideProducts] = featured;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
          <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-light/15 blur-3xl" />
        </div>

        <div className="shell relative pt-12 sm:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="chip">Home & lifestyle, thoughtfully sourced</span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                Gadgets that earn
                <span className="text-brand"> their place</span> on the shelf.
              </h1>
              <p className="mt-5 max-w-md text-lg text-ink/65">
                NEXORA hand-picks practical tools for the kitchen, the living room and the quiet end
                of the day, built well, priced fairly, shipped fast.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/products" className="btn-primary px-7 py-3.5">Shop the catalog</Link>
                <Link href="/about" className="btn-ghost px-7 py-3.5">Our story</Link>
              </div>
            </div>

            <div className="relative">
              {heroProduct && (
                <Link
                  href={`/products/${heroProduct.slug}`}
                  className="group block overflow-hidden rounded-3xl shadow-soft ring-1 ring-clay/70"
                >
                  <ProductImage product={heroProduct} rounded="rounded-none" className="aspect-[4/3]" zoomOnHover />
                  <div className="flex items-center justify-between bg-white p-5">
                    <div>
                      <p className="font-semibold">{heroProduct.name}</p>
                      <p className="text-sm text-ink/55">{heroProduct.short}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white">
                      {formatPrice(heroProduct.price)}
                    </span>
                  </div>
                </Link>
              )}

              {sideProducts.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {sideProducts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="card group overflow-hidden transition hover:shadow-soft"
                    >
                      <ProductImage product={p} rounded="rounded-none" className="aspect-square" zoomOnHover />
                      <div className="flex items-center justify-between p-3">
                        <span className="text-sm font-semibold">{p.name}</span>
                        <span className="text-sm text-ink/55">{formatPrice(p.price)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="mt-16 bg-white py-12">
        <div className="shell">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Free shipping", sub: "On all orders over $75", icon: "M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" },
              { title: "30-day returns", sub: "Changed your mind? No fuss.", icon: "M3 12a9 9 0 1 0 3-6.7M3 4v5h5" },
              { title: "24/7 support", sub: "Real people, real fast replies", icon: "M21 11.5a8.5 8.5 0 1 1-3.8-7.1M3 21l1.5-4A8.5 8.5 0 0 1 3 12" },
              { title: "Quality checked", sub: "We test before we list it", icon: "M20 6 9 17l-5-5" },
            ].map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d={b.icon} /></svg>
                </span>
                <div>
                  <p className="font-semibold">{b.title}</p>
                  <p className="text-sm text-ink/60">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="shell mt-20">
        <h2 className="text-2xl font-bold">Shop by room</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => {
            const sample = PRODUCTS.find((p) => p.category === c.slug);
            return (
              <Link key={c.slug} href={`/products?category=${c.slug}`} className="group relative block overflow-hidden rounded-2xl shadow-card ring-1 ring-clay/70 transition hover:shadow-soft">
                <ProductImage product={sample} rounded="rounded-none" className="aspect-[4/5]" zoomOnHover />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-white">
                  <span className="font-semibold">{c.name}</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Best of the catalog */}
      <section className="mt-20 bg-white py-16">
        <div className="shell">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold">Popular right now</h2>
            <Link href="/products" className="text-sm font-semibold text-brand hover:text-brand-dark">View all →</Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fresh.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-brand/5 to-transparent py-20">
        <div className="shell">
          <h2 className="text-2xl font-bold">What customers are saying</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {[
              { name: "Hannah B.", role: "Verified buyer", text: "Ordered the sunrise lamp and the cold brew maker together. Both shipped fast and the lamp genuinely makes mornings easier." },
              { name: "Diego M.", role: "Verified buyer", text: "Customer support actually replied within the hour when I asked about my order. Refreshing for a smaller store." },
              { name: "Aisha N.", role: "Verified buyer", text: "The kitchen scale is the best $20 I've spent on cooking gear this year. Tare button works exactly as advertised." },
            ].map((t) => (
              <div key={t.name} className="card p-6">
                <div className="flex text-accent">
                  {"★★★★★".split("").map((s, i) => <span key={i}>★</span>)}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-ink/50">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="shell mt-4 pb-4">
        <div className="relative overflow-hidden rounded-3xl bg-brand-deep px-6 py-12 text-center text-white sm:px-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/30 blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-brand-light/20 blur-3xl" />
          </div>
          <h2 className="relative text-2xl font-bold sm:text-3xl">Get $10 off your first order</h2>
          <p className="mx-auto mt-3 max-w-md text-white/70">
            Join the NEXORA list for new arrivals and member-only deals. No spam, unsubscribe anytime.
          </p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input type="email" required placeholder="you@email.com" className="field flex-1 text-ink" />
            <button className="btn bg-accent text-white hover:opacity-90 sm:px-7">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
