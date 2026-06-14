"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, Compass, Zap } from "lucide-react";

export default function CompanyProfile() {
  return (
    <section 
      id="company-profile"
      className="relative w-full py-16 lg:py-24 bg-gradient-to-r from-[#2c1d76] to-[#2177ab] overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-[#f6f8fb] rounded-[2.5rem] p-8 md:p-12 lg:py-16 lg:px-14 shadow-2xl flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8 border-4 border-white/40"
        >
          {/* Left Section: Logo & Text */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 lg:gap-10 xl:w-5/12 shrink-0">
            <Image
              src="/Untitled design (1).png"
              alt="ClickDiji Logo"
              width={240}
              height={80}
              className="h-16 md:h-[4.5rem] lg:h-20 w-auto object-contain shrink-0"
              priority
            />
            
            {/* Divider */}
            <div className="hidden md:block w-[1px] h-20 bg-neutral-300 shrink-0" />
            <div className="md:hidden w-24 h-[1px] bg-neutral-300 shrink-0" />
            
            <h2 className="text-sm md:text-base font-bold text-neutral-400 uppercase tracking-[0.15em] leading-relaxed max-w-[280px]">
              Empowering Scalable Digital Reach.
            </h2>
          </div>

          {/* Right Section: Values Grid */}
          <div className="xl:w-7/12 w-full grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 lg:gap-x-12 relative max-w-3xl mx-auto xl:mx-0 xl:ml-auto">
            
            {/* IDEAS */}
            <div className="flex items-center gap-5 sm:justify-center xl:justify-start">
              <div className="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl bg-[#e3f4f8] flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-300">
                <Lightbulb className="w-7 h-7 text-[#01b3ca]" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[#01b3ca] font-black text-[1.1rem] tracking-[0.15em] uppercase leading-tight">
                  Ideas
                </h3>
                <p className="text-neutral-400 font-bold text-[0.65rem] tracking-[0.15em] uppercase mt-1">
                  Innovation
                </p>
              </div>
            </div>

            {/* STRATEGY */}
            <div className="flex items-center gap-5 sm:justify-center xl:justify-start">
              <div className="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl bg-[#eae7f7] flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-300">
                <Compass className="w-7 h-7 text-[#4631b1]" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[#4631b1] font-black text-[1.1rem] tracking-[0.15em] uppercase leading-tight">
                  Strategy
                </h3>
                <p className="text-neutral-400 font-bold text-[0.65rem] tracking-[0.15em] uppercase mt-1">
                  Planning
                </p>
              </div>
            </div>

            {/* Empty grid cell to push IMPACT to the right on desktop/tablet, matching the staggered layout */}
            <div className="hidden sm:block"></div>

            {/* IMPACT */}
            <div className="flex items-center gap-5 sm:justify-center xl:justify-start">
              <div className="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl bg-[#e1f5f8] flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-300">
                <Zap className="w-7 h-7 text-[#02bad1]" fill="#02bad1" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[#02bad1] font-black text-[1.1rem] tracking-[0.15em] uppercase leading-tight">
                  Impact
                </h3>
                <p className="text-neutral-400 font-bold text-[0.65rem] tracking-[0.15em] uppercase mt-1">
                  Growth
                </p>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
