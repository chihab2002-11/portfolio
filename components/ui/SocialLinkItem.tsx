"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data/site";
import type { SocialLink } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
  phone: Phone,
} as const;

type SocialLinkItemProps = {
  link: SocialLink;
  variant?: "default" | "footer" | "hero" | "contact";
};

function getLinkHref(link: SocialLink): string {
  if (link.id === "email") return `mailto:${link.href}`;
  return link.href;
}

export function SocialLinkItem({
  link,
  variant = "default",
}: SocialLinkItemProps) {
  const Icon = iconMap[link.id];
  const href = getLinkHref(link);
  const isExternal = link.id === "github" || link.id === "linkedin";
  const labelText = link.display ?? link.label;

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={
        link.id === "phone"
          ? `Phone: ${link.display ?? link.label}`
          : link.id === "email"
            ? `Email: ${link.href}`
            : `${link.label}`
      }
      className={cn(
        "inline-flex items-center gap-2 text-sm text-text-secondary transition-all duration-300 hover:text-text-primary",
        variant === "hero" &&
          "rounded-lg border border-subtle bg-white px-3 py-2 card-shadow hover:border-accent/25 hover:text-accent",
        variant === "footer" && "hover:text-accent",
        variant === "contact" &&
          "flex-col gap-3 text-base hover:text-accent",
      )}
    >
      <Icon size={variant === "hero" || variant === "contact" ? 18 : 14} />
      <span>{variant === "contact" ? link.label : labelText}</span>
      {variant === "contact" && link.display ? (
        <span className="text-sm text-text-muted">{link.display}</span>
      ) : null}
      {variant === "contact" && link.id === "email" ? (
        <span className="text-sm text-text-muted">{link.href}</span>
      ) : null}
    </a>
  );
}

export function CvDownloadButton() {
  const [available, setAvailable] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(siteConfig.cvPath, { method: "HEAD" })
      .then((response) => {
        if (!cancelled) {
          setAvailable(response.ok);
          setChecked(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setAvailable(false);
          setChecked(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!checked || !available) {
    return (
      <button
        type="button"
        disabled
        title="Add your CV to public/assets/cv.pdf"
        className="inline-flex h-12 cursor-not-allowed items-center justify-center rounded-lg border border-subtle bg-white px-6 text-sm text-text-muted opacity-70"
      >
        CV unavailable
      </button>
    );
  }

  return (
    <a
      href={siteConfig.cvPath}
      download
      className="inline-flex h-12 items-center justify-center rounded-lg border border-subtle bg-white px-6 text-sm font-medium text-text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
    >
      Download CV
    </a>
  );
}
