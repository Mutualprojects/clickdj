"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "@/app/data/services";
import heroBg from "./71846.jpg";
import studioBg from "./33423.jpg";
import uxuiBg from "./internet-concept.jpg";
import strategyBg from "./problem-solving-concept-with-book.png";
import { 
  Code2, 
  Search, 
  TrendingUp, 
  Share2, 
  Users, 
  FileText, 
  Mail, 
  Camera, 
  Layers,
  ArrowRight,
  Palette,
  Sparkles
} from "lucide-react";

// Icon mapping based on service ID
const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "svc-001": Code2,
  "svc-002": Search,
  "svc-003": TrendingUp,
  "svc-004": Share2,
  "svc-005": Users,
  "svc-006": FileText,
  "svc-007": Mail,
  "svc-008": Camera,
};

// Custom category mapping for badges
const serviceCategories: Record<string, string> = {
  "svc-001": "Development",
  "svc-002": "Search Marketing",
  "svc-003": "Search Marketing",
  "svc-004": "Social & Influence",
  "svc-005": "Social & Influence",
  "svc-006": "Content & Media",
  "svc-007": "Search Marketing",
  "svc-008": "Content & Media",
};

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 overflow-hidden font-sans">
      
      {/* 1. Hero Section with 71846.jpg Background */}
      <section className="relative h-[80vh] w-full flex items-center justify-center text-white overflow-hidden select-none">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroBg}
            alt="Capabilities Background"
            fill
            priority
            placeholder="blur"
            className="object-cover object-center scale-102"
          />
          {/* Ambient Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/85 to-[#3d20a2]/45" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8">
          <div className="max-w-xl md:max-w-2xl text-left flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]"
            >
              Digital Marketing & <br />
              <span className="bg-gradient-to-r from-white via-white to-[#1cb2cb] bg-clip-text text-transparent">Branding Services in Hyderabad</span>
            </motion.h1>
          </div>
        </div>

        {/* Bottom curve decorator */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 dark:from-neutral-950 to-transparent pointer-events-none" />
      </section>

      {/* 2. Content section - Services Showcase Grid */}
      <section className="relative py-20 px-6 lg:px-8 max-w-7xl mx-auto z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {servicesData.map((service, index) => {
            const ServiceIcon = serviceIcons[service.id] || Layers;
            const categoryName = serviceCategories[service.id] || "Marketing";

            return (
              <Link href={`/services/${service.slug}`} key={service.id} className="block group">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col justify-between p-5 rounded-3xl bg-white dark:bg-neutral-900/60 backdrop-blur-sm border border-neutral-200/65 dark:border-neutral-800 hover:border-[#1cb2cb] dark:hover:border-[#1cb2cb] shadow-sm hover:shadow-xl hover:shadow-[#1cb2cb]/5 transition-all duration-500 overflow-hidden cursor-pointer h-full"
                >
                  {/* Glow background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1cb2cb]/5 via-transparent to-[#502ec2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Card Image */}
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-slate-100 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-800">
                      <Image 
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                    </div>

                    {/* Icon & Category tag row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#502ec2]/10 dark:bg-[#502ec2]/20 flex items-center justify-center text-[#502ec2] dark:text-[#1cb2cb] group-hover:bg-[#502ec2] group-hover:text-white transition-colors duration-300">
                        <ServiceIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-black tracking-[0.2em] text-[#1cb2cb] uppercase bg-[#1cb2cb]/10 dark:bg-[#1cb2cb]/20 px-2.5 py-1 rounded-full">
                        {categoryName}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-extrabold tracking-tight mb-3 group-hover:text-[#502ec2] dark:group-hover:text-[#1cb2cb] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-350 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Bottom footer row */}
                  <div className="mt-4 pt-4 border-t border-neutral-150 dark:border-neutral-850 flex items-center justify-end">
                    <span className="flex items-center gap-1 text-[10px] font-black tracking-wider uppercase text-[#502ec2] dark:text-[#1cb2cb] group-hover:translate-x-1.5 transition-transform duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 2.5. Capabilities & Design Philosophy Section */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-900">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-black tracking-[0.3em] text-[#502ec2] dark:text-[#1cb2cb] uppercase">
            Creative Core
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3">
            Capabilities &amp; Design Philosophy
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
            How we translate strategic insights into remarkable visual systems and digital product experiences.
          </p>
        </div>
      </section>

      {/* Row 1: Strategy & Art Direction */}
      <section className="py-24 px-6 lg:px-8 bg-amber-500/[0.02] dark:bg-amber-500/[0.01] border-y border-neutral-200/50 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Strategy &amp;<br />Art Direction.
            </h3>
            <p className="text-neutral-600 dark:text-neutral-350 text-base leading-relaxed font-medium">
              At Click Diji we blend strategic insight and creative excellence to craft compelling visual identities and effective marketing campaigns that drive results.
            </p>
            <div className="pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center gap-4">
              <span className="text-5xl font-black tracking-tight text-amber-500">86%</span>
              <div>
                <p className="text-xs font-black tracking-wider uppercase text-neutral-450 dark:text-neutral-500">Creative Impact</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-550">Industry Benchmark Standard</p>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-amber-200/30 dark:border-amber-900/30 shadow-xl shadow-amber-500/10 group bg-amber-500/5">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 to-transparent z-10" />
              <Image 
                src={strategyBg}
                alt="Strategy & Art Direction"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Row 2: Website UX/UI Design */}
      <section className="py-24 px-6 lg:px-8 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.01] border-b border-neutral-200/50 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image Content (Comes first on desktop for alternating pattern) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 lg:order-1 order-2"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-emerald-200/30 dark:border-emerald-900/30 shadow-xl shadow-emerald-500/10 group bg-emerald-500/5">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 to-transparent z-10" />
              <Image 
                src={uxuiBg}
                alt="Website UX/UI Design"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 lg:order-2 order-1 space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Website<br />UX/UI Design.
            </h3>
            <p className="text-neutral-600 dark:text-neutral-350 text-base leading-relaxed font-medium">
              At Click Diji we create intuitive and visually stunning UX/UI designs that enhance user satisfaction, boost engagement, and drive measurable results for your brand.
            </p>
            <div className="pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center gap-4">
              <span className="text-5xl font-black tracking-tight text-emerald-500">100%</span>
              <div>
                <p className="text-xs font-black tracking-wider uppercase text-neutral-450 dark:text-neutral-500">User Centricity</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-550">Frictionless Flow Optimization</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Row 3: Studio Capabilities */}
      <section className="py-24 px-6 lg:px-8 bg-[#502ec2]/[0.02] dark:bg-[#1cb2cb]/[0.01] border-b border-neutral-200/50 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#502ec2]/10 dark:bg-[#1cb2cb]/10 flex items-center justify-center text-[#502ec2] dark:text-[#1cb2cb]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Studio<br />Capabilities.
            </h3>
            <p className="text-neutral-600 dark:text-neutral-350 text-base leading-relaxed font-medium">
              We work in the fields of UI/UX design, Graphic Designing and art direction to deliver high-quality outcomes.
            </p>
            <div className="pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60">
              <p className="text-xs font-black tracking-wider uppercase text-neutral-400 dark:text-neutral-550 mb-3">Core Expertise</p>
              <div className="flex flex-wrap gap-2">
                {["UI/UX Design", "Graphic Design", "Art Direction"].map((tag) => (
                  <span key={tag} className="text-xs font-black tracking-wider uppercase bg-[#502ec2]/5 dark:bg-[#1cb2cb]/5 text-[#502ec2] dark:text-[#1cb2cb] px-4 py-1.5 rounded-full border border-[#502ec2]/10 dark:border-[#1cb2cb]/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#502ec2]/20 dark:border-[#1cb2cb]/20 shadow-xl shadow-[#502ec2]/10 dark:shadow-[#1cb2cb]/10 group bg-[#502ec2]/5">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 to-transparent z-10" />
              <Image 
                src={studioBg}
                alt="Studio Capabilities"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Global Action Banner */}
      <section className="relative py-24 px-6 lg:px-8 border-t border-neutral-200 dark:border-neutral-900 bg-neutral-100/50 dark:bg-neutral-900/20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Ready to Engineer <span className="text-[#502ec2] dark:text-[#1cb2cb]">Your Digital Presence?</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Contact our systems architecture team to plan a customized, results-driven audit of your product development and performance marketing structures.
          </p>
          <div className="mt-10">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#502ec2] text-white font-black tracking-wider text-xs uppercase hover:bg-[#3d20a2] transition-colors duration-300 shadow-lg shadow-[#502ec2]/10 hover:shadow-xl hover:shadow-[#502ec2]/20">
              <span>Book System Discovery Call</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}