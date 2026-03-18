import ChapterSidebar from "@/components/ChapterSidebar";
import ProgressBar from "@/components/ProgressBar";
import BackToTop from "@/components/BackToTop";

export default function ChapterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgressBar />
      <ChapterSidebar />
      <main className="lg:pl-72">
        <article className="max-w-[720px] mx-auto px-6 py-16 lg:py-24 prose prose-invert">
          {children}
        </article>
      </main>
      <BackToTop />
    </>
  );
}
