import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/viora/Header";
import { Hero } from "@/components/viora/Hero";
import { Products } from "@/components/viora/Products";
import { Features } from "@/components/viora/Features";
import { Reviews } from "@/components/viora/Reviews";
import { Gallery } from "@/components/viora/Gallery";
import { Newsletter } from "@/components/viora/Newsletter";
import { Footer } from "@/components/viora/Footer";

const title = "VIORA Cosmetics — Reveal Your Natural Glow";
const description =
  "Premium skincare and beauty products made with high-quality ingredients to enhance your natural beauty. Cruelty-free, dermatologist tested.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);

  const toggleWishlist = (id: string) =>
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cart.length} wishlistCount={wishlist.length} />
      <main>
        <Hero />
        <Products
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onAddToCart={(id) => setCart((prev) => [...prev, id])}
        />
        <Features />
        <Reviews />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Brand",
            name: "VIORA Cosmetics",
            slogan: "Reveal Your Natural Glow",
            description,
          }),
        }}
      />
    </div>
  );
}
