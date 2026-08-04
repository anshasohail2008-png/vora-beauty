import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    name: "Amara Whitfield",
    role: "Verified buyer · London",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "Six weeks with the Vitamin C serum and my pigmentation has genuinely faded. My skin has never looked this luminous.",
  },
  {
    name: "Sofia Marchetti",
    role: "Verified buyer · Milan",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    text: "The cleanser is pure silk. It removes a full face of makeup without that tight, squeaky feeling afterwards.",
  },
  {
    name: "Hana Kimura",
    role: "Verified buyer · Tokyo",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    text: "The mascara held its curl through a 12-hour flight. VORA packaging alone makes it feel like a gift to myself.",
  },
];

export function Reviews() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Customer Reviews</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Loved by 120,000 glowing faces
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 120}>
              <figure className="glass-card flex h-full flex-col rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                <Quote className="h-8 w-8 text-primary/50" aria-hidden />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                  “{r.text}”
                </blockquote>
                <span className="mt-5 flex text-primary" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                <figcaption className="mt-5 flex min-w-0 items-center gap-3 border-t border-border/70 pt-5">
                  <img
                    src={r.photo}
                    alt={r.name}
                    loading="lazy"
                    width={96}
                    height={96}
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                  <span className="min-w-0">
                    <span className="block truncate font-display text-lg text-foreground">{r.name}</span>
                    <span className="block truncate text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {r.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
