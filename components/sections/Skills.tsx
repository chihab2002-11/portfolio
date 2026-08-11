import { skillCategories } from "@/lib/data/skills";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";

export function Skills() {
  return (
    <Section id="skills" ariaLabel="Skills" className="section-tint-warm" decor="skills">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technical knowledge map"
            description="Technologies and areas I work with — presented without artificial proficiency scores."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.05}>
              <Card hover className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-medium text-text-primary">
                      {category.title}
                    </h3>
                  </div>
                  <span
                    aria-hidden="true"
                    className="mt-1 h-8 w-px bg-gradient-to-b from-accent/60 to-transparent"
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <TechBadge
                      key={item}
                      label={item}
                      variant={category.id === "ai-data" ? "accent" : "default"}
                    />
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
