import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag, Sparkles, Star } from "lucide-react";
import { Header } from "@/components/viora/Header";
import { Footer } from "@/components/viora/Footer";
import { Reveal } from "@/components/viora/Reveal";
import { perfumes } from "@/lib/perfumes";

const title = "Perfume Collection — VORA Beauty";
const description =
  "Explore the VORA perfume collection: floral, rose, oud, vanilla, citrus, musk and jasmine fragrances in luxury bottles, each crafted for a lasting signature.";

export const Route = createFileRoute("/perfumes")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PerfumesPage,
});

function PerfumesPage() {
  const { addToCart } = useShop();


    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to home
          </Link>

          <Reveal className="mt-8 text-center">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Perfume Collection
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-foreground sm:text-6xl">
              The VORA Fragrance Wardrobe
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Seven signatures, each in its own sculpted bottle — from luminous citrus to
              opulent oud. Find the scent that becomes unmistakably yours.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {perfumes.map((perfume, i) => (
              <Reveal key={perfume.id} delay={i * 100}>
                <article className="glass-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                  <div className="relative overflow-hidden bg-secondary/40">
                    <img
                      src={perfume.image}
                      alt={`VORA ${perfume.name} ${perfume.family} perfume`}
                      loading="lazy"
                      width={912}
                      height={912}
                      className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground">
                      {perfume.family}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-primary">VORA</p>
                    <h2 className="mt-2 font-display text-2xl leading-snug text-foreground">
                      {perfume.name}
                    </h2>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="flex text-primary" aria-hidden>
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </span>
                      <span className="text-xs text-muted-foreground">(5.0)</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {perfume.description}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-foreground/70">
                      {perfume.notes}
                    </p>

                    <div className="mt-5 flex items-baseline justify-between gap-3">
                      <span className="font-display text-2xl text-foreground">{perfume.price}</span>
                      <span className="text-xs text-muted-foreground">{perfume.volume}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => addToCart(`perfume-${perfume.id}`)}
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: "var(--gradient-rose)" }}
                    >
                      <ShoppingBag className="h-4 w-4" aria-hidden />
                      Add to Cart
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
