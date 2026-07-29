"use client";

import Link from "next/link";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { AnimatedBackground } from "@/components/animated-background";
import { SocialLinks } from "@/components/social-links";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Hero() {
  const typed = useTypingAnimation(portfolio.hero.taglines);
  const initials = portfolio.hero.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      <AnimatedBackground />

      <div className="section-container grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary sm:text-sm"
          >
            <Sparkles size={14} />
            {portfolio.contact.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{portfolio.hero.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex h-8 items-center text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl"
          >
            <span aria-hidden className="mr-1 text-foreground/70">
              {"//"}
            </span>
            <span className="text-foreground">{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-[2px] animate-caret bg-primary" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {portfolio.hero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Link href="/resume" className={cn(buttonVariants({ size: "lg" }))}>
              View Resume
            </Link>
            <a
              href={portfolio.hero.resumeUrl}
              download
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 pt-4"
          >
            <span className="text-sm text-muted-foreground">Find me on</span>
            <SocialLinks links={portfolio.social} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto flex aspect-square w-full max-w-xs items-center justify-center sm:max-w-sm lg:max-w-md"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-primary/25"
          />
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] opacity-20 blur-2xl" />
          <div className="relative h-4/5 w-4/5 overflow-hidden rounded-full border border-border bg-card shadow-2xl shadow-primary/10">
            <Image
              src={`${process.env.NODE_ENV === "production" ? "/muskan_portfolio" : ""}/images/profile.png`} // Place your image inside the public folder
              alt={portfolio.hero.name}
              fill
              priority
              className="object-cover"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -bottom-2 left-2 flex items-center gap-2 rounded-2xl border border-border px-4 py-2 text-xs font-medium shadow-lg sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            2+ Years Experience
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -top-2 right-0 flex items-center gap-2 rounded-2xl border border-border px-4 py-2 text-xs font-medium shadow-lg sm:text-sm"
          >
            React.js &middot; Next.js
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card/70 p-2 text-muted-foreground backdrop-blur transition-colors hover:text-foreground sm:flex"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
