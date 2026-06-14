"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Custom SVG Icons to avoid Lucide package export discrepancies
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

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

// Toggle icons
const ShareIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default function FloatingSocials() {
  // Open by default on first render; user can collapse/expand on any screen
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/108460265/",
      color:
        "hover:bg-[#1cb2cb] hover:text-white hover:border-[#1cb2cb] hover:shadow-[#1cb2cb]/20",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/clickdiji/",
      color:
        "hover:bg-[#502ec2] hover:text-white hover:border-[#502ec2] hover:shadow-[#502ec2]/20",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/Clickdiji",
      color:
        "hover:bg-sky-500 hover:text-white hover:border-sky-500 hover:shadow-sky-500/20",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/people/click-diji/61576927124569/",
      color:
        "hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-blue-600/20",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@Clickdiji",
      color:
        "hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-red-600/20",
    },
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.75 },
  };

  return (
    <div
      className="
        fixed z-50 flex flex-row-reverse lg:flex-col-reverse items-center gap-2.5 lg:gap-3.5
        left-4 bottom-4
        lg:left-5 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2
      "
    >
      {/* Social icons — animate in/out on open/close */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="social-list"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative flex flex-row lg:flex-col items-center gap-2.5 lg:gap-3.5"
          >
            {/* Premium thin axis timeline wire (desktop only) */}
            <div className="absolute w-[1px] h-full bg-neutral-200 dark:bg-neutral-800 -z-10 hidden lg:block" />

            {socialLinks.map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <motion.a
                  key={idx}
                  href={soc.href}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.15,
                    x: 4,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-8 w-8 lg:h-9 lg:w-9 rounded-full flex items-center justify-center text-neutral-400 dark:text-neutral-500 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-300 ${soc.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={soc.name}
                >
                  <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Open / Close toggle handle — visible on all screens */}
      <motion.button
        type="button"
        onClick={handleToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isOpen ? "Close social links" : "Open social links"}
        aria-expanded={isOpen}
        title={isOpen ? "Close" : "Follow us"}
        className="
          h-9 w-9 lg:h-10 lg:w-10 rounded-full flex items-center justify-center
          text-white shadow-lg shadow-[#502ec2]/35
          bg-gradient-to-br from-[#502ec2] to-[#1cb2cb]
          border border-white/20
          transition-all duration-300
          cursor-pointer
        "
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CloseIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ShareIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}