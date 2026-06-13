"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import archImg from "./magnific_a-surreal-digital-illustr_cDynUbx0eP.png";

export default function AboutArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll animations:
  // - Content (Right side) moves upwards on scroll
  const yContent = useTransform(scrollYProgress, [0, 1], [60, -60]);
  
  // - Image (Left side) moves from top-left (up) towards the right on scroll
  const yImage = useTransform(scrollYProgress, [0, 1], [-80, 40]);
  const xImage = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[60vh] w-full flex items-center justify-center py-16 px-6 lg:px-8 bg-white dark:bg-neutral-950 overflow-hidden"
    >
      {/* Subtle background graphic details */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Image with scroll translation (moves from up to right) */}
        <div className="lg:col-span-6 flex justify-center items-center w-full overflow-visible">
          <motion.div
            style={{ y: yImage, x: xImage }}
            className="relative w-full aspect-[4/3] max-w-md lg:max-w-lg select-none"
          >
            <Image
              src={archImg}
              alt="Brand Architecture Surreal Illustration"
              fill
              className="object-contain [filter:drop-shadow(0_20px_40px_rgba(80,46,194,0.15))]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Right Column: Content with scroll translation (moves up) */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
          <motion.div style={{ y: yContent }} className="space-y-6">
            <span className="text-xs font-black tracking-[0.25em] text-[#502ec2] dark:text-[#1cb2cb] uppercase">
              Our Core Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white leading-tight">
              At ClickDiji, we believe a brand’s digital presence is only as strong as its{" "}
              <span className="bg-gradient-to-r from-[#502ec2] to-[#1cb2cb] bg-clip-text text-transparent">
                underlying architecture.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
              We are a premium, full-service technology and digital marketing agency built to scale ambitious enterprises in today’s fast-evolving marketplace.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
