import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductImage from "@/components/ProductImage";
import { PRODUCTS } from "@/lib/products";

export default function HomePage() {
  const fresh = [...PRODUCTS].sort((a, b) => b.rating - a.rating);
  const heroProduct = fresh[0];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-ink">
        {heroProduct && (
          <ProductImage
            product={heroProduct}
            rounded="rounded-none"
            className="absolute inset-0 h-full w-full scale-105 opacity-70"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-light/20 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
        </div>

        <div className="shell relative py-20 text-white">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.25em] text-white/70">New collection</p>
          <h1 className="font-serif animate-fade-up-1 mt-4 max-w-xl text-4xl leading-tight sm:text-5xl">
            Kitchen tools worth keeping.
          </h1>
          <p className="animate-fade-up-1 mt-5 max-w-md text-white/75">
            NEXORA curates a small, focused range of kitchen appliances and tools, chosen for
            build quality and everyday use rather than novelty.
          </p>
          <div className="animate-fade-up-2 mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="btn-primary px-7 py-3.5 transition-transform hover:scale-105">Shop the collection</Link>
            <Link href="/about" className="btn border border-white/40 text-white transition-transform hover:scale-105 hover:bg-white/10 px-7 py-3.5">Our story</Link>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-b border-clay/60 bg-white py-12">
        <div className="shell">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Free shipping", sub: "On all orders over $75", icon: "M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" },
              { title: "30-day returns", sub: "Changed your mind? No fuss.", icon: "M3 12a9 9 0 1 0 3-6.7M3 4v5h5" },
              { title: "24/7 support", sub: "Real people, real fast replies", icon: "M21 11.5a8.5 8.5 0 1 1-3.8-7.1M3 21l1.5-4A8.5 8.5 0 0 1 3 12" },
              { title: "Quality checked", sub: "We test before we list it", icon: "M20 6 9 17l-5-5" },
            ].map((b) => (
              <div key={b.title} className="group flex items-start gap-3">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-300 group-hover:-translate-y-1 group-hover:bg-brand/15">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d={b.icon} /></svg>
                </span>
                <div>
                  <p className="font-medium">{b.title}</p>
                  <p className="text-sm text-ink/55">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection */}
      <section className="shell py-20">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl">The collection</h2>
          <Link href="/products" className="text-sm font-semibold text-brand hover:text-brand-dark">View all →</Link>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {fresh.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-clay/60 bg-white py-20">
        <div className="shell">
          <h2 className="font-serif text-3xl">What customers are saying</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              { name: "Hannah B.", role: "Verified buyer", text: "Ordered the air fryer and the blender together. Both shipped fast and the air fryer gets used almost every night now." },
              { name: "Diego M.", role: "Verified buyer", text: "Customer support actually replied within the hour when I asked about my order. Refreshing for a smaller store." },
              { name: "Aisha N.", role: "Verified buyer", text: "The stainless pan is the best $130 I've spent on cooking gear this year. Heats exactly as evenly as advertised." },
            ].map((t) => (
              <div key={t.name} className="border-t border-clay pt-5 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-sm leading-relaxed text-ink/70">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-ink/45">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-deep px-6 py-16 text-center text-white sm:px-12">
        <h2 className="font-serif text-2xl sm:text-3xl">Get $10 off your first order</h2>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          Join the NEXORA list for new arrivals and member-only deals. No spam, unsubscribe anytime.
        </p>
        <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
          <input type="email" required placeholder="you@email.com" className="field flex-1 text-ink" />
          <button className="btn bg-accent text-white hover:opacity-90 sm:px-7">Subscribe</button>
        </form>
      </section>
    </>
  );
}
