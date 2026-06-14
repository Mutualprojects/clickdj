"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "../magnific_a-surreal-digital-illustr_SOusnaPUb8.png";

export default function AboutHero() {
    return (
        <section className="relative min-h-[90vh] w-full flex items-center pt-[95px] pb-12 px-6 lg:px-8 overflow-hidden">
            {/* Brand gradient, side to side */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(105deg, #3d20a2 0%, #502ec2 48%, #1cb2cb 100%)",
                }}
            />
            {/* Clear through the top, fading to white toward the bottom */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 42%, rgba(255,255,255,0.5) 74%, #ffffff 100%)",
                }}
            />

            <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
                {/* Left: content */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="order-1 flex flex-col text-center lg:col-span-6 lg:text-left"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1cb2cb]">
                        Who we are
                    </span>

                    <h1 className="mt-4 text-5xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                        About Us
                    </h1>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#1cb2cb] lg:mx-0" />

                    <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/85 lg:mx-0 sm:text-lg">
                        ClickDiji is a digital studio. We design and build websites, and run
                        the marketing that brings the right people to them.
                    </p>

                    <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#502ec2] transition-colors hover:bg-neutral-100"
                        >
                            <span>Work with us</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            Our services
                        </Link>
                    </div>
                </motion.div>

                {/* Right: image — no card, no background, no border */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="order-2 flex w-full items-center justify-center lg:col-span-6"
                >
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative aspect-[3/3] w-full max-w-md select-none lg:max-w-lg"
                    >
                        <Image
                            src={heroImg}
                            alt="About us illustration"
                            fill
                            priority
                            className="object-contain [filter:drop-shadow(0_16px_30px_rgba(15,9,38,0.2))]"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}