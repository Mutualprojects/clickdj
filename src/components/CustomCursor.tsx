"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device has a fine pointer (mouse) instead of touch
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
      
      const mouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      };

      const mouseOver = (e: MouseEvent) => {
        // Check if we are hovering over an interactive element
        const target = e.target as HTMLElement;
        if (
          target.tagName.toLowerCase() === 'a' ||
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') ||
          target.closest('button') ||
          window.getComputedStyle(target).cursor === 'pointer'
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };

      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseover", mouseOver);

      return () => {
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("mouseover", mouseOver);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        body, a, button, [role="button"] {
          cursor: none !important;
        }
      `}} />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 16),
          y: mousePosition.y - (isHovering ? 24 : 16),
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            rotate: isHovering ? 15 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-8 h-8 sm:w-8 sm:h-8"
        >
          {/* We use the favicon icon as the cursor image */}
          <Image
            src="/icon.png"
            alt="Cursor"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>
    </>
  );
}
