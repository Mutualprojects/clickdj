"use client";

import Image from "next/image";
import { Lightbulb, Compass, Zap } from "lucide-react";

export default function Badge() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 z-20 relative">
      <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200/50 dark:border-zinc-800/50 shadow-2xl rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:shadow-cyan-500/5">
        
        {/* Left Section: Brand Logo & Short Motto */}
        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <Image
            src="/Untitled design (1).png"
            alt="Click Diji Logo"
            width={140}
            height={35}
            className="h-10 w-auto object-contain dark:brightness-110"
            priority
          />
          <div className="hidden sm:block h-6 w-[2px] bg-neutral-200 dark:bg-zinc-800" />
          <p className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-zinc-500 text-center sm:text-left">
            Empowering scalable digital reach.
          </p>
        </div>

        {/* Right Section: Brand Pillars */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12 pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-neutral-200 dark:border-zinc-800 pt-6 md:pt-0 w-full md:w-auto">
          
          {/* Ideas Pillar */}
          <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
            <div className="p-2.5 rounded-2xl bg-[#1cb2cb]/10 text-[#1cb2cb]">
              <Lightbulb className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#1cb2cb]">Ideas</span>
              <span className="text-[10px] font-bold text-neutral-400 dark:text-zinc-500 uppercase tracking-widest">Innovation</span>
            </div>
          </div>

          {/* Strategy Pillar */}
          <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
            <div className="p-2.5 rounded-2xl bg-[#502ec2]/10 text-[#502ec2]">
              <Compass className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#502ec2]">Strategy</span>
              <span className="text-[10px] font-bold text-neutral-400 dark:text-zinc-500 uppercase tracking-widest">Planning</span>
            </div>
          </div>

          {/* Impact Pillar */}
          <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
            <div className="p-2.5 rounded-2xl bg-[#1cb2cb]/10 text-[#1cb2cb]">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#1cb2cb]">Impact</span>
              <span className="text-[10px] font-bold text-neutral-400 dark:text-zinc-500 uppercase tracking-widest">Growth</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}