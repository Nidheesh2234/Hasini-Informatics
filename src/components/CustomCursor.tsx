"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "link" | "project" | "drag">("default");
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch / coarse pointer devices
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasTouch || isCoarse || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    // Context detection via event bubbling and data attributes
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorContext = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorContext) {
        const type = cursorContext.getAttribute("data-cursor");
        if (type === "project") {
          setCursorVariant("project");
          setCursorText("VIEW");
          return;
        } else if (type === "drag") {
          setCursorVariant("drag");
          setCursorText("DRAG");
          return;
        } else if (type === "cta") {
          setCursorVariant("link");
          setCursorText("EXPLORE");
          return;
        }
      }

      const interactive = target.closest("a, button, input, textarea, select, [role='button']");
      if (interactive) {
        setCursorVariant("link");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, visible]);

  if (isTouchDevice || !mounted || !visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Spring Follower Ring / Badge */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:
            cursorVariant === "project" || cursorVariant === "drag"
              ? 84
              : cursorVariant === "link"
              ? 48
              : 28,
          height:
            cursorVariant === "project" || cursorVariant === "drag"
              ? 84
              : cursorVariant === "link"
              ? 48
              : 28,
          backgroundColor:
            cursorVariant === "project"
              ? "rgba(139, 92, 246, 0.9)"
              : cursorVariant === "drag"
              ? "rgba(6, 182, 212, 0.9)"
              : cursorVariant === "link"
              ? "rgba(236, 72, 153, 0.2)"
              : "rgba(255, 255, 255, 0.04)",
          borderColor:
            cursorVariant === "project"
              ? "rgba(217, 70, 239, 0.8)"
              : cursorVariant === "drag"
              ? "rgba(56, 189, 248, 0.8)"
              : cursorVariant === "link"
              ? "rgba(236, 72, 153, 0.6)"
              : "rgba(255, 255, 255, 0.35)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="rounded-full border backdrop-blur-xs flex items-center justify-center text-white text-[10px] font-mono font-bold tracking-widest shadow-[0_0_20px_rgba(139,92,246,0.3)]"
      >
        {cursorText && (
          <span className="select-none tracking-widest drop-shadow">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center High-Precision Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorVariant === "project" || cursorVariant === "drag" ? 0 : 1,
        }}
        className="fixed w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] pointer-events-none"
      />
    </div>
  );
}
