import type { Metadata } from "next";
import { ResumeViewer } from "@/components/resume-viewer";
import { Container } from "@/components/ui/container";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Resume — ${portfolio.hero.name}`,
  description: `View, print, or download the resume of ${portfolio.hero.name}, ${portfolio.hero.title}.`,
};

export default function ResumePage() {
  return (
    <main className="min-h-screen pb-24 pt-24 sm:pt-28">
      <Container>
        <ResumeViewer />
      </Container>
    </main>
  );
}
