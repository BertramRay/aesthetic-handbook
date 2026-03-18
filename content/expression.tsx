import ExpressionTable from "@/components/ExpressionTable";
import KeyInsight from "@/components/KeyInsight";
import ComparisonCard from "@/components/ComparisonCard";

export default function ChapterExpression() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第八章</p>
      <h1>学会表达 — 从模糊感受到精确语言</h1>

      <blockquote>
        "The limits of my language mean the limits of my world."
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Ludwig Wittgenstein</span>
      </blockquote>

      <p>
        能看出问题只是审美能力的一半，另一半是<strong>能说清楚</strong>。在 vibe coding 时代，你的审美最终要通过语言——对同事的反馈或对 AI 的 prompt——来落地。模糊的语言只能带来模糊的结果。
      </p>

      <h2>8.1 审美表达的词汇系统</h2>

      <p>
        以下是团队沟通中最常见的模糊表达，以及如何将它们转换为精确的、可操作的设计语言。
      </p>

      <ExpressionTable
        title="模糊 → 精确 对照表"
        pairs={[
          { vague: "不好看", precise: "视觉层次不清晰——标题和正文的字号差异不足，建议标题从 16px 增大到 24px" },
          { vague: "太挤了", precise: "卡片内边距只有 8px，内容缺乏呼吸感，建议增加到 16-24px" },
          { vague: "颜色不对", precise: "强调色饱和度过高（S:90%），与中性背景反差刺眼，建议降至 S:60%" },
          { vague: "感觉很乱", precise: "元素没有对齐基线，间距不统一（混用了 10px/15px/18px），建议统一到 8px 网格" },
          { vague: "太素了", precise: "页面缺少视觉锚点——没有强调色、没有大小对比，所有元素视觉权重相同" },
          { vague: "不够高级", precise: "圆角不统一（混用了 4px/8px/12px），字重层级模糊（4 种字重差异太小），间距缺乏节奏" },
          { vague: "字看不清", precise: "文字与背景的对比度只有 2.8:1，低于 WCAG AA 标准（4.5:1），建议文字色加深或背景色减淡" },
          { vague: "改一下按钮", precise: "主操作按钮与次要操作按钮视觉权重相同，建议主按钮用实心样式，次要按钮改为描边样式" },
        ]}
      />

      <h2>8.2 给 AI 写高质量 UI Prompt</h2>

      <p>
        在 vibe coding 中，prompt 质量直接决定生成结果的审美水平。以下是一个经过验证的 prompt 结构：
      </p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <h4 className="text-sm font-semibold text-[var(--color-accent)] mb-3">Prompt 结构模板</h4>
        <div className="space-y-3 text-sm">
          <p><strong>1. 功能描述</strong>：做什么、给谁用、核心功能是什么</p>
          <p><strong>2. 风格参照</strong>：「参考 [具体产品] 的 [具体页面]」</p>
          <p><strong>3. 设计约束</strong>：配色、间距、字体的具体参数</p>
          <p><strong>4. 禁止项</strong>：不要什么（「不要渐变」「不要圆角过大」「不要使用彩虹色」）</p>
        </div>
      </div>

      <ComparisonCard
        title="Prompt 改进示例"
        bad={
          <div className="text-sm text-[var(--color-text-secondary)] space-y-2">
            <p className="font-mono text-xs bg-[var(--color-bg-tertiary)] p-3 rounded">
              &ldquo;做一个好看的用户管理页面&rdquo;
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              结果：AI 使用默认审美——彩色渐变、过多装饰、所有元素同等大小
            </p>
          </div>
        }
        good={
          <div className="text-sm text-[var(--color-text-secondary)] space-y-2">
            <p className="font-mono text-xs bg-[var(--color-bg-tertiary)] p-3 rounded leading-relaxed">
              &ldquo;用户管理页面，包含用户列表表格和搜索筛选。参考 Linear 的 team members 页面风格。深色主题，zinc 色系背景，蓝色强调色。表格行高 48px，数字右对齐用等宽字体。不要渐变、不要阴影、不要圆角大于 8px。&rdquo;
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              结果：风格准确、参数明确、AI 有清晰的设计约束
            </p>
          </div>
        }
        badNotes={["没有风格参照", "没有具体参数", "「好看」不是可执行的指令"]}
        goodNotes={["有具体产品参照（Linear）", "有参数约束（行高、圆角、色系）", "有禁止项（不要渐变、阴影）"]}
      />

      <h3>有效的审美关键词</h3>
      <p>以下关键词在 AI prompt 中有较高的审美信噪比：</p>
      <ul>
        <li><code>minimal</code> / <code>clean</code>：减少装饰元素</li>
        <li><code>muted palette</code>：低饱和度配色</li>
        <li><code>spacious</code>：充裕的留白</li>
        <li><code>restrained</code>：克制的设计</li>
        <li><code>monochrome with single accent</code>：单色系 + 一个强调色</li>
        <li><code>subtle borders, no shadows</code>：用边框替代阴影（深色主题）</li>
        <li><code>consistent 8px spacing grid</code>：统一间距系统</li>
      </ul>

      <h2>8.3 Code Review 中的设计反馈</h2>

      <p>反馈公式：<strong>[位置] + [观察] + [原理] + [建议]</strong></p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)] text-sm space-y-4">
        <div>
          <span className="text-[var(--color-bad)] text-xs">低效反馈：</span>
          <p className="text-[var(--color-text-secondary)] mt-1">&ldquo;这个表单不太好看，能改改吗？&rdquo;</p>
        </div>
        <div>
          <span className="text-[var(--color-good)] text-xs">高效反馈：</span>
          <p className="text-[var(--color-text)] mt-1">
            &ldquo;注册表单的 label 和 input 之间间距（16px）跟 input 和下一个 label 的间距（16px）相同，导致字段之间没有分组感。建议 label→input 间距缩小到 6px，input→下一个 label 间距保持 16px，让相关元素视觉上成组。参考格式塔接近性原则。&rdquo;
          </p>
        </div>
      </div>

      <KeyInsight>
        精确的设计语言不只是让沟通更高效，它还会反过来<strong>提升你的观察力</strong>。当你有了「饱和度」「对比度」「视觉权重」「间距节奏」这些词汇后，你会开始注意到以前忽略的细节。语言塑造感知——语言学家 Sapir 和 Whorf 的假说在审美领域完全成立。
      </KeyInsight>
    </>
  );
}
