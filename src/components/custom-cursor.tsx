"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

export function CustomCursor() {
  const isDesktop = useMediaQuery("(min-width: 1024px) and (pointer: fine)");
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (!isDesktop) return;

    function handleMove(e: MouseEvent) {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
      const target = e.target as HTMLElement;
      setIsPointer(Boolean(target.closest("a, button, [role='button'], input, textarea")));
    }
    function handleEnter() {
      setVisible(true);
    }
    function handleLeave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [isDesktop, cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <motion.div
      aria-hidden
      className="custom-cursor bg-white"
      style={{
        x: springX,
        y: springY,
        width: isPointer ? 36 : 20,
        height: isPointer ? 36 : 20,
        opacity: visible ? 1 : 0,
      }}
      transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
    />
  );
}
