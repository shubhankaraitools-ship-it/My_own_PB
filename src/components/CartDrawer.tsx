"use client";

import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      const orderDetails = cart
        .map((item) => `${item.quantity}x ${item.name} (${item.size}) (₹${item.price * item.quantity})`)
        .join("\n");
        
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "🛒 New COD Order Request",
          from_name: "my own peanut butter",
          to_email: "hey@myownfoods.com",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          total_amount: `₹${cartTotal}`,
          ordered_items: orderDetails,
          timestamp: new Date().toLocaleString(),
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        clearCart();
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Web3Forms submission failed:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeDrawer = () => {
    setIsCartOpen(false);
    // Reset state after animation
    setTimeout(() => {
      setIsCheckout(false);
      setIsSuccess(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background shadow-2xl z-[160] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-foreground/10">
              <h2 className="text-xl font-semibold tracking-tight">
                {isSuccess ? "Order Confirmed" : isCheckout ? "Checkout" : "Your Cart"}
              </h2>
              <button
                onClick={closeDrawer}
                className="p-2 hover:bg-foreground/5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-5 min-h-0">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center text-brown mb-4">
                    <ShoppingBag size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">Thank You!</h3>
                  <p className="text-foreground/70">
                    Your pre-order has been successfully recorded. We will contact you soon for confirmation and delivery details.
                  </p>
                  <button
                    onClick={closeDrawer}
                    className="w-full bg-foreground text-background py-4 rounded-xl font-medium mt-8 hover:bg-foreground/90 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <ShoppingBag size={48} className="text-foreground/20" />
                  <p className="text-lg font-medium text-foreground/60">Your cart is empty.</p>
                  <button
                    onClick={closeDrawer}
                    className="text-color-brown font-medium hover:underline"
                  >
                    Start shopping
                  </button>
                </div>
              ) : isCheckout ? (
                <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full p-3 rounded-xl border border-foreground/10 bg-transparent focus:outline-none focus:border-brown"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full p-3 rounded-xl border border-foreground/10 bg-transparent focus:outline-none focus:border-brown"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="w-full p-3 rounded-xl border border-foreground/10 bg-transparent focus:outline-none focus:border-brown"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Delivery Address</label>
                    <textarea
                      required
                      rows={3}
                      className="w-full p-3 rounded-xl border border-foreground/10 bg-transparent focus:outline-none focus:border-brown resize-none"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    ></textarea>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col gap-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-20 h-20 bg-color-beige rounded-xl overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-semibold text-sm">{item.name}</h4>
                          <p className="text-xs text-foreground/50 mb-1">{item.size}</p>
                          <p className="text-foreground/60 text-sm">₹{item.price}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-[#F0EAE0] rounded-xl px-3 py-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1.5 hover:text-brown active:scale-90 transition-transform"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-medium w-5 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1.5 hover:text-brown active:scale-90 transition-transform"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs font-medium text-foreground/40 hover:text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {!isSuccess && cart.length > 0 && (
              <div className="shrink-0 border-t border-foreground/10 p-5 bg-background">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-foreground/60">Subtotal</span>
                  <span className="text-xl font-semibold">₹{cartTotal}</span>
                </div>
                {isCheckout ? (
                  <div className="flex flex-col gap-3">
                    {isError && (
                      <p className="text-sm text-red-500 font-medium text-center">
                        Something went wrong. Please try again.
                      </p>
                    )}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setIsCheckout(false)}
                        className="w-1/3 py-4 rounded-xl font-medium border border-foreground/10 hover:bg-foreground/5 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        form="checkout-form"
                        disabled={isSubmitting}
                        className="w-2/3 bg-[#B8652A] text-white py-4 rounded-xl font-medium hover:bg-[#8A4419] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? "Processing..." : "Reserve My Order (COD)"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsCheckout(true)}
                    className="w-full bg-[#B8652A] text-white py-4 rounded-xl font-medium hover:bg-[#8A4419] transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    Proceed to Checkout
                  </button>
                )}
                {!isCheckout && (
                  <p className="text-center text-xs text-foreground/50 mt-4">
                    Shipping & taxes calculated at checkout.
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
