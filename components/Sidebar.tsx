"use client";

import { useState, useEffect } from "react";

interface Chapter {
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
}

const chapters: Chapter[] = [
  { slug: "preface", number: "序", title: "为什么需要审美能力" },
  { slug: "perception", number: "01", title: "视觉感知的科学基础", subtitle: "Gestalt · 认知负荷 · 加工流畅性" },
  { slug: "history", number: "02", title: "设计思想简史", subtitle: "包豪斯 · 瑞士风格 · 数字革命" },
  { slug: "hierarchy", number: "03", title: "视觉层次", subtitle: "设计中最重要的概念" },
  { slug: "color", number: "04", title: "色彩理论与实践", subtitle: "科学 · 心理学 · 工作流" },
  { slug: "typography", number: "05", title: "字体排版", subtitle: "历史 · 数学 · 中英文搭配" },
  { slug: "spacing", number: "06", title: "间距与布局", subtitle: "网格 · 留白 · 呼吸感" },
  { slug: "components", number: "07", title: "组件审美", subtitle: "按钮 · 表单 · 卡片 · 表格" },
  { slug: "expression", number: "08", title: "学会表达", subtitle: "从模糊感受到精确语言" },
  { slug: "practice", number: "09", title: "持续训练", subtitle: "方法论 · 资源 · 团队机制" },
];

export default function Sidebar() {
  const [activeSlug, setActiveSlug] = useState("preface");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    for (const ch of chapters) {
      const el = document.getElementById(ch.slug);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
        aria-label="Toggle navigation"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
          {isOpen ? (
            <path d="M4 4l10 10M14 4L4 14" />
          ) : (
            <path d="M2 4h14M2 9h14M2 14h14" />
          )}
        </svg>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 z-40 h-screen w-72 bg-[var(--color-bg)] border-r border-[var(--color-border-subtle)] overflow-y-auto transition-transform duration-200 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 pt-8 pb-4">
          <h1 className="text-sm font-semibold tracking-wide text-[var(--color-text-tertiary)] uppercase">
            审美入门手册
          </h1>
          <p className="text-xs text-[var(--color-text-tertiary)] mt-1">
            Vibe Coding 时代的设计素养
          </p>
        </div>

        <ul className="px-3 pb-8">
          {chapters.map((ch) => (
            <li key={ch.slug}>
              <a
                href={`#${ch.slug}`}
                onClick={() => setIsOpen(false)}
                className={`group flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  activeSlug === ch.slug
                    ? "bg-[var(--color-bg-secondary)] text-[var(--color-text)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)]"
                }`}
              >
                <span
                  className={`shrink-0 w-7 text-center text-xs font-mono mt-0.5 ${
                    activeSlug === ch.slug
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text-tertiary)]"
                  }`}
                >
                  {ch.number}
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-medium leading-snug">
                    {ch.title}
                  </div>
                  {ch.subtitle && (
                    <div className="text-xs text-[var(--color-text-tertiary)] mt-0.5 leading-relaxed">
                      {ch.subtitle}
                    </div>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
