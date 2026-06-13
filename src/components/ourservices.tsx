"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import { servicesData } from "@/app/data/services";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 4000;
const GAP_PX = 24; // matches gap-6
const SWIPE_THRESHOLD = 50;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function OurServices() {
  const total = servicesData.length;

  const [current, setCurrent] = useState(0);
  const [vis, setVis] = useState(1);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const [dragging, setDragging] = useState(false);
  const [dragDelta, setDragDelta] = useState(0);
  const startX = useRef(0);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const maxIndex = Math.max(0, total - vis);
  const isCoverflow = vis === 1;
  const dotCount = isCoverflow ? total : maxIndex + 1;

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVis(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReduceMotion(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  useEffect(() => {
    setCurrent((c) =>
      isCoverflow ? Math.min(c, total - 1) : Math.min(c, maxIndex)
    );
  }, [vis, total, maxIndex, isCoverflow]);

  const go = useCallback(
    (idx: number) => {
      if (isCoverflow) {
        setCurrent(((idx % total) + total) % total);
      } else {
        if (idx > maxIndex) setCurrent(0);
        else if (idx < 0) setCurrent(maxIndex);
        else setCurrent(idx);
      }
    },
    [isCoverflow, total, maxIndex]
  );

  useEffect(() => {
    if (paused || dragging || reduceMotion || total <= vis) return;
    timerRef.current = setTimeout(() => go(current + 1), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, dragging, reduceMotion, total, vis, go]);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    setDragging(true);
    setDragDelta(0);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragDelta(e.clientX - startX.current);
  };
  const endDrag = () => {
    if (!dragging) return;
    if (Math.abs(dragDelta) > SWIPE_THRESHOLD) {
      go(current + (dragDelta < 0 ? 1 : -1));
    }
    setDragging(false);
    setDragDelta(0);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(current - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(current + 1);
    }
  };

  const getOffset = (idx: number) => {
    let d = idx - current;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  const centerIndex = useMemo(
    () => Math.min(current + Math.floor(vis / 2), total - 1),
    [current, vis, total]
  );

  const trackTransition =
    dragging || reduceMotion ? "none" : `transform 0.6s ${EASE}`;

  return (
    <section
      id="services"
      role="region"
      aria-roledescription="carousel"
      aria-label="Our services"
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Responsive height: compact on phones, tall on desktop */}
      <div
        className="relative mx-auto flex max-w-7xl flex-col
                   px-4 md:px-12 lg:px-16
                   h-[500px] min-h-[440px]
                   md:h-[600px]
                   lg:h-[80vh] lg:min-h-[560px] lg:max-h-[820px]"
      >
        {/* ── Stage ── */}
        <div
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="relative flex min-h-0 flex-1 items-center outline-none"
        >
          {/* Prev */}
          <button
            type="button"
            aria-label="Previous service"
            onClick={() => go(current - 1)}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full
                       bg-white p-2 text-neutral-800 shadow-lg ring-1 ring-black/5
                       transition-all duration-200 hover:bg-[#502ec2] hover:text-white
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1cb2cb]
                       sm:p-2.5"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Clipping window */}
          <div
            className="relative h-full w-full overflow-hidden"
            style={{ touchAction: "pan-y" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onPointerCancel={endDrag}
          >
            {isCoverflow ? (
              /* ── MOBILE: coverflow / depth (infinite) ── */
              <div className="relative flex h-full w-full items-center justify-center">
                {servicesData.map((service, idx) => {
                  const offset = getOffset(idx);
                  const isActive = offset === 0;
                  const hidden = Math.abs(offset) > 1;
                  return (
                    <div
                      key={service.id}
                      aria-hidden={!isActive}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${idx + 1} of ${total}`}
                      style={{
                        position: "absolute",
                        width: "90%",
                        height: "94%",
                        transform: `translateX(${offset * 86}%) scale(${isActive ? 1 : 0.82
                          })`,
                        opacity: hidden ? 0 : isActive ? 1 : 0.35,
                        zIndex: isActive ? 10 : 5 - Math.abs(offset),
                        pointerEvents: hidden ? "none" : "auto",
                        transition: dragging
                          ? "none"
                          : `transform 0.55s ${EASE}, opacity 0.5s ease`,
                        willChange: "transform, opacity",
                      }}
                    >
                      <Card service={service} priority={idx === 0} compact />
                    </div>
                  );
                })}
              </div>
            ) : (
              /* ── TABLET / DESKTOP: spotlight track ── */
              <div
                className="flex h-full w-full items-center"
                style={{
                  gap: GAP_PX,
                  transform: `translateX(calc(${-current * (100 / vis)
                    }% - ${(current * GAP_PX) / vis}px + ${dragging ? dragDelta : 0
                    }px))`,
                  transition: trackTransition,
                  willChange: "transform",
                }}
              >
                {servicesData.map((service, idx) => {
                  const isActive = vis % 2 === 1 ? idx === centerIndex : true;
                  return (
                    <div
                      key={service.id}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${idx + 1} of ${total}`}
                      className="h-[90%] shrink-0"
                      style={{
                        width: `calc((100% - ${(vis - 1) * GAP_PX}px) / ${vis})`,
                        transform: `scale(${isActive ? 1 : 0.92})`,
                        opacity: isActive ? 1 : 0.6,
                        transition: reduceMotion
                          ? "none"
                          : `transform 0.5s ${EASE}, opacity 0.5s ease`,
                        willChange: "transform, opacity",
                      }}
                    >
                      <Card service={service} active={isActive} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Next */}
          <button
            type="button"
            aria-label="Next service"
            onClick={() => go(current + 1)}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full
                       bg-white p-2 text-neutral-800 shadow-lg ring-1 ring-black/5
                       transition-all duration-200 hover:bg-[#502ec2] hover:text-white
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1cb2cb]
                       sm:p-2.5"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        {/* ── Dots ── */}
        <div className="flex shrink-0 justify-center gap-1.5 py-4 md:py-5">
          {Array.from({ length: dotCount }).map((_, idx) => {
            const isOn = idx === current;
            return (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={isOn}
                onClick={() => go(idx)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: isOn ? 26 : 6,
                  background: isOn ? "#1cb2cb" : "rgba(120,120,135,0.45)",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Card ── */
function Card({
  service,
  active = true,
  priority = false,
  compact = false,
}: {
  service: (typeof servicesData)[number];
  active?: boolean;
  priority?: boolean;
  compact?: boolean;
}) {
  return (
    <article
      className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-white"
      style={{
        boxShadow: active
          ? "0 24px 64px rgba(0,0,0,0.18), 0 8px 20px rgba(0,0,0,0.08)"
          : "0 4px 16px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.5s ease",
      }}
    >
      {/* Image: bigger share on mobile so the card isn't mostly empty white */}
      <div
        className="relative overflow-hidden bg-neutral-50"
        style={{ flex: compact ? "0 0 60%" : "0 0 65%" }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          draggable={false}
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="select-none object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div
        className={`flex flex-col justify-center bg-white ${compact ? "px-5 py-4" : "px-6 py-4"
          }`}
        style={{ flex: compact ? "0 0 40%" : "0 0 35%" }}
      >
        <div className="mb-2 h-0.5 w-8 rounded-full bg-[#1cb2cb]" />
        <h3
          className={`font-bold leading-tight tracking-tight text-neutral-900 line-clamp-1 ${compact ? "text-[15px]" : "text-base lg:text-lg"
            }`}
        >
          {service.title}
        </h3>
        <p
          className={`mt-1.5 leading-relaxed text-neutral-500 line-clamp-2 ${compact ? "text-[13px]" : "text-xs lg:line-clamp-3"
            }`}
        >
          {service.shortDescription}
        </p>
      </div>
    </article>
  );
}