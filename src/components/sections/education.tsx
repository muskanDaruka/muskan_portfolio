"use client";

import { GraduationCap, Calendar, Award } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function Education() {
  if (portfolio.education.length === 0) return null;

  return (
    <section id="education" className="relative py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Education"
          title="Academic background"
          description="The foundation that shaped my approach to problem-solving and software engineering."
        />

        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-6">
          {portfolio.education.map((edu, index) => (
            <Reveal key={edu.id} delay={index * 0.1}>
              <Card className="flex flex-col gap-4 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 sm:flex-row sm:items-center">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm font-medium text-primary">{edu.institution}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} />
                      {edu.duration}
                    </span>
                    {edu.score && (
                      <span className="inline-flex items-center gap-1.5">
                        <Award size={13} />
                        {edu.score}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
