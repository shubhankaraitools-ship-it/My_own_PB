"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How does the nozzle work?",
      answer: "Our custom-designed nozzle allows you to squeeze the exact amount of peanut butter you need directly onto your bread, apple, or into your smoothie—no spoon required, and 100% mess-free."
    },
    {
      question: "Do I need to refrigerate it?",
      answer: "No refrigeration is required! Our packaging is designed to keep the peanut butter fresh at room temperature. Just store it in a cool, dry place."
    },
    {
      question: "Are the travel packs TSA friendly?",
      answer: "Yes, our single-serve travel packs are well under the TSA liquid limit, making them the perfect travel companion for your flights."
    },
    {
      question: "What are the ingredients?",
      answer: "We keep it simple: premium roasted peanuts, a pinch of salt, and depending on the variant, natural additions like dark chocolate. No palm oil, no preservatives."
    },
    {
      question: "How long is the shelf life?",
      answer: "Our peanut butter stays fresh for up to 9 months from the date of manufacturing when stored properly."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-5">
        <div className="mb-10">
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight">Curious?</h2>
          <p className="text-lg text-foreground/60 font-light">
            Everything you need to know about our peanut butter.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-foreground/10 last:border-0"
            >
              <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-lg lg:text-xl group-hover:text-color-brown transition-colors">
                  {faq.question}
                </span>
                <div className="text-foreground/40 group-hover:text-color-brown transition-colors">
                  {openIndex === i ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pt-2 text-foreground/70 font-light text-lg leading-relaxed pr-12">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
