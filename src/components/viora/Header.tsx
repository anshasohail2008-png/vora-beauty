import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { useShop } from "@/lib/shop-store";
import logoAsset from "@/assets/logo.png.asset.json";


const links = [
  { label: "Home", hash: "home" },
  { label: "Shop", hash: "shop" },
  { label: "Products", hash: "products" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export function Header() {
  const { cart, wishlist } = useShop();
  const [scrolled, setScrolled] = useState(false);

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
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:gap-4">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logoAsset.url}
            alt="VORA Cosmetics"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav
          className="flex flex-1 items-center justify-center gap-3 overflow-x-auto px-2 py-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 lg:gap-8"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              to="/"
              hash={link.hash}
              className="relative whitespace-nowrap text-xs uppercase tracking-[0.18em] text-foreground/80 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:origin-left hover:after:scale-x-100 sm:text-sm"
            >
              {link.label}
            </Link>
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

          <button
            type="button"
            aria-label="Search"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/80 bg-card/70 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary md:hidden"
          >
            <Search className="h-4 w-4" aria-hidden />
          </button>

          <IconButton label="Wishlist" count={wishlist.length}>
            <Heart className="h-5 w-5" aria-hidden />
          </IconButton>
          <IconButton label="Shopping cart" count={cart.length}>
            <ShoppingBag className="h-5 w-5" aria-hidden />
          </IconButton>
          <IconButton label="User profile">
            <User className="h-5 w-5" aria-hidden />
          </IconButton>
        </div>
      </div>
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
      className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/80 bg-card/70 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:h-10 sm:w-10"
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
