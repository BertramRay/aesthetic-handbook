interface ExpressionPair {
  vague: string;
  precise: string;
}

interface ExpressionTableProps {
  pairs: ExpressionPair[];
  title?: string;
}

export default function ExpressionTable({ pairs, title }: ExpressionTableProps) {
  return (
    <div className="my-8">
      {title && (
        <h4 className="text-sm font-semibold text-[var(--color-text-secondary)] mb-4 uppercase tracking-wider">
          {title}
        </h4>
      )}
      <div className="rounded-xl border border-[var(--color-border-subtle)] overflow-hidden">
        <div className="grid grid-cols-2 bg-[var(--color-bg-tertiary)] px-4 py-2.5 border-b border-[var(--color-border-subtle)]">
          <span className="text-xs font-semibold text-[var(--color-bad)] uppercase tracking-wider">
            模糊表达
          </span>
          <span className="text-xs font-semibold text-[var(--color-good)] uppercase tracking-wider">
            精确表达
          </span>
        </div>
        {pairs.map((pair, i) => (
          <div
            key={i}
            className={`grid grid-cols-2 px-4 py-3 ${
              i < pairs.length - 1 ? "border-b border-[var(--color-border-subtle)]" : ""
            }`}
          >
            <div className="text-sm text-[var(--color-text-secondary)] pr-4 flex items-start gap-2">
              <span className="text-[var(--color-bad)] shrink-0">✗</span>
              <span className="line-through decoration-[var(--color-bad)]/30">{pair.vague}</span>
            </div>
            <div className="text-sm text-[var(--color-text)] flex items-start gap-2">
              <span className="text-[var(--color-good)] shrink-0">✓</span>
              {pair.precise}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
