import ComparisonCard from "@/components/ComparisonCard";

export default function ChapterTypography() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第五章</p>
      <h1>字体排版 — Typography</h1>

      <blockquote>
        "Typography is the craft of endowing human language with a durable visual form."
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Robert Bringhurst, <em>The Elements of Typographic Style</em></span>
      </blockquote>

      <p>
        字体排版可能是最被非设计背景的人低估的设计维度。一个界面 90% 以上的内容是文字，但大多数人对字体的思考停留在「挑一个好看的字体」。实际上，排版是一套精确的数学系统，涉及比例、节奏和空间关系。
      </p>

      <h2>5.1 排版的历史根基</h2>

      <p>
        排版技术始于 1440 年代 Gutenberg 的活字印刷，但现代排版理论的奠基人是 <strong>Jan Tschichold</strong>。他的《The New Typography》（1928）首次系统性地提出：排版不是装饰，而是<strong>信息的视觉组织</strong>。
      </p>

      <p>
        Robert Bringhurst 的《The Elements of Typographic Style》（1992）被称为「排版圣经」，至今仍是字体设计课程的必读书目。他在书中提出的许多参数——行宽 45-75 个字符、行高 1.5 倍——在 80 年后的数字界面中依然精确适用。这不是巧合，而是因为这些参数反映的是人类视觉系统的生理特性，不随媒介改变。
      </p>

      <h2>5.2 字体分类与性格</h2>

      <p>
        字体有性格，就像人有声音。选错字体就像让一个严肃的法律文件用 Comic Sans 朗读——内容没变，但信任感全毁了。
      </p>

      <p>
        <strong>衬线体（Serif）</strong>——Times New Roman、Georgia、Merriweather。笔画末端的小装饰（衬线）赋予它们权威感和历史感。传统上用于长文阅读（报纸、书籍），在数字界面中常用于内容型网站、金融、法律等需要信任感的领域。
      </p>

      <p>
        <strong>无衬线体（Sans-serif）</strong>——Inter、SF Pro、Geist、Roboto、Helvetica。干净、现代、中性。是当代 UI 设计的默认选择，因为它们在小字号和屏幕渲染中可读性更好。
      </p>

      <p>
        <strong>等宽体（Monospace）</strong>——JetBrains Mono、Fira Code、Geist Mono。每个字符占据相同宽度，天然对齐。用于代码、数据表格、数字展示等需要精确对齐的场景。等宽字体在 UI 中的出现会自动触发「技术/精确」的心理联想。
      </p>

      <h2>5.3 字体排版的数学</h2>

      <h3>类型比例尺（Typographic Scale）</h3>
      <p>
        好的字体层级不是随意选几个大小，而是遵循数学比例。以 16px 为基础，常用比例：
      </p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)] font-mono text-sm">
        <div className="space-y-3">
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-24 text-right shrink-0">12px</span>
            <span style={{ fontSize: "12px" }} className="text-[var(--color-text-secondary)]">辅助文字 · Caption</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-24 text-right shrink-0">14px</span>
            <span style={{ fontSize: "14px" }} className="text-[var(--color-text-secondary)]">次要正文 · Body Small</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-24 text-right shrink-0">16px</span>
            <span style={{ fontSize: "16px" }} className="text-[var(--color-text)]">正文 · Body</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-24 text-right shrink-0">20px</span>
            <span style={{ fontSize: "20px" }} className="font-medium text-[var(--color-text)]">小标题 · H4</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-24 text-right shrink-0">25px</span>
            <span style={{ fontSize: "25px" }} className="font-semibold text-[var(--color-text)]">标题 · H3</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-24 text-right shrink-0">31px</span>
            <span style={{ fontSize: "31px" }} className="font-semibold text-[var(--color-text)]">大标题 · H2</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-24 text-right shrink-0">39px</span>
            <span style={{ fontSize: "39px" }} className="font-bold text-[var(--color-text)]">页面标题 · H1</span>
          </div>
        </div>
        <p className="text-[var(--color-text-tertiary)] text-xs mt-4">
          Major Third scale (1.250) · Base: 16px
        </p>
      </div>

      <h3>行高（Line Height）</h3>
      <p>
        Bringhurst 推荐正文行高在 1.4-1.8 之间，具体取决于字体的 x-height（小写字母高度）和段落宽度。实用规则：
      </p>
      <ul>
        <li><strong>正文</strong>：1.5-1.75（中文需要更大，推荐 1.7-1.8）</li>
        <li><strong>标题</strong>：1.2-1.3（大字号行高应更紧凑）</li>
        <li><strong>UI 元素</strong>（按钮、标签）：1.0-1.2</li>
      </ul>

      <h3>段落宽度（Measure）</h3>
      <p>
        Bringhurst 给出的「舒适阅读宽度」是<strong>每行 45-75 个字符</strong>，最理想是 66 个字符。太窄会频繁换行打断阅读节奏，太宽会让视线难以准确返回下一行行首。对于中文，由于字符更宽，最佳行宽约 25-35 个汉字。这正是为什么本手册的正文区域限制在 720px——大约容纳 30 个汉字或 65 个英文字母。
      </p>

      <h3>中文排版特殊性</h3>
      <p>
        中文是方块字系统，与拉丁字母在排版上有重要差异：
      </p>
      <ul>
        <li><strong>行高</strong>：中文字形普遍比同字号的拉丁字母「高」，需要更大行高（≥1.7）才能避免行间拥挤</li>
        <li><strong>标点挤压</strong>：中文标点（逗号、句号）占一个全角字位，连续出现时视觉上会显得松散，专业排版会做标点压缩</li>
        <li><strong>中英文混排</strong>：中英文之间应有约 0.25em 的间距（称为 pangu spacing），许多现代字体已内置此特性</li>
      </ul>

      <h2>5.4 字重作为信息架构工具</h2>

      <p>
        <strong>一个界面最多使用三种字重</strong>，这是一条经过无数项目验证的纪律。当你用了 Light、Regular、Medium、SemiBold、Bold 五种字重时，与其说你在建立层次，不如说你在制造混乱。字重过多就像所有人都在喊「我很重要！」——结果没有人重要。
      </p>

      <ComparisonCard
        title="字重使用"
        bad={
          <div className="space-y-2 text-sm">
            <div className="font-light text-[var(--color-text)]">Light 300 — 页面描述</div>
            <div className="font-normal text-[var(--color-text)]">Regular 400 — 正文</div>
            <div className="font-medium text-[var(--color-text)]">Medium 500 — 小标题</div>
            <div className="font-semibold text-[var(--color-text)]">SemiBold 600 — 标题</div>
            <div className="font-bold text-[var(--color-text)]">Bold 700 — 大标题</div>
            <div className="font-extrabold text-[var(--color-text)]">ExtraBold 800 — 页面标题</div>
          </div>
        }
        good={
          <div className="space-y-2 text-sm">
            <div className="font-normal text-[var(--color-text-secondary)]">Regular 400 — 正文、描述</div>
            <div className="font-medium text-[var(--color-text)]">Medium 500 — 小标题、标签</div>
            <div className="font-bold text-[var(--color-text)]">Bold 700 — 标题、关键操作</div>
          </div>
        }
        badNotes={[
          "6 种字重，层级过多难以区分",
          "Light 在屏幕上可读性差",
          "相邻字重差异太小（500 vs 600）",
        ]}
        goodNotes={[
          "3 种字重，层级清晰一目了然",
          "每级之间差异明显（400 → 500 → 700）",
          "最轻也是 Regular，保证可读性",
        ]}
      />
    </>
  );
}
