import { ArrowRight, Sparkles, Star } from "lucide-react";
import heroModel from "@/assets/hero-model.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-32 sm:pt-40"
      style={{ background: "var(--gradient-veil)" }}
    >
      <div
        className="animate-float pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--gradient-rose)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-secondary opacity-60 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div className="min-w-0">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-primary">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Reveal Your Natural Glow
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              Glow Beautifully with{" "}
              <span className="text-gradient-rose italic">VIORA</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Premium skincare and beauty products made with high-quality ingredients to
              enhance your natural beauty.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                style={{ background: "var(--gradient-rose)" }}
              >
                Shop Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </a>
              <a
                href="#shop"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card/70 px-8 py-4 text-sm uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                Explore Collection
              </a>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border/70 pt-8">
              {[
                { k: "120k+", v: "Happy clients" },
                { k: "4.9/5", v: "Average rating" },
                { k: "100%", v: "Cruelty-free" },
              ].map((s) => (
                <div key={s.k} className="min-w-0">
                  <dt className="font-display text-3xl text-primary">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="min-w-0">
          <div className="relative mx-auto max-w-lg">
            <div
              className="absolute inset-4 rounded-[3rem] opacity-40 blur-2xl"
              style={{ background: "var(--gradient-rose)" }}
              aria-hidden
            />
            <img
              src={heroModel}
              alt="Model with radiant glowing skin beside VIORA luxury skincare bottles"
              width={1408}
              height={1600}
              className="relative w-full rounded-[2.5rem] object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="glass-card absolute -bottom-6 left-2 flex items-center gap-3 rounded-2xl px-5 py-4 sm:left-6">
              <div className="flex text-primary" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-xs uppercase tracking-[0.16em] text-foreground">
                Dermatologist tested
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
