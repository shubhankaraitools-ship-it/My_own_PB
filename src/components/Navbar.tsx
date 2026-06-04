"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { cart, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header 
      className={`sticky top-0 w-full z-[100] transition-all duration-300 ${
        scrolled 
          ? "bg-background border-b border-foreground/5 py-2 shadow-sm" 
          : "bg-background md:bg-background py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-3 items-center">
          
          {/* Left Column: Menu + Desktop Socials */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 -ml-2 relative z-[110] hover:bg-foreground/5 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            
            {/* Desktop Socials */}
            <div className="hidden md:flex items-center gap-3">
              <a href="https://www.instagram.com/myown.foods?igsh=MTNjYmhvNWxnbmtkcg==" target="_blank" rel="noopener noreferrer" className="hover:text-brown transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="https://youtube.com/@myownfoodsmof?si=ff6vzihnhSo8ehIE" target="_blank" rel="noopener noreferrer" className="hover:text-brown transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Center Column: Logo */}
          <div className="flex justify-center">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo.png"
                alt="my own peanut butter"
                width={180}
                height={55}
                className="object-contain h-11 sm:h-14 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Right Column: Mobile Socials + Cart */}
          <div className="flex items-center justify-end gap-1 sm:gap-4">
            {/* Mobile Socials - Symmetrical to Menu */}
            <div className="flex md:hidden items-center gap-2 mr-1 sm:mr-0">
              <a href="https://www.instagram.com/myown.foods?igsh=MTNjYmhvNWxnbmtkcg==" target="_blank" rel="noopener noreferrer" className="p-1.5 text-foreground/70 active:text-brown">
                <FaInstagram size={18} />
              </a>
              <a href="https://youtube.com/@myownfoodsmof?si=ff6vzihnhSo8ehIE" target="_blank" rel="noopener noreferrer" className="p-1.5 text-foreground/70 active:text-brown">
                <FaYoutube size={18} />
              </a>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 -mr-2 flex items-center justify-center hover:text-brown transition-colors z-[110]"
              id="cart-button-header"
              aria-label="Open cart"
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {cartItemsCount > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brown text-[9px] font-bold text-white shadow-sm">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Desktop Nav - Centered below logo or in a sub-row if preferred, but user wants it symmetrical */}
        <nav className="hidden md:flex justify-center items-center gap-10 mt-4 text-[13px] font-medium tracking-widest uppercase">
          <Link href="#products" className="hover:text-brown transition-all hover:tracking-[0.2em] duration-300">
            Shop
          </Link>
          <Link href="#features" className="hover:text-brown transition-all hover:tracking-[0.2em] duration-300">
            Benefits
          </Link>
          <Link href="#faq" className="hover:text-brown transition-all hover:tracking-[0.2em] duration-300">
            FAQ
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-background border-b border-foreground/5 shadow-2xl flex flex-col p-8 gap-6 text-2xl font-medium z-[120] overflow-hidden"
          >
            <Link href="#products" onClick={() => setIsMobileMenuOpen(false)} className="active:text-brown">
              Shop
            </Link>
            <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="active:text-brown">
              Benefits
            </Link>
            <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="active:text-brown">
              FAQ
            </Link>
            <div className="flex gap-6 pt-6 border-t border-foreground/5">
               <a href="https://www.instagram.com/myown.foods?igsh=MTNjYmhvNWxnbmtkcg==" target="_blank" rel="noopener noreferrer">
                 <FaInstagram size={24} className="hover:text-brown transition-colors" />
               </a>
               <a href="https://youtube.com/@myownfoodsmof?si=ff6vzihnhSo8ehIE" target="_blank" rel="noopener noreferrer">
                 <FaYoutube size={24} className="hover:text-brown transition-colors" />
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
