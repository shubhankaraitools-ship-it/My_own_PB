"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    <section id="innovation" className="py-16 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-3">The nozzle difference</p>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
            The jar was always<br />
            <span className="text-color-muted font-light">the real problem.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Product image */}
          <motion.div
            className="relative w-full max-w-[320px] mx-auto lg:max-w-none aspect-[3/4] rounded-3xl overflow-hidden bg-[#F7F2EA]"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-x-[15%] inset-y-[10%] bg-gradient-to-b from-[#F0E0C8] to-[#FAF0E4] rounded-full opacity-60 animate-blob" />
            <div className="animate-float absolute inset-0">
              <Image
                src="/images/flow_creamy.png"
                alt="Nozzle Squeeze Tube"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-foreground text-background px-4 py-2.5 rounded-xl shadow-lg">
              <p className="text-[9px] uppercase tracking-widest text-white/50 mb-0.5">Patent pending</p>
              <p className="text-xs font-semibold">Precision nozzle tip</p>
            </div>
          </motion.div>

          {/* Copy */}
          <div className="flex flex-col gap-8">
            {points.map((item, i) => (
              <motion.div
                key={item.number}
                className="flex gap-5"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-[10px] font-mono text-color-brown font-bold tracking-widest pt-1 shrink-0">
                  {item.number}
                </span>
                <div className="border-t border-[#E4DAC8] pt-4 flex-1">
                  <h3 className="text-base sm:text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-color-muted leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
