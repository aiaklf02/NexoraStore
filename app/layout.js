import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://nexora-trading.example.com"),
  title: {
    default: "NEXORA: Smart Home & Lifestyle Gadgets",
    template: "%s · NEXORA",
  },
  description:
    "NEXORA TRADING LLC curates practical, well-made gadgets for the kitchen, living space and everyday wellbeing. Free US shipping over $75.",
  keywords: ["home gadgets", "kitchen tools", "lifestyle", "NEXORA", "smart home"],
  openGraph: {
    title: "NEXORA: Smart Home & Lifestyle Gadgets",
    description: "Practical, well-made gadgets for everyday life.",
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
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
