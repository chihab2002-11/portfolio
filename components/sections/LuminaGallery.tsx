"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectScreenshot } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

type LuminaGalleryProps = {
  screenshots: ProjectScreenshot[];
};

export function LuminaGallery({ screenshots }: LuminaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const visibleScreenshots = useMemo(
    () => screenshots.filter((screenshot) => !failedImages.has(screenshot.image)),
    [failedImages, screenshots],
  );
  const safeActiveIndex =
    activeIndex === null || visibleScreenshots.length === 0
      ? null
      : Math.min(activeIndex, visibleScreenshots.length - 1);

  const activeScreenshot =
    safeActiveIndex === null ? null : visibleScreenshots[safeActiveIndex] ?? null;

  const closeLightbox = () => setActiveIndex(null);
  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + visibleScreenshots.length) % visibleScreenshots.length,
    );
  };
  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % visibleScreenshots.length,
    );
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft" && visibleScreenshots.length > 1) {
        setActiveIndex((current) =>
          current === null
            ? null
            : (current - 1 + visibleScreenshots.length) %
              visibleScreenshots.length,
        );
      }
      if (event.key === "ArrowRight" && visibleScreenshots.length > 1) {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % visibleScreenshots.length,
        );
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, safeActiveIndex, visibleScreenshots.length]);

  const markImageFailed = (image: string) => {
    setFailedImages((current) => new Set(current).add(image));
  };

  if (visibleScreenshots.length === 0) {
    return (
      <div className="rounded-xl border border-subtle bg-bg-primary p-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
          Screenshot gallery
        </p>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          Add real screenshots to public/assets/projects/lumina/screenshots/.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="rounded-xl border border-subtle bg-bg-primary p-3 sm:p-4">
        <div className="flex items-center justify-between gap-3 px-1 pb-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
              Screenshots
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              {visibleScreenshots.length} application view
              {visibleScreenshots.length === 1 ? "" : "s"}
            </p>
          </div>
        </div>

        <div className="grid max-h-[520px] grid-cols-1 gap-3 overflow-y-auto pr-1 sm:max-h-[680px] sm:grid-cols-2">
          {visibleScreenshots.map((screenshot, index) => (
            <button
              key={screenshot.image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group overflow-hidden rounded-lg border border-subtle bg-bg-secondary text-left transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary"
            >
              <span className="relative block aspect-[16/10] overflow-hidden bg-bg-tertiary">
                <Image
                  src={screenshot.image}
                  alt={screenshot.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 38vw, 86vw"
                  priority={index < 2}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  onError={() => markImageFailed(screenshot.image)}
                />
              </span>
              <span className="block p-3 sm:min-h-[92px]">
                <span className="block font-display text-base font-medium text-text-primary">
                  {screenshot.title}
                </span>
                {screenshot.description ? (
                  <span className="mt-1 block text-xs leading-relaxed text-text-secondary">
                    {screenshot.description}
                  </span>
                ) : null}
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeScreenshot ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-text-primary/75 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeScreenshot.title} preview`}
          onClick={closeLightbox}
        >
          <div
            className="relative max-h-full w-full max-w-6xl overflow-hidden rounded-xl border border-subtle bg-bg-primary"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-subtle p-3 sm:gap-4 sm:p-4">
              <div>
                <h4 className="font-display text-xl font-medium text-text-primary sm:text-2xl">
                  {activeScreenshot.title}
                </h4>
                {activeScreenshot.description ? (
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-text-secondary">
                    {activeScreenshot.description}
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-subtle bg-bg-secondary text-text-primary transition-colors hover:bg-bg-tertiary"
                aria-label="Close screenshot preview"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="relative bg-bg-tertiary">
              <Image
                src={activeScreenshot.image}
                alt={activeScreenshot.alt}
                width={1600}
                height={1000}
                sizes="92vw"
                className="max-h-[72vh] w-full object-contain"
              />

              {visibleScreenshots.length > 1 ? (
                <>
                  <GalleryControl direction="previous" onClick={showPrevious} />
                  <GalleryControl direction="next" onClick={showNext} />
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function GalleryControl({
  direction,
  onClick,
}: {
  direction: "previous" | "next";
  onClick: () => void;
}) {
  const Icon = direction === "previous" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "absolute top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-subtle bg-bg-primary/90 text-text-primary transition-colors hover:bg-bg-primary sm:h-12 sm:w-12",
        direction === "previous" ? "left-3" : "right-3",
      )}
      aria-label={
        direction === "previous"
          ? "Show previous screenshot"
          : "Show next screenshot"
      }
    >
      <Icon size={20} aria-hidden="true" />
    </button>
  );
}
