"use client";

import React from "react";
import { useParams } from "next/navigation";
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
  ArrowRight,
  Check,
  Layers,
} from "lucide-react";

// Maps each service to its representative icon.
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
  const slug = params?.slug as string;

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="w-full min-h-screen bg-white dark:bg-neutral-950 flex flex-col items-center justify-center text-center px-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#502ec2] dark:text-[#1cb2cb]">
          404
        </p>
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Service not found
        </h2>
        <p className="mt-3 max-w-md text-neutral-600 dark:text-neutral-400">
          We couldn&apos;t find that service. It may have moved, or the link is out of date.
        </p>
        <Link
          href="/services"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#502ec2] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3d20a2]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to services</span>
        </Link>
      </div>
    );
  }

  const ServiceIcon = serviceIcons[service.id] || Layers;

  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans pb-24">
      {/* 1. Hero */}
      <section className="relative flex h-[46vh] min-h-[340px] w-full items-end overflow-hidden text-white select-none">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/70 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 lg:px-8">
          <Link
            href="/services"
            className="group mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>All services</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#1cb2cb]">
                Service
              </p>
              <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                {service.title}
              </h1>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm">
              <ServiceIcon className="h-6 w-6" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Content */}
      <section className="relative mx-auto mt-16 max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column */}
          <div className="space-y-10 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </motion.div>

            {/* Advantages */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7 dark:border-neutral-800 dark:bg-neutral-900/50"
            >
              <h3 className="mb-5 text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
                Key advantages
              </h3>
              <ul className="space-y-4">
                {service.advantages.map((adv, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#502ec2]/10 text-[#502ec2] dark:bg-[#1cb2cb]/15 dark:text-[#1cb2cb]">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="space-y-14 lg:col-span-7">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1cb2cb]">
                Overview
              </p>
              <p className="text-xl font-semibold leading-snug tracking-tight text-neutral-900 dark:text-white sm:text-2xl">
                {service.shortDescription}
              </p>
              <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                {service.longDescription}
              </p>
            </motion.div>

            {/* Focus areas */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#502ec2] dark:text-[#1cb2cb]">
                Focus areas
              </p>
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 md:grid-cols-2">
                {service.focusedAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 bg-white p-5 dark:bg-neutral-950"
                  >
                    <span className="text-sm font-semibold tabular-nums text-[#502ec2] dark:text-[#1cb2cb]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {area}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What's included */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-8"
            >
              <h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
                What&apos;s included
              </h3>
              <p className="mb-6 mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                Each engagement is scoped to your goals and delivered in clear, reviewable stages.
              </p>
              <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2">
                {service.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#502ec2] dark:text-[#1cb2cb]" />
                    <span className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="mx-auto mt-24 max-w-6xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-[#502ec2] px-8 py-12 text-white sm:px-12 sm:py-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Let&apos;s talk about your project
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Tell us what you&apos;re building and what success looks like. We&apos;ll put together
              a clear plan and the right team for {service.title.toLowerCase()}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#502ec2] transition-colors hover:bg-neutral-100">
                Start a project
              </button>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <span>View all services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}