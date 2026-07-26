"use client";

import type { RefObject } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { useCounter } from "@/hooks/use-counter";

function StatCounter({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { ref, value: count } = useCounter(value);
  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left"
    >
      <span className="text-3xl font-bold text-gradient sm:text-4xl">
        {count}
        {suffix}
      </span>
      <span className="text-xs text-muted-foreground sm:text-sm">{label}</span>
    </div>
  );
}

const milestones = [
  ...portfolio.education.map((edu) => ({
    id: edu.id,
    icon: "education" as const,
    title: edu.degree,
    subtitle: edu.institution,
    duration: edu.duration,
  })),
  ...[...portfolio.experience].reverse().map((exp) => ({
    id: exp.id,
    icon: "work" as const,
    title: exp.role,
    subtitle: exp.company,
    duration: exp.duration,
  })),
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="About Me"
          title="The developer behind the code"
          description={portfolio.about.summary}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            {portfolio.about.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {paragraph}
              </p>
            ))}

            <div className="mt-4 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card p-6 sm:grid-cols-4">
              {portfolio.about.stats.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="relative border-l border-border pl-8">
              {milestones.map((item, index) => (
                <li key={item.id} className="relative pb-10 last:pb-0">
                  <span
                    className={
                      "absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm"
                    }
                  >
                    {item.icon === "education" ? (
                      <GraduationCap size={15} />
                    ) : (
                      <Briefcase size={15} />
                    )}
                  </span>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {item.duration}
                  </p>
                  <h3 className="mt-1 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  {index !== milestones.length - 1 && (
                    <span className="absolute left-[-2.05rem] top-9 h-full w-px bg-border" />
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.about.strengths.map((strength, i) => (
            <Reveal key={strength.title} delay={i * 0.08}>
              <Card className="h-full p-6 transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <h3 className="font-semibold">{strength.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {strength.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-center text-xl font-semibold sm:text-2xl">What I Do</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.about.whatIDo.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <Card className="h-full border-dashed p-6 text-center transition-all hover:border-solid hover:border-primary/40">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
