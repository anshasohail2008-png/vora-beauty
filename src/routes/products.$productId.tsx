import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, Heart, ShoppingBag, Star, Truck, Leaf, ShieldCheck } from "lucide-react";
import { Header } from "@/components/viora/Header";
import { Footer } from "@/components/viora/Footer";
import { products, getProduct } from "@/lib/products";
import { useShop } from "@/lib/shop-store";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found — VORA Cosmetics" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — VORA Cosmetics`;
    const description = `${product.description} ${product.benefits}. Now ${product.newPrice}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const { wishlist, toggleWishlist, addToCart } = useShop();
  const [added, setAdded] = useState(false);
  const liked = wishlist.includes(product.id);

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAdd = () => {
    addToCart(product.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link to="/" hash="products" className="transition-colors hover:text-primary">
            Products
          </Link>
          <span className="px-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="glass-card relative overflow-hidden rounded-[2rem] bg-secondary/40">
            <img
              src={product.image}
              alt={`VORA ${product.name}`}
              width={912}
              height={912}
              className="aspect-square w-full object-cover"
            />
            <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground">
              {product.badge}
            </span>
          </div>

          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-[0.32em] text-primary">{product.category}</p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <span className="flex text-primary" aria-hidden>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span className="text-xs text-muted-foreground">5.0 · 248 reviews</span>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {product.longDescription}
            </p>

            <div className="mt-7 flex items-baseline gap-4">
              <span className="font-display text-4xl text-foreground">{product.newPrice}</span>
              <span className="text-base text-muted-foreground line-through">{product.oldPrice}</span>
              <span className="rounded-full bg-secondary px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-primary">
                {product.volume}
              </span>
            </div>

            {product.shades && (
              <div className="mt-7">
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Available shades
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.shades.map((shade: string) => (
                    <span
                      key={shade}
                      className="rounded-full border border-border/70 bg-card/60 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-foreground/80"
                    >
                      {shade}
                    </span>
                  ))}
                </div>
              </div>
            )}


            <ul className="mt-7 grid gap-3">
              {product.highlights.map((item: string) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAdd}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-4 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--gradient-rose)" }}
              >
                <ShoppingBag className="h-4 w-4" aria-hidden />
                {added ? "Added to Cart" : "Add to Cart"}
              </button>
              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                aria-pressed={liked}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/50 px-6 py-4 text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-secondary/60 hover:text-primary"
              >
                <Heart className={`h-4 w-4 ${liked ? "fill-primary text-primary" : ""}`} aria-hidden />
                {liked ? "In Wishlist" : "Add to Wishlist"}
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Perk icon={<Leaf className="h-4 w-4" aria-hidden />} label="Cruelty-free" />
              <Perk icon={<ShieldCheck className="h-4 w-4" aria-hidden />} label="Derm tested" />
              <Perk icon={<Truck className="h-4 w-4" aria-hidden />} label="Free shipping" />
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <section className="glass-card rounded-[1.75rem] p-8">
            <h2 className="font-display text-2xl text-foreground">Key ingredients</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.ingredients}</p>
          </section>
          <section className="glass-card rounded-[1.75rem] p-8">
            <h2 className="font-display text-2xl text-foreground">How to use</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.howToUse}</p>
          </section>
        </div>

        <section className="mt-20">
          <h2 className="font-display text-3xl text-foreground">You may also love</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.id}
                to="/products/$productId"
                params={{ productId: item.id }}
                className="glass-card group overflow-hidden rounded-[1.75rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]"
              >
                <img
                  src={item.image}
                  alt={`VORA ${item.name}`}
                  loading="lazy"
                  width={912}
                  height={912}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.newPrice}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-16">
          <Link
            to="/"
            hash="products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to all products
          </Link>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            brand: { "@type": "Brand", name: "VORA Cosmetics" },
            description: product.longDescription,
            offers: {
              "@type": "Offer",
              price: product.newPrice.replace("$", ""),
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </div>
  );
}

function Perk({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-3 text-xs uppercase tracking-[0.14em] text-foreground/80">
      <span className="text-primary">{icon}</span>
      {label}
    </div>
  );
}
