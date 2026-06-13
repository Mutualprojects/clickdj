"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Design",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Website Design",
      message: "",
    });
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      
      {/* ── 1. Full Image Hero Section (90vh, Only Image, No Gradients/Text overlays) ── */}
      <section className="relative w-full h-[90vh] select-none">
        <Image
          src="/124009.jpg"
          alt="ClickDiji Contact Banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* ── 2. Contact Details & Form Section (Directly after Hero) ── */}
      <section className="relative py-20 px-6 lg:px-8 bg-white dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column (span 5): Contact Info Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-black tracking-[0.25em] text-[#502ec2] dark:text-[#1cb2cb] uppercase">
                Let's Connect
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-white leading-tight uppercase">
                Start The <br />
                Conversation
              </h1>
              <div className="h-1 w-16 bg-[#1cb2cb] rounded-full" />
            </div>
            
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed font-medium">
              We seamlessly integrate pristine code, advanced optimization, and high-impact creative strategies to scale enterprise footprints. Leave us a little info and we will be in touch.
            </p>

            {/* Quick Contact Links */}
            <div className="space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-900">
              <a 
                href="tel:+919492727646" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-100/50 dark:border-neutral-800/50 hover:border-[#1cb2cb]/40 transition-colors duration-250"
              >
                <div className="h-10 w-10 rounded-xl bg-[#1cb2cb]/15 flex items-center justify-center text-[#1cb2cb]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-450 dark:text-neutral-500 uppercase">Call Directly</h4>
                  <p className="text-sm sm:text-base font-black text-neutral-900 dark:text-white">+91 94927 27646</p>
                </div>
              </a>

              <a 
                href="mailto:hello@clickdiji.com" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-100/50 dark:border-neutral-800/50 hover:border-[#502ec2]/40 transition-colors duration-250"
              >
                <div className="h-10 w-10 rounded-xl bg-[#502ec2]/15 flex items-center justify-center text-[#502ec2]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-450 dark:text-neutral-500 uppercase">Send Email</h4>
                  <p className="text-sm sm:text-base font-black text-neutral-900 dark:text-white">hello@clickdiji.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-100/50 dark:border-neutral-800/50">
                <div className="h-10 w-10 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-500">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-450 dark:text-neutral-500 uppercase">Visit Agency</h4>
                  <p className="text-sm sm:text-base font-black text-neutral-900 dark:text-white">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (span 7): Contact Form */}
          <div className="lg:col-span-7 bg-zinc-50 dark:bg-neutral-900/40 p-8 rounded-3xl border border-neutral-100 dark:border-neutral-900 shadow-sm space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-neutral-400 tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. John Doe"
                  className="w-full h-11 px-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#1cb2cb] transition-colors duration-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase text-neutral-400 tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. john@company.com"
                    className="w-full h-11 px-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#1cb2cb] transition-colors duration-200"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase text-neutral-400 tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full h-11 px-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#1cb2cb] transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-neutral-400 tracking-wider">
                  Interested Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-11 px-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#1cb2cb] transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="Website Design">Website Design</option>
                  <option value="SEO Strategy">SEO Strategy</option>
                  <option value="Digital Branding">Digital Branding</option>
                  <option value="Performance Marketing">Performance Marketing</option>
                  <option value="Custom Software">Custom Software</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-neutral-400 tracking-wider">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your brand goals, project scope, and timeline..."
                  className="w-full p-4 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#1cb2cb] transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit Button & Alert Feedbacks */}
              <div className="flex flex-col items-stretch gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 rounded-xl bg-[#502ec2] text-white hover:bg-[#1cb2cb] transition-all duration-300 active:scale-98 font-bold flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:pointer-events-none"
                >
                  <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
                  <Send className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2.5 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-250 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-450 text-xs font-semibold"
                    >
                      <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>Thank you! We have received your message and will reach out shortly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}