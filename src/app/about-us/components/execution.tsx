"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import executionImg from "./magnific_an-artistic-surrealism-pa_UyQlFiLwny.png";

export default function AboutExecution() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Reversed Scroll Parallax animations:
  // - Content (Left side) moves vertically (reversed direction) on scroll
  const yContent = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  
  // - Image (Right side) moves from top-right towards the left on scroll (reversed horizontal translate)
  const yImage = useTransform(scrollYProgress, [0, 1], [-80, 40]);
  const xImage = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[60vh] w-full flex items-center justify-center py-16 px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/50 overflow-hidden border-t border-neutral-100 dark:border-neutral-900"
    >
      {/* Decorative details */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04] z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Content with reversed scroll translation */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <motion.div style={{ y: yContent }} className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-black tracking-[0.25em] text-[#502ec2] dark:text-[#1cb2cb] uppercase">
                Our Methodology
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-white leading-tight">
                How We Bring <br className="hidden sm:block"/>
                This to Life
              </h2>
              <div className="h-1 w-16 bg-[#1cb2cb] rounded-full mx-auto lg:mx-0" />
            </div>

            {/* List items */}
            <div className="space-y-6 max-w-xl mx-auto lg:mx-0 text-left">
              {/* Point 1 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1 h-6 w-6 rounded-full bg-[#1cb2cb]/10 border border-[#1cb2cb]/30 flex items-center justify-center text-[#1cb2cb] text-xs font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Data-Driven Ingenuity
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                    We back every creative campaign with rigorous analytical frameworks to ensure your marketing spend yields measurable ROI.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1 h-6 w-6 rounded-full bg-[#502ec2]/10 border border-[#502ec2]/30 flex items-center justify-center text-[#502ec2] dark:text-[#b49bf0] text-xs font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Unified Digital Ecosystems
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                    We don't just drive traffic; we build the high-performance websites and automated systems that convert that traffic into loyal clients.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Image with reversed parallax (moves from top-right to bottom-left) */}
        <div className="lg:col-span-6 flex justify-center items-center w-full overflow-visible order-1 lg:order-2">
          <motion.div
            style={{ y: yImage, x: xImage }}
            className="relative w-full aspect-[4/3] max-w-md lg:max-w-lg select-none"
          >
            <Image
              src={executionImg}
              alt="How ClickDiji Works Surreal Illustration"
              fill
              className="object-contain [filter:drop-shadow(0_20px_40px_rgba(28,178,203,0.15))]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
