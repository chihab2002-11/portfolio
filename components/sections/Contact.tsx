import { socialLinks } from "@/lib/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinkItem } from "@/components/ui/SocialLinkItem";

export function Contact() {
  return (
    <Section
      id="contact"
      ariaLabel="Contact"
      className="section-tint-pink pb-28 sm:pb-32"
      decor="contact"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Let&apos;s build something meaningful.
            </h2>
            <p className="mt-4 text-base text-text-secondary sm:text-lg">
              Open to conversations about Master&apos;s opportunities, software
              projects, and thoughtful technical collaboration.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
            {socialLinks.map((link) => (
              <SocialLinkItem key={link.id} link={link} variant="contact" />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
