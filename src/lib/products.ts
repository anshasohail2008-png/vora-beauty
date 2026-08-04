import serum from "@/assets/product-serum.jpg";
import cleanser from "@/assets/product-cleanser.jpg";
import powder from "@/assets/product-powder.jpg";
import mascara from "@/assets/product-mascara.jpg";
import highlighter from "@/assets/product-highlighter.jpg";
import lipstick from "@/assets/product-lipstick.jpg";
import eyeliner from "@/assets/product-eyeliner.jpg";
import lipgloss from "@/assets/product-lipgloss.jpg";
import foundation from "@/assets/product-foundation.jpg";

export type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  benefits: string;
  oldPrice: string;
  newPrice: string;
  badge: string;
  category: string;
  volume: string;
  longDescription: string;
  highlights: string[];
  ingredients: string;
  howToUse: string;
  shades?: string[];
};


export const products: Product[] = [
  {
    id: "serum",
    name: "Vitamin C Face Serum",
    image: serum,
    description: "A weightless glow elixir with 15% stabilised vitamin C.",
    benefits: "Brightens dull skin · Fades dark spots · Boosts collagen",
    oldPrice: "$68.00",
    newPrice: "$49.00",
    badge: "-28% Sale",
    category: "Skincare · Serum",
    volume: "30 ml / 1.0 fl oz",
    longDescription:
      "Our bestselling glow elixir pairs 15% stabilised vitamin C with ferulic acid and vitamin E for visibly brighter, firmer skin. The silky, fast-absorbing texture layers beautifully under moisturiser and makeup without pilling or stickiness.",
    highlights: [
      "Visibly brighter tone in 14 days",
      "Fades dark spots and post-blemish marks",
      "Supports natural collagen production",
      "Suitable for sensitive skin",
    ],
    ingredients:
      "Aqua, 15% Sodium Ascorbyl Phosphate, Ferulic Acid, Tocopherol, Sodium Hyaluronate, Glycerin, Panthenol.",
    howToUse:
      "Apply 3–4 drops to clean, dry skin each morning. Follow with moisturiser and SPF.",
  },
  {
    id: "cleanser",
    name: "Hydrating Face Cleanser",
    image: cleanser,
    description: "A silky cream-to-foam cleanse with hyaluronic acid.",
    benefits: "Removes impurities · Never strips · pH balanced",
    oldPrice: "$42.00",
    newPrice: "$32.00",
    badge: "-24% Sale",
    category: "Skincare · Cleanser",
    volume: "150 ml / 5.0 fl oz",
    longDescription:
      "A cream-to-foam cleanser that dissolves makeup, sunscreen and daily build-up while leaving the moisture barrier intact. Hyaluronic acid and oat lipids keep skin soft, calm and comfortably hydrated after every rinse.",
    highlights: [
      "Melts away makeup and SPF",
      "pH balanced at 5.5",
      "No tightness or squeaky finish",
      "Fragrance-free formula",
    ],
    ingredients:
      "Aqua, Coco-Glucoside, Sodium Hyaluronate, Avena Sativa Kernel Extract, Glycerin, Panthenol, Allantoin.",
    howToUse:
      "Massage a coin-sized amount onto damp skin morning and night, then rinse with lukewarm water.",
  },
  {
    id: "powder",
    name: "Brightening Face Powder",
    image: powder,
    description: "Air-spun translucent powder for a soft-focus finish.",
    benefits: "Blurs pores · Controls shine · 12h wear",
    oldPrice: "$55.00",
    newPrice: "$39.00",
    badge: "Bestseller",
    category: "Makeup · Complexion",
    volume: "9 g / 0.31 oz",
    longDescription:
      "Milled 12 times for an impossibly fine, weightless veil that blurs pores and sets makeup without flashback. Light-diffusing pearls add a lit-from-within finish that lasts a full 12 hours.",
    highlights: [
      "Translucent on every skin tone",
      "Blurs the look of pores and fine lines",
      "12-hour shine control",
      "Photo-friendly, no white cast",
    ],
    ingredients:
      "Mica, Silica, Boron Nitride, Niacinamide, Tocopherol, Zea Mays Starch.",
    howToUse:
      "Press into the T-zone with a puff, or dust all over with a fluffy brush to set foundation.",
  },
  {
    id: "mascara",
    name: "Waterproof Mascara",
    image: mascara,
    description: "Buildable volume that holds its curl through anything.",
    benefits: "Waterproof · Smudge-proof · Lash conditioning",
    oldPrice: "$36.00",
    newPrice: "$26.00",
    badge: "New In",
    category: "Makeup · Eyes",
    volume: "10 ml / 0.33 fl oz",
    longDescription:
      "A flexible, resin-free waterproof formula that builds dramatic volume while a peptide-rich complex conditions lashes. The tapered hourglass brush lifts from root to tip and holds curl for 16 hours.",
    highlights: [
      "16-hour curl hold",
      "Waterproof and sweat-proof",
      "Peptide complex conditions lashes",
      "Removes easily with warm water and cleanser",
    ],
    ingredients:
      "Aqua, Beeswax-free Synthetic Wax, Panthenol, Biotinoyl Tripeptide-1, Provitamin B5, Iron Oxides.",
    howToUse:
      "Wiggle at the lash root and sweep upward. Build a second coat while the first is still wet.",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}
