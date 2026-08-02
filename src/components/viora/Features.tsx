import { FlaskConical, Leaf, Rabbit, Truck } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: Leaf,
    title: "Premium Ingredients",
    text: "Cold-pressed botanicals and clinically dosed actives, sourced responsibly.",
  },
  {
    icon: Rabbit,
    title: "Cruelty-Free",
    text: "Never tested on animals — certified vegan across the entire collection.",
  },
  {
    icon: FlaskConical,
    title: "Dermatologist Tested",
    text: "Every formula is reviewed and approved for sensitive skin types.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Complimentary express shipping worldwide on orders over $60.",
  },
];

export function Features() {
  return (
    <section id="about" className="relative overflow-hidden py-24" style={{ background: "var(--gradient-veil)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Why Choose VIORA</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Luxury you can feel on your skin
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 110}>
              <div className="glass-card group h-full rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                <span
                  className="grid h-14 w-14 place-items-center rounded-2xl text-primary-foreground transition-transform duration-500 group-hover:rotate-6"
                  style={{ background: "var(--gradient-rose)" }}
                >
                  <f.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-2xl text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
