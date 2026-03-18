interface DesignPrincipleProps {
  number: string;
  title: string;
  author?: string;
  children: React.ReactNode;
}

export default function DesignPrinciple({ number, title, author, children }: DesignPrincipleProps) {
  return (
    <div className="my-6 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] p-6">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-2xl font-bold text-[var(--color-text-tertiary)] font-mono">
          {number}
        </span>
        <div>
          <h4 className="text-lg font-semibold text-[var(--color-text)]">{title}</h4>
          {author && (
            <span className="text-xs text-[var(--color-text-tertiary)]">— {author}</span>
          )}
        </div>
      </div>
      <div className="text-[var(--color-text-secondary)] leading-relaxed text-[0.95rem]">
        {children}
      </div>
    </div>
  );
}
