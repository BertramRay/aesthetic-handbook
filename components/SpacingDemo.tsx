interface SpacingDemoProps {
  values?: number[];
  labels?: string[];
  title?: string;
}

export default function SpacingDemo({
  values = [4, 8, 12, 16, 24, 32, 48, 64],
  labels,
  title,
}: SpacingDemoProps) {
  return (
    <div className="my-6">
      {title && (
        <h4 className="text-sm font-semibold text-[var(--color-text-secondary)] mb-4">
          {title}
        </h4>
      )}
      <div className="space-y-3 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        {values.map((val, i) => (
          <div key={val} className="flex items-center gap-4">
            <span className="text-xs font-mono text-[var(--color-text-tertiary)] w-10 text-right shrink-0">
              {val}px
            </span>
            <div className="flex items-center gap-2 flex-1">
              <div
                className="h-4 rounded-sm bg-[var(--color-accent)]/40 border border-[var(--color-accent)]/60"
                style={{ width: `${val}px` }}
              />
              <div className="h-px flex-1 bg-[var(--color-border-subtle)]" />
            </div>
            {labels && labels[i] && (
              <span className="text-xs text-[var(--color-text-tertiary)] shrink-0">
                {labels[i]}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
