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
  weight?: string; // Net weight sticker shown on product card
  variants: ProductVariant[];
}

export const products: Product[] = [
  {
    id: "creamy-pb",
    name: "Creamy Peanut Butter Jar",
    description:
      "Clean, creamy peanut butter designed for everyday convenience and perfect spreads.",
    category: "Smooth",
    variants: [
      { id: "creamy-100g", size: "100g", price: 99,  image: "/images/jar_500g.png" },
      { id: "creamy-200g", size: "200g", price: 189, image: "/images/jar_500g.png" },
      { id: "creamy-500g", size: "500g", price: 399, image: "/images/jar_500g.png" },
      { id: "creamy-1kg",  size: "1kg",  price: 749, image: "/images/jar_500g.png" },
    ],
  },
  {
    id: "dark-choco-pb",
    name: "Flow Squeeze Tube",
    description:
      "Creamy peanut butter in our signature squeeze-flow tube.",
    category: "Squeeze",
    weight: "300g",
    variants: [
      { id: "flow-dark-chocolate", size: "Dark Chocolate", price: 249, image: "/images/flow_dark_chocolate.png" },
      { id: "flow-creamy", size: "Creamy", price: 249, image: "/images/flow_creamy.png" },
      { id: "flow-natural", size: "Natural", price: 249, image: "/images/flow_natural.png" },
    ],
  },
  {
    id: "travel-pack",
    name: "Go Squeeze Stick",
    description:
      "Single-serve squeeze sticks made for gym, office, and travel.",
    category: "Travel",
    badge: "Best Seller",
    weight: "30g",
    variants: [
      { id: "go-single", size: "Single Stick", price: 10, image: "/images/go_dark_chocolate.png" },
      { id: "go-10pack", size: "Pack of 10", price: 80, image: "/images/go_dark_chocolate.png" },
    ],
  },
  {
    id: "travel-pack-combo",
    name: "Pop Squeeze Stick",
    description: "Mini single-serve pop sticks for a quick, delicious protein and energy boost.",
    category: "Energy",
    badge: "Pop Box",
    weight: "10g",
    variants: [
      { id: "pop-single", size: "Single Pop", price: 5, image: "/images/pop_sticks_v2.png" },
      { id: "pop-10pack", size: "Pack of 10", price: 40, image: "/images/pop_sticks_v2.png" },
    ],
  },
];
