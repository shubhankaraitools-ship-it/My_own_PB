"use client";

import Image from "next/image";

const moments = [
  { time: "6:30 AM", place: "The Gym", copy: "Squeeze onto a banana. Pre-workout done.", icon: "🏋️" },
  { time: "12:00 PM", place: "Your Desk", copy: "Desk drawer energy. Back in 30 seconds.", icon: "💼" },
  { time: "8:00 PM", place: "The Flight", copy: "TSA approved. Better than anything on board.", icon: "✈️" },
];

export default function TravelPackSection() {
  return (
    <section className="py-16 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-10">
          <p className="eyebrow text-color-brown mb-3">The travel pack</p>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
            Goes wherever<br />
            <span className="font-serif font-normal text-color-gold">you go.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Product images */}
          <div className="relative w-full max-w-[320px] mx-auto lg:max-w-none aspect-square rounded-3xl overflow-hidden bg-[#2A1F15] order-first lg:order-last">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[85%] h-[85%]">
                <Image
                  src="/images/travel_combo.png"
                  alt="Travel Pack Combo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>
            </div>
          </div>

          {/* Moment cards */}
          <div className="flex flex-col gap-4">
            {moments.map((m) => (
              <div key={m.place} className="flex gap-4 p-5 rounded-2xl bg-white/8 border border-white/10">
                <span className="text-2xl shrink-0">{m.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">{m.time}</span>
                    <span className="text-[10px] text-color-gold font-semibold uppercase tracking-wider">{m.place}</span>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">{m.copy}</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-white/30 pl-1 mt-2">Gym bags &gt; kitchen jars. Trust us.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
