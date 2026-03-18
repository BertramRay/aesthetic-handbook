import ColorSwatch from "@/components/ColorSwatch";
import KeyInsight from "@/components/KeyInsight";

export default function ChapterColor() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第四章</p>
      <h1>色彩理论与实践</h1>

      <blockquote>
        "Color is a power which directly influences the soul."
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Wassily Kandinsky, <em>Concerning the Spiritual in Art</em>, 1911</span>
      </blockquote>

      <h2>4.1 色彩科学基础</h2>

      <p>
        每种颜色可以用三个独立维度描述：
      </p>
      <ul>
        <li><strong>色相（Hue）</strong>：色彩的「种类」——红、橙、黄、绿、蓝、紫</li>
        <li><strong>饱和度（Saturation）</strong>：色彩的「纯度」——从灰色到纯色</li>
        <li><strong>明度（Lightness）</strong>：色彩的「亮暗」——从黑色到白色</li>
      </ul>

      <p>
        <strong>为什么用 HSL 而非 HEX 思考？</strong>因为 HSL 的三个维度直接对应人的视觉感知。当你说「这个蓝色太鲜艳」，你实际在说「饱和度太高」（S 值过大）。当你说「这个绿色看不清」，你实际在说「跟背景的明度差太小」（L 值接近）。HEX 的 #3B82F6 不会告诉你这些信息，但 HSL 的 hsl(217, 91%, 60%) 会——91% 的饱和度确实很高。
      </p>

      <p>
        色彩和谐理论最早由包豪斯教师 Johannes Itten 在《The Art of Color》（1961）中系统化。他提出的色彩对比模型至今仍是配色的理论基础。其中与 UI 设计最相关的是<strong>同时对比（Simultaneous Contrast）</strong>——同一种颜色在不同背景上看起来会不同。这就是为什么深色主题和浅色主题的强调色不能直接复用，需要针对背景调整饱和度和明度。
      </p>

      <h2>4.2 UI 配色的科学方法</h2>

      <h3>60-30-10 法则</h3>
      <p>
        这个法则源于室内设计，但在 UI 中同样有效：<strong>60% 的面积用主色（通常是中性背景色），30% 用辅色（内容色、卡片色），10% 用强调色（CTA、链接、重要标记）</strong>。
      </p>

      <p>
        实际操作中，对于深色主题 UI，「60%」是深色背景（如 zinc-950），「30%」是卡片和区块的稍浅背景（如 zinc-900），「10%」是一个品牌/强调色（如 amber-500）。大多数优秀的 UI，其「彩色」面积占比远低于你的直觉——这就是「克制」的含义。
      </p>

      <h3>中性色优先</h3>
      <p>
        Refactoring UI 的核心洞察之一：<strong>先用灰度设计，最后再加颜色</strong>。如果你的界面在纯灰度下层次清晰、信息可读，那么颜色只是锦上添花。如果你依赖颜色来区分信息层次，一旦颜色选择不当，整个界面就会崩溃。
      </p>

      <ColorSwatch
        title="推荐中性色系：Zinc"
        layout="palette"
        colors={[
          { hex: "#09090b", name: "950", usage: "背景" },
          { hex: "#18181b", name: "900", usage: "卡片" },
          { hex: "#27272a", name: "800", usage: "边框" },
          { hex: "#3f3f46", name: "700", usage: "分隔线" },
          { hex: "#52525b", name: "600", usage: "禁用文字" },
          { hex: "#71717a", name: "500", usage: "占位文字" },
          { hex: "#a1a1aa", name: "400", usage: "辅助文字" },
          { hex: "#d4d4d8", name: "300", usage: "次要文字" },
          { hex: "#e4e4e7", name: "200", usage: "主体文字" },
          { hex: "#fafafa", name: "50", usage: "标题" },
        ]}
      />

      <h3>无障碍色彩</h3>
      <p>
        WCAG 2.1 标准要求正文文字与背景的<strong>对比度至少 4.5:1</strong>（AA 级），大号文字至少 3:1。AAA 级要求 7:1。全球约 8% 的男性和 0.5% 的女性有某种形式的色觉异常，所以<strong>永远不要仅依靠颜色传达信息</strong>——用颜色 + 图标、颜色 + 文字标签的组合。
      </p>

      <h2>4.3 色彩心理学</h2>

      <p>
        Elliot 和 Maier（2014）的综述研究《Color Psychology》系统整理了色彩联想的跨文化共性和差异。一些实用的启示：
      </p>
      <ul>
        <li><strong>蓝色</strong>：最「安全」的 UI 色彩——跨文化关联信任、专业、冷静。Facebook、LinkedIn、Twitter/X 都选择蓝色不是巧合</li>
        <li><strong>红色</strong>：警告、紧迫、重要。用于错误提示和删除操作，但需注意在中国文化中红色同时代表喜庆</li>
        <li><strong>绿色</strong>：成功、通过、正确。用于成功反馈和确认操作</li>
        <li><strong>橙色/琥珀色</strong>：警示但不紧迫。比红色柔和，适合非破坏性的提醒</li>
      </ul>

      <p>
        关于深色 vs 浅色主题：Piepenbrock 等人（2013）的研究表明，在正常光照条件下，深色背景上的浅色文字对于长时间阅读可能略逊于传统的浅底深字。但在低光照环境（夜间、暗室）和代码编辑场景中，深色主题减少了屏幕眩光，降低了视觉疲劳。现代做法是提供两种主题并让用户选择。
      </p>

      <h2>4.4 实用配色工作流</h2>

      <p>以下是一个经过验证的 UI 配色工作流，适用于大多数项目：</p>

      <p>
        <strong>Step 1：选中性色系</strong>。从 zinc、slate、gray、neutral、stone 中选一个。差异微妙但存在：zinc 偏冷（蓝底灰），stone 偏暖（黄底灰）。技术产品通常用 zinc 或 slate。
      </p>
      <p>
        <strong>Step 2：选一个强调色</strong>。只要一个。蓝色（blue-500）最安全，紫色偏创意，琥珀色偏温暖。关键是：<strong>整个产品只用这一个彩色</strong>。
      </p>
      <p>
        <strong>Step 3：派生语义色</strong>。成功用绿色、错误用红色、警告用橙色、信息用蓝色。这些几乎是行业标准，不需要创新。
      </p>
      <p>
        <strong>Step 4：对比度检查</strong>。用工具（如 WebAIM Contrast Checker）验证每种文字色/背景色组合是否达到 4.5:1。
      </p>

      <ColorSwatch
        title="配色方案 #1：冷调专业（推荐默认方案）"
        colors={[
          { hex: "#09090b", name: "Background", usage: "主背景" },
          { hex: "#18181b", name: "Surface", usage: "卡片/面板" },
          { hex: "#3b82f6", name: "Primary", usage: "强调色" },
          { hex: "#22c55e", name: "Success", usage: "成功" },
          { hex: "#ef4444", name: "Error", usage: "错误" },
        ]}
      />

      <ColorSwatch
        title="配色方案 #2：暖调创意"
        colors={[
          { hex: "#0c0a09", name: "Background", usage: "主背景" },
          { hex: "#1c1917", name: "Surface", usage: "卡片/面板" },
          { hex: "#f59e0b", name: "Primary", usage: "强调色" },
          { hex: "#22c55e", name: "Success", usage: "成功" },
          { hex: "#ef4444", name: "Error", usage: "错误" },
        ]}
      />

      <KeyInsight>
        配色的第一条规则：<strong>少用颜色</strong>。90% 的优秀 UI 其实只有中性色 + 一个强调色。如果你发现自己在用第三种彩色，先停下来问：「这个颜色在传达什么信息？这个信息能不能用大小、字重或间距来表达？」
      </KeyInsight>
    </>
  );
}
