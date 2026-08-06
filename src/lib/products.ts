import serum from "@/assets/product-serum.jpg";
import cleanser from "@/assets/product-cleanser.jpg";
import powder from "@/assets/product-powder.jpg";
import mascara from "@/assets/product-mascara.jpg";
import highlighter from "@/assets/product-highlighter.jpg";
import lipstick from "@/assets/product-lipstick.jpg";
import eyeliner from "@/assets/product-eyeliner.jpg";
import lipgloss from "@/assets/product-lipgloss.jpg";
import foundation from "@/assets/product-foundation.jpg";
import bronzer from "@/assets/product-bronzer.jpg";
import contour from "@/assets/product-contour.jpg";
import brushes from "@/assets/product-brushes.jpg";
import blush from "@/assets/product-blush.jpg";
import concealer from "@/assets/product-concealer.jpg";

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
  {
    id: "highlighter",
    name: "Liquid Highlighter",
    image: highlighter,
    description: "A pearlescent liquid glow drop for a lit-from-within finish.",
    benefits: "Lightweight · Highly pigmented · Smooth finish",
    oldPrice: "$44.00",
    newPrice: "$34.00",
    badge: "New In",
    category: "Makeup · Complexion",
    volume: "15 ml / 0.5 fl oz",
    shades: ["Silver", "Golden", "Pink", "Brown"],
    longDescription:
      "A silky liquid highlighter that melts into skin for a soft, wet-look sheen. Wear it alone on cheekbones or mix a drop into foundation for an all-over glow. Available in four flattering metallic shades.",
    highlights: [
      "Long-lasting luminous finish",
      "Lightweight, never greasy",
      "Highly pigmented — one drop is enough",
      "Suitable for all skin types",
    ],
    ingredients:
      "Aqua, Glycerin, Mica, Squalane, Sodium Hyaluronate, Tocopherol, Synthetic Fluorphlogopite.",
    howToUse:
      "Tap one or two drops onto cheekbones, brow bones and the bridge of the nose, then blend with fingertips.",
  },
  {
    id: "lipgloss",
    name: "Lip Gloss",
    image: lipgloss,
    tint: "linear-gradient(160deg, oklch(0.94 0.045 350) 0%, oklch(0.97 0.02 20) 60%, oklch(1 0 0) 100%)",
    description: "Mirror-shine gloss with a plumping hydration complex.",
    benefits: "Hydrating · Non-sticky · Smooth finish",
    oldPrice: "$30.00",
    newPrice: "$22.00",
    badge: "New In",
    category: "Makeup · Lips",
    volume: "5 ml / 0.17 fl oz",
    shades: ["Nude", "Rose", "Berry", "Clear Shine"],
    longDescription:
      "A cushiony, high-shine gloss that never feels tacky. Hyaluronic spheres and peptides visibly plump while jojoba oil keeps lips smooth — wear it solo or layered over lipstick.",
    highlights: [
      "Glass-like mirror shine",
      "Deeply hydrating, non-sticky texture",
      "Visibly plumping peptide complex",
      "Suitable for all skin types",
    ],
    ingredients:
      "Polybutene, Jojoba Esters, Sodium Hyaluronate, Acetyl Hexapeptide-8, Tocopherol, Mica.",
    howToUse:
      "Sweep the doe-foot applicator across bare lips, or dab over lipstick for extra dimension.",
  },
  {
    id: "eyeliner",
    name: "Black Eyeliner",
    image: eyeliner,
    description: "Ultra-fine felt tip for precise, intense black lines.",
    benefits: "Waterproof · Smudge-proof · Long-lasting",
    oldPrice: "$32.00",
    newPrice: "$24.00",
    badge: "-25% Sale",
    category: "Makeup · Eyes",
    volume: "1.1 ml / 0.04 fl oz",
    longDescription:
      "A jet-black liquid liner with a flexible 0.1 mm felt tip for anything from a whisper-thin line to a bold graphic wing. The waterproof formula sets in seconds and stays put all day.",
    highlights: [
      "Intense one-stroke black pigment",
      "Waterproof and smudge-proof",
      "Ultra-fine 0.1 mm precision tip",
      "Ophthalmologist tested, safe for sensitive eyes",
    ],
    ingredients:
      "Aqua, Acrylates Copolymer, Black Iron Oxide (CI 77499), Butylene Glycol, Panthenol.",
    howToUse:
      "Rest the tip at the lash line and draw in short strokes toward the outer corner. Extend upward to wing.",
  },
  {
    id: "lipgloss",
    name: "Lip Gloss",
    image: lipgloss,
    description: "Mirror-shine gloss with a plumping hydration complex.",
    benefits: "Hydrating · Non-sticky · Smooth finish",
    oldPrice: "$30.00",
    newPrice: "$22.00",
    badge: "New In",
    category: "Makeup · Lips",
    volume: "5 ml / 0.17 fl oz",
    shades: ["Nude", "Rose", "Berry", "Clear Shine"],
    longDescription:
      "A cushiony, high-shine gloss that never feels tacky. Hyaluronic spheres and peptides visibly plump while jojoba oil keeps lips smooth — wear it solo or layered over lipstick.",
    highlights: [
      "Glass-like mirror shine",
      "Deeply hydrating, non-sticky texture",
      "Visibly plumping peptide complex",
      "Suitable for all skin types",
    ],
    ingredients:
      "Polybutene, Jojoba Esters, Sodium Hyaluronate, Acetyl Hexapeptide-8, Tocopherol, Mica.",
    howToUse:
      "Sweep the doe-foot applicator across bare lips, or dab over lipstick for extra dimension.",
  },
  {
    id: "foundation",
    name: "Skin Perfecting Foundation",
    image: foundation,
    description: "Buildable medium coverage in a natural second-skin finish.",
    benefits: "Long-lasting · Lightweight · Suitable for all skin types",
    oldPrice: "$62.00",
    newPrice: "$46.00",
    badge: "Bestseller",
    category: "Makeup · Complexion",
    volume: "30 ml / 1.0 fl oz",
    shades: ["Porcelain", "Ivory", "Sand", "Beige", "Honey", "Caramel", "Espresso"],
    longDescription:
      "A breathable serum-foundation that evens tone without masking skin. Niacinamide and glycerin hydrate while soft-focus pigments blur imperfections for 16 hours of natural, transfer-resistant wear across seven inclusive shades.",
    highlights: [
      "16-hour long-lasting wear",
      "Lightweight, buildable medium coverage",
      "Hydrating niacinamide formula",
      "Seven shades for all skin tones",
    ],
    ingredients:
      "Aqua, Glycerin, Niacinamide, Squalane, Sodium Hyaluronate, Titanium Dioxide, Iron Oxides.",
    howToUse:
      "Shake well, dispense one pump and blend outward from the centre of the face with a brush, sponge or fingertips.",
  },
  {
    id: "bronzer",
    name: "Sun-Kissed Bronzer",
    image: bronzer,
    description: "Silky matte bronzer with a soft rose gold blending brush.",
    benefits: "Long-lasting · Highly pigmented · Smooth finish",
    oldPrice: "$48.00",
    newPrice: "$36.00",
    badge: "New In",
    category: "Makeup · Complexion",
    volume: "9 g / 0.31 oz + brush",
    shades: ["Light", "Medium", "Deep"],
    longDescription:
      "A finely milled matte bronzer that warms the complexion without a hint of orange. Each compact ships with a VORA bronzer brush so you can sculpt and diffuse in one step for a natural sun-kissed finish.",
    highlights: [
      "Includes a VORA bronzer brush",
      "12-hour long-lasting matte finish",
      "Buildable, highly pigmented powder",
      "Suitable for all skin types",
    ],
    ingredients:
      "Mica, Talc-free Silica, Zea Mays Starch, Iron Oxides, Tocopherol, Squalane.",
    howToUse:
      "Sweep the included brush along the hairline, cheekbones and jaw, then blend upward in soft circles.",
  },
  {
    id: "contour",
    name: "Sculpting Contour Palette",
    image: contour,
    description: "Four cool-toned sculpting shades with an angled contour brush.",
    benefits: "Lightweight · Smooth finish · Suitable for all skin types",
    oldPrice: "$58.00",
    newPrice: "$42.00",
    badge: "Bestseller",
    category: "Makeup · Complexion",
    volume: "4 × 3 g + brush",
    shades: ["Fair", "Light", "Medium", "Deep"],
    longDescription:
      "A four-pan sculpting palette of cool, shadow-true tones that define cheekbones, nose and jawline naturally. The included VORA angled brush places colour precisely and blends it seamlessly into skin.",
    highlights: [
      "Includes a VORA angled contour brush",
      "Cool undertones for realistic shadow",
      "Lightweight, blendable powders",
      "Layer for definition without harsh lines",
    ],
    ingredients:
      "Mica, Silica, Boron Nitride, Kaolin, Iron Oxides, Tocopherol.",
    howToUse:
      "Pick the shade closest to your natural shadow, tap into the hollows of the cheeks, then blend up toward the ear.",
  },
  {
    id: "brushes",
    name: "Makeup Brush Set",
    image: brushes,
    description: "Seven-piece vegan brush set with rose gold ferrules.",
    benefits: "Lightweight · Smooth finish · Suitable for all skin types",
    oldPrice: "$95.00",
    newPrice: "$69.00",
    badge: "-27% Sale",
    category: "Tools · Brushes",
    volume: "7-piece set",
    shades: ["Blush Pink"],
    longDescription:
      "Seven essential brushes — powder, foundation, angled contour, blush, blending, concealer and detail — with ultra-soft vegan bristles, blush pink handles and VORA-engraved rose gold ferrules. Everything you need for a full face in one set.",
    highlights: [
      "7 essentials for face and eyes",
      "Soft vegan, cruelty-free bristles",
      "Lightweight, balanced handles",
      "Shed-resistant and easy to wash",
    ],
    ingredients:
      "Synthetic vegan fibres, aluminium ferrule with rose gold finish, lacquered birch handle.",
    howToUse:
      "Use the flat brushes for base products and the fluffy brushes to buff and diffuse. Wash weekly with mild soap and air dry flat.",
  },
  {
    id: "blush",
    name: "Silk Glow Blush Palette",
    image: blush,
    description: "Four buildable blush shades in a rose gold compact.",
    benefits: "Long-lasting · Highly pigmented · Smooth finish",
    oldPrice: "$52.00",
    newPrice: "$38.00",
    badge: "New In",
    category: "Makeup · Complexion",
    volume: "4 × 3 g",
    shades: ["Peach", "Rose", "Coral", "Berry"],
    longDescription:
      "A four-pan blush palette of silky, finely milled powders that melt into skin for a natural flush. Wear each shade alone or blend two for a custom tone that lasts all day without patchiness.",
    highlights: [
      "Four wearable shades in one compact",
      "12-hour long-lasting colour",
      "Highly pigmented, buildable powder",
      "Suitable for all skin types",
    ],
    ingredients:
      "Mica, Silica, Boron Nitride, Zea Mays Starch, Iron Oxides, Tocopherol, Squalane.",
    howToUse:
      "Tap a fluffy brush into your shade, sweep along the cheekbones and blend upward toward the temples.",
  },
  {
    id: "concealer",
    name: "Radiant Liquid Concealer",
    image: concealer,
    description: "Crease-proof coverage in six inclusive skin tone shades.",
    benefits: "Lightweight · Hydrating · Long-lasting · Suitable for all skin types",
    oldPrice: "$40.00",
    newPrice: "$30.00",
    badge: "Bestseller",
    category: "Makeup · Complexion",
    volume: "8 ml / 0.27 fl oz",
    shades: ["Fair", "Light", "Light Medium", "Medium", "Tan", "Deep"],
    longDescription:
      "A hydrating liquid concealer that brightens under-eyes and covers blemishes without settling into fine lines. Peptides and hyaluronic acid keep skin comfortable through 16 hours of natural, crease-proof wear.",
    highlights: [
      "Six shades matched to skin tone",
      "Brightens under-eyes instantly",
      "Crease-proof, 16-hour wear",
      "Hydrating peptide and hyaluronic formula",
    ],
    ingredients:
      "Aqua, Glycerin, Sodium Hyaluronate, Niacinamide, Acetyl Hexapeptide-8, Titanium Dioxide, Iron Oxides.",
    howToUse:
      "Dot under the eyes or over blemishes and tap in with a fingertip or sponge. Set with powder if desired.",
  },
];



export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}
