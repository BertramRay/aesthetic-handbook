import KeyInsight from "@/components/KeyInsight";

export default function ChapterPreface() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">序章</p>
      <h1>为什么 Vibe Coder 需要审美能力</h1>

      <blockquote>
        "Design is not just what it looks like and feels like. Design is how it works."
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Steve Jobs</span>
      </blockquote>

      <p>
        2024 年以来，vibe coding 彻底改变了界面开发的门槛。v0、Cursor、Bolt 让任何人都能用自然语言生成功能完整的界面代码。但一个尖锐的问题随之浮现：<strong>AI 生成的界面为什么普遍「能用但不好看」？</strong>
      </p>

      <p>
        答案不在技术，而在审美意图。AI 缺少的不是渲染能力，而是<strong>设计决策</strong>——它不知道这个页面里什么信息最重要，什么颜色该退后，什么间距能让内容「呼吸」。这些判断只能来自人。
      </p>

      <p>
        好消息是：审美不是天赋，是可训练的模式识别能力。神经美学研究者 V.S. Ramachandran 和 William Hirstein 在其经典论文 <em>The Science of Art</em>（1999）中指出，审美愉悦源于大脑对特定视觉模式的识别和奖励——对称、对比、分组、层次。这些模式是可以学习和内化的。
      </p>

      <KeyInsight>
        本手册的目标是培养两种能力：<strong>判断力</strong>（能看出好坏）和<strong>表达力</strong>（能说清楚为什么好、为什么坏、怎么改）。学习路径遵循布鲁姆认知分类法（Bloom&apos;s Taxonomy）的递进结构：<strong>感知 → 理解 → 判断 → 表达</strong>。
      </KeyInsight>

      <h3>本手册的结构</h3>

      <p>
        <strong>第一部分：认知基础</strong>（第 1-2 章）——从认知科学和设计史理解「好看」的底层逻辑。你会学到为什么人类对特定视觉模式有偏好，以及当代 UI 审美是如何从包豪斯演变到 shadcn 的。
      </p>
      <p>
        <strong>第二部分：设计要素</strong>（第 3-6 章）——逐一拆解视觉层次、色彩、字体、间距四大核心要素，每个概念都有理论依据和实战案例。
      </p>
      <p>
        <strong>第三部分：实践应用</strong>（第 7-9 章）——从组件级审美分析到设计语言表达，再到持续训练方法论。
      </p>
    </>
  );
}
