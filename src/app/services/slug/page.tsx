"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "@/app/data/services";
import { 
  Code2, 
  Search, 
  TrendingUp, 
  Share2, 
  Users, 
  FileText, 
  Mail, 
  Camera, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  TrendingUp as TrendIcon,
  HelpCircle
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

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  // Find the service corresponding to the current slug
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="w-full min-h-screen bg-slate-50 dark:bg-neutral-950 flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Service Not Found
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-md">
          The service capability you are looking for does not exist or has been relocated.
        </p>
        <Link 
          href="/services" 
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#502ec2] text-white text-xs font-black tracking-wider uppercase hover:bg-[#3d20a2] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>
      </div>
    );
  }

  const ServiceIcon = serviceIcons[service.id] || Layers;

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 overflow-hidden font-sans pb-24">
      
      {/* 1. Glassmorphic Hero Banner */}
      <section className="relative h-[45vh] w-full flex items-end justify-start text-white overflow-hidden select-none">
        {/* Background Image (blurred details page style) */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover object-center scale-105 blur-[8px] opacity-75"
          />
          {/* Ambient overlay matching brand guidelines */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-neutral-950 via-slate-950/80 to-slate-950/95" />
        </div>

        {/* Hero Bottom Bar with Navigation and Title */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 pb-10">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#1cb2cb] uppercase hover:underline mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>All Services</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-black tracking-widest text-[#1cb2cb] uppercase bg-[#1cb2cb]/10 dark:bg-[#1cb2cb]/20 px-3 py-1 rounded-full border border-[#1cb2cb]/20">
                  Services Detail
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
                {service.title}
              </h1>
            </div>
            
            <div className="w-14 h-14 rounded-2xl bg-[#502ec2] text-white flex items-center justify-center shadow-lg shadow-[#502ec2]/20">
              <ServiceIcon className="w-7 h-7" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Deep Dive Columns Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Visual Asset Card & Advantages */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg"
            >
              <Image 
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </motion.div>

            {/* Advantages Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-850 shadow-sm"
            >
              <h3 className="text-lg font-black tracking-tight text-[#502ec2] dark:text-[#1cb2cb] mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                Key Strategic Advantages
              </h3>
              <ul className="space-y-4">
                {service.advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-300 font-medium leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Descriptions & Detailed Lists */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Overview / Introduction */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-[10px] font-black tracking-[0.25em] text-[#1cb2cb] uppercase">
                Service Overview
              </h2>
              <p className="text-lg sm:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed font-semibold">
                {service.shortDescription}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base font-medium">
                {service.longDescription}
              </p>
            </motion.div>

            {/* Core Capability Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              <h2 className="text-[10px] font-black tracking-[0.25em] text-[#502ec2] dark:text-[#1cb2cb] uppercase">
                Capabilities & Focus Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.focusedAreas.map((area, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-850 flex gap-3.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#1cb2cb]/10 dark:bg-[#1cb2cb]/20 flex items-center justify-center text-[#1cb2cb] shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-350 leading-relaxed font-semibold">
                      {area}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features Framework modules */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900 to-slate-950 text-white border border-neutral-800"
            >
              <h3 className="text-lg font-black tracking-tight text-[#1cb2cb] mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#1cb2cb]" />
                Included Service Modules
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1cb2cb] shrink-0" />
                    <span className="text-xs sm:text-sm text-neutral-300 font-semibold">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. Footer Action CTA banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
        <div className="relative rounded-3xl p-10 sm:p-14 overflow-hidden bg-gradient-to-r from-slate-900 via-[#3d20a2] to-[#502ec2] text-white border border-neutral-800 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(28,178,203,0.15),transparent)] pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Scale Your Project with {service.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-200 leading-relaxed font-medium">
              We engineer custom roadmaps and click strategies specific to your market objectives. Schedule a system discovery call with our branding architecture team today.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-full bg-white text-neutral-900 text-xs font-black tracking-wider uppercase hover:bg-neutral-100 transition-colors shadow-lg">
                Book Audit Call
              </button>
              <Link 
                href="/services" 
                className="px-6 py-3 rounded-full border border-white/20 text-white text-xs font-black tracking-wider uppercase hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <span>All Capabilities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
