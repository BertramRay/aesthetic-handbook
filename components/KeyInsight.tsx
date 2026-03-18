interface KeyInsightProps {
  children: React.ReactNode;
  label?: string;
}

export default function KeyInsight({ children, label = "核心洞察" }: KeyInsightProps) {
  return (
    <div className="my-8 rounded-xl border border-[var(--color-accent-dim)] bg-[var(--color-accent-dim)]/10 px-6 py-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
          {label}
        </span>
      </div>
      <div className="text-[var(--color-text)] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
