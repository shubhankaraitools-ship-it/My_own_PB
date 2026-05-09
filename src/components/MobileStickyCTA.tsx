"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function MobileStickyCTA() {
  const { cart, setIsCartOpen } = useCart();
  const [visible, setVisible] = useState(false);
  const cartCount = cart.reduce((t, i) => t + i.quantity, 0);

  useEffect(() => {
    const handler = () => {
      // Show after scrolling past 40vh
      setVisible(window.scrollY > window.innerHeight * 0.4);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-[140]"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          {/* Frosted glass backing */}
          <div className="mx-3 mb-3 bg-foreground/95 backdrop-blur-xl rounded-[1.8rem] shadow-2xl border border-white/5 overflow-hidden">
            <div className="flex items-stretch gap-0 h-[62px]">

              {/* Free Sample CTA */}
              <Link
                href="#sample"
                className="flex-1 flex items-center justify-center gap-2 px-5 text-white font-medium text-sm active:bg-white/10 transition-colors"
              >
                <ArrowRight size={15} strokeWidth={2.5} />
                <span>Claim Free Sample</span>
              </Link>

              {/* Divider */}
              <div className="w-px bg-white/10 my-4" />

              {/* Cart shortcut */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center justify-center gap-2 px-6 relative active:bg-white/10 transition-colors"
              >
                <ShoppingBag size={20} strokeWidth={1.5} className="text-white" />
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2.5 right-3.5 flex h-4 w-4 items-center justify-center rounded-full bg-color-brown text-[9px] font-bold text-white"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
