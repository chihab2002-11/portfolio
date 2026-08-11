import { education, experience, learningAreas } from "@/lib/data/experience";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { TechBadge } from "@/components/ui/TechBadge";

export function ExperienceSection() {
  return (
    <Section id="experience" ariaLabel="Experience and education" className="section-tint-pink" decor="experience">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Professional exposure & academic foundation"
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Experience timeline */}
          <Reveal>
            <div>
              <h3 className="font-display text-xl font-medium text-text-primary">
                Experience
              </h3>
              <div className="relative mt-6 space-y-6 border-l border-subtle pl-6">
                {experience.map((item) => (
                  <article key={item.id} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border border-accent/40 bg-accent/20"
                    />
                    <p className="font-mono text-xs uppercase tracking-wider text-accent">
                      {item.duration}
                    </p>
                    <h4 className="mt-1 font-display text-lg text-text-primary">
                      {item.role}
                    </h4>
                    <p className="text-sm text-text-secondary">{item.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={0.05}>
            <div>
              <h3 className="font-display text-xl font-medium text-text-primary">
                Education
              </h3>
              <Card className="mt-6">
                <p className="font-display text-lg text-text-primary">
                  {education.degree}
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  Specialization: {education.specialization}
                </p>

                <div className="mt-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Academic foundations
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {education.foundations.map((item) => (
                      <TechBadge key={item} label={item} />
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Leading toward
                  </p>
                  <ul className="mt-3 space-y-2" role="list">
                    {education.directions.map((direction) => (
                      <li
                        key={direction}
                        className="text-sm text-text-secondary"
                      >
                        · {direction}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </Reveal>
        </div>

        {/* Learning direction */}
        <Reveal delay={0.1}>
          <div className="mt-14 rounded-2xl border border-subtle bg-white p-6 sm:p-8 card-shadow">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Direction
            </p>
            <h3 className="mt-3 font-display text-2xl font-medium text-text-primary sm:text-3xl">
              Where I&apos;m going next
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-text-secondary sm:text-base">
              Current areas of exploration — an evolving map of topics I am
              actively learning and applying through software projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {learningAreas.map((area, index) => (
                <TechBadge
                  key={area}
                  label={area}
                  variant={index % 3 === 0 ? "accent" : "default"}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
