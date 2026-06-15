"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What does a digital marketing agency in Hyderabad do?",
      answer: "A digital marketing agency like ClickDiji helps your business get found and grow online. We handle SEO, web development, Google Ads, social media marketing, content, and email — combining them into one strategy that brings you traffic, leads, and sales."
    },
    {
      question: "How much does digital marketing cost in Hyderabad?",
      answer: "Pricing depends on your goals, the services you need, and how competitive your industry is. ClickDiji builds custom packages for every budget, from startups to established brands. Book a free strategy call and we’ll give you a clear, transparent quote with no obligation."
    },
    {
      question: "How long does SEO take to show results?",
      answer: "SEO is a long-term investment. Most businesses begin to see meaningful movement in rankings and organic traffic within 3 to 6 months, with results compounding over time. ClickDiji focuses on sustainable, white-hat SEO that keeps working long after the work is done."
    },
    {
      question: "Do you work with startups and small businesses?",
      answer: "Yes. ClickDiji works with startups, small businesses, and growing enterprises across Hyderabad and India. We tailor every plan to your stage and budget, so you only invest in the services that move your business forward."
    },
    {
      question: "Which areas in Hyderabad do you serve?",
      answer: "We serve businesses across all of Hyderabad — including HITEC City, Madhapur, Gachibowli, Banjara Hills, and Jubilee Hills — as well as clients across India and internationally."
    },
    {
      question: "Why should I choose ClickDiji over other agencies?",
      answer: "ClickDiji combines technical engineering with creative marketing under one roof. You get clean, fast websites, data-driven campaigns, transparent reporting, and a team that measures success by your leads and ROI — not vanity metrics."
    }
  ];

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-24 bg-zinc-50 dark:bg-neutral-950 overflow-hidden border-t border-neutral-100 dark:border-neutral-900"
    >
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1cb2cb]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#502ec2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 text-xs font-bold text-[#1cb2cb] mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#1cb2cb]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Clear Answers to Your Questions
          </h2>
          <div className="w-12 h-1 bg-[#502ec2] rounded-full mx-auto mt-4" />
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-xl mx-auto pt-2">
            Everything you need to know about our digital marketing and web engineering services in Hyderabad.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white dark:bg-neutral-900 border-[#1cb2cb] shadow-lg dark:shadow-[#1cb2cb]/5"
                    : "bg-white dark:bg-neutral-900/40 border-neutral-200/60 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                }`}
              >
                {/* Visual indicator bar on the left when open */}
                {isOpen && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#502ec2] to-[#1cb2cb]" />
                )}

                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white pr-4 group-hover:text-[#1cb2cb] transition-colors duration-200">
                    {item.question}
                  </span>
                  <span className={`flex-shrink-0 p-1.5 rounded-lg transition-all duration-300 ${
                    isOpen 
                      ? "bg-[#1cb2cb]/10 text-[#1cb2cb]" 
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 group-hover:bg-[#1cb2cb]/10 group-hover:text-[#1cb2cb]"
                  }`}>
                    <ChevronDown
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800/60 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
