import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header({
  cartCount,
  wishlistCount,
}: {
  cartCount: number;
  wishlistCount: number;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card rounded-none py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
            V
          </span>
          <span className="truncate font-display text-2xl tracking-[0.28em] text-foreground">
            VIORA
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:origin-left hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <label className="hidden items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-2 md:flex">
            <Search className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            <input
              type="search"
              placeholder="Search beauty…"
              aria-label="Search products"
              className="w-28 bg-transparent text-sm outline-none placeholder:text-muted-foreground xl:w-40"
            />
          </label>

          <IconButton label="Wishlist" count={wishlistCount}>
            <Heart className="h-5 w-5" aria-hidden />
          </IconButton>
          <IconButton label="Shopping cart" count={cartCount}>
            <ShoppingBag className="h-5 w-5" aria-hidden />
          </IconButton>
          <IconButton label="User profile">
            <User className="h-5 w-5" aria-hidden />
          </IconButton>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border/80 bg-card/70 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-4 mt-3 grid gap-1 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-soft)] lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:bg-secondary/60 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function IconButton({
  children,
  label,
  count,
}: {
  children: React.ReactNode;
  label: string;
  count?: number;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border/80 bg-card/70 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
    >
      {children}
      {count ? (
        <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
          {count}
        </span>
      ) : null}
    </button>
  );
}
