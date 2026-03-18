interface ComparisonCardProps {
  title?: string;
  good: React.ReactNode;
  bad: React.ReactNode;
  goodLabel?: string;
  badLabel?: string;
  goodNotes?: string[];
  badNotes?: string[];
}

export default function ComparisonCard({
  title,
  good,
  bad,
  goodLabel = "Good",
  badLabel = "Bad",
  goodNotes = [],
  badNotes = [],
}: ComparisonCardProps) {
  return (
    <div className="my-8">
      {title && (
        <h4 className="text-sm font-semibold text-[var(--color-text-secondary)] mb-4 uppercase tracking-wider">
          {title}
        </h4>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bad example */}
        <div className="rounded-xl border border-[var(--color-bad)]/30 bg-[var(--color-bad)]/5 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--color-bad)]/20">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="var(--color-bad)" strokeWidth="1.5" />
              <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="var(--color-bad)" strokeWidth="1.5" />
            </svg>
            <span className="text-xs font-semibold text-[var(--color-bad)] uppercase tracking-wider">
              {badLabel}
            </span>
          </div>
          <div className="p-4">
            {bad}
          </div>
          {badNotes.length > 0 && (
            <div className="px-4 pb-4">
              <ul className="space-y-1">
                {badNotes.map((note, i) => (
                  <li key={i} className="text-xs text-[var(--color-text-tertiary)] flex items-start gap-1.5">
                    <span className="text-[var(--color-bad)] mt-0.5 shrink-0">×</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Good example */}
        <div className="rounded-xl border border-[var(--color-good)]/30 bg-[var(--color-good)]/5 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--color-good)]/20">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="var(--color-good)" strokeWidth="1.5" />
              <path d="M4.5 7l2 2 3.5-4" stroke="var(--color-good)" strokeWidth="1.5" fill="none" />
            </svg>
            <span className="text-xs font-semibold text-[var(--color-good)] uppercase tracking-wider">
              {goodLabel}
            </span>
          </div>
          <div className="p-4">
            {good}
          </div>
          {goodNotes.length > 0 && (
            <div className="px-4 pb-4">
              <ul className="space-y-1">
                {goodNotes.map((note, i) => (
                  <li key={i} className="text-xs text-[var(--color-text-tertiary)] flex items-start gap-1.5">
                    <span className="text-[var(--color-good)] mt-0.5 shrink-0">✓</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
