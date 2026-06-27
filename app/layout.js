import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartToast from "@/components/CartToast";

export const metadata = {
  metadataBase: new URL("https://nexoratradingco.com"),
  title: {
    default: "NEXORA: Kitchen Appliances & Tools",
    template: "%s · NEXORA",
  },
  description:
    "NEXORA TRADING LLC curates a focused range of kitchen appliances and tools, chosen for build quality and everyday use. Free US shipping over $75.",
  keywords: ["kitchen appliances", "air fryer", "blender", "cookware", "NEXORA"],
  openGraph: {
    title: "NEXORA: Kitchen Appliances & Tools",
    description: "A focused range of kitchen appliances and tools, chosen for everyday use.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <Header />
              <main className="min-h-[70vh]">{children}</main>
              <Footer />
              <CartToast />
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
