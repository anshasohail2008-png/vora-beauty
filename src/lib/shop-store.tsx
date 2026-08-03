import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type ShopState = {
  wishlist: string[];
  cart: string[];
  toggleWishlist: (id: string) => void;
  addToCart: (id: string) => void;
};

const ShopContext = createContext<ShopState | null>(null);

const WISHLIST_KEY = "viora:wishlist";
const CART_KEY = "viora:cart";

function read(key: string): string[] {
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : null;
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setWishlist(read(WISHLIST_KEY));
    setCart(read(CART_KEY));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  const value = useMemo<ShopState>(
    () => ({
      wishlist,
      cart,
      toggleWishlist: (id) =>
        setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
      addToCart: (id) => setCart((prev) => [...prev, id]),
    }),
    [wishlist, cart],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}
