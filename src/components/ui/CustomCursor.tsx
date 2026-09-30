"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view" | "hidden">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch / reduced motion
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (touch || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    document.documentElement.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewTarget = target.closest("[data-cursor='view']");
      if (viewTarget) {
        setCursorType("view");
        return;
      }

      const interactiveTarget = target.closest("a, button, input, textarea, [data-cursor='pointer']");
      if (interactiveTarget) {
        setCursorType("pointer");
        return;
      }

      setCursorType("default");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Spring Follower */}
      <motion.div
        className="fixed left-0 top-0 flex items-center justify-center rounded-full pointer-events-none select-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType === "view" ? 84 : cursorType === "pointer" ? 44 : 26,
          height: cursorType === "view" ? 84 : cursorType === "pointer" ? 44 : 26,
          backgroundColor:
            cursorType === "view"
              ? "rgba(56, 189, 248, 0.95)"
              : cursorType === "pointer"
              ? "rgba(255, 255, 255, 0.12)"
              : "rgba(255, 255, 255, 0.04)",
          borderColor:
            cursorType === "view"
              ? "rgba(56, 189, 248, 0.8)"
              : cursorType === "pointer"
              ? "rgba(255, 255, 255, 0.4)"
              : "rgba(255, 255, 255, 0.2)",
          borderWidth: cursorType === "view" ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
      >
        {cursorType === "view" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[11px] font-bold tracking-widest text-slate-950 uppercase"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>

      {/* Tiny Precision Inner Dot */}
      {cursorType !== "view" && (
        <motion.div
          className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 pointer-events-none"
          style={{
            x: mouseX,
            y: mouseY,
          }}
        />
      )}
    </div>
  );
};
