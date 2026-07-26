"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolio } from "@/data/portfolio";
import { SocialLinks } from "@/components/social-links";
import { Container } from "@/components/ui/container";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const year = new Date().getFullYear();

  function resolveHref(href: string) {
    if (href.startsWith("#")) {
      return isHome ? href : `/${href}`;
    }
    return href;
  }

  return (
    <footer className="relative border-t border-border bg-muted/40">
      <Container className="flex flex-col gap-8 py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              Muskan
            </Link>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {portfolio.hero.title} — {portfolio.contact.location}
            </p>
          </div>
          <SocialLinks links={portfolio.social} />
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 text-sm text-muted-foreground"
        >
          {portfolio.nav.map((item) => (
            <Link
              key={item.label}
              href={resolveHref(item.href)}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {portfolio.hero.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
