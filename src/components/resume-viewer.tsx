"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Printer, FileWarning } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

export function ResumeViewer() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const resumeUrl = portfolio.hero.resumeUrl;

  function handlePrint() {
    const frameWindow = iframeRef.current?.contentWindow;
    if (frameWindow) {
      frameWindow.focus();
      frameWindow.print();
    } else {
      window.open(resumeUrl, "_blank");
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass sticky top-20 z-30 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border p-4 sm:top-24"
      >
        <div>
          <h1 className="text-lg font-semibold sm:text-xl">{portfolio.hero.name} — Resume</h1>
          <p className="text-sm text-muted-foreground">{portfolio.hero.title}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={resumeUrl}
            download="Muskan-Daruka-Resume.pdf"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] px-5 text-sm font-medium text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
          >
            <Download size={15} />
            Download
          </a>
          <Button variant="secondary" size="sm" onClick={handlePrint} type="button">
            <Printer size={15} />
            Print
          </Button>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ExternalLink size={15} />
            Open in new tab
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="overflow-hidden rounded-2xl border border-border bg-muted shadow-inner"
      >
        {isMobile || loadFailed ? (
          <div className="flex flex-col items-center justify-center gap-4 px-6 py-20 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FileWarning size={24} />
            </span>
            <div>
              <p className="font-medium">Inline preview isn&apos;t available on this device.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Use the buttons above to download the PDF or open it in a new tab.
              </p>
            </div>
          </div>
        ) : (
          <object
            data={resumeUrl}
            type="application/pdf"
            className="h-[80vh] w-full min-h-[600px]"
            aria-label="Resume PDF preview"
            onError={() => setLoadFailed(true)}
          >
            <iframe
              ref={iframeRef}
              src={resumeUrl}
              title="Resume PDF preview"
              className="h-[80vh] w-full min-h-[600px]"
              onError={() => setLoadFailed(true)}
            />
          </object>
        )}
      </motion.div>
    </div>
  );
}
