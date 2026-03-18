interface CitationProps {
  author: string;
  year: number | string;
  title: string;
  source?: string;
}

export default function Citation({ author, year, title, source }: CitationProps) {
  return (
    <span className="inline text-[var(--color-text-tertiary)] text-sm">
      ({author}, {year}
      {title && (
        <>, <em>{title}</em></>
      )}
      {source && <>, {source}</>})
    </span>
  );
}
