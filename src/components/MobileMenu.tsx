"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact-us" },
];

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  dark: boolean;
  setDark: (dark: boolean) => void;
}

export function MobileMenu({ isOpen, setIsOpen, dark, setDark }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const panelVariants = {
    initial: { y: "-100%" },
    animate: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0, 1] as [number, number, number, number],
        delay: i * 0.08,
      },
    }),
    exit: (i: number) => ({
      y: "-100%",
      transition: {
        duration: 0.6,
        ease: [0.17, 0.67, 0, 1] as [number, number, number, number],
        delay: (3 - i) * 0.05,
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden overflow-hidden">
          {/* Background Panels */}
          <div className="absolute inset-0 flex">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                custom={i}
                variants={panelVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full flex-1 bg-zinc-900 dark:bg-[#0c0c0c] border-x border-white/5" 
              />
            ))}
          </div>

          {/* Menu Content */}
          <div className="relative h-full w-full flex flex-col p-8 pt-24">
            {/* Top Close Button Overlay */}
            <div className="absolute top-5 right-4 z-50">
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1 border border-white rounded-full bg-white text-zinc-900 transition-all active:scale-90"
                aria-label="Close Menu"
              >
                <div className="w-4 h-0.5 bg-zinc-900 rounded-full rotate-45 translate-y-[3px]" />
                <div className="w-4 h-0.5 bg-zinc-900 rounded-full -rotate-45 -translate-y-[3px]" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[15vw] leading-[1.1] font-black text-[#f5f1e8] tracking-tighter hover:italic transition-all active:scale-95 origin-left block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-8 flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="space-y-4"
              >
                <p className="text-[#f5f1e8]/60 text-[10px] font-black uppercase tracking-[0.4em]">Get in touch</p>
                <a 
                  href="mailto:sirigineedibalaji4@gmail.com" 
                  className="text-lg font-black text-[#f5f1e8] border-b-4 border-orange-500 pb-1 block w-fit max-w-full truncate"
                >
                  sirigineedibalaji4@gmail.com
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
