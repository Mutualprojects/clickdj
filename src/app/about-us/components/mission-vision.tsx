"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMissionVision() {
  return (
    <section className="relative min-h-[60vh] w-full flex items-center justify-center py-16 px-6 lg:px-8 bg-white dark:bg-neutral-950 overflow-hidden border-t border-neutral-100 dark:border-neutral-900">
      
      {/* Subtle decorative grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.03] z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="none" />
          <path d="M0 30h1000M0 70h1000" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start z-10">
        
        {/* ── Left Column: Our Vision (Image Top, Text Bottom) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-4"
        >
          {/* Transparent Image */}
          <div className="relative w-36 h-28 select-none">
            <Image
              src="/top-view-paper-light-bulb-with-chat-bubble.png"
              alt="Our Vision"
              fill
              className="object-contain"
              sizes="150px"
            />
          </div>

          {/* Vision Content */}
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.25em] text-[#1cb2cb] uppercase">
              Long-term Outlook
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white leading-tight uppercase">
              Our Vision
            </h2>
            <div className="h-1 w-12 bg-[#502ec2] rounded-full mx-auto md:mx-0" />
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium max-w-md">
              To emerge as the definitive global growth partner for enterprises, empowering businesses across diverse industry verticals with highly scalable, creative, and results-driven digital architectures.
            </p>
          </div>
        </motion.div>

        {/* ── Right Column: Our Mission (Image Top, Text Bottom) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-4"
        >
          {/* Transparent Image */}
          <div className="relative w-36 h-28 select-none">
            <Image
              src="/arrow-hitting-bullseye.png"
              alt="Our Mission"
              fill
              className="object-contain"
              sizes="150px"
            />
          </div>

          {/* Mission Content */}
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.25em] text-[#1cb2cb] uppercase">
              Immediate Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white leading-tight uppercase">
              Our Mission
            </h2>
            <div className="h-1 w-12 bg-[#1cb2cb] rounded-full mx-auto md:mx-0" />
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium max-w-md">
              To equip brands with crystal-clear digital roadmaps. We seamlessly integrate pristine code, advanced optimization, and high-impact creative strategies to turn audience intent into sustainable business revenue.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
