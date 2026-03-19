import ExpressionTable from "@/components/ExpressionTable";
import KeyInsight from "@/components/KeyInsight";
import ComparisonCard from "@/components/ComparisonCard";

export default function ChapterExpression() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第八章</p>
      <h1>学会表达 — 从模糊感受到精确语言</h1>

      <blockquote>
        &ldquo;The limits of my language mean the limits of my world.&rdquo;
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Ludwig Wittgenstein</span>
      </blockquote>

      <p>
        你能看出一个界面哪里不对劲，但让你说出来，你只能蹦出「不好看」「太丑了」「改一下」——就像一个美食家只会说「不好吃」，却说不出是盐放多了还是火候不对。
      </p>
      <p>
        这一章就是来给你装上那个精确的「味觉」的。
      </p>
      <p>
        能看出问题只是审美能力的一半，另一半是<strong>能说清楚</strong>。在 vibe coding 时代，你的审美最终要通过语言——对同事的反馈或对 AI 的 prompt——来落地。模糊的语言只能带来模糊的结果。一个厨师说「加点盐」和「加 3 克盐」，出来的菜完全不同。设计也是一样。
      </p>

      {/* ===== 8.1 审美表达的词汇系统 ===== */}
      <h2>8.1 审美表达的词汇系统</h2>

      <p>
        以下是团队沟通中最常见的模糊表达，以及如何将它们转换为精确的、可操作的设计语言。每一对都配了视觉 demo——让你亲眼看到「模糊」和「精确」之间的距离有多远。
      </p>

      {/* ---- 层次问题 ---- */}
      <h3>层次问题</h3>

      <ExpressionTable
        title="层次相关的模糊 → 精确"
        pairs={[
          { vague: "不好看", precise: "视觉层次不清晰——标题和正文的字号差异不足，建议标题从 16px 增大到 24px" },
          { vague: "没有重点", precise: "所有元素视觉权重相同——缺少大小、色彩、字重的对比，用户不知道先看哪里" },
          { vague: "太平了", precise: "页面缺少视觉锚点——没有 hero 区域、没有强调色块，所有卡片同样大小同样灰" },
          { vague: "主次不分", precise: "主操作按钮（实心）和次要操作按钮（描边）使用了相同样式，建议用视觉权重区分" },
        ]}
      />

      {/* Visual demo: hierarchy problem */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示：「不好看」到底是什么？</p>
        <div className="grid grid-cols-2 gap-6">
          {/* Bad: no hierarchy */}
          <div>
            <p className="text-xs text-[var(--color-bad)] mb-2 font-medium">标题和正文字号差异不足</p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4 space-y-2">
              <div className="text-sm text-zinc-300">用户管理</div>
              <div className="text-sm text-zinc-400">管理你的团队成员和权限设置。</div>
              <div className="flex gap-2 mt-2">
                <div className="px-3 py-1.5 rounded-md bg-zinc-700 text-zinc-300 text-xs">添加用户</div>
                <div className="px-3 py-1.5 rounded-md bg-zinc-700 text-zinc-300 text-xs">导出列表</div>
              </div>
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)] mt-1">标题 14px，正文 14px，按钮全部相同</p>
          </div>
          {/* Good: clear hierarchy */}
          <div>
            <p className="text-xs text-[var(--color-good)] mb-2 font-medium">拉开层次后</p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4 space-y-2">
              <div className="text-xl font-bold text-zinc-100">用户管理</div>
              <div className="text-sm text-zinc-500">管理你的团队成员和权限设置。</div>
              <div className="flex gap-2 mt-2">
                <div className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-xs font-medium">添加用户</div>
                <div className="px-3 py-1.5 rounded-md border border-zinc-700 text-zinc-400 text-xs">导出列表</div>
              </div>
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)] mt-1">标题 20px 加粗，正文 14px 降色，主按钮实心突出</p>
          </div>
        </div>
      </div>

      {/* ---- 间距问题 ---- */}
      <h3>间距问题</h3>

      <ExpressionTable
        title="间距相关的模糊 → 精确"
        pairs={[
          { vague: "太挤了", precise: "卡片内边距只有 8px，内容缺乏呼吸感，建议增加到 16-24px" },
          { vague: "感觉很乱", precise: "元素没有对齐基线，间距不统一（混用了 10px/15px/18px），建议统一到 8px 网格" },
          { vague: "太空了", precise: "卡片之间间距 48px 过大，组内元素看起来不相关，建议缩小到 16-24px 加强分组感" },
          { vague: "不透气", precise: "段落之间和区块之间使用了相同间距（都是 16px），缺乏层级节奏，建议段落间 16px、区块间 32px" },
        ]}
      />

      {/* Visual demo: spacing */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示：「太挤了」vs「刚好」</p>
        <div className="grid grid-cols-2 gap-6">
          {/* Cramped */}
          <div>
            <p className="text-xs text-[var(--color-bad)] mb-2 font-medium">内边距 8px — 喘不过气</p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-2 space-y-1">
              <div className="text-sm font-semibold text-zinc-200">项目概览</div>
              <div className="text-xs text-zinc-500">最后更新：2 小时前</div>
              <div className="flex gap-1">
                <div className="px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 text-[10px]">进行中</div>
                <div className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px]">3 个任务</div>
              </div>
              <div className="text-xs text-zinc-600">内容紧贴边框，像被关在笼子里。</div>
            </div>
            <div className="mt-2 flex items-center gap-1">
              <div className="w-2 h-8 bg-[var(--color-bad)]/20 rounded-sm" />
              <span className="text-[10px] text-[var(--color-text-tertiary)] font-mono">padding: 8px</span>
            </div>
          </div>
          {/* Comfortable */}
          <div>
            <p className="text-xs text-[var(--color-good)] mb-2 font-medium">内边距 20px — 呼吸自如</p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-5 space-y-2">
              <div className="text-sm font-semibold text-zinc-200">项目概览</div>
              <div className="text-xs text-zinc-500">最后更新：2 小时前</div>
              <div className="flex gap-2">
                <div className="px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 text-[10px]">进行中</div>
                <div className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px]">3 个任务</div>
              </div>
              <div className="text-xs text-zinc-400">内容有空间舒展，阅读更从容。</div>
            </div>
            <div className="mt-2 flex items-center gap-1">
              <div className="w-5 h-8 bg-[var(--color-good)]/20 rounded-sm" />
              <span className="text-[10px] text-[var(--color-text-tertiary)] font-mono">padding: 20px</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---- 色彩问题 ---- */}
      <h3>色彩问题</h3>

      <ExpressionTable
        title="色彩相关的模糊 → 精确"
        pairs={[
          { vague: "颜色不对", precise: "强调色饱和度过高（S:90%），与中性背景反差刺眼，建议降至 S:60%" },
          { vague: "太花了", precise: "同一视图使用了 4 种以上彩色（蓝、绿、橙、紫），打破了 60-30-10 法则，建议只保留 1 个强调色" },
          { vague: "看着廉价", precise: "使用了高饱和的纯色（#FF0000, #00FF00），缺乏色调层次，建议使用 Tailwind 500 级别色阶" },
          { vague: "字看不清", precise: "文字与背景的对比度只有 2.8:1，低于 WCAG AA 标准（4.5:1），建议文字色加深或背景色减淡" },
        ]}
      />

      {/* Visual demo: color saturation */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示：「颜色不对」—— 饱和度的差距</p>
        <div className="grid grid-cols-2 gap-6">
          {/* Over-saturated */}
          <div>
            <p className="text-xs text-[var(--color-bad)] mb-2 font-medium">饱和度 S:100% — 刺眼</p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4 space-y-3">
              <div className="text-sm font-semibold text-zinc-200">数据看板</div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded-md text-xs font-medium text-white" style={{ backgroundColor: "hsl(217, 100%, 50%)" }}>查看报告</div>
                <div className="px-3 py-1.5 rounded-md text-xs font-medium text-white" style={{ backgroundColor: "hsl(142, 100%, 40%)" }}>导出</div>
              </div>
              <div className="flex gap-2">
                <div className="px-2 py-0.5 rounded text-[10px] font-medium" style={{ backgroundColor: "hsla(0, 100%, 50%, 0.2)", color: "hsl(0, 100%, 50%)" }}>紧急</div>
                <div className="px-2 py-0.5 rounded text-[10px] font-medium" style={{ backgroundColor: "hsla(45, 100%, 50%, 0.2)", color: "hsl(45, 100%, 50%)" }}>警告</div>
              </div>
            </div>
          </div>
          {/* Muted, professional */}
          <div>
            <p className="text-xs text-[var(--color-good)] mb-2 font-medium">饱和度 S:60-70% — 舒适专业</p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4 space-y-3">
              <div className="text-sm font-semibold text-zinc-200">数据看板</div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-xs font-medium">查看报告</div>
                <div className="px-3 py-1.5 rounded-md border border-zinc-700 text-zinc-400 text-xs">导出</div>
              </div>
              <div className="flex gap-2">
                <div className="px-2 py-0.5 rounded bg-red-500/15 text-red-400 text-[10px] font-medium">紧急</div>
                <div className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 text-[10px] font-medium">警告</div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-3 italic">
          左边的纯色像在对你喊叫，右边的色调像在跟你交谈。Tailwind 的默认色阶已经做好了饱和度调校——直接用就行，不要自己调 HSL。
        </p>
      </div>

      {/* ---- 字体问题 ---- */}
      <h3>字体问题</h3>

      <ExpressionTable
        title="字体相关的模糊 → 精确"
        pairs={[
          { vague: "字不好看", precise: "正文使用了衬线字体（Times New Roman），在屏幕上可读性差，建议换为 Inter 或 system-ui 无衬线字体" },
          { vague: "太素了", precise: "页面缺少字重对比——标题和正文都用了 regular（400），建议标题用 semibold（600）或 bold（700）" },
          { vague: "不够高级", precise: "圆角不统一（混用了 4px/8px/12px），字重层级模糊（4 种字重差异太小），间距缺乏节奏" },
          { vague: "行间距不对", precise: "正文行高 1.2 过于紧凑，阅读时行与行粘在一起，建议 14px 正文用 1.5-1.6 的 line-height" },
        ]}
      />

      {/* Visual demo: line-height */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示：行高的影响</p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-[var(--color-bad)] mb-2 font-medium">line-height: 1.2 — 行间黏连</p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4">
              <p className="text-sm text-zinc-300" style={{ lineHeight: 1.2 }}>
                这是一段正文文字，用于展示行高对阅读体验的影响。当行高设置为 1.2 时，行与行之间几乎没有间隙，文字挤在一起，眼睛很容易串行。长段落阅读会非常疲惫。
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs text-[var(--color-good)] mb-2 font-medium">line-height: 1.6 — 呼吸顺畅</p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4">
              <p className="text-sm text-zinc-300" style={{ lineHeight: 1.6 }}>
                这是一段正文文字，用于展示行高对阅读体验的影响。当行高设置为 1.6 时，每行之间有足够的空间，眼睛可以轻松跟踪当前行。长段落阅读依然舒适。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---- 整体感觉 ---- */}
      <h3>整体感觉</h3>

      <ExpressionTable
        title="整体感觉的模糊 → 精确"
        pairs={[
          { vague: "改一下按钮", precise: "主操作按钮与次要操作按钮视觉权重相同，建议主按钮用实心样式，次要按钮改为描边样式" },
          { vague: "感觉像山寨", precise: "多种设计风格混搭（圆角卡片 + 直角表格 + 阴影按钮），建议统一为一种设计语言" },
          { vague: "太老气了", precise: "使用了深灰色实底 + 粗边框 + 纯黑文字，建议换为浅灰底 + 细边框或无边框 + zinc 色阶文字" },
          { vague: "没有质感", precise: "所有卡片都是纯色平面，缺乏微妙的背景渐变或 border 细节，建议加 1px subtle border 和微弱的背景色差" },
        ]}
      />

      {/* Visual demo: "feels like a knockoff" */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示：「感觉像山寨」—— 风格混搭问题</p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-[var(--color-bad)] mb-2 font-medium">风格混搭 — 三种设计语言打架</p>
            <div className="rounded-lg border-2 border-zinc-600 bg-zinc-900 p-4 space-y-3">
              {/* Sharp corner header */}
              <div className="bg-zinc-800 p-2 text-sm font-bold text-zinc-200" style={{ borderRadius: 0 }}>设置</div>
              {/* Round card */}
              <div className="bg-zinc-850 p-3 rounded-2xl border border-zinc-700">
                <div className="text-xs text-zinc-400">通知偏好</div>
              </div>
              {/* Shadow button */}
              <div className="inline-block px-4 py-2 rounded-lg text-xs text-white font-medium" style={{ backgroundColor: "#2563eb", boxShadow: "0 4px 12px rgba(37, 99, 235, 0.5)", borderRadius: "4px" }}>保存更改</div>
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)] mt-1">直角标题 + 大圆角卡片 + 小圆角阴影按钮 = 三种风格</p>
          </div>
          <div>
            <p className="text-xs text-[var(--color-good)] mb-2 font-medium">统一设计语言 — 一种风格贯穿</p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4 space-y-3">
              <div className="text-sm font-semibold text-zinc-200">设置</div>
              <div className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-800">
                <div className="text-xs text-zinc-400">通知偏好</div>
              </div>
              <div className="inline-block px-4 py-2 rounded-lg bg-blue-500 text-white text-xs font-medium">保存更改</div>
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)] mt-1">统一 8px 圆角 + 无阴影 + 一致的边框处理</p>
          </div>
        </div>
      </div>

      <KeyInsight>
        注意到没有？每一个「模糊表达」背后都藏着 2-3 个<strong>可量化的设计参数</strong>（字号、间距、饱和度、对比度、圆角值）。学会说出这些参数，就像从「不好吃」进化到「盐放多了 0.5 克，出锅晚了 30 秒」——别人才知道怎么帮你改。
      </KeyInsight>

      {/* ===== 8.2 给 AI 写高质量 UI Prompt ===== */}
      <h2>8.2 给 AI 写高质量 UI Prompt</h2>

      <p>
        在 vibe coding 中，prompt 质量直接决定生成结果的审美水平。一个精确的 prompt 就像一份好的建筑图纸——施工队（AI）看了就知道该怎么做。一个模糊的 prompt 就像跟装修工人说「弄好看点」——每个人心目中的「好看」都不一样，你得到的就是 AI 心目中的「好看」（通常是彩虹渐变 + 大圆角 + 阴影全上）。
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

      <p>
        下面是五个真实场景的 prompt 改进示例。每个都展示了模糊 prompt 会导致什么问题，以及精确 prompt 如何避免这些问题。
      </p>

      {/* Prompt Example 1: User Management (Dashboard) */}
      <ComparisonCard
        title="示例 1：用户管理页面（Dashboard 类）"
        bad={
          <div className="text-sm text-[var(--color-text-secondary)] space-y-2">
            <p className="font-mono text-xs bg-[var(--color-bg-tertiary)] p-3 rounded">
              &ldquo;做一个好看的用户管理页面&rdquo;
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              结果：AI 使用默认审美——彩色渐变背景、过多装饰、所有元素同等大小、彩虹色标签
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

      {/* Prompt Example 2: Form Page */}
      <ComparisonCard
        title="示例 2：注册/登录表单页"
        bad={
          <div className="text-sm text-[var(--color-text-secondary)] space-y-2">
            <p className="font-mono text-xs bg-[var(--color-bg-tertiary)] p-3 rounded">
              &ldquo;做一个注册页面，要现代一点&rdquo;
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              结果：AI 加了毛玻璃背景、渐变按钮、过多的 input 装饰、背景动画
            </p>
          </div>
        }
        good={
          <div className="text-sm text-[var(--color-text-secondary)] space-y-2">
            <p className="font-mono text-xs bg-[var(--color-bg-tertiary)] p-3 rounded leading-relaxed">
              &ldquo;注册页面，居中单卡片布局，最大宽度 400px。参考 Clerk 的登录页风格。深色背景 zinc-950，卡片 zinc-900 + 1px zinc-800 边框。Input 用 zinc-800 底色，focus 时 ring-blue-500。label 在 input 上方，间距 6px。label 和下一个 input 之间 16px。主按钮 100% 宽，蓝色实心。不要社交登录图标装饰、不要背景图案。&rdquo;
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              结果：干净的表单，间距精确，焦点清晰
            </p>
          </div>
        }
        badNotes={["「现代」含义模糊——每个人的理解不同", "没有布局约束", "AI 可能添加大量视觉噪音"]}
        goodNotes={["布局精确到像素（400px 宽）", "间距体系明确（6px / 16px）", "参照具体产品（Clerk），有禁止项"]}
      />

      {/* Prompt Example 3: Landing Page */}
      <ComparisonCard
        title="示例 3：Landing Page（着陆页）"
        bad={
          <div className="text-sm text-[var(--color-text-secondary)] space-y-2">
            <p className="font-mono text-xs bg-[var(--color-bg-tertiary)] p-3 rounded">
              &ldquo;做一个炫酷的产品着陆页&rdquo;
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              结果：3D 动画、粒子效果、多种渐变、巨大的 hero 标题、性能灾难
            </p>
          </div>
        }
        good={
          <div className="text-sm text-[var(--color-text-secondary)] space-y-2">
            <p className="font-mono text-xs bg-[var(--color-bg-tertiary)] p-3 rounded leading-relaxed">
              &ldquo;SaaS 产品着陆页。参考 Vercel 或 Resend 的首页风格。深色主题。Hero 区域：居中标题（48px semibold），副标题（18px zinc-400），一个 CTA 按钮。特性区域：3 列网格卡片，每张卡片有图标 + 标题 + 描述。底部 CTA。全局间距基于 8px 网格。只用 zinc 中性色 + 一个蓝色强调色。不要渐变背景、不要动画、不要 3D 效果。&rdquo;
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              结果：克制、专业、加载快、每个元素都有明确的目的
            </p>
          </div>
        }
        badNotes={["「炫酷」= AI 把所有视觉特效全开", "没有结构描述", "完全没有约束"]}
        goodNotes={["逐区域描述结构（Hero → 特性 → CTA）", "精确到字号（48px / 18px）", "明确禁止性能杀手（动画、3D）"]}
      />

      {/* Prompt Example 4: Settings Page */}
      <ComparisonCard
        title="示例 4：设置页面"
        bad={
          <div className="text-sm text-[var(--color-text-secondary)] space-y-2">
            <p className="font-mono text-xs bg-[var(--color-bg-tertiary)] p-3 rounded">
              &ldquo;做一个设置页面，简洁点&rdquo;
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              结果：内容太少、留白过多、缺乏分组、所有设置项平铺一页
            </p>
          </div>
        }
        good={
          <div className="text-sm text-[var(--color-text-secondary)] space-y-2">
            <p className="font-mono text-xs bg-[var(--color-bg-tertiary)] p-3 rounded leading-relaxed">
              &ldquo;设置页面，左右布局：左侧垂直导航栏（200px 宽），右侧内容区域（最大 640px）。参考 GitHub 的 Settings 页面结构。设置项按分组显示，每组标题 semibold + 描述文字 zinc-500。开关用 toggle 组件，危险操作区域用 red-500/10 底色 + 红色边框。表单末尾有保存按钮（右对齐）。不要 tabs，不要 accordion。&rdquo;
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              结果：结构清晰、分组合理、危险操作有视觉警示
            </p>
          </div>
        }
        badNotes={["「简洁」不等于「少」——AI 可能删掉必要信息", "没有布局指导", "缺少分组逻辑"]}
        goodNotes={["布局结构明确（左右分栏 + 宽度）", "分组方式和样式都有描述", "危险区域有特殊视觉处理"]}
      />

      {/* Prompt Example 5: Data Table */}
      <ComparisonCard
        title="示例 5：数据表格页"
        bad={
          <div className="text-sm text-[var(--color-text-secondary)] space-y-2">
            <p className="font-mono text-xs bg-[var(--color-bg-tertiary)] p-3 rounded">
              &ldquo;做一个订单列表页面&rdquo;
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              结果：默认 HTML 表格样式、没有筛选排序、分页位置随意、列宽不合理
            </p>
          </div>
        }
        good={
          <div className="text-sm text-[var(--color-text-secondary)] space-y-2">
            <p className="font-mono text-xs bg-[var(--color-bg-tertiary)] p-3 rounded leading-relaxed">
              &ldquo;订单管理表格页。参考 Stripe Dashboard 的 Payments 列表风格。表头 zinc-800 底色，sticky。行高 52px，hover 时 zinc-800/50 底色。列：订单号（等宽字体、左对齐）、客户名、金额（右对齐、等宽字体）、状态（彩色 badge：绿色=已完成、黄色=处理中、红色=已取消）、日期（relative time）。表格上方：搜索框 + 状态筛选下拉 + 日期范围选择。表格下方：分页组件居右。不要斑马纹背景、不要竖向分隔线。&rdquo;
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              结果：专业级数据表格，对齐和排版精确，筛选逻辑完整
            </p>
          </div>
        }
        badNotes={["没说表格的任何细节", "列的数据类型和对齐方式全靠 AI 猜", "缺少筛选/分页需求"]}
        goodNotes={["每列的对齐和字体都有定义", "状态 badge 的颜色语义明确", "筛选 + 分页的位置和组件都有指定"]}
      />

      {/* ---- Prompt 词汇表 ---- */}
      <h3>Prompt 审美词汇表</h3>

      <p>
        以下关键词在 AI prompt 中经过验证有较高的审美信噪比。把它们当作你的「调味料架」——知道每种调料的效果，才能精准调味。
      </p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <div className="space-y-6">
          {/* Category: 风格基调 */}
          <div>
            <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">风格基调</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                { keyword: "minimal / clean", desc: "减少装饰元素，只保留必要内容。AI 会移除多余阴影、渐变、图标" },
                { keyword: "restrained / subtle", desc: "克制的设计。颜色不浓烈、动效不花哨、装饰不多余" },
                { keyword: "spacious / airy", desc: "充裕的留白。AI 会增大间距、减少信息密度" },
                { keyword: "dense / compact", desc: "信息密集。适合数据表格、管理后台。间距紧凑但不拥挤" },
                { keyword: "editorial / magazine-like", desc: "杂志排版风格。大标题、精美配图、优雅的字体层级" },
                { keyword: "brutalist", desc: "粗犷主义。粗边框、大字体、高对比度、无装饰" },
              ].map((item) => (
                <div key={item.keyword} className="flex gap-3 p-2 rounded-lg hover:bg-[var(--color-bg-tertiary)] transition-colors">
                  <code className="text-xs text-[var(--color-accent)] shrink-0 font-medium">{item.keyword}</code>
                  <span className="text-xs text-[var(--color-text-tertiary)]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category: 色彩 */}
          <div>
            <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">色彩控制</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                { keyword: "muted palette", desc: "低饱和度配色。颜色柔和不刺眼，适合专业工具类产品" },
                { keyword: "monochrome with single accent", desc: "单色系 + 一个强调色。最安全的配色策略" },
                { keyword: "dark mode with zinc neutrals", desc: "指定中性色系，避免 AI 用纯黑 #000 或偏暖灰" },
                { keyword: "high contrast, WCAG AA compliant", desc: "强调无障碍。AI 会确保文字对比度达标" },
              ].map((item) => (
                <div key={item.keyword} className="flex gap-3 p-2 rounded-lg hover:bg-[var(--color-bg-tertiary)] transition-colors">
                  <code className="text-xs text-[var(--color-accent)] shrink-0 font-medium">{item.keyword}</code>
                  <span className="text-xs text-[var(--color-text-tertiary)]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category: 布局与间距 */}
          <div>
            <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">布局与间距</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                { keyword: "consistent 8px spacing grid", desc: "统一间距系统。所有间距为 8 的倍数（8/16/24/32px）" },
                { keyword: "max-width 1200px centered", desc: "内容区域限宽居中，避免在大屏上内容拉伸" },
                { keyword: "card-based layout", desc: "卡片式布局。内容分组在独立卡片中" },
                { keyword: "sidebar + content layout", desc: "左右分栏。常用于设置页、文档站" },
              ].map((item) => (
                <div key={item.keyword} className="flex gap-3 p-2 rounded-lg hover:bg-[var(--color-bg-tertiary)] transition-colors">
                  <code className="text-xs text-[var(--color-accent)] shrink-0 font-medium">{item.keyword}</code>
                  <span className="text-xs text-[var(--color-text-tertiary)]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category: 细节与边界 */}
          <div>
            <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">细节控制与禁止项</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                { keyword: "subtle borders, no shadows", desc: "用边框替代阴影。深色主题首选" },
                { keyword: "no gradients, no decorative icons", desc: "禁止渐变和装饰性图标。保持界面干净" },
                { keyword: "border-radius max 8px", desc: "控制圆角上限。避免 AI 用过大圆角" },
                { keyword: "monospace for numbers/code", desc: "数字和代码用等宽字体，确保列对齐" },
              ].map((item) => (
                <div key={item.keyword} className="flex gap-3 p-2 rounded-lg hover:bg-[var(--color-bg-tertiary)] transition-colors">
                  <code className="text-xs text-[var(--color-accent)] shrink-0 font-medium">{item.keyword}</code>
                  <span className="text-xs text-[var(--color-text-tertiary)]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <KeyInsight label="Prompt 写作的核心原则">
        写 UI prompt 的黄金法则：<strong>约束越多，结果越好</strong>。这和写代码的类型系统一个道理——TypeScript 比 JavaScript 约束更多，但 bug 更少。每多加一条约束（颜色、间距、参照物、禁止项），AI 的「自由发挥空间」就少一分，出来的东西就离你要的更近一步。
      </KeyInsight>

      {/* ===== 8.3 Code Review 中的设计反馈 ===== */}
      <h2>8.3 Code Review 中的设计反馈</h2>

      <p>
        代码有 lint 规则，设计反馈也需要结构。好的设计反馈不是「不好看，改改」——而是一份可操作的修改清单。反馈公式：
      </p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-sm font-semibold text-[var(--color-text)] mb-3">反馈公式</p>
        <div className="flex items-center gap-2 text-sm">
          <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 font-mono text-xs">[位置]</span>
          <span className="text-zinc-500">+</span>
          <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-400 font-mono text-xs">[观察]</span>
          <span className="text-zinc-500">+</span>
          <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 font-mono text-xs">[原理]</span>
          <span className="text-zinc-500">+</span>
          <span className="px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 font-mono text-xs">[建议]</span>
        </div>
      </div>

      {/* Feedback Example 1 */}
      <ComparisonCard
        title="反馈示例 1：表单间距"
        bad={
          <div className="text-sm text-[var(--color-text-secondary)]">
            <p>&ldquo;这个表单不太好看，能改改吗？&rdquo;</p>
          </div>
        }
        good={
          <div className="text-sm text-[var(--color-text)] space-y-2">
            <p>
              &ldquo;<span className="text-blue-400">[注册表单]</span> label 和 input 之间间距（16px）跟 input 和下一个 label 的间距（16px）相同，<span className="text-purple-400">导致字段之间没有分组感</span>。<span className="text-amber-400">参考格式塔接近性原则</span>，建议 <span className="text-green-400">label→input 间距缩小到 6px，input→下一个 label 间距保持 16px</span>，让相关元素视觉上成组。&rdquo;
            </p>
          </div>
        }
        badNotes={["没说哪里不好看", "「改改」是什么意思？", "开发者只能盲猜"]}
        goodNotes={["精确到像素值", "引用了设计原理", "给出了具体修改方案"]}
      />

      {/* Feedback Example 2 */}
      <ComparisonCard
        title="反馈示例 2：按钮层级"
        bad={
          <div className="text-sm text-[var(--color-text-secondary)]">
            <p>&ldquo;按钮那里看着不太对&rdquo;</p>
          </div>
        }
        good={
          <div className="text-sm text-[var(--color-text)] space-y-2">
            <p>
              &ldquo;<span className="text-blue-400">[对话框底部]</span> &lsquo;确认删除&rsquo;和&lsquo;取消&rsquo;按钮都是蓝色实心样式，<span className="text-purple-400">视觉权重相同，用户无法快速区分主次操作</span>。<span className="text-amber-400">根据视觉层次原则</span>，建议 <span className="text-green-400">&lsquo;确认删除&rsquo;用红色实心（因为是破坏性操作），&lsquo;取消&rsquo;改为灰色描边或纯文字按钮</span>。&rdquo;
            </p>
          </div>
        }
        badNotes={["「那里」是哪里？", "「不太对」= 零信息量"]}
        goodNotes={["指明了具体位置和元素", "解释了为什么是问题（用户无法区分）", "建议包含破坏性操作的颜色语义"]}
      />

      {/* Feedback Example 3 */}
      <ComparisonCard
        title="反馈示例 3：卡片布局"
        bad={
          <div className="text-sm text-[var(--color-text-secondary)]">
            <p>&ldquo;卡片看着有点挤&rdquo;</p>
          </div>
        }
        good={
          <div className="text-sm text-[var(--color-text)] space-y-2">
            <p>
              &ldquo;<span className="text-blue-400">[首页卡片网格]</span> 三列卡片的间距只有 8px，卡片内边距也只有 12px，<span className="text-purple-400">内容紧贴边框，没有呼吸感</span>。<span className="text-amber-400">根据间距节奏原则</span>，建议 <span className="text-green-400">卡片间距增加到 16px，内边距增加到 20-24px，同时卡片标题和内容之间间距从 4px 增加到 8px</span>。&rdquo;
            </p>
          </div>
        }
        badNotes={["「有点挤」——挤多少？哪里挤？", "开发者不知道该改哪个间距值"]}
        goodNotes={["分别指出了外间距和内间距的问题", "给出了三个具体的间距值修改"]}
      />

      {/* Feedback Example 4: Realistic PR comment thread */}
      <h3>真实 PR 评论场景</h3>
      <p>来看一个完整的 PR 评论流程。开发者提交了一个 AI 生成的设置页面：</p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl border border-[var(--color-border-subtle)] overflow-hidden">
        {/* PR header */}
        <div className="px-5 py-3 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-tertiary)]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-[10px] text-green-400">PR</span>
            </div>
            <span className="text-sm font-semibold text-[var(--color-text)]">feat: add account settings page</span>
            <span className="text-xs text-[var(--color-text-tertiary)]">#847</span>
          </div>
        </div>

        {/* Comment 1: Developer */}
        <div className="px-5 py-4 border-b border-[var(--color-border-subtle)]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400 font-bold">D</div>
            <span className="text-xs font-medium text-[var(--color-text)]">developer-alice</span>
            <span className="text-xs text-[var(--color-text-tertiary)]">2 hours ago</span>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">
            用 Claude 生成了设置页面的初版，请 review。截图如下：
          </p>
          {/* Mock screenshot */}
          <div className="mt-3 rounded-lg border border-zinc-700 bg-zinc-900 p-4 space-y-2">
            <div className="text-base text-zinc-200" style={{ fontWeight: 400 }}>Account Settings</div>
            <div className="text-sm text-zinc-200" style={{ fontWeight: 400 }}>Username</div>
            <div className="h-8 bg-zinc-800 rounded border border-zinc-700" />
            <div className="text-sm text-zinc-200" style={{ fontWeight: 400 }}>Email</div>
            <div className="h-8 bg-zinc-800 rounded border border-zinc-700" />
            <div className="text-sm text-zinc-200" style={{ fontWeight: 400 }}>Bio</div>
            <div className="h-16 bg-zinc-800 rounded border border-zinc-700" />
            <div className="flex gap-2">
              <div className="px-4 py-2 rounded bg-blue-500 text-white text-xs">Save</div>
              <div className="px-4 py-2 rounded bg-red-500 text-white text-xs">Delete Account</div>
            </div>
          </div>
        </div>

        {/* Comment 2: Reviewer */}
        <div className="px-5 py-4 border-b border-[var(--color-border-subtle)] bg-[var(--color-accent-dim)]/5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] text-purple-400 font-bold">R</div>
            <span className="text-xs font-medium text-[var(--color-text)]">reviewer-bob</span>
            <span className="text-xs text-[var(--color-text-tertiary)]">1 hour ago</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 font-medium">Changes requested</span>
          </div>
          <div className="text-sm text-[var(--color-text)] space-y-3">
            <p>页面基础结构不错，有几个审美问题需要调整：</p>
            <div className="space-y-3 text-sm">
              <div className="pl-3 border-l-2 border-amber-500/30">
                <p className="text-amber-400 text-xs font-medium mb-1">1. 视觉层次</p>
                <p className="text-[var(--color-text-secondary)]">页面标题「Account Settings」和表单 label（Username / Email / Bio）字号字重相近，层次不清晰。建议标题用 24px semibold，label 用 14px medium zinc-400。</p>
              </div>
              <div className="pl-3 border-l-2 border-amber-500/30">
                <p className="text-amber-400 text-xs font-medium mb-1">2. 间距分组</p>
                <p className="text-[var(--color-text-secondary)]">label 到 input 和 input 到下一个 label 的间距相同，字段没有分组感。建议 label→input: 6px，input→下一个 label: 20px。</p>
              </div>
              <div className="pl-3 border-l-2 border-red-500/30">
                <p className="text-red-400 text-xs font-medium mb-1">3. 危险操作</p>
                <p className="text-[var(--color-text-secondary)]">「Delete Account」和「Save」并排放置且视觉权重相同，非常危险。建议：Save 按钮蓝色实心保留，Delete Account 移到页面底部独立区域，用红色描边按钮 + 确认弹窗。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comment 3: Developer response */}
        <div className="px-5 py-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400 font-bold">D</div>
            <span className="text-xs font-medium text-[var(--color-text)]">developer-alice</span>
            <span className="text-xs text-[var(--color-text-tertiary)]">30 minutes ago</span>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">
            已按反馈调整，把这三条优化发给 Claude 重新生成了。LGTM 请确认。
          </p>
        </div>
      </div>

      {/* ---- 反馈模板 ---- */}
      <h3>反馈模板（可复制）</h3>

      <p>下次 code review 看到 UI 问题时，直接套用这个模板：</p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <div className="font-mono text-xs text-[var(--color-text-secondary)] leading-relaxed space-y-2 bg-[var(--color-bg-tertiary)] p-4 rounded-lg">
          <p className="text-[var(--color-text-tertiary)]">## UI Review Feedback</p>
          <p>&nbsp;</p>
          <p className="text-[var(--color-text-tertiary)]">### 1. [问题名称]</p>
          <p><span className="text-blue-400">位置</span>：[页面/组件的具体位置]</p>
          <p><span className="text-purple-400">观察</span>：[当前是什么样的，量化描述]</p>
          <p><span className="text-amber-400">原理</span>：[为什么这是个问题，引用设计原则]</p>
          <p><span className="text-green-400">建议</span>：[具体改成什么，给出参数值]</p>
          <p>&nbsp;</p>
          <p className="text-[var(--color-text-tertiary)]">### 2. [问题名称]</p>
          <p>...</p>
          <p>&nbsp;</p>
          <p className="text-[var(--color-text-tertiary)]">### 优先级</p>
          <p>- P0（阻塞）：[功能性问题——对比度不达标、按钮无法区分]</p>
          <p>- P1（重要）：[层次/间距问题——影响可读性]</p>
          <p>- P2（优化）：[微调——圆角统一、字重微调]</p>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-3 italic">
          把这个模板保存到你的代码片段管理器里。结构化反馈不只是更高效——它还显示你是认真的。
        </p>
      </div>

      {/* ===== 8.4 审美沟通场景 ===== */}
      <h2>8.4 审美沟通场景</h2>

      <p>
        理论讲完了，来看三个真实场景。每个场景都是你在工作中一定会遇到的，我们一步步走一遍该怎么沟通。
      </p>

      {/* Scenario 1: Code review of AI-generated page */}
      <h3>场景 1：Code Review 中看到一个 AI 生成的页面</h3>

      <p>
        你的同事用 AI 生成了一个数据仪表盘，提交了 PR。你打开截图一看——感觉哪里不对，但说不上来。怎么办？
      </p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">逐步拆解流程</p>
        <div className="space-y-4">
          {[
            {
              step: "01",
              title: "扫描层次",
              desc: "先快速扫一眼：标题够大吗？主次分明吗？能否 3 秒内找到页面的核心信息？",
              example: "发现问题：三张统计卡片和页面标题字号一样大（都是 16px），没有层次。"
            },
            {
              step: "02",
              title: "检查间距",
              desc: "元素之间的间距一致吗？相关元素是否分组？留白是否均匀？",
              example: "发现问题：卡片之间 8px，卡片和下方表格之间也是 8px——缺乏层级区分。"
            },
            {
              step: "03",
              title: "审视色彩",
              desc: "彩色元素是否超过了 10% 面积？有没有多种强调色互相打架？",
              example: "发现问题：每张统计卡片用了不同颜色（蓝、绿、橙），缺乏统一感。"
            },
            {
              step: "04",
              title: "组织反馈",
              desc: "按优先级排列问题，用 [位置] + [观察] + [原理] + [建议] 公式组织语言。",
              example: "输出：「统计卡片区域的三张卡片使用了三种不同的强调色（蓝/绿/橙），视觉噪音过高。建议统一为蓝色强调色，用数值变化的正负号和箭头（而非颜色）来区分增长/下降。」"
            },
          ].map((item) => (
            <div key={item.step} className="bg-[var(--color-bg)] rounded-lg p-4 border border-[var(--color-border-subtle)]">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-lg font-bold text-[var(--color-accent)] font-mono">{item.step}</span>
                <h4 className="text-sm font-semibold text-[var(--color-text)]">{item.title}</h4>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-2">{item.desc}</p>
              <p className="text-xs text-[var(--color-text-tertiary)] bg-[var(--color-bg-tertiary)] p-3 rounded-lg italic">{item.example}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scenario 2: PM asks you to evaluate a design */}
      <h3>场景 2：产品经理让你评价一个设计稿</h3>

      <p>
        产品经理发来一张设计稿，问「你觉得怎么样？」。你千万不要说「挺好的」或「不太好看」——这两种回答都是零信息量。
      </p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">示例对话</p>
        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-[10px] text-amber-400 font-bold shrink-0">PM</div>
            <div className="bg-[var(--color-bg-tertiary)] rounded-lg p-3 text-[var(--color-text-secondary)]">
              新版定价页的设计稿出来了，你看看这个方案怎么样？
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400 font-bold shrink-0">你</div>
            <div className="bg-[var(--color-bg)] rounded-lg p-3 border border-[var(--color-border-subtle)] text-[var(--color-text)] space-y-2">
              <p>整体结构不错，三栏定价卡的布局很清晰。有几个建议：</p>
              <p><strong>层次</strong>：推荐方案（Pro 套餐）的视觉突出度不够。三张卡片大小和样式几乎一样，建议让 Pro 卡片稍大一些或者加一个「推荐」标签 + 强调色边框，让用户第一眼就知道你想推荐什么。</p>
              <p><strong>对比</strong>：价格数字用了和功能列表相同的字号，建议价格放大到 36-48px 并加粗，这是用户最关心的信息，应该是卡片里最醒目的元素。</p>
              <p><strong>CTA</strong>：三个「开始使用」按钮都是蓝色实心，建议只有 Pro 套餐用实心按钮，其他两个用描边按钮，把用户的注意力引导到推荐方案上。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scenario 3: Iterating with AI */}
      <h3>场景 3：给 AI 迭代一个不满意的生成结果</h3>

      <p>
        AI 给你生成了一个页面，你觉得「不太对」但说不出哪里不对。别急着重新生成——先诊断，再开药。
      </p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">迭代对话示例</p>
        <div className="space-y-4 text-sm">
          <div className="bg-[var(--color-bg-tertiary)] rounded-lg p-3">
            <p className="text-xs text-[var(--color-bad)] font-medium mb-1">第一轮 prompt（模糊）</p>
            <p className="text-[var(--color-text-secondary)] font-mono text-xs">&ldquo;做一个团队管理页面&rdquo;</p>
          </div>

          <div className="bg-[var(--color-bg-tertiary)] rounded-lg p-3">
            <p className="text-xs text-zinc-500 font-medium mb-1">AI 生成结果的问题</p>
            <p className="text-[var(--color-text-tertiary)] text-xs">彩色头像环、渐变背景、多种字体大小混乱、按钮样式不统一</p>
          </div>

          <div className="bg-[var(--color-bg)] rounded-lg p-3 border border-[var(--color-good)]/30">
            <p className="text-xs text-[var(--color-good)] font-medium mb-1">第二轮 prompt（精确迭代）</p>
            <p className="text-[var(--color-text)] font-mono text-xs leading-relaxed">
              &ldquo;优化这个团队管理页面：
              <br />1. 去掉头像的彩色描边，改为 zinc-700 描边
              <br />2. 去掉背景渐变，用纯色 zinc-950
              <br />3. 成员列表改为表格形式，行高 48px，参考 Linear 的成员列表
              <br />4. 只保留两种按钮样式：蓝色实心（邀请成员）+ 灰色描边（其他操作）
              <br />5. 角色标签统一用 zinc-800 底色 + zinc-400 文字，不要彩色标签&rdquo;
            </p>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          关键：不要说「重新生成，要好看一点」。而是精确指出每个问题，告诉 AI 该改成什么。迭代 prompt 的质量决定了你能否在 2-3 轮内收敛到满意的结果。
        </p>
      </div>

      {/* ===== 8.5 常见审美问题速查 ===== */}
      <h2>8.5 常见审美问题速查</h2>

      <p>
        下面是一张「直觉→诊断」速查表。下次你觉得一个界面「哪里不对」但说不上来时，对照这张表逐条检查。就像医生问诊——「觉得不舒服」不是诊断，但「头疼、发烧、嗓子疼」就能开药了。
      </p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl border border-[var(--color-border-subtle)] overflow-hidden">
        <div className="grid grid-cols-3 bg-[var(--color-bg-tertiary)] px-4 py-2.5 border-b border-[var(--color-border-subtle)]">
          <span className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">如果你觉得...</span>
          <span className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">检查...</span>
          <span className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">可能的修复</span>
        </div>
        {[
          {
            feeling: "「乱」",
            check: "对齐和间距一致性",
            fix: "统一到 8px 网格，检查所有元素是否在对齐基线上"
          },
          {
            feeling: "「挤」",
            check: "内边距和元素间距",
            fix: "增大 padding 到至少 16px，元素间距至少 12px"
          },
          {
            feeling: "「空」/「散」",
            check: "间距比例和分组",
            fix: "缩小组内间距，拉大组间间距，建立分组层次"
          },
          {
            feeling: "「土」",
            check: "颜色饱和度和字体选择",
            fix: "饱和度降到 60-70%，换用 Inter / system-ui 无衬线字体"
          },
          {
            feeling: "「花」",
            check: "彩色元素数量",
            fix: "删到只剩 1 个强调色，其余全部改为中性色"
          },
          {
            feeling: "「没重点」",
            check: "视觉层次和对比度",
            fix: "拉大标题和正文的字号差（至少 1.5 倍），主按钮加强调色"
          },
          {
            feeling: "「廉价」/「山寨」",
            check: "风格一致性和细节",
            fix: "统一圆角值、统一阴影策略、统一边框粗细"
          },
          {
            feeling: "「过时」/「老气」",
            check: "视觉风格年代感",
            fix: "去掉 box-shadow 改用 border，去掉渐变，减小圆角，增大间距"
          },
          {
            feeling: "「太暗」/「压抑」",
            check: "背景明度和文字对比度",
            fix: "背景色从 #000 提亮到 zinc-950 (#09090b)，增加区域背景色差"
          },
          {
            feeling: "「没质感」/「像原型」",
            check: "细节层次",
            fix: "加 1px subtle border，hover 态，focus ring，微弱的背景色差"
          },
        ].map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 px-4 py-3 ${
              i < 9 ? "border-b border-[var(--color-border-subtle)]" : ""
            }`}
          >
            <div className="text-sm font-medium text-[var(--color-text)]">{row.feeling}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">{row.check}</div>
            <div className="text-sm text-[var(--color-text-tertiary)]">{row.fix}</div>
          </div>
        ))}
      </div>

      {/* Visual demo: the most common "feeling" pairs */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示：「乱」vs「整」——同一内容，仅调整对齐和间距</p>
        <div className="grid grid-cols-2 gap-6">
          {/* Messy */}
          <div>
            <p className="text-xs text-[var(--color-bad)] mb-2 font-medium">间距混乱，没有对齐</p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4">
              <div className="text-base text-zinc-200" style={{ marginBottom: "10px" }}>我的项目</div>
              <div className="flex gap-3" style={{ marginBottom: "15px" }}>
                <div className="px-2 py-1 rounded bg-blue-500/15 text-blue-400 text-xs">全部</div>
                <div className="px-3 py-1.5 rounded bg-zinc-800 text-zinc-400 text-xs">进行中</div>
                <div className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 text-xs">已完成</div>
              </div>
              <div className="space-y-2" style={{ marginLeft: "5px" }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm text-zinc-300">项目 Alpha</span>
                  <span className="text-xs text-zinc-500" style={{ marginLeft: "auto", marginRight: "10px" }}>3 天前</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-sm text-zinc-300">Dashboard 重构</span>
                  <span className="text-xs text-zinc-500" style={{ marginLeft: "auto" }}>1 周前</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)] mt-1">间距 10px/15px 混用，tab 大小不一，圆点大小不一，右侧不对齐</p>
          </div>
          {/* Clean */}
          <div>
            <p className="text-xs text-[var(--color-good)] mb-2 font-medium">统一间距，严格对齐</p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4">
              <div className="text-base font-semibold text-zinc-200 mb-4">我的项目</div>
              <div className="flex gap-1 mb-4">
                <div className="px-3 py-1.5 rounded-md bg-blue-500/15 text-blue-400 text-xs font-medium">全部</div>
                <div className="px-3 py-1.5 rounded-md text-zinc-400 text-xs">进行中</div>
                <div className="px-3 py-1.5 rounded-md text-zinc-400 text-xs">已完成</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm text-zinc-300 flex-1">项目 Alpha</span>
                  <span className="text-xs text-zinc-500">3 天前</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm text-zinc-300 flex-1">Dashboard 重构</span>
                  <span className="text-xs text-zinc-500">1 周前</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)] mt-1">间距统一 16px，tab 尺寸一致，圆点 8px，右侧时间对齐</p>
          </div>
        </div>
      </div>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示：「土」vs「高级」—— 仅调整饱和度和字体</p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-[var(--color-bad)] mb-2 font-medium">高饱和 + 系统默认字体</p>
            <div className="rounded-lg border-2 border-zinc-600 bg-zinc-900 p-4 space-y-3">
              <div className="font-bold text-zinc-100" style={{ fontFamily: "Times New Roman, serif", fontSize: "18px" }}>欢迎回来！</div>
              <div className="text-sm" style={{ fontFamily: "Comic Sans MS, cursive", color: "hsl(217, 100%, 50%)" }}>查看你的最新数据 &rarr;</div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded text-xs text-white font-bold" style={{ backgroundColor: "hsl(120, 100%, 40%)" }}>开始</div>
                <div className="px-3 py-1.5 rounded text-xs text-white font-bold" style={{ backgroundColor: "hsl(0, 100%, 50%)" }}>退出</div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-[var(--color-good)] mb-2 font-medium">低饱和 + 专业字体</p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4 space-y-3">
              <div className="text-lg font-semibold text-zinc-100">欢迎回来</div>
              <div className="text-sm text-zinc-400">查看你的最新数据 &rarr;</div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-xs font-medium">开始</div>
                <div className="px-3 py-1.5 rounded-md text-zinc-400 text-xs">退出</div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-3 italic">
          仅仅换掉字体、降低饱和度、统一按钮样式，「土味」就消失了。「高级感」不是什么神秘的天赋——它是一系列可量化的参数选择。
        </p>
      </div>

      {/* ===== Final insight ===== */}
      <KeyInsight>
        精确的设计语言不只是让沟通更高效，它还会反过来<strong>提升你的观察力</strong>。当你有了「饱和度」「对比度」「视觉权重」「间距节奏」这些词汇后，你会开始注意到以前忽略的细节。语言塑造感知——语言学家 Sapir 和 Whorf 的假说在审美领域完全成立。一个拥有 20 个颜色词汇的语言比只有 5 个颜色词汇的语言，使用者能区分更多的颜色。审美词汇也是一样：<strong>你能说出多少种「不好看」，你就能看出多少种「不好看」。</strong>
      </KeyInsight>
    </>
  );
}
