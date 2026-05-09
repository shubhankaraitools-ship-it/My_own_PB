"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul S.", role: "CrossFit coach · Bangalore",
    quote: "First time eating peanut butter without getting it on my hands. Game changer.",
    rating: 5,
  },
  {
    name: "Priya M.", role: "Product designer · Mumbai",
    quote: "Dark chocolate variant is dangerously good. Zero cleanup. Sold.",
    rating: 5,
  },
  {
    name: "Arjun K.", role: "Frequent flyer · Delhi",
    quote: "Always in my carry-on. TSA never bats an eye. Better than anything on the plane.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-background border-t border-[#E4DAC8]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-10">
          <p className="eyebrow mb-3">What people say</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight max-w-xl">Converts in one squeeze.</h2>
            <div className="flex gap-1 shrink-0 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} className="text-color-gold" />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-12">
          {reviews.map((r, idx) => (
            <div key={r.name} className={`flex flex-col ${idx !== reviews.length - 1 ? 'pb-8 border-b border-[#E4DAC8] md:pb-0 md:border-b-0' : ''}`}>
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={12} fill="currentColor" strokeWidth={0} className="text-color-gold" />
                ))}
              </div>
              <p className="text-base font-light leading-relaxed mb-6 flex-1 text-foreground/90">"{r.quote}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-[#E4DAC8]">
                <div className="w-10 h-10 rounded-full bg-[#F0EAE0] flex items-center justify-center text-sm font-semibold text-color-brown shrink-0">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">{r.name}</p>
                  <p className="text-[11px] text-color-muted mt-0.5 uppercase tracking-wider">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
