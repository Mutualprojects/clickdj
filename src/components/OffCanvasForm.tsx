"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, Phone, MessageSquare } from "lucide-react";

interface OffCanvasFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OffCanvasForm({ isOpen, onClose }: OffCanvasFormProps) {
  // Lock body scroll when open
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white dark:bg-[#0c0c0c] shadow-2xl z-[101] flex flex-col border-l border-neutral-200 dark:border-zinc-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-100 dark:border-zinc-800/50">
              <h2 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white uppercase">
                Free Strategy Call
              </h2>
              <button
                onClick={onClose}
                className="p-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-neutral-600 dark:text-neutral-300 rounded-full transition-colors active:scale-95"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed font-medium">
                Ready to engineer your growth? Fill out the form below and our digital strategy team will be in touch shortly to schedule your free consultation.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-zinc-500 flex items-center gap-2">
                    <User className="w-3.5 h-3.5" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1cb2cb] transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-zinc-600 font-medium"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-zinc-500 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" /> Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1cb2cb] transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-zinc-600 font-medium"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-zinc-500 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1cb2cb] transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-zinc-600 font-medium"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-zinc-500 flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5" /> How can we help?
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your business goals..."
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1cb2cb] transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-zinc-600 font-medium resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 mt-4 bg-gradient-to-r from-[#502ec2] to-[#1cb2cb] hover:opacity-90 text-white rounded-xl font-bold tracking-wide transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[#1cb2cb]/20"
                >
                  Request Consultation <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
