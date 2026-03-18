import Link from "next/link";
import type { Chapter } from "@/lib/chapters";

interface ChapterNavProps {
  prev: Chapter | null;
  next: Chapter | null;
}

export default function ChapterNav({ prev, next }: ChapterNavProps) {
  return (
    <nav className="mt-20 pt-8 border-t border-[var(--color-border)]">
      <div className="grid grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={prev.slug === "preface" ? "/chapters/preface" : `/chapters/${prev.slug}`}
            className="group flex flex-col gap-1 p-4 rounded-xl border border-[var(--color-border-subtle)] hover:border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] transition-colors"
          >
            <span className="text-xs text-[var(--color-text-tertiary)]">
              ← 上一章
            </span>
            <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-text)] transition-colors">
              {prev.number !== "序" && `${prev.number}. `}{prev.title}
            </span>
          </Link>
        ) : (
          <Link
            href="/"
            className="group flex flex-col gap-1 p-4 rounded-xl border border-[var(--color-border-subtle)] hover:border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] transition-colors"
          >
            <span className="text-xs text-[var(--color-text-tertiary)]">
              ← 返回
            </span>
            <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-text)] transition-colors">
              目录
            </span>
          </Link>
        )}

        {next ? (
          <Link
            href={`/chapters/${next.slug}`}
            className="group flex flex-col gap-1 p-4 rounded-xl border border-[var(--color-border-subtle)] hover:border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] transition-colors text-right"
          >
            <span className="text-xs text-[var(--color-text-tertiary)]">
              下一章 →
            </span>
            <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-text)] transition-colors">
              {next.number !== "序" && `${next.number}. `}{next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
