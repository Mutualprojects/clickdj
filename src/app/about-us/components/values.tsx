"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Award, Users, TrendingUp } from "lucide-react";

const valuesData = [
  {
    id: 1,
    title: "Integrity",
    description: "We build trust through transparency, security, and absolute alignment with your strategic goals.",
    icon: ShieldCheck,
    // Accent styles for variety in card UI
    cardClass: "hover:border-[#502ec2]/40 hover:shadow-[#502ec2]/5",
    iconColorClass: "text-[#502ec2] group-hover:text-[#1cb2cb]",
    hoverAnimation: { y: -8 },
  },
  {
    id: 2,
    title: "Innovation",
    description: "We push digital boundaries, integrating cutting-edge technology and surreal creative concepts.",
    icon: Zap,
    cardClass: "hover:border-[#1cb2cb]/40 hover:shadow-[#1cb2cb]/5",
    iconColorClass: "text-[#1cb2cb] group-hover:text-[#502ec2]",
    hoverAnimation: { scale: 1.05 },
  },
  {
    id: 3,
    title: "Excellence",
    description: "We strive for flawless execution, speed, and premium quality in every architectural block.",
    icon: Award,
    cardClass: "hover:border-amber-500/40 hover:shadow-amber-500/5",
    iconColorClass: "text-[#502ec2] group-hover:text-amber-500",
    hoverAnimation: { y: -5, scale: 1.02 },
  },
  {
    id: 4,
    title: "Collaboration",
    description: "We work as a seamless extension of your organization to ensure synchronized digital success.",
    icon: Users,
    cardClass: "hover:border-emerald-500/40 hover:shadow-emerald-500/5",
    iconColorClass: "text-[#1cb2cb] group-hover:text-emerald-500",
    hoverAnimation: { rotate: 1 },
  },
  {
    id: 5,
    title: "Our Impact",
    description: "We optimize workflows, traffic, and conversions to drive sustained, measurable brand scale.",
    icon: TrendingUp,
    cardClass: "hover:border-[#502ec2]/40 hover:shadow-[#502ec2]/5",
    iconColorClass: "text-[#502ec2] group-hover:text-[#1cb2cb]",
    hoverAnimation: { y: -8, rotate: -1 },
  },
];

export default function AboutValues() {
  return (
    <section className="relative min-h-[60vh] w-full flex flex-col justify-center py-16 px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/40 overflow-hidden border-t border-neutral-100 dark:border-neutral-900">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#502ec2]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-[#1cb2cb]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl w-full mx-auto space-y-12 z-10">
        
        {/* Title Block */}
        <div className="text-center space-y-3">
          <span className="text-xs font-black tracking-[0.25em] text-[#502ec2] dark:text-[#1cb2cb] uppercase">
            What Drives Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-white leading-tight uppercase">
            Our Values
          </h2>
          <div className="h-1 w-16 bg-[#1cb2cb] rounded-full mx-auto" />
        </div>

        {/* Variety Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {valuesData.map((val) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.id}
                whileHover={val.hoverAnimation}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group flex flex-col justify-between p-6 bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl ${val.cardClass}`}
              >
                <div className="space-y-4">
                  {/* Icon with Hover Brand Color Change */}
                  <div className="inline-flex p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-100/50 dark:border-neutral-800/50">
                    <Icon className={`h-6 w-6 transition-colors duration-300 ${val.iconColorClass}`} />
                  </div>

                  {/* Title & Add-on description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-[#502ec2] dark:group-hover:text-[#1cb2cb] transition-colors duration-200">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                      {val.description}
                    </p>
                  </div>
                </div>

                {/* Card accent element to provide UI variety */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-widest text-neutral-300 dark:text-neutral-700 uppercase">
                    0{val.id}
                  </span>
                  <div className="h-1 w-6 bg-neutral-100 dark:bg-neutral-800 rounded-full group-hover:w-12 group-hover:bg-[#1cb2cb] transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
