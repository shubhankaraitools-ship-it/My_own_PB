"use client";

import { products, Product, ProductVariant } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Image from "next/image";
import { Plus, Check } from "lucide-react";

export default function EcommerceCatalogSection() {
  return (
    <section id="products" className="relative z-10 py-16 bg-[#F0EAE0] pb-24 md:pb-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-12">
          <p className="eyebrow mb-3">The lineup</p>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-tight mb-4">
            Pick your flavor.<br />
            <span className="text-color-muted font-light">Pick your size.</span>
          </h2>
          <p className="text-sm text-color-muted">Gym bags &gt; kitchen jars.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selected, setSelected] = useState<ProductVariant>(product.variants[0]);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, selected);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="flex flex-col bg-background rounded-3xl p-4 sm:p-5 shadow-sm relative z-10">
      {/* Product image */}
      <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden bg-[#F7F3EE]">
        <Image
          src={selected.image}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 50vw, 25vw"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-foreground text-background text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <p className="eyebrow text-[10px] mb-1">{product.category}</p>
      <h3 className="text-sm sm:text-base font-medium leading-tight mb-1">{product.name}</h3>
      <p className="text-brown font-semibold text-sm sm:text-base mb-3">₹{selected.price}</p>

      {/* Variants */}
      {product.variants.length > 1 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.variants.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelected(v)}
              className={`text-[10px] sm:text-xs font-medium px-2.5 py-1.5 rounded-full border transition-all ${
                selected.id === v.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/20 text-color-muted"
              }`}
            >
              {v.size}
            </button>
          ))}
        </div>
      )}

      {/* CTA */}
      <button
        onClick={handleAdd}
        className={`mt-auto w-full flex items-center justify-center gap-1.5 py-3 rounded-full text-xs sm:text-sm font-medium transition-all ${
          added ? "bg-green-600 text-white" : "bg-foreground text-background active:scale-95"
        }`}
      >
        {added ? <><Check size={14} /> Added</> : <><Plus size={14} /> Add to Cart</>}
      </button>
    </div>
  );
}
