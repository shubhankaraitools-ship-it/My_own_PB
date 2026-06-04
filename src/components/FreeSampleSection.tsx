"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FreeSampleSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "🚀 New Free Sample Lead",
          from_name: "my own peanut butter",
          to_email: "hey@myownfoods.com",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "" });
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

  return (
    <section id="sample" className="py-16 bg-[#F0EAE0]">
      <div className="max-w-5xl mx-auto px-5">

        {/* Scarcity badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-color-brown/20 px-4 py-2 rounded-full mb-6 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="text-xs font-semibold text-foreground">
            First 100 samples — <span className="text-red-600">going fast</span>
          </span>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-tight mb-4">
              Try it before<br />
              <span className="font-serif font-normal text-brown">you commit.</span>
            </h2>
            <p className="text-sm text-color-muted leading-relaxed mb-8 max-w-sm">
              We're giving away 100 free squeeze packs. No credit card. No obligation. Just a genuinely great snack.
            </p>

            {isSuccess ? (
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-green-200">
                <CheckCircle2 size={22} className="text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">You're on the list!</p>
                  <p className="text-sm text-color-muted">We'll reach out soon with your tracking details.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  required type="text" placeholder="Your name"
                  className="input-premium"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  required type="email" placeholder="Email address"
                  className="input-premium"
                  inputMode="email" autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  required type="tel" placeholder="Phone number"
                  className="input-premium"
                  inputMode="tel" autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <button
                  type="submit" disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-medium text-base text-white bg-brown hover:bg-brown-dark transition-colors disabled:opacity-60"
                >
                  {isSubmitting ? "Claiming..." : <><ArrowRight size={16} /> Claim My Free Pack</>}
                </button>
                {isError && (
                  <p className="text-sm text-red-500 text-center font-medium mt-1">Something went wrong. Please try again.</p>
                )}
                <p className="text-[11px] text-color-muted text-center">No spam. We'll only contact you about your sample.</p>
              </form>
            )}
          </motion.div>

          {/* Product image */}
          <motion.div
            className="hidden lg:block relative w-full aspect-square rounded-3xl overflow-hidden bg-white"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="animate-float absolute inset-0">
              <Image
                src="/images/go_dark_chocolate.png"
                alt="Free Sample Travel Pack"
                fill
                className="object-contain p-8"
                sizes="40vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
