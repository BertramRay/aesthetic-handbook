import KeyInsight from "@/components/KeyInsight";

export default function ChapterPractice() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第九章</p>
      <h1>持续训练 — 审美是肌肉，不是天赋</h1>

      <blockquote>
        &ldquo;Taste is the ability to make good decisions without being able to explain why.&rdquo;
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Paul Graham</span>
      </blockquote>

      <p>
        Paul Graham 的这个定义准确地描述了审美的最终形态：<strong>直觉化的判断力</strong>。但在达到「不需要解释」之前，你需要大量的刻意练习。好消息是，审美和任何其他技能一样，遵循 Anders Ericsson 的刻意练习理论（1993）：有针对性的练习 + 即时反馈 = 稳定提升。
      </p>

      <p>
        这一章不只是给你一份书单和一句「多看多练」——我们会介绍一套<strong>可落地的工具链</strong>，让你在日常编码中就能持续提升审美能力，不需要额外的时间投入。
      </p>

      {/* ===== 9.1 每日练习法 ===== */}
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

      <h3>A/B 自测</h3>
      <p>
        给自己出题：同一个界面，做两个版本，判断哪个更好并写出原因。然后请同事盲选。如果你的判断与多数人一致，说明审美直觉在校准；如果不一致，分析差异出在哪里。
      </p>

      {/* ===== 9.2 AI 辅助审美工具链 ===== */}
      <h2>9.2 AI 辅助审美工具链 — Claude Code Skills</h2>

      <p>
        Vibe coding 时代最强大的审美提升工具不是 Figma 教程，而是<strong>在你的编码环境中内置审美反馈循环</strong>。Claude Code 的 Skills 系统让你可以在写代码的同时，随时调用专业的设计审查能力。
      </p>

      <p>
        以下是一套经过验证的设计 Skills 工具链。它们来自开源社区，可以通过 <code>skillsmp</code> 搜索安装，也可以直接从 GitHub 克隆到你的 <code>~/.claude/skills/</code> 目录。
      </p>

      <KeyInsight label="安装方法">
        <p className="mb-2">所有设计 Skills 的安装方式相同：</p>
        <div className="bg-[var(--color-bg)] rounded-lg p-3 font-mono text-xs space-y-1">
          <p className="text-[var(--color-text-tertiary)]"># 方式 1：通过 SkillsMP 搜索安装</p>
          <p className="text-[var(--color-text-secondary)]">在 Claude Code 中使用 /skillsmp 搜索 &quot;frontend-design&quot;</p>
          <p className="text-[var(--color-text-tertiary)] mt-2"># 方式 2：手动安装到全局目录</p>
          <p className="text-[var(--color-text-secondary)]">git clone [skill-repo] ~/.claude/skills/[skill-name]</p>
          <p className="text-[var(--color-text-tertiary)] mt-2"># 方式 3：安装到项目级目录（仅当前项目可用）</p>
          <p className="text-[var(--color-text-secondary)]">git clone [skill-repo] .claude/skills/[skill-name]</p>
        </div>
      </KeyInsight>

      <h3>第一步：建立设计基线 — teach-impeccable</h3>

      <p>
        在使用任何设计 Skill 之前，先运行一次 <code>/teach-impeccable</code>。它会扫描你的项目代码，问你几个关于产品定位、目标用户和品牌风格的问题，然后生成一个 <code>.impeccable.md</code> 设计上下文文件。后续所有设计 Skill 都会读取这个文件，确保建议与你的产品风格一致。
      </p>

      <div className="my-4 bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
        <div className="font-mono text-xs space-y-1">
          <p className="text-[var(--color-text-tertiary)]"># 在 Claude Code 中执行</p>
          <p className="text-[var(--color-accent)]">/teach-impeccable</p>
          <p className="text-[var(--color-text-tertiary)] mt-2"># 它会问你：</p>
          <p className="text-[var(--color-text-secondary)]">&gt; 你的产品是什么类型？（SaaS / 电商 / 内容 / 工具）</p>
          <p className="text-[var(--color-text-secondary)]">&gt; 目标用户是谁？</p>
          <p className="text-[var(--color-text-secondary)]">&gt; 品牌调性是什么？（专业 / 活泼 / 极简 / 温暖）</p>
          <p className="text-[var(--color-text-secondary)]">&gt; 有参考产品吗？</p>
          <p className="text-[var(--color-text-tertiary)] mt-2"># 输出：.impeccable.md — 你的项目设计上下文文件</p>
        </div>
      </div>

      <h3>核心工具：设计 Skills 全景图</h3>

      <p>
        设计 Skills 分为四个层次，对应不同的使用场景：
      </p>

      {/* Skills taxonomy */}
      <div className="my-6 space-y-4">
        {/* Layer 1: Creation */}
        <div className="rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] overflow-hidden">
          <div className="px-5 py-3 border-b border-[var(--color-border-subtle)] flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">创建层 — 从零开始构建界面</span>
          </div>
          <div className="p-5 space-y-3">
            <div className="flex gap-4 items-start">
              <code className="text-xs text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded shrink-0 font-mono">/frontend-design</code>
              <div>
                <div className="text-sm text-[var(--color-text)]">核心设计 Skill — 所有设计能力的基础</div>
                <div className="text-xs text-[var(--color-text-tertiary)] mt-0.5">建立设计原则、反 AI slop 美学、配色/排版/布局/交互/响应式全覆盖。构建新页面时首选。</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <code className="text-xs text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded shrink-0 font-mono">/onboard</code>
              <div>
                <div className="text-sm text-[var(--color-text)]">设计 onboarding 流程和空状态</div>
                <div className="text-xs text-[var(--color-text-tertiary)] mt-0.5">新用户引导、空状态设计、首次体验优化。</div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 2: Refinement */}
        <div className="rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] overflow-hidden">
          <div className="px-5 py-3 border-b border-[var(--color-border-subtle)] flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--color-good)]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-good)]">精炼层 — 改进已有界面</span>
          </div>
          <div className="p-5 space-y-3">
            {[
              { cmd: "/typeset", name: "字体排版优化", desc: "修复字体选择、层级、大小、字重一致性和可读性" },
              { cmd: "/colorize", name: "色彩策略", desc: "为单调的设计添加有策略的色彩——语义色、强调色、数据可视化色" },
              { cmd: "/arrange", name: "布局与间距", desc: "修复单调网格、不一致间距、弱视觉层次，建立空间节奏" },
              { cmd: "/animate", name: "动效与微交互", desc: "添加有目的的动画——入场、状态过渡、反馈、愉悦时刻" },
              { cmd: "/clarify", name: "UX 文案优化", desc: "改进模糊的错误提示、标签、按钮文字和引导文案" },
            ].map(skill => (
              <div key={skill.cmd} className="flex gap-4 items-start">
                <code className="text-xs text-[var(--color-good)] bg-[var(--color-good)]/10 px-2 py-0.5 rounded shrink-0 font-mono">{skill.cmd}</code>
                <div>
                  <div className="text-sm text-[var(--color-text)]">{skill.name}</div>
                  <div className="text-xs text-[var(--color-text-tertiary)] mt-0.5">{skill.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 3: Review */}
        <div className="rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] overflow-hidden">
          <div className="px-5 py-3 border-b border-[var(--color-border-subtle)] flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">审查层 — 评估与诊断</span>
          </div>
          <div className="p-5 space-y-3">
            {[
              { cmd: "/critique", name: "设计评审", desc: "全方位设计评审——视觉层次、信息架构、情感共鸣、可发现性" },
              { cmd: "/audit", name: "质量审计", desc: "系统化审计——无障碍、性能、主题、响应式，生成带严重等级的报告" },
              { cmd: "/polish", name: "上线前打磨", desc: "最后一道质量关——对齐、间距、一致性、微交互、边缘案例" },
            ].map(skill => (
              <div key={skill.cmd} className="flex gap-4 items-start">
                <code className="text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded shrink-0 font-mono">{skill.cmd}</code>
                <div>
                  <div className="text-sm text-[var(--color-text)]">{skill.name}</div>
                  <div className="text-xs text-[var(--color-text-tertiary)] mt-0.5">{skill.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 4: Tone adjustment */}
        <div className="rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] overflow-hidden">
          <div className="px-5 py-3 border-b border-[var(--color-border-subtle)] flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">调性层 — 风格调节</span>
          </div>
          <div className="p-5 space-y-3">
            {[
              { cmd: "/bolder", name: "更大胆", desc: "放大安全/平淡的设计——增加视觉冲击力、个性、戏剧性" },
              { cmd: "/quieter", name: "更安静", desc: "收敛过于激进的设计——降饱和度、减视觉重量、趋向精致" },
              { cmd: "/distill", name: "提纯", desc: "剥离不必要的复杂度——找到设计的本质，做减法" },
              { cmd: "/normalize", name: "统一", desc: "对齐 Design System 标准——确保组件与全局风格一致" },
              { cmd: "/adapt", name: "适配", desc: "跨屏幕/设备/平台适配——桌面→移动端、Web→邮件" },
            ].map(skill => (
              <div key={skill.cmd} className="flex gap-4 items-start">
                <code className="text-xs text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded shrink-0 font-mono">{skill.cmd}</code>
                <div>
                  <div className="text-sm text-[var(--color-text)]">{skill.name}</div>
                  <div className="text-xs text-[var(--color-text-tertiary)] mt-0.5">{skill.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3>实际工作流示例</h3>

      <p>以下是一个完整的 vibe coding 审美工作流，展示这些 Skills 如何串联使用：</p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
        <div className="space-y-4 font-mono text-xs">
          <div className="flex gap-3 items-start">
            <span className="text-[var(--color-accent)] shrink-0 w-5 text-right">1</span>
            <div>
              <p className="text-[var(--color-text-secondary)]">首次使用 → 建立设计基线</p>
              <p className="text-[var(--color-accent)] mt-1">/teach-impeccable</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[var(--color-accent)] shrink-0 w-5 text-right">2</span>
            <div>
              <p className="text-[var(--color-text-secondary)]">构建新页面 → 用高质量基础</p>
              <p className="text-[var(--color-accent)] mt-1">/frontend-design 构建一个用户设置页面</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[var(--color-accent)] shrink-0 w-5 text-right">3</span>
            <div>
              <p className="text-[var(--color-text-secondary)]">觉得太素了 → 添加色彩策略</p>
              <p className="text-[var(--color-accent)] mt-1">/colorize</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[var(--color-accent)] shrink-0 w-5 text-right">4</span>
            <div>
              <p className="text-[var(--color-text-secondary)]">排版不太对 → 修复字体层级</p>
              <p className="text-[var(--color-accent)] mt-1">/typeset</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[var(--color-accent)] shrink-0 w-5 text-right">5</span>
            <div>
              <p className="text-[var(--color-text-secondary)]">功能完成 → 全面设计评审</p>
              <p className="text-[var(--color-accent)] mt-1">/critique</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[var(--color-accent)] shrink-0 w-5 text-right">6</span>
            <div>
              <p className="text-[var(--color-text-secondary)]">根据评审修复问题 → 最终打磨</p>
              <p className="text-[var(--color-accent)] mt-1">/polish</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[var(--color-accent)] shrink-0 w-5 text-right">7</span>
            <div>
              <p className="text-[var(--color-text-secondary)]">准备上线 → 质量审计</p>
              <p className="text-[var(--color-accent)] mt-1">/audit</p>
            </div>
          </div>
        </div>
      </div>

      <KeyInsight>
        这些 Skills 的价值不仅在于改进你的代码——<strong>它们是最好的审美老师</strong>。每次运行 <code>/critique</code>，你都会看到专业的设计反馈，用精确的语言描述问题和改进方案。反复接触这些反馈，你的审美词汇和判断力会自然提升。
      </KeyInsight>

      {/* ===== 9.3 Figma MCP ===== */}
      <h2>9.3 设计协作工具 — Figma MCP</h2>

      <p>
        如果你的团队有设计师用 Figma 出设计稿，<strong>Figma MCP Server</strong> 可以让 Claude Code 直接读取 Figma 文件，实现「设计稿 → 代码」的精确还原。
      </p>

      <h3>什么是 MCP</h3>
      <p>
        MCP（Model Context Protocol）是一个让 AI 工具连接外部数据源的标准协议。Figma MCP Server 让 Claude Code 能够读取 Figma 设计文件中的布局、颜色、字体、间距等参数，用于精确还原设计稿或审查代码与设计的偏差。
      </p>

      <h3>配置 Figma MCP</h3>

      <div className="my-4 bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
        <div className="font-mono text-xs space-y-2">
          <p className="text-[var(--color-text-tertiary)]"># 1. 获取 Figma Personal Access Token</p>
          <p className="text-[var(--color-text-secondary)]"># Figma → Settings → Personal Access Tokens → Generate</p>
          <p className="text-[var(--color-text-tertiary)] mt-3"># 2. 在 Claude Code 中配置 MCP Server</p>
          <p className="text-[var(--color-accent)]">claude mcp add figma \</p>
          <p className="text-[var(--color-accent)]">{"  "}-- npx figma-developer-mcp \</p>
          <p className="text-[var(--color-accent)]">{"  "}--figma-api-key=YOUR_TOKEN</p>
          <p className="text-[var(--color-text-tertiary)] mt-3"># 3. 验证连接</p>
          <p className="text-[var(--color-text-secondary)]"># 在 Claude Code 中说 &quot;读取这个 Figma 文件&quot; 并粘贴 Figma URL</p>
        </div>
      </div>

      <h3>Figma MCP 的审美应用场景</h3>

      <div className="my-4 space-y-3">
        {[
          {
            scenario: "设计稿还原",
            desc: "给 Claude Code 一个 Figma URL，它能读取设计参数（颜色值、间距、字号）并生成精确匹配的代码",
            prompt: "读取这个 Figma 文件，按照设计稿精确实现这个卡片组件",
          },
          {
            scenario: "设计偏差检查",
            desc: "对比代码实现与 Figma 设计稿的差异——间距偏差、颜色不匹配、字号不一致",
            prompt: "对比当前代码和 Figma 设计稿，找出所有偏差并列出修复建议",
          },
          {
            scenario: "提取设计规范",
            desc: "从 Figma 文件中提取 Design Token（颜色、字号、间距系统），生成 CSS 变量或 Tailwind 配置",
            prompt: "从 Figma 文件中提取所有设计 token，生成 tailwind.config.ts",
          },
        ].map((item) => (
          <div key={item.scenario} className="bg-[var(--color-bg-secondary)] rounded-xl p-4 border border-[var(--color-border-subtle)]">
            <div className="text-sm font-medium text-[var(--color-text)] mb-1">{item.scenario}</div>
            <div className="text-xs text-[var(--color-text-tertiary)] mb-2">{item.desc}</div>
            <div className="bg-[var(--color-bg)] rounded-lg px-3 py-2 font-mono text-xs text-[var(--color-accent)]">
              {item.prompt}
            </div>
          </div>
        ))}
      </div>

      <KeyInsight>
        Figma MCP 最大的审美价值不是自动写代码，而是<strong>消除「设计稿和代码之间的审美损耗」</strong>。以前设计师说「间距是 24px」，开发者目测写了 20px，没人发现。现在 Claude Code 能直接从 Figma 读取精确参数，差异无处藏身。
      </KeyInsight>

      {/* ===== 9.4 审美资源体系 ===== */}
      <h2>9.4 审美资源体系</h2>

      <h3>必读书目</h3>
      <div className="my-4 space-y-3">
        {[
          { level: "入门", name: "《写给大家看的设计书》", author: "Robin Williams", desc: "四大原则：对齐、接近、重复、对比。最适合零基础的第一本书" },
          { level: "进阶", name: "《Refactoring UI》", author: "Adam Wathan & Steve Schoger", desc: "面向开发者的 UI 设计实战手册，每条建议都带 before/after 对比" },
          { level: "深入", name: "《The Elements of Typographic Style》", author: "Robert Bringhurst", desc: "排版圣经，理解字体和版式的数学之美" },
          { level: "理论", name: "《设计心理学》", author: "Donald Norman", desc: "理解「可供性」和「心智模型」——为什么好设计让人不需要说明书" },
          { level: "色彩", name: "《Interaction of Color》", author: "Josef Albers", desc: "包豪斯色彩教学经典，理解色彩的相对性和主观性" },
        ].map((book) => (
          <div key={book.name} className="flex gap-4 bg-[var(--color-bg-secondary)] rounded-lg p-4 border border-[var(--color-border-subtle)]">
            <span className="text-xs font-mono text-[var(--color-accent)] shrink-0 mt-0.5">{book.level}</span>
            <div>
              <div className="text-sm font-medium">{book.name}</div>
              <div className="text-xs text-[var(--color-text-tertiary)]">{book.author} · {book.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h3>在线资源</h3>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { name: "Laws of UX", url: "lawsofux.com", desc: "21 条 UX 设计法则，卡片形式展示" },
          { name: "Typewolf", url: "typewolf.com", desc: "字体搭配灵感和趋势" },
          { name: "Realtime Colors", url: "realtimecolors.com", desc: "实时预览配色在真实界面上的效果" },
          { name: "Mobbin", url: "mobbin.com", desc: "海量真实 app 界面截图，按模式分类" },
          { name: "Refero", url: "refero.design", desc: "优质 web 设计截图库" },
          { name: "Contrast Checker", url: "webaim.org/resources/contrastchecker", desc: "WCAG 对比度检测工具" },
          { name: "SkillsMP", url: "skillsmp.com", desc: "14,000+ Claude Code Skills 市场，搜索设计相关技能" },
          { name: "Figma Community", url: "figma.com/community", desc: "免费设计资源和组件库" },
        ].map((resource) => (
          <div key={resource.name} className="bg-[var(--color-bg-secondary)] rounded-lg p-3 border border-[var(--color-border-subtle)]">
            <div className="text-sm font-medium text-[var(--color-text)]">{resource.name}</div>
            <div className="text-[10px] font-mono text-[var(--color-text-tertiary)]">{resource.url}</div>
            <div className="text-xs text-[var(--color-text-tertiary)] mt-1">{resource.desc}</div>
          </div>
        ))}
      </div>

      {/* ===== 9.5 审美检查清单 ===== */}
      <h2>9.5 审美检查清单</h2>

      <p>
        在提交 PR 或验收 AI 生成结果前，对照以下 15 项检查。你也可以直接运行 <code>/audit</code> 来自动完成大部分检查。
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

      {/* ===== 9.6 团队机制 ===== */}
      <h2>9.6 团队审美提升机制</h2>

      <p>
        个人练习之外，团队层面的机制同样重要：
      </p>

      <h3>每周 15 分钟设计评审</h3>
      <p>
        在周会中加入一个 15 分钟环节，用本手册的词汇框架讨论本周上线界面的审美问题。重点不是批评，而是用精确语言描述观察和建议。可以让 Claude Code 运行 <code>/critique</code> 生成评审报告作为讨论的起点。
      </p>

      <h3>审美基线对齐</h3>
      <p>
        团队共同选定 3-5 个「参考产品」（如 Linear、Stripe、Notion），作为审美讨论的共同参照系。当有人说「参考 Linear 的信息密度」时，大家有同样的画面。
      </p>

      <h3>AI 生成结果的审美验收</h3>
      <p>
        将上面的 15 项检查清单制度化，作为 AI 生成代码的验收标准。更好的做法是在 CI 中集成 <code>/audit</code> Skill 自动运行。不通过审美验收的代码不合入主分支——就像不通过测试的代码一样。
      </p>

      <h3>建立项目级设计 Skills</h3>
      <p>
        除了全局 Skills，你还可以在项目的 <code>.claude/skills/</code> 目录下创建项目级 Skill。比如为你的项目定制一个 <code>/design-review</code> Skill，内置你们团队的审美标准、参考产品、配色方案和组件规范。这样每个团队成员运行同一个 Skill，就能获得一致的设计反馈。
      </p>

      <div className="my-4 bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
        <div className="font-mono text-xs space-y-1">
          <p className="text-[var(--color-text-tertiary)]"># 项目级 Skill 示例目录结构</p>
          <p className="text-[var(--color-text-secondary)]">.claude/skills/</p>
          <p className="text-[var(--color-text-secondary)]">└── design-review/</p>
          <p className="text-[var(--color-text-secondary)]">{"    "}└── SKILL.md          <span className="text-[var(--color-text-tertiary)]"># 你团队的审美标准</span></p>
          <p className="text-[var(--color-text-tertiary)] mt-2"># SKILL.md 中可以包含：</p>
          <p className="text-[var(--color-text-secondary)]"># - 参考产品列表（Linear, Stripe...）</p>
          <p className="text-[var(--color-text-secondary)]"># - 配色方案（zinc + blue-500）</p>
          <p className="text-[var(--color-text-secondary)]"># - 间距系统（8px grid）</p>
          <p className="text-[var(--color-text-secondary)]"># - 组件规范（按钮层级、卡片参数）</p>
          <p className="text-[var(--color-text-secondary)]"># - 已知反模式（禁止使用渐变背景等）</p>
        </div>
      </div>

      <KeyInsight>
        审美能力的提升曲线和编程类似：前 20% 的提升来自学习基本原则（本手册覆盖的内容），后 80% 来自大量的观察和实践。但在 AI 时代，你不需要独自练习——<strong>Claude Code Skills 就是你的随身设计导师</strong>，每次运行 <code>/critique</code> 或 <code>/polish</code>，你都在接受一次专业的设计 code review。<strong>审美是肌肉，不是天赋。坚持练，它会长。</strong>
      </KeyInsight>
    </>
  );
}
