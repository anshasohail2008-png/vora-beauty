import floral from "@/assets/perfume-floral.jpg";
import rose from "@/assets/perfume-rose.jpg";
import oud from "@/assets/perfume-oud.jpg";
import vanilla from "@/assets/perfume-vanilla.jpg";
import citrus from "@/assets/perfume-citrus.jpg";
import musk from "@/assets/perfume-musk.jpg";
import jasmine from "@/assets/perfume-jasmine.jpg";

export type Perfume = {
  id: string;
  name: string;
  family: string;
  image: string;
  notes: string;
  description: string;
  price: string;
  volume: string;
};

export const perfumes: Perfume[] = [
  {
    id: "floral",
    name: "Fleur de VORA",
    family: "Floral",
    image: floral,
    notes: "Peony · Pink pepper · White musk",
    description:
      "A weightless bouquet of peony and pink pepper that blooms softly on skin — our most-loved everyday signature.",
    price: "$96.00",
    volume: "50 ml Eau de Parfum",
  },
  {
    id: "rose",
    name: "Rouge Rose",
    family: "Rose",
    image: rose,
    notes: "Damask rose · Raspberry · Patchouli",
    description:
      "Velvety Damask rose layered over raspberry and patchouli for a romantic, unmistakably feminine trail.",
    price: "$118.00",
    volume: "50 ml Eau de Parfum",
  },
  {
    id: "oud",
    name: "Noir Oud",
    family: "Oud",
    image: oud,
    notes: "Oud wood · Saffron · Amber",
    description:
      "A deep, resinous oud warmed with saffron and amber — an opulent evening extrait that lingers for hours.",
    price: "$165.00",
    volume: "50 ml Extrait de Parfum",
  },
  {
    id: "vanilla",
    name: "Velvet Vanilla",
    family: "Vanilla",
    image: vanilla,
    notes: "Madagascan vanilla · Tonka · Sandalwood",
    description:
      "Creamy Madagascan vanilla folded into tonka and sandalwood for a soft, skin-close cashmere warmth.",
    price: "$104.00",
    volume: "50 ml Eau de Parfum",
  },
  {
    id: "citrus",
    name: "Citrus Lumière",
    family: "Citrus",
    image: citrus,
    notes: "Bergamot · Sicilian lemon · Neroli",
    description:
      "A sparkling burst of bergamot and Sicilian lemon lifted by neroli — fresh, bright and endlessly wearable.",
    price: "$88.00",
    volume: "50 ml Eau de Parfum",
  },
  {
    id: "musk",
    name: "Luxury Musk",
    family: "Musk",
    image: musk,
    notes: "White musk · Iris · Cashmere wood",
    description:
      "Sheer white musk with powdery iris and cashmere wood — the quiet luxury of freshly laundered silk.",
    price: "$110.00",
    volume: "50 ml Eau de Parfum",
  },
  {
    id: "jasmine",
    name: "Jasmin Éclat",
    family: "Jasmine",
    image: jasmine,
    notes: "Night-blooming jasmine · Green tea · Vetiver",
    description:
      "Night-blooming jasmine cooled with green tea and vetiver for a luminous, garden-fresh elegance.",
    price: "$99.00",
    volume: "50 ml Eau de Parfum",
  },
];
