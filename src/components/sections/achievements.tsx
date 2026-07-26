"use client";

import { Trophy } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function Achievements() {
  if (portfolio.achievements.length === 0) return null;

  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <Container>
        <SectionTitle eyebrow="Achievements" title="Milestones worth celebrating" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.achievements.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <Card className="flex h-full flex-col gap-3 p-6 transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Trophy size={20} />
                </span>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
