"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // 90vh threshold (scrolling past the hero section)
      const threshold = window.innerHeight * 0.9;
      if (window.scrollY > threshold) {
        setHasScrolledPast(true);
      } else {
        setHasScrolledPast(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  // Dynamic theme-aware colors for text links
  const linkColorClass = hasScrolledPast
    ? "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
    : "text-white hover:text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${
        hasScrolledPast
          ? "border-neutral-200/30 bg-[#f5f1e8]/90 dark:bg-[#0c0c0c]/90 backdrop-blur-md shadow-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl h-20 items-center px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="relative h-10 w-40 flex items-center gap-2 group">
            <Image
              src="/Untitled design (4).png"
              alt="Logo Initial"
              width={160}
              height={40}
              className={`h-10 w-auto object-contain absolute left-0 top-0 transition-all duration-300 group-hover:scale-105 ${
                hasScrolledPast ? "opacity-0 pointer-events-none" : "opacity-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
              }`}
              priority
            />
            <Image
              src="/Untitled design (1).png"
              alt="Logo Scrolled"
              width={160}
              height={40}
              className={`h-10 w-auto object-contain absolute left-0 top-0 transition-all duration-300 group-hover:scale-105 ${
                hasScrolledPast ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-sm font-semibold uppercase tracking-[0.1em] transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#1cb2cb] after:transition-all after:duration-300 hover:after:w-full ${linkColorClass}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center md:hidden ml-auto">
          {/* Mobile Menu Hamburger (framer-motion animated) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`w-10 h-10 flex flex-col items-center justify-center gap-1 border rounded-full transition-all active:scale-90 ${
              hasScrolledPast
                ? "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white"
                : "bg-white/10 border-white/20 text-white"
            }`}
            aria-label="Toggle Menu"
          >
            <motion.div 
              animate={isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className={`w-4 h-0.5 rounded-full ${hasScrolledPast ? "bg-zinc-900 dark:bg-white" : "bg-white"}`} 
            />
            <motion.div 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-4 h-0.5 rounded-full ${hasScrolledPast ? "bg-zinc-900 dark:bg-white" : "bg-white"}`} 
            />
            <motion.div 
              animate={isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className={`w-4 h-0.5 rounded-full ${hasScrolledPast ? "bg-zinc-900 dark:bg-white" : "bg-white"}`} 
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Animated Panels overlay) */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        dark={isDark}
        setDark={(val) => setTheme(val ? "dark" : "light")}
      />
    </header>
  );
}
