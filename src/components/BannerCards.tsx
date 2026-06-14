"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./BannerCards.module.css";

import { Rocket, Target, Shield, TrendingUp, BarChart } from "lucide-react";

interface CardItem {
  accentColor: string;
  icon: React.FC<any>;
  title: string;
  description: string;
}

export default function BannerCards() {
  const cards: CardItem[] = [
    {
      accentColor: "#0B374D",
      icon: Rocket,
      title: "Who We Are",
      description: "A full-service digital catalyst bridging technical software engineering with high-performance creative branding."
    },
    {
      accentColor: "#1286A8",
      icon: Target,
      title: "Our Mission",
      description: "To equip ambitious enterprises with crystal-clear digital roadmaps, pristine codebases, and scalable funnels."
    },
    {
      accentColor: "#D2B53B",
      icon: Shield,
      title: "Core Values",
      description: "Uncompromising code performance, client-first design systems, and absolute transparency in marketing spend."
    },
    {
      accentColor: "#DA611E",
      icon: TrendingUp,
      title: "Our Impact",
      description: "Driving qualified client leads, optimizing operational costs, and boosting ticketing/booking conversions."
    },
    {
      accentColor: "#AC2A1A",
      icon: BarChart,
      title: "How We Promote",
      description: "Deploying targeted search engine marketing, organic SEO authority, social ads, and programmatic reach."
    }
  ];

  // Roll-down animation variants
  const listVariants: import("framer-motion").Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: import("framer-motion").Variants = {
    hidden: { 
      opacity: 0, 
      y: -80,
      rotateX: -75,
      scaleY: 0.6,
      transformOrigin: "top center"
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      scaleY: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
        mass: 0.8
      }
    }
  };

  return (
    <div className={styles.container} style={{ perspective: "1200px" }}>

      <div className="max-w-7xl mx-auto w-full">
        {/* Animated Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-xs font-black tracking-[0.25em] text-[#1cb2cb] uppercase mb-3">
            The ClickDiji Essence
          </h2>
          <h3 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Who We Are & What Drives Us
          </h3>
        </motion.div>
        
        {/* Animated Staggered List */}
        <motion.ul 
          className={styles.list}
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, idx) => (
            <motion.li 
              key={idx} 
              className={styles.listItem}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                transition: { duration: 0.25, ease: "easeOut" }
              }}
              style={{ "--accent-color": card.accentColor } as React.CSSProperties}
            >
              <div className={styles.icon}>
                <card.icon className="w-8 h-8 opacity-90" />
              </div>
              <div className={styles.title}>{card.title}</div>
              <div className={styles.descr}>{card.description}</div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
