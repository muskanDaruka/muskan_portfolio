"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

const sectionIds = portfolio.nav
  .filter((item) => item.href.startsWith("#"))
  .map((item) => item.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrolled } = useScrollProgress();
  const activeSection = useActiveSection(sectionIds);

  const isHome = pathname === "/";

  function resolveHref(href: string) {
    if (href.startsWith("#")) {
      return isHome ? href : `/${href}`;
    }
    return href;
  }

  function isActive(href: string) {
    if (href.startsWith("#")) {
      return isHome && activeSection === href.slice(1);
    }
    return pathname === href;
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border shadow-sm" : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight sm:text-xl"
          aria-label="Muskan Daruka — home"
        >
          Muskan
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {portfolio.nav.map((item) => (
            <Link
              key={item.label}
              href={resolveHref(item.href)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                isActive(item.href) && "text-foreground"
              )}
            >
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-muted"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={portfolio.hero.resumeUrl}
            download
            className={cn(buttonVariants({ size: "sm" }))}
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            aria-label="Mobile"
            className="overflow-hidden glass border-t border-border lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {portfolio.nav.map((item) => (
                <Link
                  key={item.label}
                  href={resolveHref(item.href)}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                    isActive(item.href) && "bg-muted text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={portfolio.hero.resumeUrl}
                download
                className={cn(buttonVariants({ size: "md" }), "mt-2 w-full")}
              >
                <Download size={16} />
                Download Resume
              </a>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
