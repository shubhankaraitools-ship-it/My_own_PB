"use client";

import { Leaf, Dumbbell, Package, Zap } from "lucide-react";

const stats = [
  { value: "100%", label: "Natural" },
  { value: "0", label: "Palm oil" },
  { value: "9mo", label: "Shelf life" },
  { value: "30g", label: "Travel serve" },
];

const pillars = [
  {
    icon: <Leaf size={20} strokeWidth={1.5} />,
    eyebrow: "Clean Label",
    title: "Just peanuts. Full stop.",
    body: "No palm oil, no artificial gunk. Just premium roasted peanuts and salt. Read the back — then try to find a jar that matches.",
  },
  {
    icon: <Dumbbell size={20} strokeWidth={1.5} />,
    eyebrow: "Gym Culture",
    title: "Pre, post, and during workout.",
    body: "Toss a pouch in your bag. Squeeze it on a banana. 8g of plant protein per serve, zero mess, zero prep.",
  },
  {
    icon: <Package size={20} strokeWidth={1.5} />,
    eyebrow: "Travel Ready",
    title: "Fits in your AirPods pocket.",
    body: "TSA approved. 30g single-serve. Works at 35,000 feet, in a cab, at your desk, on a hike.",
  },
  {
    icon: <Zap size={20} strokeWidth={1.5} />,
    eyebrow: "Nozzle Difference",
    title: "The spoon was a design flaw.",
    body: "Direct-to-mouth. Direct-to-toast. The nozzle controls the pour so you never waste a drop.",
  },
];

export default function ProductFeaturesSection() {
  return (
    <section id="features" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-10">
          <p className="eyebrow mb-3">The product</p>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
            Nothing to hide.<br />
            <span className="text-color-muted font-light">Everything to love.</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#F0EAE0] rounded-2xl px-4 py-5 text-center">
              <p className="text-2xl sm:text-3xl font-semibold text-color-brown mb-1">{s.value}</p>
              <p className="text-xs text-color-muted uppercase tracking-wider font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          {pillars.map((p) => (
            <div key={p.eyebrow} className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F0EAE0] flex items-center justify-center text-color-brown shrink-0 mt-1">
                {p.icon}
              </div>
              <div>
                <p className="eyebrow mb-1">{p.eyebrow}</p>
                <h3 className="text-base sm:text-lg font-medium mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-color-muted leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
