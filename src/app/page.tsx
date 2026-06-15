"use client";

import Image from "next/image";
import Badge from "@/components/badge";
import OurServices from "@/components/ourservices";
import { motion, useScroll, useTransform } from "framer-motion";
import OurProcess from "@/app/about-us/components/process";
import ClientsProjects from "@/components/ClientsProjects";
import BannerCards from "@/components/BannerCards";
import FAQ from "@/components/FAQ";
import { useState } from "react";
import OffCanvasForm from "@/components/OffCanvasForm";
import Link from "next/link";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { scrollY } = useScroll();

  // Parallax shifts for clean depth
  const yText = useTransform(scrollY, [0, 600], [0, 100]);
  const yImage = useTransform(scrollY, [0, 600], [0, 60]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="flex flex-col w-full bg-zinc-50 font-sans dark:bg-black text-black dark:text-zinc-50 overflow-x-hidden">

      {/* ── Shared gradient wrapper: hero (100vh) + top half of services (37.5vh) ── */}
      <div className="relative w-full overflow-hidden">

        {/* Gradient background layer — extends behind hero, intro, and top half of services */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none z-0"
          style={{ height: "calc(100% - 350px)", background: "linear-gradient(to bottom right, #502ec2, #3d20a2, #1cb2cb)" }}
        />

        {/* Section 1: Hero — transparent, sits on shared gradient */}
        <section className="relative h-screen min-h-screen w-full flex flex-col justify-between pt-[95px] pb-6 px-6 lg:pl-20 lg:pr-8 xl:pl-24 xl:pr-12 overflow-hidden">
          {/* Ambient particles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1cb2cb]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#502ec2]/30 rounded-full blur-3xl animate-pulse delay-1000" />

          {/* Hero Content Container */}
          <div className="relative max-w-7xl w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 mx-auto">

            {/* Left Column: Headings & Intro */}
            <motion.div
              style={{ y: yText, opacity: opacityHero }}
              className="lg:col-span-7 flex flex-col justify-center text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Digital Marketing Agency in Hyderabad<br />
                That Drives Real Growth
              </h1>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#1cb2cb] font-bold tracking-widest uppercase">
                Your Click, Our Strategy.
              </p>
            </motion.div>

            {/* Right Column: Hero Image with parallax and subtle idle floating */}
            <div className="lg:col-span-5 flex justify-center items-center w-full h-full max-h-[35vh] lg:max-h-full aspect-[4/3] lg:aspect-auto relative">
              <motion.div
                style={{ y: yImage, opacity: opacityHero }}
                className="relative w-full h-full min-h-[200px] lg:min-h-0 group select-none"
              >
                {/* Idle floating loop container */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/magnific_an-artistic-surrealism-pa_l7CkpXqgv9.png"
                    alt="Architecting Digital Excellence Painting"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-contain transition-transform duration-700 group-hover:scale-103"
                  />
                </motion.div>
              </motion.div>
            </div>

          </div>

          {/* Floating Badge */}
          <div className="w-full shrink-0 mt-auto z-20">
            <Badge />
          </div>
        </section>

        {/* Intro Paragraph & Buttons Section */}
        <section className="relative z-10 w-full flex flex-col items-center px-6 pt-16 pb-8 text-center max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-medium">
            ClickDiji is a full-service digital marketing agency in Hyderabad helping ambitious brands grow with SEO, high-performance web development, Google Ads, and social media marketing. We pair clean engineering with data-driven campaigns to turn clicks into customers — and customers into long-term growth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="px-8 py-4 bg-[#1cb2cb] hover:bg-[#189aa8] text-white rounded-full font-bold transition-colors text-lg shadow-lg"
            >
              Get a Free Strategy Call
            </button>
            <Link 
              href="/services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold transition-colors text-lg backdrop-blur-sm inline-flex items-center justify-center"
            >
              Explore Our Services
            </Link>
          </div>
        </section>

        {/* Off-Canvas Form */}
        <OffCanvasForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

        {/* Section 2: Our Services — transparent, top half sits on gradient, bottom half on white */}
        <div className="relative z-10 w-full flex flex-col items-center px-6 mt-8 mb-2 lg:mt-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
              Our Digital Marketing Services in Hyderabad
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              From your first click to your final conversion, ClickDiji delivers every digital marketing service your brand needs under one roof.
            </p>
          </div>
        </div>
        <OurServices />

      </div>

      {/* Section 2.5: About Us */}
      <section
        id="about-us"
        className="relative w-full py-20 bg-white dark:bg-neutral-950 overflow-hidden border-t border-neutral-100 dark:border-neutral-900"
      >
        {/* Ambient Glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1cb2cb]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:pl-20 lg:pr-8 xl:pl-24 xl:pr-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Transparent Ripped Paper Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: -35 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative w-full aspect-[4/3] group select-none"
            >
              <Image
                src="/text-about-us-appearing-torn-blue-paper-about-us-words-written-ripped-torn-paper.png"
                alt="About ClickDiji"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain transition-transform duration-700 group-hover:scale-103"
              />
            </motion.div>

            {/* Right Column: Title and Content */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-7 flex flex-col justify-center text-left"
            >
              <span className="text-xs font-black tracking-[0.25em] text-[#1cb2cb] uppercase">
                Company Profile
              </span>
              <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
                About Us
              </h2>
              <div className="mt-5 mb-6 w-12 h-1 bg-[#502ec2] rounded-full" />

              <p className="text-lg sm:text-xl text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
                At <span className="font-extrabold text-[#502ec2] dark:text-[#1cb2cb]">ClickDiji</span>, we believe a brand’s digital presence is only as strong as its underlying architecture. We are a premium, full-service technology and digital marketing agency built to scale ambitious enterprises in today’s fast-evolving marketplace.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 2.6: Who We Are */}
      <section
        id="who-we-are"
        className="relative w-full py-20 bg-neutral-50 dark:bg-neutral-900/30 overflow-hidden border-t border-neutral-100 dark:border-neutral-900"
      >
        {/* Ambient Glow */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#502ec2]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:pl-20 lg:pr-8 xl:pl-24 xl:pr-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Who We Are Title, Content & Pillars */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-start text-left"
            >
              <span className="text-xs font-black tracking-[0.25em] text-[#1cb2cb] uppercase">
                Our Philosophy
              </span>
              <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
                Who We Are
              </h2>
              <div className="mt-5 mb-6 w-12 h-1 bg-[#1cb2cb] rounded-full" />

              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                We bridge the gap between technical engineering and powerful brand storytelling. By fusing cutting-edge web development with data-backed performance marketing, we cut through the digital noise to engineer real business outcomes, capture high-intent leads, and maximize your market presence.
              </p>

              {/* Pillars list inline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm">
                  <h3 className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#502ec2]" />
                    Technical Engineering
                  </h3>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm">
                  <h3 className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1cb2cb]" />
                    Brand Storytelling
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Desk Concept Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 35 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-5 relative w-full aspect-[4/3] group select-none"
            >
              <Image
                src="/top-view-desk-concept-with-white-background.png"
                alt="Who We Are Concept"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain transition-transform duration-700 group-hover:scale-103"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 2.7: Our Core Pillars */}
      <section
        id="core-pillars"
        className="relative w-full py-24 bg-white overflow-hidden border-t border-neutral-100 text-neutral-900"
      >
        {/* Overall Background Image Backdrop (White/Light theme) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/creative-social-media-internet-mockup-with-laptop-keyboard.png"
            alt="Core Pillars Backdrop"
            fill
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-white/75" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:pl-20 lg:pr-8 xl:pl-24 xl:pr-12 relative z-10 space-y-20">

          {/* Section Header */}
          <div className="text-center">
            <span className="text-xs font-black tracking-[0.25em] text-[#1cb2cb] uppercase">
              Brand Foundations
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Our Core Pillars
            </h2>
            <div className="mt-5 mx-auto w-12 h-1 bg-[#502ec2] rounded-full" />
          </div>

          {/* 1. Vision Block (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Transparent Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: -35 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative w-full aspect-[4/3] group select-none"
            >
              <Image
                src="/top-view-paper-light-bulb-with-chat-bubble.png"
                alt="Our Vision"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain transition-transform duration-700 group-hover:scale-103"
              />
            </motion.div>

            {/* Right Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-7 flex flex-col justify-center text-left"
            >
              <span className="text-xs font-black tracking-[0.25em] text-[#1cb2cb] uppercase">
                Long-term Outlook
              </span>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Our Vision
              </h3>
              <div className="mt-4 mb-5 w-12 h-1 bg-[#502ec2] rounded-full" />
              <p className="text-lg text-neutral-700 leading-relaxed font-medium">
                To emerge as the definitive global growth partner for enterprises, empowering businesses across diverse industry verticals with highly scalable, creative, and results-driven digital architectures.
              </p>
            </motion.div>
          </div>

          {/* 2. Mission Block (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center text-left"
            >
              <span className="text-xs font-black tracking-[0.25em] text-[#1cb2cb] uppercase">
                Immediate Focus
              </span>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Our Mission
              </h3>
              <div className="mt-4 mb-5 w-12 h-1 bg-[#1cb2cb] rounded-full" />
              <p className="text-lg text-neutral-700 leading-relaxed font-medium">
                To equip brands with crystal-clear digital roadmaps. We seamlessly integrate pristine code, advanced optimization, and high-impact creative strategies to turn audience intent into sustainable business revenue.
              </p>
            </motion.div>

            {/* Right Column: Transparent Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 35 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-5 order-1 lg:order-2 relative w-full aspect-[4/3] group select-none"
            >
              <Image
                src="/arrow-hitting-bullseye.png"
                alt="Our Mission"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain transition-transform duration-700 group-hover:scale-103"
              />
            </motion.div>
          </div>
        </div>

      </section>

      {/* Section 2.9: Our Process */}
      <OurProcess />

      {/* Section 3.0: Clients & Recent Projects */}
      <ClientsProjects />

      {/* Section 3.1: Tech Stack Banner Cards */}
      <BannerCards />

      {/* Section 3.2: Frequently Asked Questions */}
      <FAQ />

    </div>
  );
}
