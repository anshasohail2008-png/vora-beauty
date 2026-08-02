import { Heart, ShoppingBag, Star } from "lucide-react";
import serum from "@/assets/product-serum.jpg";
import cleanser from "@/assets/product-cleanser.jpg";
import powder from "@/assets/product-powder.jpg";
import mascara from "@/assets/product-mascara.jpg";
import { Reveal } from "./Reveal";

export type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  benefits: string;
  oldPrice: string;
  newPrice: string;
  badge: string;
};

export const products: Product[] = [
  {
    id: "serum",
    name: "Vitamin C Face Serum",
    image: serum,
    description: "A weightless glow elixir with 15% stabilised vitamin C.",
    benefits: "Brightens dull skin · Fades dark spots · Boosts collagen",
    oldPrice: "$68.00",
    newPrice: "$49.00",
    badge: "-28% Sale",
  },
  {
    id: "cleanser",
    name: "Hydrating Face Cleanser",
    image: cleanser,
    description: "A silky cream-to-foam cleanse with hyaluronic acid.",
    benefits: "Removes impurities · Never strips · pH balanced",
    oldPrice: "$42.00",
    newPrice: "$32.00",
    badge: "-24% Sale",
  },
  {
    id: "powder",
    name: "Brightening Face Powder",
    image: powder,
    description: "Air-spun translucent powder for a soft-focus finish.",
    benefits: "Blurs pores · Controls shine · 12h wear",
    oldPrice: "$55.00",
    newPrice: "$39.00",
    badge: "Bestseller",
  },
  {
    id: "mascara",
    name: "Waterproof Mascara",
    image: mascara,
    description: "Buildable volume that holds its curl through anything.",
    benefits: "Waterproof · Smudge-proof · Lash conditioning",
    oldPrice: "$36.00",
    newPrice: "$26.00",
    badge: "New In",
  },
];

export function Products({
  wishlist,
  onToggleWishlist,
  onAddToCart,
}: {
  wishlist: string[];
  onToggleWishlist: (id: string) => void;
  onAddToCart: (id: string) => void;
}) {
  return (
    <section id="products" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Featured Products</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-foreground sm:text-5xl">
            The VIORA edit, loved worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Clean formulas, clinically proven actives, and packaging worthy of your vanity.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product, i) => {
            const liked = wishlist.includes(product.id);
            return (
              <Reveal key={product.id} delay={i * 110}>
                <article className="glass-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                  <div className="relative overflow-hidden bg-secondary/40">
                    <img
                      src={product.image}
                      alt={`VIORA ${product.name}`}
                      loading="lazy"
                      width={912}
                      height={912}
                      className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground">
                      {product.badge}
                    </span>
                    <button
                      type="button"
                      onClick={() => onToggleWishlist(product.id)}
                      aria-label={`${liked ? "Remove" : "Add"} ${product.name} ${liked ? "from" : "to"} wishlist`}
                      aria-pressed={liked}
                      className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-card/80 text-foreground transition-all duration-300 hover:scale-110 hover:text-primary"
                    >
                      <Heart className={`h-4 w-4 ${liked ? "fill-primary text-primary" : ""}`} aria-hidden />
                    </button>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-primary">VIORA</p>
                    <h3 className="mt-2 font-display text-2xl leading-snug text-foreground">
                      {product.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="flex text-primary" aria-hidden>
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </span>
                      <span className="text-xs text-muted-foreground">(5.0)</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-foreground/70">
                      {product.benefits}
                    </p>

                    <div className="mt-5 flex items-baseline gap-3">
                      <span className="font-display text-2xl text-foreground">{product.newPrice}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        {product.oldPrice}
                      </span>
                    </div>

                    <div className="mt-6 grid gap-2">
                      <button
                        type="button"
                        onClick={() => onAddToCart(product.id)}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 px-5 py-3 text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-secondary/60 hover:text-primary"
                      >
                        <ShoppingBag className="h-4 w-4" aria-hidden />
                        Add to Cart
                      </button>
                      <button
                        type="button"
                        onClick={() => onAddToCart(product.id)}
                        className="rounded-full px-5 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: "var(--gradient-rose)" }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
