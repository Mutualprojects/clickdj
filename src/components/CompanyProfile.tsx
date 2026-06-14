"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, Compass, Zap } from "lucide-react";

export default function CompanyProfile() {
  return (
    <section
      id="company-profile"
      className="relative w-full py-10 lg:py-14 bg-gradient-to-r from-[#2c1d76] to-[#2177ab] overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-[#f6f8fb] rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:py-8 lg:px-10 shadow-2xl flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-6 border-4 border-white/40"
        >
          {/* Left Section: Logo & Text */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 lg:gap-8 xl:w-5/12 shrink-0">
            <Image
              src="/Untitled design (1).png"
              alt="ClickDiji Logo"
              width={200}
              height={70}
              className="h-12 md:h-14 lg:h-16 w-auto object-contain shrink-0"
              priority
            />
          </div>

          {/* Right Section: Values — single line on every screen */}
          <div className="xl:w-7/12 w-full flex flex-row items-center justify-center xl:justify-end gap-4 sm:gap-6 lg:gap-10">

            {/* IDEAS */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#e3f4f8] flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-300">
                <Lightbulb className="w-6 h-6 lg:w-7 lg:h-7 text-[#01b3ca]" />
              </div>
              <div className="hidden sm:flex flex-col justify-center">
                <h3 className="text-[#01b3ca] font-black text-sm lg:text-base tracking-[0.15em] uppercase leading-tight">
                  Ideas
                </h3>
                <p className="text-neutral-400 font-bold text-[0.6rem] lg:text-[0.65rem] tracking-[0.15em] uppercase mt-0.5">
                  Innovation
                </p>
              </div>
            </div>

            {/* STRATEGY */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#eae7f7] flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-300">
                <Compass className="w-6 h-6 lg:w-7 lg:h-7 text-[#4631b1]" />
              </div>
              <div className="hidden sm:flex flex-col justify-center">
                <h3 className="text-[#4631b1] font-black text-sm lg:text-base tracking-[0.15em] uppercase leading-tight">
                  Strategy
                </h3>
                <p className="text-neutral-400 font-bold text-[0.6rem] lg:text-[0.65rem] tracking-[0.15em] uppercase mt-0.5">
                  Planning
                </p>
              </div>
            </div>

            {/* IMPACT */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#e1f5f8] flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-300">
                <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-[#02bad1]" fill="#02bad1" />
              </div>
              <div className="hidden sm:flex flex-col justify-center">
                <h3 className="text-[#02bad1] font-black text-sm lg:text-base tracking-[0.15em] uppercase leading-tight">
                  Impact
                </h3>
                <p className="text-neutral-400 font-bold text-[0.6rem] lg:text-[0.65rem] tracking-[0.15em] uppercase mt-0.5">
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