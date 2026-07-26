"use client";

import { ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          description="A snapshot of platforms and products I've built and contributed to."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 0.1} className="h-full">
              <Card className="group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <div className="relative h-2 w-full bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] opacity-80" />
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-5">
                  <ul className="flex flex-col gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <GithubIcon size={14} />
                        Code
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-4 py-2 text-xs font-medium text-muted-foreground/60">
                        <GithubIcon size={14} />
                        Private repository
                      </span>
                    )}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
