"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        animate={{ y: [0, 24, 0], x: [0, 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-[var(--gradient-start)]/30 blur-[110px] animate-blob"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-[var(--gradient-mid)]/25 blur-[120px] animate-blob"
      />
      <motion.div
        animate={{ y: [0, 18, 0], x: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-8rem] left-1/4 h-[24rem] w-[24rem] rounded-full bg-[var(--gradient-end)]/25 blur-[120px] animate-blob"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] [background-size:28px_28px] opacity-[0.35]" />
    </div>
  );
}
