import Link from "next/link";
import { chapters } from "@/lib/chapters";

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[320px] aspect-[4/3] mx-auto lg:mx-0">
      {/* Bad design card - tilted back */}
      <div className="absolute top-2 left-0 w-[200px] rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4 -rotate-6 opacity-40 transition-transform hover:opacity-60">
        <div className="flex gap-2 mb-3">
          <div className="h-6 w-16 rounded bg-blue-600" />
          <div className="h-6 w-16 rounded bg-green-600" />
          <div className="h-6 w-16 rounded bg-red-600" />
        </div>
        <div className="space-y-2">
          <div className="h-2.5 w-full rounded bg-[var(--color-bg-tertiary)]" />
          <div className="h-2.5 w-4/5 rounded bg-[var(--color-bg-tertiary)]" />
          <div className="h-2.5 w-3/5 rounded bg-[var(--color-bg-tertiary)]" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-bad)]/20 border border-[var(--color-bad)]/40 flex items-center justify-center">
          <span className="text-[var(--color-bad)] text-[10px]">✗</span>
        </div>
      </div>

      {/* Good design card - forward */}
      <div className="absolute bottom-0 right-0 w-[220px] rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5 rotate-3 shadow-2xl shadow-black/40 z-10 transition-transform hover:rotate-1">
        <div className="flex items-center justify-between mb-4">
          <div className="h-3 w-20 rounded bg-[var(--color-text)]/80" />
          <div className="h-5 w-12 rounded-full bg-[var(--color-good)]/15 flex items-center justify-center">
            <span className="text-[8px] text-[var(--color-good)]">Active</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-2 w-full rounded bg-[var(--color-bg-tertiary)]" />
          <div className="h-2 w-2/3 rounded bg-[var(--color-bg-tertiary)]" />
        </div>
        <div className="mt-4 flex gap-2">
          <div className="h-7 flex-1 rounded-lg bg-[var(--color-text)] flex items-center justify-center">
            <span className="text-[8px] text-[var(--color-bg)] font-medium">Submit</span>
          </div>
          <div className="h-7 w-16 rounded-lg border border-[var(--color-border)] flex items-center justify-center">
            <span className="text-[8px] text-[var(--color-text-tertiary)]">Cancel</span>
          </div>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-good)]/20 border border-[var(--color-good)]/40 flex items-center justify-center">
          <span className="text-[var(--color-good)] text-[10px]">✓</span>
        </div>
      </div>

      {/* Decorative: annotation lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-dashed border-[var(--color-accent)]/20" />
    </div>
  );
}

export default function Home() {
  const totalTime = chapters.reduce((sum, ch) => {
    const mins = parseInt(ch.readingTime);
    return sum + (isNaN(mins) ? 0 : mins);
  }, 0);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/5 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/3 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-[960px] mx-auto px-6 pt-20 pb-16 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1">
              <p className="text-sm font-mono text-[var(--color-accent)] mb-4 tracking-wide">
                AESTHETIC HANDBOOK
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
                Vibe Coding 时代的
                <br />
                <span className="text-[var(--color-text-secondary)]">审美入门手册</span>
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-[540px] mb-4">
                从认知科学到设计实践，系统培养界面审美的<strong className="text-[var(--color-text)]">判断力</strong>与<strong className="text-[var(--color-text)]">表达力</strong>。
              </p>
              <p className="text-sm text-[var(--color-text-tertiary)] mb-8">
                10 章 · {totalTime} 分钟阅读 · 面向混合团队
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/chapters/preface"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-text)] text-[var(--color-bg)] text-sm font-medium hover:bg-[var(--color-text)]/90 transition-colors"
                >
                  开始阅读
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
                <a
                  href="#chapters"
                  className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors"
                >
                  查看目录 ↓
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden sm:block shrink-0">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Key promise */}
      <section className="max-w-[720px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="10" cy="10" r="8" />
                  <path d="M10 6v4l3 2" />
                </svg>
              ),
              title: "有理论依据",
              desc: "每个原则都有认知科学和设计理论的支撑，不是「我觉得好看」",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="3" y="3" width="14" height="14" rx="3" />
                  <path d="M7 10l2 2 4-4" />
                </svg>
              ),
              title: "看得见差异",
              desc: "每个概念都有 Good vs Bad 的可视化对比，用眼睛学而非纯靠文字",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M4 16l4-4M8 12l4-8M12 4l4 12" />
                </svg>
              ),
              title: "说得出来",
              desc: "建立精确的审美词汇，从「不好看」到「对比度 2.8:1，低于 AA 标准」",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-3">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-text)] mb-1">{item.title}</h3>
                <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Structure overview */}
      <section className="max-w-[720px] mx-auto px-6 pb-8">
        <div className="grid grid-cols-3 gap-4 mb-16">
          {[
            { part: "第一部分", title: "认知基础", chapters: "第 1-2 章", desc: "理解「好看」的底层逻辑", color: "var(--color-accent)" },
            { part: "第二部分", title: "设计要素", chapters: "第 3-6 章", desc: "拆解四大核心视觉维度", color: "var(--color-good)" },
            { part: "第三部分", title: "实践应用", chapters: "第 7-9 章", desc: "从组件到表达到训练", color: "#8b5cf6" },
          ].map((section) => (
            <div key={section.part} className="p-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: section.color, opacity: 0.6 }} />
              <p className="text-[10px] font-mono mb-2 uppercase tracking-wider" style={{ color: section.color }}>{section.part}</p>
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-1">{section.title}</h3>
              <p className="text-xs text-[var(--color-text-tertiary)] mb-1">{section.chapters}</p>
              <p className="text-xs text-[var(--color-text-tertiary)]">{section.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter list */}
      <section id="chapters" className="max-w-[720px] mx-auto px-6 pb-24 scroll-mt-8">
        <h2 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-6">
          目录
        </h2>
        <div className="space-y-2">
          {chapters.map((ch) => (
            <Link
              key={ch.slug}
              href={`/chapters/${ch.slug}`}
              className="group flex items-start gap-4 p-4 rounded-xl border border-[var(--color-border-subtle)] hover:border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] transition-all"
            >
              <span className="text-sm font-mono text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-colors w-8 shrink-0 pt-0.5">
                {ch.number}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-base font-semibold text-[var(--color-text)] group-hover:text-[var(--color-text)] transition-colors">
                    {ch.title}
                  </h3>
                  {ch.subtitle && (
                    <span className="text-xs text-[var(--color-text-tertiary)] hidden sm:inline">
                      {ch.subtitle}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[var(--color-text-tertiary)] mt-1 leading-relaxed">
                  {ch.description}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[11px] text-[var(--color-text-tertiary)] font-mono hidden sm:inline">
                  {ch.readingTime}
                </span>
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors mt-1"
                >
                  <path d="M6 4l4 4-4 4" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border-subtle)] py-8">
        <p className="text-center text-xs text-[var(--color-text-tertiary)]">
          审美入门手册 · 基于认知科学、设计理论与实战经验编写
        </p>
      </footer>
    </main>
  );
}
