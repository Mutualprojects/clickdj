"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Zap, Target } from "lucide-react";

interface ClientPromotion {
  id: string;
  clientName: string;
  logoUrl: string;
  campaignType: string;
  promotionStrategy: string;
  gradientBorder: string;
  accentColor: string;
  badgeIcon: React.ReactNode;
}

export default function ClientsProjects() {
  const promotions: ClientPromotion[] = [
    {
      id: "vaarahi",
      clientName: "Vaarahi Cloud Technologies",
      logoUrl: "https://vaarahicloudtechnologies.com/logo3.png",
      campaignType: "B2B Tech Marketing",
      promotionStrategy: "We scale their B2B presence using highly targeted search campaigns, organic technical content, and developer community building.",
      gradientBorder: "from-[#502ec2] to-blue-500",
      accentColor: "#502ec2",
      badgeIcon: <Zap className="w-3.5 h-3.5" />
    },
    {
      id: "jathara",
      clientName: "Jathara Events",
      logoUrl: "https://jatharaevents.in/wp-content/uploads/2025/12/cropped-Logo-JE-300x187.webp",
      campaignType: "Viral Event Campaigns",
      promotionStrategy: "We amplify their event ticketing using immersive social reels, programmatic ads, influencer partnerships, and local event listings.",
      gradientBorder: "from-orange-500 to-red-600",
      accentColor: "#ea580c",
      badgeIcon: <TrendingUp className="w-3.5 h-3.5" />
    },
    {
      id: "ecolight",
      clientName: "Ecolight Solar Solutions",
      logoUrl: "https://ecolightsolarsolutions.com/wp-content/uploads/2025/11/cropped-Power-Up-with-the-Sun-300x96.png",
      campaignType: "High-Intent Lead Gen",
      promotionStrategy: "We generate premium solar leads through geo-targeted Search Engine Marketing, landing page optimization, and local review strategy.",
      gradientBorder: "from-emerald-400 to-cyan-500",
      accentColor: "#1cb2cb",
      badgeIcon: <Target className="w-3.5 h-3.5" />
    }
  ];

  return (
    <section 
      id="clients-projects"
      className="relative w-full py-20 bg-zinc-50 dark:bg-neutral-950 overflow-hidden border-t border-neutral-100 dark:border-neutral-900/60"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (30%): Strategic Content */}
          <div className="lg:col-span-3 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 text-xs font-bold text-[#1cb2cb]">
              <Sparkles className="w-3 h-3 text-[#1cb2cb]" />
              Strategic Growth
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              How We Promote Our Clients
            </h2>
            
            <div className="w-12 h-1 bg-[#502ec2] rounded-full" />
            
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              At <strong className="text-[#502ec2] dark:text-[#1cb2cb]">ClickDiji</strong>, we don't just launch campaigns—we build bespoke digital funnels. Here is how we drive growth for our diverse client ecosystem.
            </p>
          </div>

          {/* Right Column (70%): Compact, Beautiful Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo) => (
              <motion.div
                key={promo.id}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Micro Gradient Top Line */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${promo.gradientBorder}`}
                />

                <div className="space-y-5">
                  {/* Clean Client Logo Frame */}
                  <div className="relative w-full h-14 flex items-center justify-center rounded-xl bg-neutral-50 dark:bg-neutral-800/40 p-2 overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={promo.logoUrl}
                        alt={promo.clientName}
                        fill
                        sizes="160px"
                        className="object-contain transition-transform duration-300 group-hover:scale-103"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Promo Tag */}
                  <div className="flex items-center gap-1.5">
                    <span 
                      className="p-1 rounded-md text-white" 
                      style={{ backgroundColor: promo.accentColor }}
                    >
                      {promo.badgeIcon}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      {promo.campaignType}
                    </span>
                  </div>

                  {/* Punchy Promotion Description */}
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {promo.promotionStrategy}
                  </p>
                </div>

                {/* Card Footer branding */}
                <div className="mt-6 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                  <span className="text-[9px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                    Campaign Live
                  </span>
                  <span className="text-[10px] font-bold text-[#1cb2cb]">
                    ClickDiji Scale
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
