import ComparisonCard from "@/components/ComparisonCard";
import KeyInsight from "@/components/KeyInsight";
import SpacingDemo from "@/components/SpacingDemo";

export default function ChapterSpacing() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第六章</p>
      <h1>间距与布局 — 不可见的设计</h1>

      <blockquote>
        "White space is to be regarded as an active element, not a passive background."
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Jan Tschichold</span>
      </blockquote>

      <p>
        间距是设计中最强大却最不可见的工具。你不会「看到」间距本身，但你会感受到它的效果：呼吸感、节奏感、信息的分组与分离。大多数 AI 生成的界面最容易诊断的问题就是间距——要么太挤（所有元素紧密排列），要么太均匀（所有间距相同，缺乏分组）。
      </p>

      <h2>6.1 间距的认知科学</h2>

      <p>
        格式塔接近性原则的量化版本来自 Stephen Palmer（1992）的实验。他发现，当两组点的组间距离是组内距离的 <strong>2 倍以上</strong>时，人们会可靠地将它们感知为两组。这给了我们一个实用的设计参数：<strong>不相关元素之间的间距应至少是相关元素间距的 2 倍</strong>。
      </p>

      <p>
        在 CSS 术语中：<code>padding</code> 表示归属（元素属于这个容器），<code>margin</code> 表示分离（这个容器与其他容器有边界）。一个卡片的 <code>padding: 24px</code> 说的是「卡片内容属于卡片」，卡片的 <code>margin-bottom: 16px</code> 说的是「这张卡片和下一张卡片是不同的单元」。
      </p>

      <h2>6.2 间距系统</h2>

      <p>
        <strong>4px 基准网格</strong>是现代 UI 间距系统的基础。所有间距值都是 4 的倍数：4、8、12、16、20、24、32、40、48、64。这不是随意选择——4px 足够小以提供精细控制，又能保证所有元素在视觉上对齐。
      </p>

      <SpacingDemo
        title="8px 间距系统"
        values={[4, 8, 12, 16, 24, 32, 48, 64]}
        labels={[
          "最小间距（图标与文字）",
          "紧凑间距（列表项内部）",
          "默认间距（表单元素）",
          "标准间距（段落间）",
          "分组间距（区块内部）",
          "区块间距（区块之间）",
          "大区块间距（页面段落）",
          "页面间距（全局留白）",
        ]}
      />

      <h3>间距比例的核心规则</h3>
      <p>
        <strong>相关元素的间距 &lt; 无关元素的间距</strong>。这条规则的具体应用：
      </p>
      <ul>
        <li>表单 label 到 input 的间距（4-8px）&lt; input 到下一个 label 的间距（16-24px）</li>
        <li>标题到其下方段落的间距（8-12px）&lt; 段落到下一个标题的间距（24-32px）</li>
        <li>卡片内部元素的间距（12-16px）&lt; 卡片之间的间距（16-24px）</li>
      </ul>

      <ComparisonCard
        title="间距分组"
        bad={
          <div className="space-y-4 text-sm">
            <div className="text-[var(--color-text-secondary)] text-xs font-medium">用户名</div>
            <div className="h-8 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
            <div className="text-[var(--color-text-secondary)] text-xs font-medium">邮箱</div>
            <div className="h-8 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
            <div className="text-[var(--color-text-secondary)] text-xs font-medium">密码</div>
            <div className="h-8 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
          </div>
        }
        good={
          <div className="text-sm">
            <div className="mb-4">
              <div className="text-[var(--color-text-secondary)] text-xs font-medium mb-1.5">用户名</div>
              <div className="h-8 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
            </div>
            <div className="mb-4">
              <div className="text-[var(--color-text-secondary)] text-xs font-medium mb-1.5">邮箱</div>
              <div className="h-8 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
            </div>
            <div>
              <div className="text-[var(--color-text-secondary)] text-xs font-medium mb-1.5">密码</div>
              <div className="h-8 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
            </div>
          </div>
        }
        badNotes={[
          "所有元素等距排列（16px）",
          "Label 和 Input 的距离 = Input 和下一个 Label 的距离",
          "大脑无法自动分组",
        ]}
        goodNotes={[
          "Label → Input：6px（紧密，表示归属）",
          "Input → 下一个 Label：16px（较大，表示新字段）",
          "视觉上自然形成三个表单组",
        ]}
      />

      <h2>6.3 网格系统</h2>

      <p>
        12 列网格之所以成为行业标准，是因为 12 的因数最多：可以等分为 1、2、3、4、6、12 列。这意味着你可以灵活地创建各种布局组合——3+9、4+4+4、6+6、8+4——而不需要任何不整除的计算。
      </p>

      <p>
        Müller-Brockmann 在 1961 年用印刷网格解决的问题，和今天 CSS Grid 解决的问题完全相同：<strong>如何在有限空间内系统地组织信息，使其既灵活又一致</strong>。
      </p>

      <h2>6.4 留白的艺术</h2>

      <p>
        Tschichold 的观点需要反复强调：<strong>留白是主动的设计元素，不是被动的空余空间</strong>。分类来看：
      </p>

      <p>
        <strong>Micro White Space</strong>——行间距、字间距、图标与文字的间距。这些间距影响的是可读性和精致度。差一两个像素，外行可能说不出区别，但会感到「粗糙」或「精致」。
      </p>

      <p>
        <strong>Macro White Space</strong>——区块间距、边距、页面留白。这些间距影响的是整体的呼吸感和信息密度。一个 padding 为 16px 的卡片和 padding 为 32px 的卡片，传递的是完全不同的设计意图：前者紧凑高效，后者从容大气。
      </p>

      <KeyInsight>
        AI 生成的界面为什么总是显得「满」？因为 AI 的训练目标是「填充空间」——空白在 AI 看来是未完成的缺陷，但在设计中，<strong>空白是信息</strong>。它告诉用户「这里有一个停顿」「这两块内容不相关」「你可以在这里喘口气」。学会主动使用留白，是从「业余」到「专业」最显著的分水岭。
      </KeyInsight>
    </>
  );
}
