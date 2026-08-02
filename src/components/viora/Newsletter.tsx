import { useState } from "react";
import { Check, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-[2.25rem] px-6 py-14 text-center sm:px-14">
            <div
              className="animate-float pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--gradient-rose)" }}
              aria-hidden
            />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-xs uppercase tracking-[0.28em] text-primary">
              <Mail className="h-3.5 w-3.5" aria-hidden />
              Newsletter
            </span>
            <h2 className="relative mt-6 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Join the VIORA Beauty Club
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              Early access to launches, expert rituals, and 10% off your first order.
            </p>

            <form
              className="relative mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                setDone(true);
                setEmail("");
              }}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="min-w-0 flex-1 rounded-full border border-border bg-card px-6 py-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full px-8 py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
                style={{ background: "var(--gradient-rose)" }}
              >
                Subscribe
              </button>
            </form>

            {done && (
              <p className="relative mt-5 inline-flex items-center gap-2 text-sm text-primary">
                <Check className="h-4 w-4" aria-hidden />
                Welcome to the club — check your inbox.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
