import serum from "@/assets/product-serum.jpg";
import cleanser from "@/assets/product-cleanser.jpg";
import powder from "@/assets/product-powder.jpg";
import mascara from "@/assets/product-mascara.jpg";
import packaging from "@/assets/gallery-packaging.jpg";
import model from "@/assets/gallery-model.jpg";
import { Reveal } from "./Reveal";

const items = [
  { src: model, label: "Beauty Model", span: "sm:col-span-2 sm:row-span-2" },
  { src: serum, label: "Vitamin C Serum", span: "" },
  { src: cleanser, label: "Hydrating Cleanser", span: "" },
  { src: packaging, label: "Luxury Packaging", span: "sm:col-span-2" },
  { src: powder, label: "Face Powder", span: "" },
  { src: mascara, label: "Waterproof Mascara", span: "sm:col-span-2" },
];

export function Gallery() {
  return (
    <section id="shop" className="py-24" style={{ background: "var(--gradient-veil)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Beauty Gallery</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Inside the VIORA world
          </h2>
        </Reveal>

        <div className="mt-16 grid auto-rows-[190px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 90} className={`${item.span} h-full`}>
              <figure className="group relative h-full overflow-hidden rounded-[1.5rem] border border-primary/15 shadow-[var(--shadow-soft)]">
                <img
                  src={item.src}
                  alt={`VIORA ${item.label}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-card/80 px-4 py-3 text-xs uppercase tracking-[0.18em] text-foreground backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
