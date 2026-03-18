import ComparisonCard from "@/components/ComparisonCard";
import KeyInsight from "@/components/KeyInsight";

export default function ChapterComponents() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第七章</p>
      <h1>组件审美 — 常见 UI 元素的设计解剖</h1>

      <blockquote>
        &ldquo;God is in the details.&rdquo;
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Ludwig Mies van der Rohe</span>
      </blockquote>

      <p>
        前面几章建立了审美的理论框架，本章将这些原则应用到最常见的 UI 组件上。对每个组件，我们用统一的分析框架：<strong>设计目的 → 关键参数 → AI 典型问题 → 改造路径</strong>。
      </p>

      <KeyInsight label="分析框架">
        每个组件的拆解遵循五步法：①理解组件的设计目的和用户心理模型 → ②明确关键参数（尺寸、间距、颜色） → ③识别好设计的特征 → ④诊断 AI 典型生成的问题 → ⑤给出从「AI 生成」到「设计师水准」的具体改造步骤。
      </KeyInsight>

      {/* ===== 7.1 按钮 ===== */}
      <h2>7.1 按钮（Button）</h2>

      <p>
        按钮是界面中最基础的交互元素，也是最容易暴露审美问题的地方。一个界面的按钮系统是否清晰，直接反映了设计者是否理解视觉层次。
      </p>

      <h3>设计目的</h3>
      <p>
        按钮的核心功能是<strong>引导行动</strong>。用户需要在 0.3 秒内回答两个问题：「我可以做什么？」和「我应该先做哪个？」。按钮层级系统的存在就是为了回答第二个问题。
      </p>

      <h3>关键参数</h3>
      <div className="my-4 bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)] text-sm">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          <div className="text-[var(--color-text-tertiary)]">最小高度</div>
          <div className="font-mono">36px（紧凑）/ 40px（标准）/ 44px（触屏）</div>
          <div className="text-[var(--color-text-tertiary)]">水平内边距</div>
          <div className="font-mono">16px（小）/ 20px（中）/ 24px（大）</div>
          <div className="text-[var(--color-text-tertiary)]">圆角</div>
          <div className="font-mono">6px（紧凑）/ 8px（标准）/ 全圆（pill）</div>
          <div className="text-[var(--color-text-tertiary)]">字号</div>
          <div className="font-mono">13px（小）/ 14px（标准）</div>
          <div className="text-[var(--color-text-tertiary)]">字重</div>
          <div className="font-mono">500（Medium）</div>
          <div className="text-[var(--color-text-tertiary)]">层级数量</div>
          <div className="font-mono">最多 3 级（Primary / Secondary / Tertiary）</div>
        </div>
      </div>

      <h3>按钮层级系统</h3>
      <p>
        <strong>Primary</strong>（实心）——页面的主行动。全页面通常只有一个，使用最强的视觉权重（实心背景 + 对比色文字）。规则：<strong>一个视图最多一个 Primary 按钮</strong>。
      </p>
      <p>
        <strong>Secondary</strong>（描边）——可选操作。用边框而非实心背景，视觉权重明显低于 Primary。
      </p>
      <p>
        <strong>Tertiary / Ghost</strong>（纯文字）——最弱操作，如「取消」「跳过」「了解更多」。没有背景也没有边框，仅靠文字颜色和 hover 态可见。
      </p>

      <ComparisonCard
        title="按钮层级"
        bad={
          <div className="space-y-3 p-2">
            <div className="flex flex-wrap gap-2">
              <div className="px-4 py-2 rounded bg-blue-600 text-white text-xs font-medium">保存</div>
              <div className="px-4 py-2 rounded bg-green-600 text-white text-xs font-medium">提交审核</div>
              <div className="px-4 py-2 rounded bg-red-600 text-white text-xs font-medium">删除草稿</div>
              <div className="px-4 py-2 rounded bg-purple-600 text-white text-xs font-medium">导出 PDF</div>
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)]">
              某编辑器的工具栏。用户看到四个同等大小、同等权重的彩色按钮——应该先点哪个？
            </p>
          </div>
        }
        good={
          <div className="space-y-3 p-2">
            <div className="flex flex-wrap gap-2 items-center">
              <div className="px-4 py-2 rounded-lg bg-[var(--color-text)] text-[var(--color-bg)] text-xs font-medium">提交审核</div>
              <div className="px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] text-xs font-medium">保存草稿</div>
              <div className="px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] text-xs font-medium">导出</div>
              <div className="px-3 py-2 text-[var(--color-text-tertiary)] text-xs">删除</div>
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)]">
              同样四个操作，但层级分明：主操作（实心）→ 次操作（描边）→ 危险操作（纯文字，降级处理）
            </p>
          </div>
        }
        badNotes={[
          "四个按钮四种颜色——用颜色区分功能而非重要性",
          "所有按钮视觉权重相同，无法判断优先级",
          "红色「删除」和蓝色「保存」权重一样——危险操作不应该这么醒目",
          "彩虹色综合症：每个按钮一个色相",
        ]}
        goodNotes={[
          "三级层级：实心 > 描边 > 纯文字，优先级一目了然",
          "只有「提交审核」是主操作，用户一眼定位",
          "删除操作用最弱层级——符合「安全默认」原则",
          "统一色系（中性色），不用颜色区分功能",
        ]}
      />

      <h3>按钮状态设计</h3>
      <p>
        一个完整的按钮需要 5 个状态：<strong>Default → Hover → Active（按下）→ Disabled → Loading</strong>。AI 生成的按钮通常只有 Default 和偶尔的 Hover，其余状态缺失。
      </p>
      <div className="my-4 bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="px-4 py-2 rounded-lg bg-[var(--color-text)] text-[var(--color-bg)] text-xs font-medium">Default</div>
          <div className="px-4 py-2 rounded-lg bg-[var(--color-text)]/90 text-[var(--color-bg)] text-xs font-medium">Hover</div>
          <div className="px-4 py-2 rounded-lg bg-[var(--color-text)]/80 text-[var(--color-bg)] text-xs font-medium scale-[0.98]">Active</div>
          <div className="px-4 py-2 rounded-lg bg-[var(--color-text)]/30 text-[var(--color-bg)]/50 text-xs font-medium cursor-not-allowed">Disabled</div>
          <div className="px-4 py-2 rounded-lg bg-[var(--color-text)] text-[var(--color-bg)] text-xs font-medium flex items-center gap-2">
            <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Loading
          </div>
        </div>
      </div>

      {/* ===== 7.2 表单 ===== */}
      <h2>7.2 表单（Form）</h2>

      <p>
        表单是数据收集的核心界面，也是用户体验的高风险区——表单放弃率（form abandonment rate）在电商场景中高达 70%（Baymard Institute, 2023）。好的表单设计直接影响转化率。
      </p>

      <h3>关键参数</h3>
      <div className="my-4 bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)] text-sm">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          <div className="text-[var(--color-text-tertiary)]">输入框高度</div>
          <div className="font-mono">36px（紧凑）/ 40px（标准）/ 44px（触屏）</div>
          <div className="text-[var(--color-text-tertiary)]">Label 字号</div>
          <div className="font-mono">13px, Medium (500)</div>
          <div className="text-[var(--color-text-tertiary)]">Label → Input 间距</div>
          <div className="font-mono">6px（顶部标签）</div>
          <div className="text-[var(--color-text-tertiary)]">字段 → 字段间距</div>
          <div className="font-mono">16-20px（必须 &gt; Label→Input 间距的 2 倍）</div>
          <div className="text-[var(--color-text-tertiary)]">表单分组间距</div>
          <div className="font-mono">32-40px</div>
          <div className="text-[var(--color-text-tertiary)]">错误提示字号</div>
          <div className="font-mono">12px, 红色, 出现在输入框下方 4px</div>
        </div>
      </div>

      <h3>Label 位置</h3>
      <p>
        <strong>顶部标签</strong>（Label 在 Input 上方）是当前 UI 设计的主流选择——扫视效率高、宽度利用率好、适应响应式。左侧标签（Label 在 Input 左边）适合密集型后台表单，但在移动端表现差。
      </p>

      <ComparisonCard
        title="表单设计"
        bad={
          <div className="p-2">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-[var(--color-text-secondary)] text-xs w-16 text-right shrink-0">姓名</span>
                <div className="flex-1 h-8 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--color-text-secondary)] text-xs w-16 text-right shrink-0">邮箱</span>
                <div className="flex-1 h-8 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--color-text-secondary)] text-xs w-16 text-right shrink-0">手机号</span>
                <div className="flex-1 h-8 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--color-text-secondary)] text-xs w-16 text-right shrink-0">地址</span>
                <div className="flex-1 h-8 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--color-text-secondary)] text-xs w-16 text-right shrink-0">备注</span>
                <div className="flex-1 h-16 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
              </div>
              <div className="ml-[76px]">
                <div className="h-8 w-20 rounded bg-blue-600 flex items-center justify-center text-white text-xs">提交</div>
              </div>
            </div>
          </div>
        }
        good={
          <div className="p-2">
            <div className="text-sm">
              <h4 className="text-sm font-semibold mb-1 text-[var(--color-text)]">联系信息</h4>
              <p className="text-xs text-[var(--color-text-tertiary)] mb-5">请填写您的基本信息</p>

              <div className="grid grid-cols-2 gap-x-3 gap-y-4 mb-4">
                <div>
                  <div className="text-xs font-medium text-[var(--color-text-secondary)] mb-1.5">姓名 <span className="text-[var(--color-bad)]">*</span></div>
                  <div className="h-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
                </div>
                <div>
                  <div className="text-xs font-medium text-[var(--color-text-secondary)] mb-1.5">手机号 <span className="text-[var(--color-bad)]">*</span></div>
                  <div className="h-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-medium text-[var(--color-text-secondary)] mb-1.5">邮箱</div>
                  <div className="h-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
                </div>
                <div>
                  <div className="text-xs font-medium text-[var(--color-text-secondary)] mb-1.5">地址</div>
                  <div className="h-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
                </div>
                <div>
                  <div className="text-xs font-medium text-[var(--color-text-secondary)] mb-1.5">备注</div>
                  <div className="h-16 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
                </div>
              </div>
              <div className="h-9 rounded-lg bg-[var(--color-text)] flex items-center justify-center text-xs font-medium text-[var(--color-bg)]">
                提交信息
              </div>
            </div>
          </div>
        }
        badNotes={[
          "左侧标签在窄屏上浪费空间",
          "所有字段等距排列，无分组",
          "必填/选填无标识",
          "五个字段一字排开，认知负荷高",
          "提交按钮位置不直觉（偏移对齐）",
        ]}
        goodNotes={[
          "顶部标签，宽度利用率高",
          "姓名+手机号双列布局，减少表单长度",
          "有标题和描述文案，提供上下文",
          "必填项用红色星号标识",
          "字段间 16px，分组间 24px——间距传达关系",
        ]}
      />

      <h3>错误状态设计</h3>
      <p>
        表单验证反馈是 AI 几乎总是缺失的部分。好的错误提示需要：<strong>红色边框</strong>（视觉定位）+ <strong>红色提示文字</strong>（说明问题）+ <strong>建议修复</strong>（指导行动）。
      </p>
      <div className="my-4 bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
        <div className="space-y-4 text-sm">
          <div>
            <div className="text-xs font-medium text-[var(--color-text-secondary)] mb-1.5">邮箱 <span className="text-[var(--color-bad)]">*</span></div>
            <div className="h-9 rounded-lg border-2 border-[var(--color-bad)]/60 bg-[var(--color-bg-tertiary)] flex items-center px-3">
              <span className="text-xs text-[var(--color-text-secondary)]">john@</span>
            </div>
            <p className="text-xs text-[var(--color-bad)] mt-1">请输入有效的邮箱地址，例如 name@example.com</p>
          </div>
          <div>
            <div className="text-xs font-medium text-[var(--color-text-secondary)] mb-1.5">密码 <span className="text-[var(--color-bad)]">*</span></div>
            <div className="h-9 rounded-lg border-2 border-[var(--color-bad)]/60 bg-[var(--color-bg-tertiary)] flex items-center px-3">
              <span className="text-xs text-[var(--color-text-secondary)]">••••</span>
            </div>
            <p className="text-xs text-[var(--color-bad)] mt-1">密码长度至少 8 位，需包含字母和数字</p>
          </div>
        </div>
      </div>

      {/* ===== 7.3 卡片 ===== */}
      <h2>7.3 卡片（Card）</h2>

      <p>
        卡片是内容容器的基本单位，几乎所有 dashboard、列表页、内容流都依赖卡片组件。AI 最常犯的卡片错误是<strong>「网格墙」</strong>——所有卡片同样大小、同样布局、同样视觉权重，形成一面单调的卡片墙。
      </p>

      <h3>关键参数</h3>
      <div className="my-4 bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)] text-sm">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          <div className="text-[var(--color-text-tertiary)]">内边距</div>
          <div className="font-mono">16px（紧凑）/ 20px（标准）/ 24px（宽松）</div>
          <div className="text-[var(--color-text-tertiary)]">圆角</div>
          <div className="font-mono">8px（小卡片）/ 12px（大卡片）</div>
          <div className="text-[var(--color-text-tertiary)]">边框</div>
          <div className="font-mono">1px solid，深色主题用边框而非阴影</div>
          <div className="text-[var(--color-text-tertiary)]">卡片间距</div>
          <div className="font-mono">12-16px（同组）/ 24px（跨组）</div>
          <div className="text-[var(--color-text-tertiary)]">背景色</div>
          <div className="font-mono">比页面背景亮一级（如 zinc-900 on zinc-950）</div>
        </div>
      </div>

      <h3>卡片内容层次</h3>
      <p>
        一张好的卡片内部有明确的<strong>三级信息结构</strong>：
      </p>
      <ol>
        <li><strong>第一级</strong>（一眼看到）：标题、核心数值、状态标签</li>
        <li><strong>第二级</strong>（扫一眼注意到）：描述文字、进度条、关键元数据</li>
        <li><strong>第三级</strong>（需要时再看）：创建时间、作者、ID、操作按钮</li>
      </ol>

      <ComparisonCard
        title="卡片设计"
        bad={
          <div className="p-2 space-y-2">
            {/* Flat boring cards */}
            {["用户管理系统", "订单管理系统", "数据分析平台"].map((title) => (
              <div key={title} className="p-3 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]">
                <div className="text-sm text-[var(--color-text)]">{title}</div>
                <div className="text-xs text-[var(--color-text-tertiary)] mt-1">这是一段项目描述文字</div>
                <div className="text-xs text-[var(--color-text-tertiary)] mt-1">更新于 2024-01-15</div>
              </div>
            ))}
          </div>
        }
        good={
          <div className="p-2 space-y-2.5">
            <div className="p-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-[var(--color-text)]">用户管理系统</h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-good)]/15 text-[var(--color-good)] font-medium">运行中</span>
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)] mb-3">多租户用户权限与角色管理</p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-1.5">
                  {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full bg-[var(--color-bg-tertiary)] border-2 border-[var(--color-bg-secondary)]" />)}
                </div>
                <span className="text-[10px] text-[var(--color-text-tertiary)] font-mono">3h ago</span>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-[var(--color-text)]">订单管理系统</h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] font-medium">部署中</span>
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)] mb-3">电商订单全流程追踪与处理</p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-1.5">
                  {[1,2].map(i => <div key={i} className="w-5 h-5 rounded-full bg-[var(--color-bg-tertiary)] border-2 border-[var(--color-bg-secondary)]" />)}
                </div>
                <span className="text-[10px] text-[var(--color-text-tertiary)] font-mono">1d ago</span>
              </div>
            </div>
          </div>
        }
        badNotes={[
          "所有卡片布局完全相同——网格墙",
          "内部无信息层次——标题、描述、时间字号相同",
          "没有状态信息——用户无法判断项目当前情况",
          "内边距太小（12px），内容贴边",
        ]}
        goodNotes={[
          "三级信息结构：标题+状态 → 描述 → 元数据",
          "状态用颜色编码的标签，一眼可识别",
          "头像堆叠传达协作信息",
          "时间戳用最小字号+等宽字体，退到最低层级",
        ]}
      />

      {/* ===== 7.4 导航 ===== */}
      <h2>7.4 导航（Navigation）</h2>

      <p>
        导航是界面的信息架构（Information Architecture）的可视化表达。选择导航模式不是审美决策，而是<strong>结构决策</strong>——先想清楚信息结构，导航形式自然产生。
      </p>

      <h3>侧边栏 vs 顶部导航</h3>
      <p>
        <strong>侧边栏导航</strong>适合：功能多（&gt;7 个一级入口）、深层级、工具型应用（如 dashboard、IDE、管理后台）。可以容纳更多入口，支持折叠子菜单。
      </p>
      <p>
        <strong>顶部导航</strong>适合：功能少（≤7 个一级入口）、扁平结构、内容型网站（如 blog、文档、营销页面）。更省横向空间。
      </p>

      <h3>导航项的视觉层级</h3>
      <p>
        导航的核心审美问题是<strong>当前位置的辨识度</strong>。用户需要在一瞬间答出「我在哪里」。AI 生成的导航最常见的问题是选中态太弱——跟未选中项几乎看不出区别。
      </p>

      <ComparisonCard
        title="侧边栏导航"
        bad={
          <div className="p-2 w-44">
            <div className="space-y-0.5 text-sm">
              {["概览", "项目", "团队成员", "设置", "文档", "API", "日志", "计费"].map((item, i) => (
                <div key={item} className={`px-3 py-2 rounded text-xs ${i === 1 ? "text-blue-400" : "text-[var(--color-text-secondary)]"}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
        good={
          <div className="p-2 w-44">
            <div className="space-y-0.5 text-sm">
              {[
                { name: "概览", icon: "◻", active: false },
                { name: "项目", icon: "◼", active: true },
                { name: "团队", icon: "◻", active: false },
                { name: "设置", icon: "◻", active: false },
              ].map((item) => (
                <div key={item.name} className={`px-3 py-2 rounded-lg text-xs flex items-center gap-2.5 ${
                  item.active
                    ? "bg-[var(--color-bg-tertiary)] text-[var(--color-text)] font-medium"
                    : "text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
                }`}>
                  <span className="text-[10px] opacity-50">{item.icon}</span>
                  {item.name}
                </div>
              ))}
              <div className="h-px bg-[var(--color-border-subtle)] my-2" />
              {[
                { name: "文档", icon: "◻" },
                { name: "API", icon: "◻" },
                { name: "日志", icon: "◻" },
                { name: "计费", icon: "◻" },
              ].map((item) => (
                <div key={item.name} className="px-3 py-2 rounded-lg text-xs flex items-center gap-2.5 text-[var(--color-text-tertiary)]">
                  <span className="text-[10px] opacity-50">{item.icon}</span>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        }
        badNotes={[
          "选中态仅靠颜色变化（蓝色文字），太弱",
          "8 个导航项无分组，认知负荷高（Hick 定律）",
          "没有图标，纯文字导航缺乏视觉锚点",
          "项与项之间无层次区分",
        ]}
        goodNotes={[
          "选中态：背景色 + 字重加粗，双重强化",
          "分隔线将 8 项分为两组（核心功能 / 辅助功能）",
          "图标提供视觉锚点，加速扫视",
          "非选中项用最弱灰色，让选中项突出",
        ]}
      />

      {/* ===== 7.5 数据表格 ===== */}
      <h2>7.5 数据表格（Table）</h2>

      <p>
        数据表格是信息密度最高的 UI 组件。它的审美挑战在于：如何在保持信息密度的同时不让用户感到窒息。
      </p>

      <h3>关键参数</h3>
      <div className="my-4 bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)] text-sm">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          <div className="text-[var(--color-text-tertiary)]">行高</div>
          <div className="font-mono">44px（紧凑）/ 52px（标准）/ 64px（宽松）</div>
          <div className="text-[var(--color-text-tertiary)]">表头字号</div>
          <div className="font-mono">11-12px, Medium, uppercase（英文）, 灰色</div>
          <div className="text-[var(--color-text-tertiary)]">单元格字号</div>
          <div className="font-mono">13-14px</div>
          <div className="text-[var(--color-text-tertiary)]">水平内边距</div>
          <div className="font-mono">16px（紧凑）/ 20px（标准）</div>
          <div className="text-[var(--color-text-tertiary)]">对齐规则</div>
          <div className="font-mono">文字左对齐、数字右对齐、操作居中</div>
        </div>
      </div>

      <h3>表格排版规则</h3>
      <ul>
        <li><strong>数字必须右对齐</strong>——便于纵向比较（142 vs 1,420 一目了然）</li>
        <li><strong>数字用等宽字体</strong>——保证数位对齐</li>
        <li><strong>表头弱化</strong>——用更小的字号、灰色、不加粗，让数据成为焦点</li>
        <li><strong>斑马纹要慎用</strong>——交替行背景色在深色主题中容易显脏，用 hover 高亮行替代</li>
        <li><strong>竖线通常不需要</strong>——横线 + 对齐已经足够区分列</li>
      </ul>

      <ComparisonCard
        title="数据表格"
        bad={
          <div className="p-1 overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left py-2 px-2 font-bold text-[var(--color-text)]">名称</th>
                  <th className="text-left py-2 px-2 font-bold text-[var(--color-text)]">状态</th>
                  <th className="text-left py-2 px-2 font-bold text-[var(--color-text)]">金额</th>
                  <th className="text-left py-2 px-2 font-bold text-[var(--color-text)]">日期</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["张三", "已完成", "¥12,450", "2024-01-15"],
                  ["李四", "进行中", "¥3,200", "2024-01-14"],
                  ["王五", "已取消", "¥89,100", "2024-01-13"],
                ].map(([name, status, amount, date], i) => (
                  <tr key={i} className={`border-b border-[var(--color-border)] ${i % 2 === 0 ? "bg-[var(--color-bg-tertiary)]" : ""}`}>
                    <td className="py-2 px-2 text-[var(--color-text)]">{name}</td>
                    <td className="py-2 px-2 text-[var(--color-text)]">{status}</td>
                    <td className="py-2 px-2 text-[var(--color-text)]">{amount}</td>
                    <td className="py-2 px-2 text-[var(--color-text)]">{date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
        good={
          <div className="p-1 overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)]">
                  <th className="text-left py-2.5 px-3 text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-wider">名称</th>
                  <th className="text-left py-2.5 px-3 text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-wider">状态</th>
                  <th className="text-right py-2.5 px-3 text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-wider">金额</th>
                  <th className="text-right py-2.5 px-3 text-[10px] font-medium text-[var(--color-text-tertiary)] uppercase tracking-wider">日期</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "张三", status: "已完成", statusColor: "var(--color-good)", amount: "¥12,450", date: "Jan 15" },
                  { name: "李四", status: "进行中", statusColor: "var(--color-accent)", amount: "¥3,200", date: "Jan 14" },
                  { name: "王五", status: "已取消", statusColor: "var(--color-text-tertiary)", amount: "¥89,100", date: "Jan 13" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[var(--color-border-subtle)] hover:bg-[var(--color-bg-secondary)] transition-colors">
                    <td className="py-3 px-3 text-[var(--color-text)] font-medium">{row.name}</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: row.statusColor }} />
                        <span className="text-[var(--color-text-secondary)]">{row.status}</span>
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right font-mono text-[var(--color-text)]">{row.amount}</td>
                    <td className="py-3 px-3 text-right text-[var(--color-text-tertiary)] font-mono">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
        badNotes={[
          "表头加粗——与数据争夺注意力",
          "金额左对齐——无法纵向比较",
          "状态用纯文字——缺乏视觉编码",
          "斑马纹在深色主题中显脏",
          "所有文字同等颜色和权重",
        ]}
        goodNotes={[
          "表头弱化（小号、灰色、大写）——让数据成为焦点",
          "金额右对齐 + 等宽字体——完美纵向对齐",
          "状态用颜色圆点编码——0.2 秒可识别",
          "hover 高亮行替代斑马纹——更干净",
          "日期简化格式 + 最弱颜色——退到最低层级",
        ]}
      />

      {/* ===== 7.6 空状态 ===== */}
      <h2>7.6 空状态与加载态（Empty & Loading State）</h2>

      <p>
        空状态和加载态是 AI 生成代码<strong>几乎 100% 缺失</strong>的部分。但对真实用户来说，空状态往往是他们与产品的第一次接触——新注册用户还没有任何数据，这个「空荡荡」的页面就是他们的第一印象。
      </p>

      <h3>空状态的三个层次</h3>
      <ol>
        <li><strong>最低限度</strong>：一句文字说明（&ldquo;暂无数据&rdquo;）——聊胜于无，但冰冷</li>
        <li><strong>标准水平</strong>：图标 + 说明 + CTA 按钮——引导用户行动</li>
        <li><strong>优秀水平</strong>：情境化插图 + 个性化文案 + CTA + 快捷操作——把空状态变成 onboarding</li>
      </ol>

      <ComparisonCard
        title="空状态"
        bad={
          <div className="py-16 text-center">
            <p className="text-sm text-[var(--color-text-tertiary)]">暂无数据</p>
          </div>
        }
        good={
          <div className="py-12 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="1.5" strokeLinecap="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <path d="M17.5 14v7M14 17.5h7" />
              </svg>
            </div>
            <h4 className="text-base font-semibold text-[var(--color-text)] mb-2">创建你的第一个项目</h4>
            <p className="text-sm text-[var(--color-text-tertiary)] mb-6 max-w-[280px] mx-auto leading-relaxed">
              项目帮助你组织任务、追踪进度、协调团队。只需一分钟即可开始。
            </p>
            <div className="inline-flex px-5 py-2.5 rounded-lg bg-[var(--color-text)] text-[var(--color-bg)] text-sm font-medium">
              新建项目
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[var(--color-text-tertiary)]">
              <span className="hover:text-[var(--color-text-secondary)] cursor-pointer">导入已有项目</span>
              <span>·</span>
              <span className="hover:text-[var(--color-text-secondary)] cursor-pointer">查看模板</span>
            </div>
          </div>
        }
        badNotes={[
          "四个字，没有上下文",
          "没有引导下一步操作",
          "浪费了建立用户信心的机会",
        ]}
        goodNotes={[
          "精心设计的图标提供视觉锚点和情感温度",
          "标题 + 描述解释价值和下一步",
          "主 CTA 按钮引导核心操作",
          "辅助链接提供替代路径（导入、模板）",
          "整体传达：「我们准备好了，等你开始」",
        ]}
      />

      <h3>加载态：骨架屏 vs Spinner</h3>
      <p>
        <strong>骨架屏（Skeleton Screen）</strong>是更好的选择——它告诉用户「内容正在来的路上，大概长这样」，而 spinner 只告诉用户「在等着，不知道要等多久」。研究表明骨架屏让用户感知的等待时间减少了约 30%。
      </p>
      <div className="my-4 bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
        <p className="text-xs text-[var(--color-text-tertiary)] mb-3">骨架屏示例</p>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-tertiary)] animate-pulse shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-3.5 w-2/3 rounded bg-[var(--color-bg-tertiary)] animate-pulse" />
                <div className="h-3 w-full rounded bg-[var(--color-bg-tertiary)] animate-pulse" />
                <div className="h-3 w-1/2 rounded bg-[var(--color-bg-tertiary)] animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== 7.7 模态框 ===== */}
      <h2>7.7 模态框（Modal / Dialog）</h2>

      <p>
        模态框中断用户当前流程，代价很高——只在需要用户<strong>确认、决策或输入</strong>时使用。「你确定要删除吗？」是合理的模态框；「操作成功！」不需要模态框（用 Toast 即可）。
      </p>

      <h3>关键设计规则</h3>
      <ul>
        <li><strong>宽度</strong>：400-560px（小型确认框）/ 640-800px（表单型）/ 不超过 90vw</li>
        <li><strong>标题必须明确</strong>：「删除项目」而非「确认操作」</li>
        <li><strong>破坏性操作用红色</strong>：删除确认的主按钮应为红色，且不是 Primary 样式</li>
        <li><strong>遮罩层</strong>：黑色 50-60% 透明度，点击可关闭（非破坏性操作时）</li>
        <li><strong>焦点陷阱</strong>：Tab 键不能跳出模态框（无障碍要求）</li>
      </ul>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl border border-[var(--color-border-subtle)] overflow-hidden">
        <p className="text-xs text-[var(--color-text-tertiary)] px-5 pt-4 mb-3">删除确认框示例</p>
        <div className="px-5 pb-5">
          <div className="max-w-[380px] bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)] p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-bad)]/10 flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--color-bad)" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="10" cy="10" r="8" />
                  <path d="M10 6v5M10 13.5v.5" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-text)] mb-1">删除「用户管理系统」</h4>
                <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
                  此操作无法撤销。项目下的所有任务、文件和历史记录将被永久删除。
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <div className="px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] text-xs font-medium">取消</div>
              <div className="px-4 py-2 rounded-lg bg-[var(--color-bad)] text-white text-xs font-medium">删除项目</div>
            </div>
          </div>
        </div>
      </div>

      <KeyInsight>
        组件审美的核心不是让每个组件都「好看」，而是让每个组件都<strong>准确地传达其功能意图</strong>。Primary 按钮「看起来就该被点」，错误提示「看起来就知道出了问题」，空状态「看起来就想开始创建」——当形式完美地服务于功能时，审美就自然产生了。这正是包豪斯「形式追随功能」在一百年后的具体体现。
      </KeyInsight>
    </>
  );
}
