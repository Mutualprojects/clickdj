"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Palette, Layers, Sparkles } from "lucide-react";
import impactImg from "./problem-solving-concept-with-items-cloud.png";

export default function AboutImpact() {
  return (
    <section className="relative w-full py-20 px-6 lg:px-8 bg-white dark:bg-neutral-950 overflow-hidden border-t border-neutral-100 dark:border-neutral-900">
      
      {/* Decorative Blur Orb */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#1cb2cb]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Column (65% width): Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 flex justify-center items-center w-full"
        >
          <div className="relative w-full aspect-[16/10] max-w-4xl select-none group">
            <Image
              src={impactImg}
              alt="Our Problem Solving Impact"
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-[1.02] [filter:drop-shadow(0_20px_50px_rgba(80,46,194,0.12))]"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
          </div>
        </motion.div>

        {/* Right Column (35% width): Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-4 flex flex-col justify-center text-left space-y-8"
        >
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.25em] text-[#502ec2] dark:text-[#1cb2cb] uppercase">
              Proven Results
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-white leading-tight uppercase">
              Our Impact
            </h2>
            <div className="h-1 w-16 bg-[#1cb2cb] rounded-full" />
          </div>

          {/* Description */}
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed font-medium">
            At ClickDiji, our results speak for themselves. We deliver measurable digital growth by combining strategic branding, intuitive UX/UI workflows, and advanced technology integrations.
          </p>

          {/* Metric list blocks */}
          <div className="space-y-6 pt-4 border-t border-neutral-100 dark:border-neutral-900">
            {/* Metric 1 */}
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-[#502ec2]">
                86%
              </span>
              <div>
                <h4 className="text-xs font-black tracking-wider uppercase text-neutral-900 dark:text-white">
                  Creative Impact
                </h4>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">
                  Industry Benchmark Standard in branding
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-[#1cb2cb]">
                95%
              </span>
              <div>
                <h4 className="text-xs font-black tracking-wider uppercase text-neutral-900 dark:text-white">
                  UX/UI Optimization
                </h4>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">
                  Enhanced engagement & satisfaction rate
                </p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
                10+
              </span>
              <div>
                <h4 className="text-xs font-black tracking-wider uppercase text-neutral-900 dark:text-white">
                  Sectors Scaled
                </h4>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">
                  Across tech, retail, and enterprises
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
