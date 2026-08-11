"use client";

import { siteConfig, socialLinks } from "@/lib/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SocialLinkItem, CvDownloadButton } from "@/components/ui/SocialLinkItem";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center pt-16"
    >
      <HeroBackground />

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-text-muted sm:text-sm">
              {siteConfig.label}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-text-primary">
              {siteConfig.name.toUpperCase()}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-snug text-text-primary sm:text-2xl">
              {siteConfig.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Computer Science student with an Information Systems foundation,
              building full-stack and backend systems while exploring AI,
              local LLMs, and Data Science through practical software projects.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border-[var(--border-width)] border-[var(--border-color)] bg-[var(--accent-yellow)] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-primary)] sm:text-[13px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--text-primary)] opacity-40 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--text-primary)]" />
              </span>
              {siteConfig.availability}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#work" variant="primary" size="lg">
                Explore My Work
              </Button>
              <CvDownloadButton />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <SocialLinkItem key={link.id} link={link} variant="hero" />
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 hidden sm:block">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-text-muted transition-colors hover:text-text-secondary"
          >
            <ArrowDown size={14} aria-hidden="true" />
            Scroll
          </a>
        </div>
      </Container>
    </section>
  );
}
