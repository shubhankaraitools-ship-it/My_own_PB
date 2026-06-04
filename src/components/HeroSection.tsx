"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleQuickSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const val = email.trim();
    if (!val) return;
    setLoading(true);
    setError(false);

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
          email: val,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        setEmail("");
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Web3Forms submission failed:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  /* Shared tags */
  const tags = ["Squeeze nozzle", "Zero mess", "Gym & travel ready"];
  /* Shared trust badges */
  const badges = [["🧴", "Spoon-free"], ["🏋️", "Gym friendly"], ["✈️", "TSA approved"]];

  return (
    <section className="bg-background">

      {/* MOBILE HERO  (hidden on lg+) */}
      <div className="lg:hidden flex flex-col px-5 pt-8 pb-12 min-h-[calc(100dvh-80px)] transition-all">

        {/* Top row: copy left | product image right */}
        <div className="flex items-start gap-3 mb-6">

          {/* Left: eyebrow + headline */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="eyebrow text-color-muted text-[10px]">
                100 samples — <span className="text-color-brown font-bold">going fast</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.5rem] font-medium tracking-[-0.03em] leading-[1.05] mb-0">
              No spoon.<br />No mess.<br />
              <span className="text-color-brown font-serif font-normal">No kitchen.</span>
            </h1>
          </div>

          {/* Right: small product image — fills white space */}
          <div className="shrink-0 w-[110px] h-[150px] relative mt-2">
            {/* Warm pill glow */}
            <div
              className="absolute inset-[5%] bg-gradient-to-b from-[#F0E0C8] to-[#F8EEE4] opacity-80 animate-blob"
              style={{ borderRadius: "50% 50% 48% 48% / 60% 60% 40% 40%" }}
            />
            <div className="animate-float relative z-10 w-full h-full">
              <Image
                src="/images/flow_creamy.png"
                alt="Squeeze nozzle product"
                fill
                className="object-contain drop-shadow-lg"
                priority
                sizes="110px"
              />
            </div>
          </div>
        </div>

        {/* Value prop pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#F0EAE0] text-color-muted border border-[#E4DAC8]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA form */}
        {submitted ? (
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 px-5 py-4 rounded-2xl mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
            <p className="text-sm font-medium text-green-800">You're in! We'll reach out soon. 🎉</p>
          </div>
        ) : (
          <form
            onSubmit={handleQuickSignup}
            className="flex flex-col gap-3 mb-3"
            noValidate={false}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-premium w-full"
              inputMode="email"
              autoComplete="email"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-medium text-base text-white disabled:opacity-60"
              style={{ background: "#B8652A" }}
            >
              {loading ? "Claiming..." : <><ArrowRight size={16} /> Get Free Sample</>}
            </button>
            {error && <p className="text-sm text-red-500 font-medium px-2">Something went wrong. Please try again.</p>}
          </form>
        )}

        <p className="text-xs text-color-muted mb-6">No credit card. 100 samples only.</p>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-4 pt-5 border-t border-[#E4DAC8] mb-8">
          {badges.map(([icon, label]) => (
            <div key={label} className="flex items-center gap-1.5">
              <span className="text-sm">{icon}</span>
              <span className="text-xs font-medium text-color-muted">{label}</span>
            </div>
          ))}
        </div>

        {/* Scroll Down Animation to fill whitespace */}
        <div className="mt-auto flex flex-col items-center justify-center opacity-60 pb-4">
          <span className="text-[10px] uppercase tracking-widest font-semibold text-color-brown mb-2">Scroll to discover</span>
          <div className="w-5 h-8 border-2 border-color-brown rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-color-brown rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          DESKTOP HERO  (hidden below lg)
      ══════════════════════════════════════════════ */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-8 items-center min-h-screen">

            {/* Copy column */}
            <div className="col-span-5 order-1 py-24">
              <div className="flex items-center gap-2 mb-5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="eyebrow text-color-muted">
                  First 100 samples — <span className="text-color-brown font-bold">going fast</span>
                </span>
              </div>

              <h1 className="text-[4.8rem] font-medium tracking-[-0.03em] leading-[1.05] mb-5">
                No spoon.<br />No mess.<br />
                <span className="text-color-brown font-serif font-normal">No kitchen.</span>
              </h1>

              <p className="text-lg text-color-muted leading-relaxed max-w-sm mb-7">
                Peanut butter redesigned for modern life. Squeeze-nozzle pouch — gym bag, desk drawer, flight tray.
              </p>

              {submitted ? (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 px-5 py-4 rounded-full max-w-sm mb-5">
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <p className="text-sm font-medium text-green-800">You're in! We'll reach out soon. 🎉</p>
                </div>
              ) : (
                <form onSubmit={handleQuickSignup} className="flex flex-col gap-3 max-w-sm mb-5">
                  <input
                    type="email" required placeholder="your@email.com"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className="input-premium"
                    inputMode="email" autoComplete="email"
                  />
                  <button
                    type="submit" disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-medium text-base text-white disabled:opacity-60"
                    style={{ background: "#B8652A" }}
                  >
                    {loading ? "Claiming..." : <><ArrowRight size={16} /> Get Free Sample</>}
                  </button>
                  {error && <p className="text-sm text-red-500 font-medium px-2">Something went wrong. Please try again.</p>}
                </form>
              )}

              <p className="text-xs text-color-muted mb-6">No credit card. 100 samples only.</p>
              <Link href="#products" className="text-sm font-medium underline-offset-4 hover:underline">
                Browse the collection →
              </Link>

              <div className="mt-8 pt-6 border-t border-[#E4DAC8] flex flex-wrap gap-5">
                {badges.map(([icon, label]) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="text-sm">{icon}</span>
                    <span className="text-xs font-medium text-color-muted">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-7 order-2 flex items-center justify-center min-h-[500px] h-full relative z-10">
              <div className="relative w-[75%] max-w-[460px] aspect-[3/4]">
                <div
                  className="absolute inset-0 scale-110 bg-gradient-to-b from-[#F0E0C8] to-[#F8EEE4] opacity-70 animate-blob"
                  style={{ borderRadius: "50% 50% 48% 48% / 60% 60% 40% 40%" }}
                />
                <div className="animate-float absolute inset-0 z-10">
                  <Image
                    src="/images/flow_creamy.png"
                    alt="My Own Peanut Butter Squeeze Nozzle"
                    fill
                    className="object-contain"
                    priority
                    sizes="45vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
