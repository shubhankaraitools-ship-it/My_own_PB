"use client";

import Image from "next/image";

export default function ProblemSolutionSection() {
  const points = [
    {
      number: "01",
      title: "No more sticky spoons.",
      body: "Direct squeeze from pouch to destination. Zero utensils, zero excuses.",
    },
    {
      number: "02",
      title: "No oil separation theatrics.",
      body: "Knead the pouch once. Done. No stirring for 45 seconds.",
    },
    {
      number: "03",
      title: "No kitchen required.",
      body: "You shouldn't need a sink to eat peanut butter in 2025. We fixed that.",
    },
  ];

  return (
    <section id="innovation" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-10">
          <p className="eyebrow mb-3">The nozzle difference</p>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
            The jar was always<br />
            <span className="text-color-muted font-light">the real problem.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Product image */}
          <div className="relative w-full max-w-[320px] mx-auto lg:max-w-none aspect-[3/4] rounded-3xl overflow-hidden bg-[#F7F2EA]">
            <div className="absolute inset-x-[15%] inset-y-[10%] bg-gradient-to-b from-[#F0E0C8] to-[#FAF0E4] rounded-full opacity-60" />
            <Image
              src="/images/hero_product_nozzle_squeeze.png"
              alt="Nozzle Squeeze Tube"
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 80vw, 40vw"
            />
            <div className="absolute bottom-4 right-4 bg-foreground text-background px-4 py-2.5 rounded-xl shadow-lg">
              <p className="text-[9px] uppercase tracking-widest text-white/50 mb-0.5">Patent pending</p>
              <p className="text-xs font-semibold">Precision nozzle tip</p>
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-8">
            {points.map((item) => (
              <div key={item.number} className="flex gap-5">
                <span className="text-[10px] font-mono text-color-brown font-bold tracking-widest pt-1 shrink-0">
                  {item.number}
                </span>
                <div className="border-t border-[#E4DAC8] pt-4 flex-1">
                  <h3 className="text-base sm:text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-color-muted leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
