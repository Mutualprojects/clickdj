"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Palette, Code, Target, BarChart2 } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery & Audit",
    description: "Analyzing your target audience, digital brand footprint, and competitors to build a raw foundation.",
    icon: Search,
  },
  {
    id: 2,
    title: "Strategic Blueprinting",
    description: "Crafting a clean road map aligned with click optimization and scaling objectives.",
    icon: Compass,
  },
  {
    id: 3,
    title: "Creative Art Direction",
    description: "Designing high-conversion, stunning UX/UI mockups and visual digital assets.",
    icon: Palette,
  },
  {
    id: 4,
    title: "Precision Engineering",
    description: "Deploying clean, robust, and search-optimized Next.js codebases.",
    icon: Code,
  },
  {
    id: 5,
    title: "Performance Campaigns",
    description: "Setting up data-driven digital marketing pathways to draw high-intent users.",
    icon: Target,
  },
  {
    id: 6,
    title: "Continuous Tuning",
    description: "Measuring traffic metrics and optimizing conversions to maximize your ROI.",
    icon: BarChart2,
  },
];

export default function AboutProcess() {
  return (
    <section className="relative w-full py-20 px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/20 overflow-hidden border-t border-neutral-100 dark:border-neutral-900">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#1cb2cb]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* ── Left Column (30% width ~ 4/12 cols): The Folded 3D Ribbons ── */}
        <div className="lg:col-span-4 flex justify-center items-center overflow-visible min-h-[500px] select-none">
          <div className="relative w-[250px] h-[450px]">
            
            {/* Back Skewed Folds (creates the 3D folded illusion underneath) */}
            <div className="absolute inset-0 z-0">
              {/* Back Left Fold */}
              <div 
                className="absolute w-[25px] h-[65px] bg-[#3d20a2]"
                style={{
                  top: "220px",
                  left: "75px",
                  transform: "skewY(45deg)",
                  boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)"
                }}
              />
              {/* Back Right Fold */}
              <div 
                className="absolute w-[25px] h-[65px] bg-[#3d20a2]"
                style={{
                  top: "110px",
                  left: "150px",
                  transform: "skewY(45deg)",
                  boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)"
                }}
              />
            </div>

            {/* Fore Ribbons */}
            <div className="absolute inset-0 z-10">
              {/* Ribbon 1: Left (P-R-O-C-E-S-S) */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute w-[50px] h-[210px] bg-[#502ec2] flex flex-col items-center justify-between pt-4 pb-2"
                style={{
                  top: "225px",
                  left: "0px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)"
                }}
              >
                <div className="flex flex-col text-white text-base font-black tracking-widest text-center leading-[20px] uppercase">
                  <span>P</span>
                  <span>R</span>
                  <span>O</span>
                  <span>C</span>
                  <span>E</span>
                  <span>S</span>
                  <span>S</span>
                </div>
                {/* Arrow bottom */}
                <div 
                  className="w-0 h-0 border-t-[15px] border-t-[#502ec2] border-x-[25px] border-x-transparent translate-y-[23px]"
                />
              </motion.div>

              {/* Ribbon 2: Mid (C-L-I-C-K) */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute w-[50px] h-[200px] bg-[#1cb2cb] flex flex-col items-center justify-center pt-2"
                style={{
                  top: "116px",
                  left: "75px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)"
                }}
              >
                <div className="flex flex-col text-white text-base font-black tracking-widest text-center leading-[22px] uppercase">
                  <span>C</span>
                  <span>L</span>
                  <span>I</span>
                  <span>C</span>
                  <span>K</span>
                </div>
              </motion.div>

              {/* Ribbon 3: Right (D-I-J-I) */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute w-[50px] h-[210px] bg-[#502ec2] flex flex-col items-center justify-between pt-2 pb-4"
                style={{
                  top: "6px",
                  left: "150px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)"
                }}
              >
                {/* Arrow top */}
                <div 
                  className="w-0 h-0 border-b-[15px] border-b-[#502ec2] border-x-[25px] border-x-transparent -translate-y-[23px]"
                />
                <div className="flex flex-col text-white text-base font-black tracking-widest text-center leading-[22px] uppercase">
                  <span>D</span>
                  <span>I</span>
                  <span>J</span>
                  <span>I</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* ── Right Column (70% width ~ 8/12 cols): The 6-Step Process content ── */}
        <div className="lg:col-span-8 flex flex-col justify-center text-left space-y-10">
          
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.25em] text-[#502ec2] dark:text-[#1cb2cb] uppercase">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-white leading-tight uppercase">
              Our Process
            </h2>
            <div className="h-1 w-16 bg-[#1cb2cb] rounded-full" />
          </div>

          {/* Process steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="flex gap-4 items-start group"
                >
                  {/* Icon wrapper */}
                  <div className="flex-shrink-0 p-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 group-hover:border-[#1cb2cb]/40 transition-all duration-300 text-[#502ec2] dark:text-[#b49bf0] group-hover:text-[#1cb2cb] shadow-sm">
                    <Icon className="h-5 w-5 transition-colors duration-300" />
                  </div>

                  {/* Text details */}
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-[#502ec2] dark:group-hover:text-[#1cb2cb] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
