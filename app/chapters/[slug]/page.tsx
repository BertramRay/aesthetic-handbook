import { notFound } from "next/navigation";
import { chapters, getChapter, getAdjacentChapters } from "@/lib/chapters";
import ChapterNav from "@/components/ChapterNav";

import ChapterPreface from "@/content/preface";
import ChapterPerception from "@/content/perception";
import ChapterHistory from "@/content/history";
import ChapterHierarchy from "@/content/hierarchy";
import ChapterColor from "@/content/color";
import ChapterTypography from "@/content/typography";
import ChapterSpacing from "@/content/spacing";
import ChapterComponents from "@/content/components";
import ChapterExpression from "@/content/expression";
import ChapterPractice from "@/content/practice";

const chapterComponents: Record<string, React.ComponentType> = {
  preface: ChapterPreface,
  perception: ChapterPerception,
  history: ChapterHistory,
  hierarchy: ChapterHierarchy,
  color: ChapterColor,
  typography: ChapterTypography,
  spacing: ChapterSpacing,
  components: ChapterComponents,
  expression: ChapterExpression,
  practice: ChapterPractice,
};

export function generateStaticParams() {
  return chapters.map((ch) => ({ slug: ch.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) return {};
  return {
    title: `${chapter.number !== "序" ? chapter.number + ". " : ""}${chapter.title} — 审美入门手册`,
    description: chapter.description,
  };
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  const Content = chapterComponents[slug];
  if (!Content) notFound();

  const { prev, next } = getAdjacentChapters(slug);

  return (
    <>
      {/* Reading time badge */}
      <div className="flex items-center gap-3 mb-8 text-xs text-[var(--color-text-tertiary)]">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          <circle cx="7" cy="7" r="6" />
          <path d="M7 4v3l2 1.5" />
        </svg>
        <span>阅读时长约 {chapter.readingTime}</span>
      </div>
      <Content />
      <ChapterNav prev={prev} next={next} />
    </>
  );
}
