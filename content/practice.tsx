import KeyInsight from "@/components/KeyInsight";

export default function ChapterPractice() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第九章</p>
      <h1>持续训练 — 审美是肌肉，不是天赋</h1>

      <blockquote>
        "Taste is the ability to make good decisions without being able to explain why."
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Paul Graham</span>
      </blockquote>

      <p>
        Paul Graham 的这个定义准确地描述了审美的最终形态：<strong>直觉化的判断力</strong>。但在达到「不需要解释」之前，你需要大量的刻意练习。好消息是，审美和任何其他技能一样，遵循 Anders Ericsson 的刻意练习理论（1993）：有针对性的练习 + 即时反馈 = 稳定提升。
      </p>

      <h2>9.1 每日练习法</h2>

      <h3>截图 + 三句标注</h3>
      <p>
        每天截一个你觉得好（或不好）的界面截图，写三句话：
      </p>
      <ol>
        <li><strong>描述观察</strong>：「这个 dashboard 用了大面积深灰色背景 + 单一蓝色强调色」</li>
        <li><strong>分析原因</strong>：「强调色只出现在 CTA 和选中状态，控制在 10% 以内，所以整体克制不刺眼」</li>
        <li><strong>提炼原则</strong>：「强调色的面积占比应控制在 10% 以内，且只用于最重要的交互元素」</li>
      </ol>

      <p>
        坚持 30 天，你会发现自己打开任何 app 时都会自动开始「拆解」——这就是审美直觉的形成过程。
      </p>

      <h3>临摹练习</h3>
      <p>
        用 CSS 精确复刻一个优秀界面。在复刻过程中你会被迫关注到每一个像素的决策：为什么这个间距是 12px 不是 16px？为什么这个文字用 zinc-400 不是 zinc-500？<strong>差异就在这些细节里</strong>。推荐临摹对象：Linear 的侧边栏、Stripe 的定价页面、Vercel 的 dashboard。
      </p>

      <h2>9.2 审美资源体系</h2>

      <h3>必读书目</h3>
      <div className="my-4 space-y-3">
        <div className="flex gap-4 bg-[var(--color-bg-secondary)] rounded-lg p-4 border border-[var(--color-border-subtle)]">
          <span className="text-xs font-mono text-[var(--color-accent)] shrink-0 mt-0.5">入门</span>
          <div>
            <div className="text-sm font-medium">《写给大家看的设计书》</div>
            <div className="text-xs text-[var(--color-text-tertiary)]">Robin Williams · 四大原则：对齐、接近、重复、对比</div>
          </div>
        </div>
        <div className="flex gap-4 bg-[var(--color-bg-secondary)] rounded-lg p-4 border border-[var(--color-border-subtle)]">
          <span className="text-xs font-mono text-[var(--color-accent)] shrink-0 mt-0.5">进阶</span>
          <div>
            <div className="text-sm font-medium">《Refactoring UI》</div>
            <div className="text-xs text-[var(--color-text-tertiary)]">Adam Wathan & Steve Schoger · 面向开发者的 UI 设计实战手册</div>
          </div>
        </div>
        <div className="flex gap-4 bg-[var(--color-bg-secondary)] rounded-lg p-4 border border-[var(--color-border-subtle)]">
          <span className="text-xs font-mono text-[var(--color-accent)] shrink-0 mt-0.5">深入</span>
          <div>
            <div className="text-sm font-medium">《The Elements of Typographic Style》</div>
            <div className="text-xs text-[var(--color-text-tertiary)]">Robert Bringhurst · 排版圣经，理解字体和版式的根基</div>
          </div>
        </div>
        <div className="flex gap-4 bg-[var(--color-bg-secondary)] rounded-lg p-4 border border-[var(--color-border-subtle)]">
          <span className="text-xs font-mono text-[var(--color-accent)] shrink-0 mt-0.5">理论</span>
          <div>
            <div className="text-sm font-medium">《设计心理学》(The Design of Everyday Things)</div>
            <div className="text-xs text-[var(--color-text-tertiary)]">Donald Norman · 理解「可供性」和「心智模型」</div>
          </div>
        </div>
        <div className="flex gap-4 bg-[var(--color-bg-secondary)] rounded-lg p-4 border border-[var(--color-border-subtle)]">
          <span className="text-xs font-mono text-[var(--color-accent)] shrink-0 mt-0.5">色彩</span>
          <div>
            <div className="text-sm font-medium">《Interaction of Color》</div>
            <div className="text-xs text-[var(--color-text-tertiary)]">Josef Albers · 包豪斯色彩教学经典，理解色彩的相对性</div>
          </div>
        </div>
      </div>

      <h3>在线资源</h3>
      <ul>
        <li><strong>Laws of UX</strong> (lawsofux.com) — 用卡片形式展示 21 条 UX 设计法则</li>
        <li><strong>Typewolf</strong> (typewolf.com) — 字体搭配灵感和趋势</li>
        <li><strong>Realtime Colors</strong> (realtimecolors.com) — 实时预览配色在真实界面上的效果</li>
        <li><strong>Mobbin</strong> (mobbin.com) — 海量真实 app 界面截图，按模式分类</li>
        <li><strong>Refero</strong> (refero.design) — 优质 web 设计截图库</li>
        <li><strong>Contrast Checker</strong> (webaim.org/resources/contrastchecker) — WCAG 对比度检测</li>
      </ul>

      <h2>9.3 审美检查清单</h2>

      <p>
        在提交 PR 或验收 AI 生成结果前，对照以下 15 项检查：
      </p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl border border-[var(--color-border-subtle)] overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-tertiary)]">
          <span className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">审美验收清单</span>
        </div>
        <div className="divide-y divide-[var(--color-border-subtle)]">
          {[
            { cat: "层次", items: ["页面有清晰的信息优先级（眯眼测试通过）", "标题、正文、辅助文字的字号差异 ≥ 4px", "只有一个主操作按钮使用强调色"] },
            { cat: "色彩", items: ["全局彩色面积 ≤ 10%（强调色克制使用）", "文字对比度 ≥ 4.5:1（AA 标准）", "不仅依赖颜色传达信息（有图标或文字辅助）"] },
            { cat: "排版", items: ["字重不超过 3 种", "正文行高 ≥ 1.5（中文 ≥ 1.7）", "正文行宽 ≤ 75 字符"] },
            { cat: "间距", items: ["所有间距是 4px 的倍数", "相关元素间距 < 不相关元素间距", "内容区有充足的内边距（≥ 16px）"] },
            { cat: "完成度", items: ["对齐一致（无肉眼可见的错位）", "圆角统一（全局使用同一套圆角值）", "空状态、加载态、错误态均有设计"] },
          ].map((group) => (
            <div key={group.cat} className="px-4 py-3">
              <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider">{group.cat}</span>
              <div className="mt-2 space-y-1.5">
                {group.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text-tertiary)] shrink-0">□</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2>9.4 团队审美提升机制</h2>

      <p>
        个人练习之外，团队层面的机制同样重要：
      </p>

      <p>
        <strong>每周 15 分钟设计评审</strong>：在周会中加入一个 15 分钟环节，用本手册的词汇框架讨论本周上线界面的审美问题。重点不是批评，而是用精确语言描述观察和建议。
      </p>

      <p>
        <strong>审美基线对齐</strong>：团队共同选定 3-5 个「参考产品」（如 Linear、Stripe、Notion），作为审美讨论的共同参照系。当有人说「参考 Linear 的信息密度」时，大家有同样的画面。
      </p>

      <p>
        <strong>AI 生成结果的审美验收</strong>：将上面的 15 项检查清单制度化，作为 AI 生成代码的验收标准。不通过审美验收的代码不合入主分支——就像不通过测试的代码一样。
      </p>

      <KeyInsight>
        审美能力的提升曲线和编程类似：前 20% 的提升来自学习基本原则（层次、色彩、间距），后 80% 来自大量的观察和实践。本手册覆盖了前 20%——剩下的，交给你每天的截图标注、每周的设计评审、每次与 AI 的 prompt 迭代。<strong>审美是肌肉，不是天赋。坚持练，它会长。</strong>
      </KeyInsight>
    </>
  );
}
