"use client";

import { Briefcase, MapPin, Calendar } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Experience"
          title="Where I've made an impact"
          description="A track record of shipping production features across frontend, backend, and full-stack teams."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="flex flex-col gap-10">
            {portfolio.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal key={exp.id} delay={index * 0.08} className="relative">
                  <div
                    className={cn(
                      "flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-12",
                    )}
                  >
                    <div
                      className={cn(
                        "hidden sm:block",
                        isEven ? "order-1" : "order-2"
                      )}
                    />
                    <div className={cn(isEven ? "sm:order-2" : "sm:order-1")}>
                      <span
                        aria-hidden
                        className="absolute left-[9px] top-1.5 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground sm:left-1/2"
                      >
                        <Briefcase size={12} />
                      </span>

                      <Card className="ml-8 p-6 transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 sm:ml-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge className="border-primary/30 bg-primary/10 text-primary">
                            {exp.type}
                          </Badge>
                          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar size={13} />
                            {exp.duration}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                            <MapPin size={13} />
                            {exp.location}
                          </span>
                        </div>

                        <h3 className="mt-3 text-lg font-semibold">{exp.role}</h3>
                        <p className="text-sm font-medium text-primary">{exp.company}</p>

                        <ul className="mt-4 flex flex-col gap-2">
                          {exp.responsibilities.map((item, i) => (
                            <li
                              key={i}
                              className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </div>
                      </Card>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
