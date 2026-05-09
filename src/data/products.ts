export interface ProductVariant {
  id: string;
  size: string;
  price: number;
  image: string; // All variants share the same transparent product image
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  badge?: string;
  variants: ProductVariant[];
}

export const products: Product[] = [
  {
    id: "creamy-pb",
    name: "Creamy Peanut Butter",
    description:
      "Clean, creamy peanut butter designed for everyday squeeze-and-spread convenience.",
    category: "Smooth",
    variants: [
      { id: "creamy-100g", size: "100g", price: 99,  image: "/images/creamy_jar.png" },
      { id: "creamy-200g", size: "200g", price: 189, image: "/images/creamy_jar.png" },
      { id: "creamy-500g", size: "500g", price: 399, image: "/images/creamy_jar.png" },
      { id: "creamy-1kg",  size: "1kg",  price: 749, image: "/images/creamy_jar.png" },
    ],
  },
  {
    id: "dark-choco-pb",
    name: "Dark Chocolate Peanut Butter",
    description:
      "Dark chocolate peanut butter with a mess-free nozzle experience.",
    category: "Chocolate",
    variants: [
      { id: "dark-choco-100g", size: "100g", price: 129, image: "/images/dark_chocolate_jar.png" },
      { id: "dark-choco-200g", size: "200g", price: 239, image: "/images/dark_chocolate_jar.png" },
      { id: "dark-choco-500g", size: "500g", price: 499, image: "/images/dark_chocolate_jar.png" },
      { id: "dark-choco-1kg",  size: "1kg",  price: 899, image: "/images/dark_chocolate_jar.png" },
    ],
  },
  {
    id: "travel-pack",
    name: "Travel Pack",
    description:
      "Single-serve peanut butter packs made for gym, office, and travel.",
    category: "Travel",
    badge: "Best Seller",
    variants: [
      { id: "travel-pack-single", size: "30g", price: 49, image: "/images/travel_pack.png" },
    ],
  },
  {
    id: "travel-pack-combo",
    name: "Travel Pack Combo",
    description: "A curated bundle of our best travel packs — one of each flavour.",
    category: "Combo",
    badge: "Save 15%",
    variants: [
      { id: "travel-pack-combo-box", size: "Combo Box", price: 399, image: "/images/travel_combo.png" },
    ],
  },
];
