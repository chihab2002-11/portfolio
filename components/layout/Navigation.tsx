"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled ? "border-b-[2px] border-[var(--border-color)] bg-[var(--bg-sage)]" : "bg-[var(--bg-sage)]",
      )}
    >
      <Container as="nav" aria-label="Primary">
        <div className="flex h-16 items-center justify-between sm:h-[4.5rem]">
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick("#home");
            }}
            className="inline-flex min-h-11 items-center font-display text-sm font-bold tracking-[0.12em] text-[var(--text-primary)] transition-colors hover:text-[var(--text-secondary)]"
          >
            CH
          </a>

          <ul className="hidden items-center gap-1 md:flex" role="list">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavClick(item.href);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "bg-[var(--surface)] text-[var(--text-primary)] border-[var(--border-width)] border-[var(--border-color)]"
                        : "text-[var(--text-primary)] hover:bg-[var(--surface)]",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[var(--border-width)] border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-primary)] md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-[var(--bg-sage)] transition-all duration-200 md:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <Container className="py-5">
          <ul className="space-y-2" role="list">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavClick(item.href);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center justify-between rounded-full border-[var(--border-width)] px-4 py-3 text-base font-medium transition-colors",
                      isActive
                        ? "border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-primary)]"
                        : "border-transparent text-[var(--text-primary)] hover:border-[var(--border-color)] hover:bg-[var(--surface)]",
                    )}
                  >
                    {item.label}
                    {isActive ? (
                      <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-yellow)]" />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </header>
  );
}
