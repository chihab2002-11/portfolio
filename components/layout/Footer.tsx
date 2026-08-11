import { siteConfig, socialLinks } from "@/lib/data/site";
import { Container } from "@/components/ui/Container";
import { SocialLinkItem } from "@/components/ui/SocialLinkItem";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-subtle bg-white py-12 sm:py-14">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-lg font-medium tracking-tight text-text-primary">
              {siteConfig.name.toUpperCase()}
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              {siteConfig.footerTagline}
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-4 sm:gap-6" role="list">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <SocialLinkItem link={link} variant="footer" />
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-xs text-text-muted">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
