"use client";

import { Award, ExternalLink } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function Certifications() {
  if (portfolio.certifications.length === 0) return null;

  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Certifications"
          title="Licenses & certifications"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.08}>
              <Card className="flex h-full flex-col gap-3 p-6 transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Award size={20} />
                </span>
                <h3 className="font-semibold">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                {cert.date && <p className="text-xs text-muted-foreground">{cert.date}</p>}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                  >
                    View credential <ExternalLink size={12} />
                  </a>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
