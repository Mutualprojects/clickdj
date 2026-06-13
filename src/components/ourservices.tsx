"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { servicesData } from "@/app/data/services";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 3500;
const GAP_PX = 24; // gap-6 equivalent in pixels

export default function OurServices() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = servicesData.length;

  // Responsive visible count
  const [vis, setVis] = useState(1);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) {
        setVis(3); // Desktop / Laptop
      } else if (window.innerWidth >= 768) {
        setVis(2); // Tablet
      } else {
        setVis(1); // Mobile
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, total - vis);

  const go = useCallback(
    (idx: number) => {
      if (vis === 1) {
        // Mobile depth loop
        setCurrent(((idx % total) + total) % total);
      } else {
        // Desktop normal wrap
        if (idx > maxIndex) {
          setCurrent(0);
        } else if (idx < 0) {
          setCurrent(maxIndex);
        } else {
          setCurrent(idx);
        }
      }
    },
    [total, vis, maxIndex]
  );

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setTimeout(() => {
      go(current + 1);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isHovered, go]);

  // Drag swipe for mobile
  const onDragStart = (x: number) => {
    setDragging(true);
    dragStartX.current = x;
  };
  const onDragEnd = (x: number) => {
    if (!dragging) return;
    setDragging(false);
    const diff = dragStartX.current - x;
    if (Math.abs(diff) > 50) {
      go(current + (diff > 0 ? 1 : -1));
    }
  };

  const getOffset = (idx: number) => {
    let d = idx - current;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden"
      style={{ background: "transparent" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative max-w-7xl mx-auto px-12 sm:px-16 flex flex-col"
        style={{ height: "80vh", minHeight: 560 }}
      >
        {/* ── Carousel Stage ── */}
        <div className="relative flex-1 flex items-center min-h-0">
          
          {/* Left Arrow (Positioned inside outer padding) */}
          <button
            onClick={() => go(current - 1)}
            className="absolute left-0 z-20 p-2 sm:p-2.5 rounded-full
                       bg-white/10 backdrop-blur-sm border border-white/20 text-white
                       hover:bg-white hover:text-neutral-900
                       transition-all duration-200 shadow-lg shrink-0"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Cards Track (Clips perfectly on borders) */}
          <div className="relative w-full h-full flex items-center overflow-hidden">
            {vis === 1 ? (
              /* MOBILE MODE: Depth Carousel */
              <div className="relative w-full h-full flex items-center justify-center">
                {servicesData.map((service, idx) => {
                  const offset = getOffset(idx);
                  const isActive = offset === 0;
                  const translateX = offset * 80;
                  const scale = isActive ? 1 : 0.88;
                  const opacity = Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.6;
                  const zIndex = isActive ? 10 : 5 - Math.abs(offset);

                  return (
                    <div
                      key={service.id}
                      onMouseDown={(e) => onDragStart(e.clientX)}
                      onMouseUp={(e) => onDragEnd(e.clientX)}
                      onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
                      onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
                      style={{
                        position: "absolute",
                        width: "80%",
                        height: "88%",
                        transform: `translateX(${translateX}%) scale(${scale})`,
                        opacity,
                        zIndex,
                        transition: dragging
                          ? "none"
                          : "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease",
                        willChange: "transform, opacity",
                      }}
                    >
                      <article className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col bg-white border border-neutral-100/80 shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
                        <div className="relative overflow-hidden" style={{ flex: "0 0 65%" }}>
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="80vw"
                            priority={idx === 0}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center px-4 py-3" style={{ flex: "0 0 35%" }}>
                          <div className="w-8 h-0.5 bg-neutral-200 mb-2 rounded-full" />
                          <h3 className="text-sm font-extrabold text-neutral-900 leading-tight tracking-tight line-clamp-1">
                            {service.title}
                          </h3>
                          <p className="mt-1.5 text-[11px] text-neutral-500 leading-relaxed line-clamp-2">
                            {service.shortDescription}
                          </p>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* DESKTOP/TABLET MODE: Sliding Spotlight Depth Carousel */
              <div 
                className="flex w-full h-full items-center transition-transform duration-550 cubic-bezier(0.25, 0.46, 0.45, 0.94) gap-6"
                style={{
                  transform: `translateX(calc(-${current} * (100% + ${GAP_PX}px) / ${vis}))`,
                }}
              >
                {servicesData.map((service, idx) => {
                  const centerIndex = (current + Math.floor(vis / 2)) % total;
                  const isActive = idx === centerIndex;
                  const scale = isActive ? 1 : 0.92;
                  const opacity = isActive ? 1 : 0.65;

                  return (
                    <div
                      key={service.id}
                      className="shrink-0 h-[88%] transition-all duration-500 ease-out"
                      style={{
                        width: `calc((100% - ${(vis - 1) * GAP_PX}px) / ${vis})`,
                        willChange: "transform",
                      }}
                    >
                      <article 
                        className="w-full h-full rounded-3xl overflow-hidden flex flex-col bg-white border border-neutral-100 transition-all duration-500 ease-out"
                        style={{
                          transform: `scale(${scale})`,
                          opacity,
                          boxShadow: isActive
                            ? "0 24px 64px rgba(0,0,0,0.18), 0 8px 20px rgba(0,0,0,0.08)"
                            : "0 4px 16px rgba(0,0,0,0.05)",
                        }}
                      >
                        {/* Image Column */}
                        <div className="relative overflow-hidden w-full h-full group" style={{ flex: "0 0 65%" }}>
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        {/* Title and Description Column */}
                        <div className="flex flex-col justify-center px-6 py-4 bg-white" style={{ flex: "0 0 35%" }}>
                          <div className="w-8 h-0.5 bg-neutral-200 mb-2 rounded-full" />
                          <h3 className="text-base font-extrabold text-neutral-900 leading-tight tracking-tight line-clamp-1">
                            {service.title}
                          </h3>
                          <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed line-clamp-3">
                            {service.shortDescription}
                          </p>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Arrow (Positioned inside outer padding) */}
          <button
            onClick={() => go(current + 1)}
            className="absolute right-0 z-20 p-2 sm:p-2.5 rounded-full
                       bg-white/10 backdrop-blur-sm border border-white/20 text-white
                       hover:bg-white hover:text-neutral-900
                       transition-all duration-200 shadow-lg shrink-0"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

        </div>

        {/* ── Dot Indicators ── */}
        <div className="flex justify-center gap-1.5 py-5 shrink-0">
          {Array.from({ length: vis === 1 ? total : maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => go(idx)}
              className="rounded-full transition-all duration-300"
              style={{
                width: idx === current ? 24 : 6,
                height: 6,
                background: idx === current ? "#1cb2cb" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}