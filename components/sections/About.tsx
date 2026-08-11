import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";

export function About() {
  return (
    <Section id="about" ariaLabel="About" className="section-tint-pink" decor="about">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A Computer Science student who likes building things."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              <p>
                I am a Computer Science student specializing in Information
                Systems, with a focus on building real software — not just
                studying concepts in isolation.
              </p>
              <p>
                My work spans full-stack and backend development: structured
                applications, database-backed systems, and interfaces that
                support meaningful workflows. I am especially interested in how
                intelligent functionality can be integrated thoughtfully into
                existing software.
              </p>
              <p>
                Computer Science student exploring AI, Data Science, and
                intelligent systems through practical software projects — from
                school management platforms to knowledge-based systems and local
                LLM integration.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="h-full bg-[var(--surface)]">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                Focus
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]" role="list">
                <li>Information Systems foundation</li>
                <li>Full-stack & backend development</li>
                <li>Real-world software systems</li>
                <li>AI experimentation with local LLMs</li>
                <li>Data Science & continuous learning</li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
