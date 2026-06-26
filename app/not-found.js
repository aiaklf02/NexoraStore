import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell py-24 text-center">
      <p className="text-6xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-2xl font-bold">We couldn&apos;t find that page</h1>
      <p className="mt-2 text-ink/60">The link may be broken or the product may no longer be available.</p>
      <Link href="/products" className="btn-primary mt-6 px-7 py-3.5">Back to shop</Link>
    </div>
  );
}
