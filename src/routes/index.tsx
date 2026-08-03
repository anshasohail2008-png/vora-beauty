import { createFileRoute } from "@tanstack/react-router";
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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
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
