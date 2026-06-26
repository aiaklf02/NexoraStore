import { Suspense } from "react";
import Catalog from "@/components/Catalog";

export const metadata = {
  title: "Shop all products",
  description: "Browse the full NEXORA catalog of home, kitchen and lifestyle gadgets.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="shell py-20 text-center text-ink/50">Loading products…</div>}>
      <Catalog />
    </Suspense>
  );
}
