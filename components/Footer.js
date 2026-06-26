import Link from "next/link";
import Logo from "./Logo";
import PaymentIcons from "./PaymentIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 overflow-hidden bg-brand-deep text-white/80">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-light/15 blur-3xl" />
      </div>

      <div className="shell relative grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
            Curated home & lifestyle gadgets, chosen for the way they actually fit into your day.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/40">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            <li><Link href="/products" className="hover:text-brand-light">All products</Link></li>
            <li><Link href="/products?category=kitchen" className="hover:text-brand-light">Kitchen</Link></li>
            <li><Link href="/products?category=living" className="hover:text-brand-light">Living</Link></li>
            <li><Link href="/products?category=wellness" className="hover:text-brand-light">Wellness</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/40">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            <li><Link href="/about" className="hover:text-brand-light">About us</Link></li>
            <li><Link href="/contact" className="hover:text-brand-light">Contact</Link></li>
            <li><Link href="/cart" className="hover:text-brand-light">Your cart</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/40">NEXORA TRADING LLC</h4>
          <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-white/65">
            <p>5 Mystic Ln, Unit 101</p>
            <p>Glenmont, NY 12077</p>
            <p>United States</p>
            <p className="pt-2">
              <a href="tel:+15187631243" className="hover:text-brand-light">+1 (518) 763-1243</a>
            </p>
            <p>
              <a href="mailto:support@nexora-trading.com" className="hover:text-brand-light">support@nexora-trading.com</a>
            </p>
          </address>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="shell flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
          <PaymentIcons />
          <div className="flex flex-col items-center gap-3 text-xs text-white/40 sm:flex-row">
            <p>Copyright © {year} NEXORA TRADING LLC. All Rights Reserved.</p>
            <div className="flex gap-5">
              <Link href="/about" className="hover:text-brand-light">Privacy</Link>
              <Link href="/about" className="hover:text-brand-light">Terms</Link>
              <Link href="/contact" className="hover:text-brand-light">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
