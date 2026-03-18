"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { chapters } from "@/lib/chapters";

export default function ChapterSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const currentSlug = pathname.split("/").pop() || "";

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
          <Link href="/" className="block group">
            <h1 className="text-sm font-semibold tracking-wide text-[var(--color-text-tertiary)] uppercase group-hover:text-[var(--color-text-secondary)] transition-colors">
              审美入门手册
            </h1>
            <p className="text-xs text-[var(--color-text-tertiary)] mt-1">
              Vibe Coding 时代的设计素养
            </p>
          </Link>
        </div>

        <ul className="px-3 pb-8">
          {chapters.map((ch) => {
            const isActive = currentSlug === ch.slug;
            return (
              <li key={ch.slug}>
                <Link
                  href={`/chapters/${ch.slug}`}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[var(--color-bg-secondary)] text-[var(--color-text)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)]"
                  }`}
                >
                  <span
                    className={`shrink-0 w-7 text-center text-xs font-mono mt-0.5 ${
                      isActive
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
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
