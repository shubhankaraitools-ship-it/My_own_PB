"use client";

import { products, Product, ProductVariant } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Image from "next/image";
import { Plus, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EcommerceCatalogSection() {
  return (
    <section id="products" className="relative z-10 py-16 bg-[#F0EAE0] pb-24 md:pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-3">The lineup</p>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-tight mb-4">
            Pick your flavor.<br />
            <span className="text-color-muted font-light">Pick your size.</span>
          </h2>
          <p className="text-sm text-color-muted">Gym bags &gt; kitchen jars.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCard product={product} />
            </motion.div>
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
  const [imgKey, setImgKey] = useState(product.variants[0].id);
  const [isHovered, setIsHovered] = useState(false);

  const handleSelect = (v: ProductVariant) => {
    setSelected(v);
    setImgKey(v.id);
  };

  const handleAdd = () => {
    addToCart(product, selected);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <motion.div
      className="flex flex-col bg-background rounded-3xl overflow-hidden shadow-sm relative z-10 cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsHovered(true)}
      whileHover={{
        scale: 1.045,
        y: -8,
        boxShadow: "0 28px 64px rgba(28,23,18,0.18), 0 8px 24px rgba(28,23,18,0.10)",
        zIndex: 20,
      }}
      whileTap={{
        scale: 1.06,
        y: -12,
        boxShadow: "0 36px 80px rgba(28,23,18,0.22), 0 12px 32px rgba(28,23,18,0.14)",
        zIndex: 30,
      }}
      transition={{
        type: "spring",
        stiffness: 340,
        damping: 22,
        mass: 0.8,
      }}
      style={{ transformOrigin: "center bottom" }}
    >
      {/* Product image — full bleed, no padding, taller */}
      <div className="relative w-full overflow-hidden bg-[#F7F3EE]" style={{ aspectRatio: "4/4.5" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={imgKey}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image zooms in subtly on hover */}
            <motion.div
              className="absolute inset-0"
              animate={{ scale: isHovered ? 1.08 : 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={selected.image}
                alt={product.name}
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Subtle shimmer overlay on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)",
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />

        {/* Badge */}
        {product.badge && (
          <motion.span
            className="absolute top-2 left-2 bg-foreground text-background text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-widest z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {product.badge}
          </motion.span>
        )}

        {/* Weight sticker */}
        {product.weight && (
          <motion.div
            className="absolute bottom-2 right-2 z-10"
            initial={{ rotate: -12, scale: 0.7, opacity: 0 }}
            animate={{ rotate: -8, scale: 1, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, scale: 1.12 }}
          >
            <div
              className="flex items-center justify-center px-2.5 py-1.5 rounded-full text-white font-bold text-[10px] tracking-wide shadow-lg"
              style={{ background: "linear-gradient(135deg, #B8652A, #8A4419)" }}
            >
              Net {product.weight}
            </div>
          </motion.div>
        )}
      </div>

      {/* Info section — compact padding */}
      <div className="flex flex-col px-3 pt-3 pb-3 sm:px-4 sm:pt-3.5 sm:pb-4 flex-1">
        <p className="eyebrow text-[10px] mb-0.5">{product.category}</p>
        <h3 className="text-xs sm:text-sm font-medium leading-snug mb-1">{product.name}</h3>
        <motion.p
          key={selected.price}
          className="text-brown font-semibold text-sm sm:text-base mb-2"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          ₹{selected.price}
        </motion.p>

        {/* Variants */}
        {product.variants.length > 1 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {product.variants.map((v) => (
              <motion.button
                key={v.id}
                onClick={() => handleSelect(v)}
                whileTap={{ scale: 0.88 }}
                className={`text-[9px] sm:text-[11px] font-medium px-2 py-1 rounded-full border transition-all duration-300 ${
                  selected.id === v.id
                    ? "border-foreground bg-foreground text-background shadow-sm"
                    : "border-foreground/20 text-color-muted hover:border-foreground/50"
                }`}
              >
                {v.size}
              </motion.button>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.button
          onClick={handleAdd}
          whileTap={{ scale: 0.95 }}
          className={`mt-auto w-full flex items-center justify-center gap-1 py-2.5 rounded-full text-[11px] sm:text-xs font-medium transition-all duration-300 ${
            added
              ? "bg-green-600 text-white"
              : "bg-foreground text-background hover:bg-foreground/90"
          }`}
        >
          <AnimatePresence mode="wait">
            {added ? (
              <motion.span
                key="added"
                className="flex items-center gap-1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                <Check size={12} /> Added
              </motion.span>
            ) : (
              <motion.span
                key="add"
                className="flex items-center gap-1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                <Plus size={12} /> Add to Cart
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
}
