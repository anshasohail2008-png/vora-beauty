import { Facebook, Instagram, Mail, MapPin, Music2, Phone, Youtube } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: ["About Us", "Our Story", "Careers", "Press"],
  },
  {
    title: "Shop",
    links: ["Skincare", "Makeup", "Gift Sets", "Best Sellers"],
  },
  {
    title: "Customer Care",
    links: ["Shipping & Returns", "Track Order", "FAQ", "Privacy Policy", "Terms & Conditions"],
  },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Music2, label: "TikTok" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/70 bg-card/60 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-2">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                V
              </span>
              <span className="font-display text-2xl tracking-[0.28em] text-foreground">VIORA</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premium skincare and beauty crafted to reveal your natural glow — clean,
              cruelty-free, and dermatologist tested.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                14 Rue des Fleurs, Paris, France
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href="tel:+33123456789" className="hover:text-primary">+33 1 23 45 67 89</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href="mailto:care@vioracosmetics.com" className="hover:text-primary">
                  care@vioracosmetics.com
                </a>
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} className="min-w-0">
              <h3 className="font-display text-xl text-foreground">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-border/70 py-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © 2026 VIORA Cosmetics. All Rights Reserved.
          </p>
          <ul className="flex items-center gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href="#home"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  <s.icon className="h-4 w-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
