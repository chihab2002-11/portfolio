import {
  aiExplainer,
  expertSystemProject,
  luminaProject,
} from "@/lib/data/projects";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { AIExplainerVisual } from "@/components/sections/AIExplainerVisual";
import { LuminaGallery } from "@/components/sections/LuminaGallery";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AbstractBackground } from "@/components/ui/AbstractBackground";

export function Work() {
  return (
    <Section id="work" ariaLabel="Selected work" className="section-tint-warm" decor="work">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Work"
            title="Systems built with purpose"
            description="From comprehensive platforms to focused technical experiments — each project reflects a step toward intelligent, well-engineered software."
          />
        </Reveal>

        {/* Lumina Academy — featured */}
        <article className="relative mt-14 overflow-hidden rounded-2xl border border-subtle bg-white card-shadow">
          <AbstractBackground variant="lumina" />
          <div className="relative z-[1]">
          <div className="border-b border-subtle px-5 py-4 sm:px-8 sm:py-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Featured Project
              </span>
              <span className="text-text-muted">·</span>
              <span className="font-mono text-xs text-text-muted">01</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-subtle p-5 sm:p-8 lg:border-b-0 lg:border-r">
              <Reveal>
                <h3 className="font-display text-3xl font-medium tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                  {luminaProject.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                  {luminaProject.subtitle}
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {luminaProject.technologies.map((tech) => (
                    <TechBadge key={tech} label={tech} variant="accent" />
                  ))}
                </div>
              </Reveal>

              {(luminaProject.githubUrl || luminaProject.liveUrl) ? (
                <Reveal delay={0.07}>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {luminaProject.githubUrl ? (
                      <a
                        href={luminaProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 items-center gap-2 rounded-full border border-subtle bg-text-primary px-4 text-sm font-medium text-bg-primary transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        GitHub
                      </a>
                    ) : null}
                    {luminaProject.liveUrl ? (
                      <a
                        href={luminaProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 items-center gap-2 rounded-full border border-subtle bg-bg-secondary px-4 text-sm font-medium text-text-primary transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        Live Demo
                        <ExternalLink size={15} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </Reveal>
              ) : null}

              <div className="mt-10 space-y-8">
                <Reveal delay={0.08}>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
                      Problem
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                      {luminaProject.problem}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
                      Solution
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                      {luminaProject.solution}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.12}>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
                      Engineering
                    </p>
                    <ul className="mt-3 space-y-2" role="list">
                      {luminaProject.engineering.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-text-secondary sm:text-base"
                        >
                          <ArrowRight
                            size={14}
                            className="mt-1 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <Reveal delay={0.06}>
                <LuminaGallery screenshots={luminaProject.screenshots} />
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-6">
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
                    Platform capabilities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {luminaProject.features.map((feature) => (
                      <TechBadge
                        key={feature.id}
                        label={feature.label}
                        variant="accent"
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          </div>
        </article>

        {/* AI Material Explainer */}
        <article className="relative mt-10 overflow-hidden rounded-2xl border border-subtle bg-bg-secondary/60">
          <AbstractBackground variant="ai" />
          <div className="relative z-[1] grid gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-10">
            <Reveal>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Lumina · AI Feature
                </p>
                <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
                  {aiExplainer.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {aiExplainer.description}
                </p>

                <div className="mt-8">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
                    Pipeline
                  </p>
                  <ol className="mt-4 space-y-0" role="list">
                    {aiExplainer.pipeline.map((step, index) => (
                      <li key={step} className="relative pl-6">
                        {index < aiExplainer.pipeline.length - 1 ? (
                          <span
                            aria-hidden="true"
                            className="absolute left-[7px] top-5 h-[calc(100%-4px)] w-px bg-border"
                          />
                        ) : null}
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border border-accent/30 bg-accent/10"
                        />
                        <p className="py-1.5 font-mono text-xs text-text-secondary sm:text-sm">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                <ul className="mt-6 space-y-2" role="list">
                  {aiExplainer.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm text-text-secondary"
                    >
                      · {detail}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-xs leading-relaxed text-text-muted">
                  {aiExplainer.disclaimer}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <AIExplainerVisual />
            </Reveal>
          </div>
        </article>

        {/* Expert System */}
        <article className="mt-10">
          <Reveal>
            <Card className="overflow-hidden">
              <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                      Secondary Project
                    </span>
                    <span className="font-mono text-xs text-accent">02</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-medium text-text-primary sm:text-3xl">
                    {expertSystemProject.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
                    {expertSystemProject.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {expertSystemProject.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} variant="accent" />
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-subtle bg-white p-5 card-shadow">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
                    Inference flow
                  </p>
                  <div className="mt-4 space-y-2">
                    {expertSystemProject.pipeline.map((step, index) => (
                      <div key={step}>
                        <div className="rounded-lg border border-subtle bg-bg-secondary px-3 py-2.5 font-mono text-xs text-text-secondary">
                          {step}
                        </div>
                        {index < expertSystemProject.pipeline.length - 1 ? (
                          <p
                            aria-hidden="true"
                            className="py-1 text-center font-mono text-xs text-accent"
                          >
                            ↓
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </article>
      </Container>
    </Section>
  );
}
