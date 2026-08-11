export function LuminaMockup() {
  const modules = [
    "Students",
    "Teachers",
    "Parents",
    "Courses",
    "Timetables",
    "Finance",
    "Resources",
    "AI Learning",
  ];

  return (
    <div
      aria-label="Lumina Academy platform mockup placeholder"
      className="relative overflow-hidden rounded-xl border border-subtle bg-bg-primary"
    >
      <div className="flex items-center gap-2 border-b border-subtle px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
        <span className="ml-2 font-mono text-[11px] text-text-muted">
          lumina.academy / dashboard
        </span>
      </div>

      <div className="grid min-h-[280px] grid-cols-[120px_1fr] sm:min-h-[320px]">
        <aside className="border-r border-subtle bg-bg-secondary/50 p-3">
          <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
            Modules
          </p>
          <ul className="mt-3 space-y-1.5" role="list">
            {modules.map((module, index) => (
              <li
                key={module}
                className={`rounded-md px-2 py-1.5 text-xs ${
                  index === 7
                    ? "border border-accent/20 bg-accent/5 text-accent"
                    : "text-text-secondary"
                }`}
              >
                {module}
              </li>
            ))}
          </ul>
        </aside>

        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                Overview
              </p>
              <p className="mt-1 font-display text-lg text-text-primary">
                School Management
              </p>
            </div>
            <span className="rounded-md border border-subtle px-2 py-1 font-mono text-[10px] text-text-muted">
              Livewire UI
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {["Attendance", "Messaging", "Scholarships"].map((metric) => (
              <div
                key={metric}
                className="rounded-lg border border-subtle bg-bg-secondary/70 p-3"
              >
                <p className="font-mono text-[10px] text-text-muted">{metric}</p>
                <div className="mt-2 h-1.5 rounded-full bg-bg-tertiary">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent/40 to-accent"
                    style={{ width: `${55 + metric.length * 3}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-lg border border-dashed border-subtle bg-bg-secondary/30 p-6 text-center">
            <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
              Screenshot placeholder
            </p>
            <p className="mt-2 text-xs text-text-muted">
              Add images to public/assets/projects/lumina/screenshots/
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
