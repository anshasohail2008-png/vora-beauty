import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useShop } from "@/lib/shop-store";

const links = [
  { label: "Home", hash: "home" },
  { label: "Shop", hash: "shop" },
  { label: "Products", hash: "products" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

const navLinkClass =
  "relative whitespace-nowrap text-xs uppercase tracking-[0.18em] text-foreground/80 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:origin-left hover:after:scale-x-100 sm:text-sm";

export function Header() {
  const { cart, wishlist } = useShop();
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
        scrolled || open ? "glass-card rounded-none py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-6">
        <Link to="/" className="flex min-w-0 shrink-0 flex-col leading-none">
          <span className="font-display text-2xl tracking-[0.22em] text-foreground sm:text-3xl">
            VORA
          </span>
          <span className="text-[8px] uppercase tracking-[0.42em] text-primary sm:text-[9px]">
            Cosmetics
          </span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-5 lg:flex lg:gap-8"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link key={link.label} to="/" hash={link.hash} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
          <Link to="/perfumes" activeProps={{ className: "text-primary" }} className={navLinkClass}>
            Perfume
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <label className="hidden items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-2 xl:flex">
            <Search className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            <input
              type="search"
              placeholder="Search beauty…"
              aria-label="Search products"
              className="w-32 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>

          <IconButton label="Search" className="xl:hidden">
            <Search className="h-4 w-4" aria-hidden />
          </IconButton>

          <IconButton label="Wishlist" count={wishlist.length}>
            <Heart className="h-5 w-5" aria-hidden />
          </IconButton>
          <IconButton label="Shopping cart" count={cart.length}>
            <ShoppingBag className="h-5 w-5" aria-hidden />
          </IconButton>
          <IconButton label="User profile" className="hidden sm:grid">
            <User className="h-5 w-5" aria-hidden />
          </IconButton>

          <IconButton
            label={open ? "Close menu" : "Open menu"}
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            expanded={open}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </IconButton>
        </div>
      </div>

      {open ? (
        <nav
          className="mx-auto mt-3 max-w-7xl px-4 pb-3 sm:px-6 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="grid gap-1 rounded-2xl border border-border/70 bg-card/80 p-3">
            {links.map((link) => (
              <Link
                key={link.label}
                to="/"
                hash={link.hash}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-xs uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:bg-secondary/60 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/perfumes"
              onClick={() => setOpen(false)}
              activeProps={{ className: "text-primary" }}
              className="rounded-xl px-4 py-3 text-xs uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:bg-secondary/60 hover:text-primary"
            >
              Perfume
            </Link>
            <label className="mt-1 flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-4 py-2.5 xl:hidden">
              <Search className="h-4 w-4 shrink-0 text-primary" aria-hidden />
              <input
                type="search"
                placeholder="Search beauty…"
                aria-label="Search products"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </label>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function IconButton({
  children,
  label,
  count,
  className = "",
  onClick,
  expanded,
}: {
  children: React.ReactNode;
  label: string;
  count?: number;
  className?: string;
  onClick?: () => void;
  expanded?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      aria-expanded={expanded}
      className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/80 bg-card/70 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:h-10 sm:w-10 ${className}`}
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
