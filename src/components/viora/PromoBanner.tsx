import showcase from "@/assets/vora-showcase.mp4.asset.json";

export function PromoBanner() {
  return (
    <section
      id="promo"
      aria-label="VORA product showcase"
      className="relative overflow-hidden bg-background pt-24 sm:pt-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
          <video
            src={showcase.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-[46vh] min-h-[260px] w-full object-cover sm:h-[62vh]"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.325 0 0 / 0.18) 0%, oklch(0.325 0 0 / 0.05) 45%, oklch(0.325 0 0 / 0.55) 100%)",
            }}
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 p-6 text-center sm:p-10">
            <p className="text-[10px] uppercase tracking-[0.34em] text-primary-foreground/80">
              The VORA Collection
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-primary-foreground sm:text-5xl">
              Glow with <span className="italic">confidence</span>
            </h2>
            <a
              href="#products"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-300 hover:-translate-y-1"
              style={{ background: "var(--gradient-rose)" }}
            >
              Shop the Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
