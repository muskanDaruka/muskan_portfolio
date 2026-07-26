"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";

const contactItems = (email: string, phone: string, location: string) => [
  { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
  { icon: Phone, label: "Phone", value: phone, href: `tel:${phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Location", value: location, href: undefined },
];

export function Contact() {
  const items = contactItems(
    portfolio.contact.email,
    portfolio.contact.phone,
    portfolio.contact.location
  );

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a role, project, or idea in mind? I'd love to hear about it."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5 lg:gap-12">
          <Reveal className="flex flex-col gap-6 lg:col-span-2">
            {items.map((item) => (
              <Card
                key={item.label}
                className="flex items-center gap-4 p-5 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block truncate text-sm font-medium hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="truncate text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </Card>
            ))}

            <Card className="flex items-center justify-between gap-4 p-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Connect
                </p>
                <p className="text-sm font-medium">Social profiles</p>
              </div>
              <SocialLinks links={portfolio.social} />
            </Card>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <Card className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-2 text-primary">
                <Send size={16} />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Send a message
                </span>
              </div>
              <ContactForm />
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
