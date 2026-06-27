import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import AddToCartButton from "@/components/AddToCartButton";
import WishlistButton from "@/components/WishlistButton";
import ProductTabs from "@/components/ProductTabs";
import { PRODUCTS, getProduct, categoryName, formatPrice } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.short,
  };
}

export default function ProductPage({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 4);

  return (
    <div className="shell py-8">
      <nav className="mb-6 text-sm text-ink/50">
        <Link href="/" className="hover:text-brand">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/products?category=${product.category}`} className="hover:text-brand">
          {categoryName(product.category)}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink/70">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <ProductGallery product={product} />
        </div>

        <div>
          <div className="flex items-start justify-between gap-3">
            <h1 className="font-serif text-3xl leading-tight">{product.name}</h1>
            <WishlistButton slug={product.slug} className="h-11 w-11 shrink-0 border border-clay bg-white hover:border-ink/30" />
          </div>

          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1 text-accent">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className={i < Math.round(product.rating) ? "" : "text-clay"}>★</span>
              ))}
            </span>
            <span className="text-ink/60">{product.rating} · {product.reviews} reviews</span>
          </div>

          <p className="mt-5 text-3xl font-bold">{formatPrice(product.price)}</p>
          <p className="mt-4 leading-relaxed text-ink/70">{product.short}</p>

          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-xs text-ink/55">
            <span>✓ Free shipping over $75</span>
            <span>✓ 30-day returns</span>
            <span>✓ 1–3 day US delivery</span>
          </div>
        </div>
      </div>

      <ProductTabs product={product} />

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-serif text-2xl">You might also like</h2>
          <div className="mt-6 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
