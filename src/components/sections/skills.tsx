"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Server,
  Code2,
  Database,
  Plug,
  FileCheck2,
  ShieldCheck,
  Radio,
  Boxes,
  Wrench,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const categoryIcons: Record<string, typeof Layers> = {
  Frontend: Layers,
  Backend: Server,
  Languages: Code2,
  Databases: Database,
  "API Integration": Plug,
  "Form & Validation": FileCheck2,
  "Authentication & Payments": ShieldCheck,
  "Realtime & Web": Radio,
  "State Management": Boxes,
  "Tools & Version Control": Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Tools & technologies I work with"
          description="A growing toolkit spanning modern frontend engineering, API integration, and full-stack fundamentals."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((group, index) => {
            const Icon = categoryIcons[group.category] ?? Layers;
            return (
              <Reveal key={group.category} delay={(index % 3) * 0.08}>
                <Card className="h-full p-6 transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-semibold">{group.category}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        whileHover={{ scale: 1.06, y: -2 }}
                        className="cursor-default rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
