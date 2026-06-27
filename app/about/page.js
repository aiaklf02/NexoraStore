import Link from "next/link";

export const metadata = {
  title: "About us",
  description: "How NEXORA TRADING LLC chooses the home and lifestyle gadgets it sells.",
};

export default function AboutPage() {
  return (
    <div className="shell py-12">
      <div className="mx-auto max-w-2xl">
        <span className="chip">Our story</span>
        <h1 className="font-serif mt-4 text-4xl leading-tight">A short list of things worth owning.</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">
          NEXORA started with a simple frustration: too many gadgets promise a lot and quietly end up
          in a drawer. We wanted to run the opposite kind of shop: a short, honest list of tools we
          actually keep using ourselves.
        </p>
        <p className="mt-4 leading-relaxed text-ink/70">
          Every product on the site goes through the same checks before it earns a listing: is it
          genuinely useful, is it built to last, and is the price fair for what you get? If something
          can&apos;t answer all three, it doesn&apos;t make the cut. That&apos;s why our catalog stays
          small on purpose.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            ["Useful first", "Function over hype, every time."],
            ["Built to last", "We test for the long run, not the unboxing."],
            ["Fair pricing", "No inflated 'list prices' to discount from."],
          ].map(([t, s]) => (
            <div key={t} className="card p-5">
              <h3 className="font-semibold text-brand">{t}</h3>
              <p className="mt-1 text-sm text-ink/60">{s}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 card p-6">
          <h2 className="text-lg font-bold">Company details</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            NEXORA TRADING LLC<br />
            5 Mystic Ln, Unit 101<br />
            Glenmont, NY 12077, United States<br />
            Phone: <a href="tel:+15187631243" className="text-brand">+1 (518) 763-1243</a><br />
            Email: <a href="mailto:support@nexora-trading.com" className="text-brand">support@nexora-trading.com</a>
          </p>
        </div>

        <div className="mt-10">
          <Link href="/products" className="btn-primary px-7 py-3.5">Browse the catalog</Link>
        </div>
      </div>
    </div>
  );
}
