"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Sparkles
} from "lucide-react";

// Custom SVG Icons to bypass Lucide package version differences
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000); // Reset after 5s
    }
  };

  return (
    <footer className="relative bg-neutral-950 text-neutral-400 border-t border-neutral-900 overflow-hidden py-16 px-6 lg:px-8">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#1cb2cb]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#502ec2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start z-10">
        
        {/* Column 1: Logo & Contact Info (span 4) */}
        <div className="md:col-span-4 space-y-6">
          <Link href="/" className="inline-block transition-transform duration-300 hover:scale-103">
            <Image
              src="/Untitled design (1).png"
              alt="ClickDiji Full Color Logo"
              width={160}
              height={40}
              className="h-10 w-auto object-contain brightness-100"
              priority
            />
          </Link>
          <p className="text-sm text-neutral-500 leading-relaxed font-medium max-w-sm">
            At ClickDiji, we blend strategic engineering and creative excellence to scale ambitious enterprise footprints.
          </p>
          <div className="space-y-3 pt-2 text-sm font-medium">
            <a 
              href="tel:+919492727646" 
              className="flex items-center gap-3 text-neutral-400 hover:text-[#1cb2cb] transition-colors duration-200"
            >
              <Phone className="h-4 w-4 flex-shrink-0 text-[#1cb2cb]" />
              <span>+91 94927 27646</span>
            </a>
            <a 
              href="mailto:hello@clickdiji.com" 
              className="flex items-center gap-3 text-neutral-400 hover:text-[#502ec2] dark:hover:text-[#b49bf0] transition-colors duration-200"
            >
              <Mail className="h-4 w-4 flex-shrink-0 text-[#502ec2] dark:text-[#b49bf0]" />
              <span>hello@clickdiji.com</span>
            </a>
            <div className="flex items-center gap-3 text-neutral-500">
              <MapPin className="h-4 w-4 flex-shrink-0 text-neutral-600" />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Links (span 2) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-black tracking-widest text-white uppercase">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm font-semibold">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about-us" },
              { name: "Services", href: "/services" },
              { name: "Contact Us", href: "/contact-us" },
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Email Newsletter Subscription (span 4) */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-black tracking-widest text-white uppercase flex items-center gap-2">
            <span>Subscribe</span>
            <Sparkles className="h-3 w-3 text-[#1cb2cb]" />
          </h4>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-medium">
            Join other ambitious leaders receiving digital growth frameworks, performance insights, and industry updates.
          </p>

          <form onSubmit={handleSubscribe} className="relative mt-2 max-w-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full h-11 pl-4 pr-12 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#1cb2cb] transition-colors duration-200"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 h-9 w-9 rounded-lg bg-[#502ec2] text-white flex items-center justify-center hover:bg-[#1cb2cb] transition-all duration-300 active:scale-95"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {isSubscribed && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-semibold text-[#1cb2cb]"
            >
              Subscription confirmed. Welcome to ClickDiji!
            </motion.p>
          )}
        </div>

        {/* Column 4: Social Connect (span 2) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-black tracking-widest text-white uppercase">
            Connect
          </h4>
          <div className="flex gap-3">
            {[
              { icon: Linkedin, href: "#", color: "hover:bg-[#1cb2cb] hover:text-white" },
              { icon: Instagram, href: "#", color: "hover:bg-[#502ec2] hover:text-white" },
              { icon: Twitter, href: "#", color: "hover:bg-[#1cb2cb] hover:text-white" },
              { icon: Facebook, href: "#", color: "hover:bg-[#502ec2] hover:text-white" },
            ].map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <a
                  key={idx}
                  href={soc.href}
                  className={`h-9 w-9 rounded-lg bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-neutral-500 transition-all duration-300 ${soc.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

      </div>

      {/* Footer copyright base line */}
      <div className="relative max-w-7xl w-full mx-auto mt-16 pt-8 border-t border-neutral-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-600 font-medium z-10 gap-4">
        <p>&copy; {new Date().getFullYear()} ClickDiji. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
