interface Color {
  hex: string;
  name?: string;
  usage?: string;
}

interface ColorSwatchProps {
  colors: Color[];
  title?: string;
  layout?: "row" | "palette";
}

function isDark(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 60;
}

export default function ColorSwatch({ colors, title, layout = "row" }: ColorSwatchProps) {
  if (layout === "palette") {
    return (
      <div className="my-6">
        {title && (
          <h4 className="text-sm font-semibold text-[var(--color-text-secondary)] mb-3">
            {title}
          </h4>
        )}
        <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
          <div className="flex">
            {colors.map((color, i) => (
              <div
                key={i}
                className="flex-1 h-20 relative group border-r border-[var(--color-border)] last:border-r-0"
                style={{ backgroundColor: color.hex }}
              >
                {/* Always show hex on very dark swatches */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${isDark(color.hex) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/15 text-white backdrop-blur-sm">
                    {color.hex}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {colors.some((c) => c.name) && (
            <div className="flex bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
              {colors.map((color, i) => (
                <div key={i} className="flex-1 text-center py-2 border-r border-[var(--color-border-subtle)] last:border-r-0">
                  {color.name && (
                    <div className="text-[11px] font-mono text-[var(--color-text-secondary)]">{color.name}</div>
                  )}
                  {color.usage && (
                    <div className="text-[10px] text-[var(--color-text-tertiary)]">{color.usage}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="my-6">
      {title && (
        <h4 className="text-sm font-semibold text-[var(--color-text-secondary)] mb-3">
          {title}
        </h4>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {colors.map((color, i) => (
          <div key={i} className="group">
            <div
              className={`h-16 rounded-lg border mb-2 flex items-center justify-center ${
                isDark(color.hex) ? "border-[var(--color-border)]" : "border-[var(--color-border-subtle)]"
              }`}
              style={{ backgroundColor: color.hex }}
            >
              {isDark(color.hex) && (
                <span className="text-[10px] font-mono text-white/40">{color.hex}</span>
              )}
            </div>
            <div className="text-xs font-mono text-[var(--color-text-tertiary)]">{color.hex}</div>
            {color.name && (
              <div className="text-xs text-[var(--color-text-secondary)]">{color.name}</div>
            )}
            {color.usage && (
              <div className="text-[10px] text-[var(--color-text-tertiary)]">{color.usage}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
