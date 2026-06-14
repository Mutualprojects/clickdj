"use client";

import Image from "next/image";
import { Lightbulb, Compass, Zap } from "lucide-react";

export default function Badge() {
  return (
    <div className="w-full max-w-[90rem] mx-auto px-2 sm:px-6 lg:px-8 mt-8 z-20 relative">
      <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200/50 dark:border-zinc-800/50 rounded-2xl sm:rounded-[2rem] h-[10vh] min-h-[64px] max-h-[100px] px-4 sm:px-6 lg:px-10 flex flex-row items-center justify-between gap-2 sm:gap-6 transition-all duration-300 shadow-xl overflow-hidden w-full">
        
        {/* Left Section: Brand Logo & Short Motto */}
        <div className="flex flex-row items-center gap-3 sm:gap-5 shrink-0 h-full">
          <Image
            src="/Untitled design (1).png"
            alt="Click Diji Logo"
            width={160}
            height={40}
            className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain dark:brightness-110"
            priority
          />
        </div>

        {/* Right Section: Brand Pillars */}
        <div className="flex flex-row flex-nowrap items-center justify-end gap-3 sm:gap-6 lg:gap-10 h-full pl-2 md:pl-6 border-l-0 md:border-l border-neutral-200 dark:border-zinc-800 w-full md:w-auto">
          
          {/* Ideas Pillar */}
          <div className="flex items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-105 shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-[#1cb2cb]/10 flex items-center justify-center shrink-0">
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#1cb2cb] fill-current" />
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-[#1cb2cb] leading-none">Ideas</span>
              <span className="text-[8px] lg:text-[9px] font-bold text-neutral-400 dark:text-zinc-500 uppercase tracking-widest mt-1 leading-none">Innovation</span>
            </div>
          </div>

          {/* Strategy Pillar */}
          <div className="flex items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-105 shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-[#502ec2]/10 flex items-center justify-center shrink-0">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#502ec2]" />
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-[#502ec2] leading-none">Strategy</span>
              <span className="text-[8px] lg:text-[9px] font-bold text-neutral-400 dark:text-zinc-500 uppercase tracking-widest mt-1 leading-none">Planning</span>
            </div>
          </div>

          {/* Impact Pillar */}
          <div className="flex items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-105 shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-[#1cb2cb]/10 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#1cb2cb] fill-current" />
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-[#1cb2cb] leading-none">Impact</span>
              <span className="text-[8px] lg:text-[9px] font-bold text-neutral-400 dark:text-zinc-500 uppercase tracking-widest mt-1 leading-none">Growth</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}