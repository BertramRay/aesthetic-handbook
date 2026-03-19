import ComparisonCard from "@/components/ComparisonCard";
import KeyInsight from "@/components/KeyInsight";
import ColorSwatch from "@/components/ColorSwatch";

export default function ChapterColor() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第四章</p>
      <h1>色彩——最强大也最危险的设计工具</h1>

      <blockquote>
        &ldquo;Color is a power which directly influences the soul.&rdquo;
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Wassily Kandinsky, <em>Concerning the Spiritual in Art</em>, 1911</span>
      </blockquote>

      <p>
        配色是设计中最让人焦虑的环节。不是因为它难——而是因为<strong>选择太多</strong>。1670 万种颜色摆在面前，怎么选？选完怎么搭？搭完怎么知道对不对？
      </p>
      <p>
        好消息是：90% 的优秀 UI 只用了中性色 + 一个强调色。配色不是「选出最漂亮的颜色」，而是<strong>建立一套有纪律的系统</strong>。这一章我们不讲色彩理论的学术名词——我们用你能亲眼看到的例子，把配色从玄学变成工程。
      </p>

      {/* ===== 4.1 HSL：用人话理解颜色 ===== */}
      <h2>4.1 用人话理解颜色——HSL 是你的新母语</h2>

      <p>
        打开取色器，你看到的是 <code className="text-xs bg-[var(--color-bg-tertiary)] px-1.5 py-0.5 rounded">#3B82F6</code>。这串符号告诉你什么？什么都没有。它就像一个电话号码——有用，但不传达任何含义。
      </p>
      <p>
        换成 HSL：<code className="text-xs bg-[var(--color-bg-tertiary)] px-1.5 py-0.5 rounded">hsl(217, 91%, 60%)</code>。突然你能「读」这个颜色了：色相 217 度（蓝色区域），饱和度 91%（非常鲜艳），明度 60%（中等偏亮）。当你说「这个蓝色太刺眼」，你实际在说「S 值太高了」。当你说「背景色看不清文字」，你在说「两者的 L 值太接近」。
      </p>
      <p>
        HSL 的三个维度直接对应人的视觉感知。掌握它，你就能<strong>用语言精确描述</strong>你的配色意图，而不是对着取色器碰运气。
      </p>

      {/* HSL visual demo: Hue */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">色相 Hue — 颜色的「种类」</p>
        <p className="text-xs text-[var(--color-text-tertiary)] mb-3">色相是一个 0-360 度的圆环。改变色相 = 改变颜色种类，饱和度和明度不变：</p>
        <div className="flex gap-1.5">
          {[0, 30, 60, 120, 180, 210, 240, 270, 300, 330].map((h) => (
            <div key={h} className="flex-1 text-center">
              <div
                className="h-12 rounded-lg mb-1.5"
                style={{ backgroundColor: `hsl(${h}, 80%, 55%)` }}
              />
              <div className="text-[10px] font-mono text-[var(--color-text-tertiary)]">{h}&deg;</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-3 italic">
          0&deg; 红色 → 60&deg; 黄色 → 120&deg; 绿色 → 240&deg; 蓝色 → 300&deg; 紫色 → 360&deg; 回到红色。同样的饱和度和明度，仅改变色相。
        </p>
      </div>

      {/* HSL visual demo: Saturation */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">饱和度 Saturation — 颜色的「纯度」</p>
        <p className="text-xs text-[var(--color-text-tertiary)] mb-3">同一个蓝色（H:217），从纯色到灰色：</p>
        <div className="flex gap-1.5">
          {[100, 80, 60, 40, 20, 0].map((s) => (
            <div key={s} className="flex-1 text-center">
              <div
                className="h-12 rounded-lg mb-1.5"
                style={{ backgroundColor: `hsl(217, ${s}%, 60%)` }}
              />
              <div className="text-[10px] font-mono text-[var(--color-text-tertiary)]">S:{s}%</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-3 italic">
          S:100% 是纯蓝色，像一面旗帜。S:0% 变成了灰色——完全没有色彩信息。UI 中的强调色通常在 70-90%，背景色在 0-15%。
        </p>
      </div>

      {/* HSL visual demo: Lightness */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">明度 Lightness — 颜色的「亮暗」</p>
        <p className="text-xs text-[var(--color-text-tertiary)] mb-3">同一个蓝色（H:217, S:91%），从亮到暗：</p>
        <div className="flex gap-1.5">
          {[90, 75, 60, 45, 30, 15].map((l) => (
            <div key={l} className="flex-1 text-center">
              <div
                className="h-12 rounded-lg mb-1.5"
                style={{ backgroundColor: `hsl(217, 91%, ${l}%)` }}
              />
              <div className="text-[10px] font-mono text-[var(--color-text-tertiary)]">L:{l}%</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-3 italic">
          L:90% 接近白色（适合浅色背景 tint），L:60% 是标准的按钮/链接色，L:15% 接近黑色（适合深色背景）。对比度问题 90% 出在明度差不够。
        </p>
      </div>

      <KeyInsight label="实用技巧">
        下次有人说「这个颜色不太对」，不要去猜——用 HSL 三个维度逐一排查：<strong>色相对吗？饱和度是不是太高/太低？明度跟背景的差距够吗？</strong>这三个问题能定位 90% 的配色问题。记住：HEX 是给机器读的，HSL 是给人读的。
      </KeyInsight>

      {/* ===== 4.2 60-30-10 法则 ===== */}
      <h2>4.2 60-30-10 法则——配色就像穿衣服</h2>

      <p>
        想象你要参加一个商务活动。你会怎么穿？大概是：深色西装（60%）、白色衬衫（30%）、一条亮色领带或丝巾（10%）。全身彩色像马戏团，全身黑白像去参加葬礼，但这个比例刚好——<strong>稳重中带一点个性</strong>。
      </p>
      <p>
        UI 配色用的是完全相同的逻辑。这个法则源于室内设计，但在界面中同样有效：
      </p>
      <ul>
        <li><strong>60% 主色</strong>：通常是中性背景色（深色主题的 zinc-950，浅色主题的白色）</li>
        <li><strong>30% 辅色</strong>：内容色、卡片、区块背景（zinc-900、zinc-100）</li>
        <li><strong>10% 强调色</strong>：CTA 按钮、链接、状态标记——<strong>全部的「彩色」加起来</strong></li>
      </ul>

      {/* 60-30-10 visual demo: annotated mini dashboard */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">60-30-10 实感——一个 Mini Dashboard</p>
        <div className="rounded-lg overflow-hidden border border-[var(--color-border-subtle)]">
          {/* 60% background */}
          <div className="bg-zinc-950 p-4 relative">
            {/* 60% annotation */}
            <div className="absolute top-1 right-2 text-[10px] font-mono text-zinc-500">60% 主背景</div>
            {/* Top bar */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold text-zinc-200">Dashboard</div>
              <div className="flex gap-2">
                <div className="text-xs text-zinc-500">Search...</div>
                {/* 10% accent */}
                <div className="px-2.5 py-1 rounded-md bg-blue-500 text-white text-xs font-medium">+ New</div>
              </div>
            </div>
            {/* Cards row - 30% */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-zinc-900 rounded-lg p-3 relative">
                <div className="absolute -top-1 -right-1 text-[10px] font-mono text-zinc-600 bg-zinc-950 px-1 rounded">30%</div>
                <div className="text-xs text-zinc-500 mb-1">月活用户</div>
                <div className="text-lg font-bold text-zinc-100">12,847</div>
                <div className="text-xs text-green-500 font-medium mt-1">+23.5%</div>
              </div>
              <div className="bg-zinc-900 rounded-lg p-3">
                <div className="text-xs text-zinc-500 mb-1">转化率</div>
                <div className="text-lg font-bold text-zinc-100">3.2%</div>
                <div className="text-xs text-zinc-500 mt-1">vs 上月 2.8%</div>
              </div>
              <div className="bg-zinc-900 rounded-lg p-3">
                <div className="text-xs text-zinc-500 mb-1">收入</div>
                <div className="text-lg font-bold text-zinc-100">$48.2k</div>
                {/* 10% accent usage */}
                <div className="text-xs text-blue-400 font-medium mt-1">查看详情 &rarr;</div>
              </div>
            </div>
            {/* 10% annotation */}
            <div className="mt-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-[10px] font-mono text-zinc-600">10% 强调色 — 仅用于 CTA、链接、关键状态</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          注意「彩色」在整个界面中的面积占比有多小。深色背景是舞台，卡片是布景，蓝色只出现在需要用户注意或操作的地方。这就是克制的力量。
        </p>
      </div>

      <p>
        一个反直觉的真相：大多数优秀 UI 的「彩色」面积占比<strong>远低于你的直觉</strong>。打开 Linear、Notion、Vercel Dashboard 数一数——彩色元素通常不超过 5%。克制不是因为「极简主义很流行」，而是因为当彩色稀缺时，它出现的每一个地方都在「说话」。当到处都是彩色时，没有人在说话。
      </p>

      {/* ===== 4.3 灰度优先 ===== */}
      <h2>4.3 灰度优先——先穿好衣服，再系领带</h2>

      <p>
        Refactoring UI 的核心洞察之一：<strong>先用灰度设计，最后再加颜色</strong>。这就像做菜——先把食材的火候掌握好，最后再撒香料。如果你的菜只靠辣椒酱才有味道，那说明食材本身没处理好。
      </p>
      <p>
        如果你的界面在纯灰度下层次清晰、信息可读，那颜色只是锦上添花。如果你依赖颜色来区分信息层次，一旦颜色选错，整个界面就会崩溃。
      </p>

      {/* Gray-first demo: same card in grayscale then with accent */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示：灰度优先工作流</p>
        <div className="grid grid-cols-2 gap-6">
          {/* Step 1: Grayscale */}
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-3">Step 1：纯灰度——层次已经清晰</p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-700" />
                <div>
                  <div className="text-sm font-semibold text-zinc-200">Sarah Chen</div>
                  <div className="text-xs text-zinc-500">Product Designer</div>
                </div>
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">
                刚完成了新版仪表盘的原型设计，欢迎大家来评审提意见。
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded-md bg-zinc-200 text-zinc-900 text-xs font-medium">查看原型</div>
                <div className="px-3 py-1.5 rounded-md text-xs text-zinc-400">稍后再看</div>
              </div>
            </div>
          </div>
          {/* Step 2: Add one accent */}
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-3">Step 2：加一个强调色——焦点更明确</p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold">S</div>
                <div>
                  <div className="text-sm font-semibold text-zinc-200">Sarah Chen</div>
                  <div className="text-xs text-zinc-500">Product Designer</div>
                </div>
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">
                刚完成了新版仪表盘的原型设计，欢迎大家来评审提意见。
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-xs font-medium">查看原型</div>
                <div className="px-3 py-1.5 rounded-md text-xs text-zinc-400">稍后再看</div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          左边：纯灰度已经能分辨标题、正文、按钮的层次。右边：加入蓝色后，头像和 CTA 按钮获得了额外的视觉焦点，但基础结构完全不变。颜色是锦上添花，不是雪中送炭。
        </p>
      </div>

      <ColorSwatch
        title="推荐中性色系：Zinc（冷调灰，适合科技产品）"
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

      <KeyInsight>
        灰度优先不是「不用颜色」——而是确保你的信息层次<strong>不依赖颜色</strong>。就像一个优秀的演员不需要化妆也能演好角色，化妆只是让表演更有感染力。先用大小、字重、间距建好骨架，颜色最后点睛。
      </KeyInsight>

      {/* ===== 4.4 对比度 ===== */}
      <h2>4.4 对比度——不是装饰，而是基本人权</h2>

      <p>
        WCAG 2.1 标准要求正文文字与背景的对比度至少 <strong>4.5:1</strong>（AA 级），大号文字至少 3:1。AAA 级要求 7:1。这不是什么「最佳实践」——全球约 8% 的男性有色觉异常，更多人在阳光下、低亮度屏幕上使用你的产品。对比度不够 = 有人看不清你的界面。
      </p>
      <p>
        来，亲眼感受一下不同对比度的差距：
      </p>

      {/* Contrast ratio demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">对比度实感——你能读清每一行吗？</p>
        <div className="space-y-4">
          {/* 2:1 - fail */}
          <div className="flex items-center gap-4">
            <div className="w-16 shrink-0 text-right">
              <span className="text-xs font-mono text-red-400">2:1</span>
            </div>
            <div className="flex-1 rounded-lg px-4 py-3 bg-zinc-900">
              <span className="text-sm" style={{ color: "#555" }}>这行文字的对比度只有 2:1，你需要非常努力才能读清。</span>
            </div>
            <div className="w-16 shrink-0">
              <span className="text-[10px] text-red-400 font-medium">FAIL</span>
            </div>
          </div>
          {/* 3:1 - AA Large only */}
          <div className="flex items-center gap-4">
            <div className="w-16 shrink-0 text-right">
              <span className="text-xs font-mono text-amber-400">3:1</span>
            </div>
            <div className="flex-1 rounded-lg px-4 py-3 bg-zinc-900">
              <span className="text-sm" style={{ color: "#777" }}>3:1 对比度，勉强可读，只适合大号标题或装饰性文字。</span>
            </div>
            <div className="w-16 shrink-0">
              <span className="text-[10px] text-amber-400 font-medium">AA Large</span>
            </div>
          </div>
          {/* 4.5:1 - AA */}
          <div className="flex items-center gap-4">
            <div className="w-16 shrink-0 text-right">
              <span className="text-xs font-mono text-green-400">4.5:1</span>
            </div>
            <div className="flex-1 rounded-lg px-4 py-3 bg-zinc-900">
              <span className="text-sm" style={{ color: "#999" }}>4.5:1 对比度，这是正文文字的最低标准（AA 级）。</span>
            </div>
            <div className="w-16 shrink-0">
              <span className="text-[10px] text-green-400 font-medium">AA</span>
            </div>
          </div>
          {/* 7:1 - AAA */}
          <div className="flex items-center gap-4">
            <div className="w-16 shrink-0 text-right">
              <span className="text-xs font-mono text-green-300">7:1</span>
            </div>
            <div className="flex-1 rounded-lg px-4 py-3 bg-zinc-900">
              <span className="text-sm" style={{ color: "#ccc" }}>7:1 对比度，清晰舒适，这是 AAA 级标准，阅读毫不费力。</span>
            </div>
            <div className="w-16 shrink-0">
              <span className="text-[10px] text-green-300 font-medium">AAA</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          从上到下，你能清楚感受到阅读舒适度的巨大差异。2:1 和 7:1 之间不是「稍微好一点」，而是「看不清」和「一目了然」的区别。
        </p>
      </div>

      <p>
        另一个关键：<strong>永远不要仅依靠颜色传达信息</strong>。用颜色 + 图标（错误 = 红色 + &times; 图标）、颜色 + 文字标签（成功 = 绿色 + &ldquo;已完成&rdquo;）的组合，确保色觉异常用户也能获取完整信息。
      </p>

      {/* ===== 4.5 色彩心理学 ===== */}
      <h2>4.5 色彩心理学——每种颜色都在「说话」</h2>

      <p>
        Elliot 和 Maier（2014）的综述研究系统整理了色彩联想的跨文化共性。颜色不只是视觉信号——它们携带情感和文化含义。选对颜色，品牌调性自然形成；选错颜色，用户会产生微妙但持续的「违和感」。
      </p>

      {/* Color psychology cards */}
      <div className="my-6 grid grid-cols-2 gap-3">
        {/* Blue */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-4 border border-[var(--color-border-subtle)] flex gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500 shrink-0" />
          <div>
            <div className="text-sm font-semibold text-[var(--color-text)] mb-1">蓝色 — 信任、专业、冷静</div>
            <div className="text-xs text-[var(--color-text-tertiary)]">
              最「安全」的 UI 色彩。Facebook、LinkedIn、Twitter/X、Stripe 都选择蓝色不是巧合——它跨文化关联信任和可靠。
            </div>
          </div>
        </div>
        {/* Red */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-4 border border-[var(--color-border-subtle)] flex gap-3">
          <div className="w-10 h-10 rounded-lg bg-red-500 shrink-0" />
          <div>
            <div className="text-sm font-semibold text-[var(--color-text)] mb-1">红色 — 警告、紧迫、激情</div>
            <div className="text-xs text-[var(--color-text-tertiary)]">
              用于错误提示和删除操作。注意：在中国文化中红色同时代表喜庆，在金融领域代表上涨。语境决定含义。
            </div>
          </div>
        </div>
        {/* Green */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-4 border border-[var(--color-border-subtle)] flex gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-500 shrink-0" />
          <div>
            <div className="text-sm font-semibold text-[var(--color-text)] mb-1">绿色 — 成功、通过、自然</div>
            <div className="text-xs text-[var(--color-text-tertiary)]">
              用于成功反馈和确认操作。几乎是全球通用的「OK」信号。健康、环保品牌的首选。
            </div>
          </div>
        </div>
        {/* Amber */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-4 border border-[var(--color-border-subtle)] flex gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500 shrink-0" />
          <div>
            <div className="text-sm font-semibold text-[var(--color-text)] mb-1">橙色/琥珀 — 警示、温暖、活力</div>
            <div className="text-xs text-[var(--color-text-tertiary)]">
              比红色柔和的警示色，适合非破坏性提醒。也传达创意和亲和力——Notion、HubSpot 的调性。
            </div>
          </div>
        </div>
        {/* Purple */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-4 border border-[var(--color-border-subtle)] flex gap-3">
          <div className="w-10 h-10 rounded-lg bg-purple-500 shrink-0" />
          <div>
            <div className="text-sm font-semibold text-[var(--color-text)] mb-1">紫色 — 创意、高端、神秘</div>
            <div className="text-xs text-[var(--color-text-tertiary)]">
              历史上紫色颜料最昂贵，所以它天然关联高端和稀有。Figma、Twitch、Framer 用紫色传达创意和个性。
            </div>
          </div>
        </div>
        {/* Black/Dark */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-4 border border-[var(--color-border-subtle)] flex gap-3">
          <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-600 shrink-0" />
          <div>
            <div className="text-sm font-semibold text-[var(--color-text)] mb-1">黑色/深色 — 权威、优雅、极简</div>
            <div className="text-xs text-[var(--color-text-tertiary)]">
              苹果、奢侈品牌的底色。深色背景让内容「浮」出来，天然传达高端和专注。但过暗会让人压抑。
            </div>
          </div>
        </div>
      </div>

      {/* ===== 4.6 实用配色工作流 ===== */}
      <h2>4.6 四步配色工作流——从零到完整的配色系统</h2>

      <p>以下是一个经过验证的工作流，适用于大多数项目。不需要天赋，只需要纪律。</p>

      <div className="my-6 space-y-4">
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-lg font-bold text-[var(--color-accent)] font-mono">01</span>
            <h4 className="text-sm font-semibold text-[var(--color-text)]">选中性色系</h4>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">
            从 zinc、slate、gray、neutral、stone 中选一个。差异微妙但存在：<strong>zinc 偏冷</strong>（蓝底灰，科技感），<strong>stone 偏暖</strong>（黄底灰，亲和力）。不确定就选 zinc——它是最通用的选择。
          </p>
        </div>
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-lg font-bold text-[var(--color-accent)] font-mono">02</span>
            <h4 className="text-sm font-semibold text-[var(--color-text)]">选一个强调色——只要一个</h4>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">
            蓝色（blue-500）最安全，紫色偏创意，琥珀色偏温暖。关键是：<strong>整个产品只用这一个彩色</strong>。一个强调色 = 每次出现都有意义；三个强调色 = 没有人知道哪个重要。
          </p>
        </div>
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-lg font-bold text-[var(--color-accent)] font-mono">03</span>
            <h4 className="text-sm font-semibold text-[var(--color-text)]">派生语义色</h4>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">
            成功用绿色、错误用红色、警告用橙色、信息用蓝色。这些是行业标准，<strong>不需要创新</strong>。把创新预算花在真正需要差异化的地方。
          </p>
        </div>
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-lg font-bold text-[var(--color-accent)] font-mono">04</span>
            <h4 className="text-sm font-semibold text-[var(--color-text)]">对比度检查</h4>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">
            用工具（WebAIM Contrast Checker、Figma 插件 Stark）验证每种文字色/背景色组合是否达到 4.5:1。<strong>这是必做步骤，不是可选步骤。</strong>
          </p>
        </div>
      </div>

      {/* ===== 4.7 五套配色方案 ===== */}
      <h2>4.7 五套拿来即用的配色方案</h2>

      <p>
        不想从零开始？下面是五套经过验证的配色方案。每套都展示了它应用到实际 UI 组件上的效果——不只是色块，而是按钮、卡片、徽章的真实样子。
      </p>

      {/* Palette 1: Cool Professional */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 rounded-full bg-blue-500" />
          <p className="text-sm font-semibold text-[var(--color-text)]">方案 #1：冷调专业（推荐默认）</p>
        </div>
        <ColorSwatch
          colors={[
            { hex: "#09090b", name: "Background" },
            { hex: "#18181b", name: "Surface" },
            { hex: "#3b82f6", name: "Primary" },
            { hex: "#22c55e", name: "Success" },
            { hex: "#ef4444", name: "Error" },
          ]}
        />
        <div className="flex gap-3 mt-4 items-center">
          <div className="px-4 py-2 rounded-lg bg-blue-500 text-white text-xs font-medium">确认提交</div>
          <div className="px-4 py-2 rounded-lg border border-zinc-700 text-zinc-300 text-xs">取消</div>
          <div className="px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 text-[10px] font-medium">Pro</div>
          <div className="px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 text-[10px] font-medium">已通过</div>
          <div className="px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 text-[10px] font-medium">失败</div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-3">适合：SaaS、开发工具、B2B 产品。最安全的选择。</p>
      </div>

      {/* Palette 2: Warm Creative */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 rounded-full bg-amber-500" />
          <p className="text-sm font-semibold text-[var(--color-text)]">方案 #2：暖调创意</p>
        </div>
        <ColorSwatch
          colors={[
            { hex: "#0c0a09", name: "Background" },
            { hex: "#1c1917", name: "Surface" },
            { hex: "#f59e0b", name: "Primary" },
            { hex: "#22c55e", name: "Success" },
            { hex: "#ef4444", name: "Error" },
          ]}
        />
        <div className="flex gap-3 mt-4 items-center">
          <div className="px-4 py-2 rounded-lg bg-amber-500 text-stone-900 text-xs font-medium">创建项目</div>
          <div className="px-4 py-2 rounded-lg border border-stone-700 text-stone-300 text-xs">返回</div>
          <div className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 text-[10px] font-medium">热门</div>
          <div className="px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 text-[10px] font-medium">上线</div>
          <div className="px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 text-[10px] font-medium">下线</div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-3">适合：创意工具、社区产品、内容平台。琥珀色自带温暖和亲和力。</p>
      </div>

      {/* Palette 3: Emerald Growth */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 rounded-full bg-emerald-500" />
          <p className="text-sm font-semibold text-[var(--color-text)]">方案 #3：生长绿</p>
        </div>
        <ColorSwatch
          colors={[
            { hex: "#0a0a0a", name: "Background" },
            { hex: "#171717", name: "Surface" },
            { hex: "#10b981", name: "Primary" },
            { hex: "#3b82f6", name: "Info" },
            { hex: "#ef4444", name: "Error" },
          ]}
        />
        <div className="flex gap-3 mt-4 items-center">
          <div className="px-4 py-2 rounded-lg bg-emerald-500 text-white text-xs font-medium">开始使用</div>
          <div className="px-4 py-2 rounded-lg border border-neutral-700 text-neutral-300 text-xs">了解更多</div>
          <div className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-medium">增长 +12%</div>
          <div className="px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 text-[10px] font-medium">提示</div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-3">适合：金融科技、健康、可持续发展。绿色天然关联增长和正面。</p>
      </div>

      {/* Palette 4: Purple Creative */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 rounded-full bg-violet-500" />
          <p className="text-sm font-semibold text-[var(--color-text)]">方案 #4：创意紫</p>
        </div>
        <ColorSwatch
          colors={[
            { hex: "#09090b", name: "Background" },
            { hex: "#18181b", name: "Surface" },
            { hex: "#8b5cf6", name: "Primary" },
            { hex: "#22c55e", name: "Success" },
            { hex: "#ef4444", name: "Error" },
          ]}
        />
        <div className="flex gap-3 mt-4 items-center">
          <div className="px-4 py-2 rounded-lg bg-violet-500 text-white text-xs font-medium">升级 Pro</div>
          <div className="px-4 py-2 rounded-lg border border-zinc-700 text-zinc-300 text-xs">对比方案</div>
          <div className="px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-400 text-[10px] font-medium">AI 生成</div>
          <div className="px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 text-[10px] font-medium">完成</div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-3">适合：设计工具、AI 产品、创作者平台。紫色传达创新和想象力。</p>
      </div>

      {/* Palette 5: Rose Warm */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 rounded-full bg-rose-500" />
          <p className="text-sm font-semibold text-[var(--color-text)]">方案 #5：玫瑰粉</p>
        </div>
        <ColorSwatch
          colors={[
            { hex: "#0a0a0a", name: "Background" },
            { hex: "#171717", name: "Surface" },
            { hex: "#f43f5e", name: "Primary" },
            { hex: "#22c55e", name: "Success" },
            { hex: "#f59e0b", name: "Warning" },
          ]}
        />
        <div className="flex gap-3 mt-4 items-center">
          <div className="px-4 py-2 rounded-lg bg-rose-500 text-white text-xs font-medium">立即关注</div>
          <div className="px-4 py-2 rounded-lg border border-neutral-700 text-neutral-300 text-xs">分享</div>
          <div className="px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-400 text-[10px] font-medium">热门</div>
          <div className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 text-[10px] font-medium">限时</div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-3">适合：社交、电商、消费品牌。玫瑰色传达热情和吸引力，但注意不要与错误红混淆。</p>
      </div>

      {/* ===== 4.8 常见错误 ===== */}
      <h2>4.8 配色的四宗罪——最常见的错误</h2>

      {/* Mistake 1: Rainbow syndrome */}
      <h3>罪一：彩虹综合症</h3>
      <p>
        每个区块一种颜色，每个按钮一种色调，整个页面像打翻了调色盘。通常出现在「我想让界面更活泼」的意图下——但实际效果是混乱、廉价、不专业。
      </p>

      <ComparisonCard
        title="彩虹综合症 vs 克制用色"
        bad={
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="px-3 py-1.5 rounded bg-blue-500 text-white text-xs">首页</div>
              <div className="px-3 py-1.5 rounded bg-green-500 text-white text-xs">产品</div>
              <div className="px-3 py-1.5 rounded bg-purple-500 text-white text-xs">定价</div>
              <div className="px-3 py-1.5 rounded bg-orange-500 text-white text-xs">博客</div>
            </div>
            <div className="rounded-lg p-3 bg-pink-500/10 border border-pink-500/30">
              <div className="text-xs text-pink-400 font-medium">公告</div>
              <div className="text-xs text-pink-300">新功能上线啦！</div>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1.5 rounded bg-teal-500 text-white text-xs">注册</div>
              <div className="px-3 py-1.5 rounded bg-red-500 text-white text-xs">登录</div>
            </div>
          </div>
        }
        good={
          <div className="space-y-3">
            <div className="flex gap-1">
              <div className="px-3 py-1.5 rounded-md bg-blue-500/10 text-blue-400 text-xs font-medium">首页</div>
              <div className="px-3 py-1.5 rounded-md text-zinc-400 text-xs">产品</div>
              <div className="px-3 py-1.5 rounded-md text-zinc-400 text-xs">定价</div>
              <div className="px-3 py-1.5 rounded-md text-zinc-400 text-xs">博客</div>
            </div>
            <div className="rounded-lg p-3 bg-zinc-800 border border-zinc-700">
              <div className="text-xs text-zinc-300 font-medium">公告</div>
              <div className="text-xs text-zinc-500">新功能上线啦！</div>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-xs font-medium">注册</div>
              <div className="px-3 py-1.5 rounded-md text-zinc-400 text-xs">登录</div>
            </div>
          </div>
        }
        badNotes={["6 种彩色互相打架，没有人知道重点在哪", "视觉噪音爆炸，像 2005 年的网站"]}
        goodNotes={["只有蓝色一种强调色，每次出现都有意义", "安静的界面让 CTA 按钮自动获得全部注意力"]}
      />

      {/* Mistake 2: Fighting accent colors */}
      <h3>罪二：强调色互相打架</h3>
      <p>
        一个页面同时有蓝色按钮、绿色按钮、橙色按钮——用户看到三种同等醒目的颜色，不知道该点哪个。记住：<strong>同一视图中只有一个 primary 按钮</strong>，其余用描边或纯文字降级。
      </p>

      {/* Mistake 3: Low contrast hero text */}
      <h3>罪三：浅色背景上的浅色文字</h3>
      <p>
        为了「好看」而牺牲可读性，是新手最常犯的错误。特别是渐变背景上的白色文字——在设计工具里看起来很酷，到了用户的低亮度屏幕上就变成了隐形墨水。<strong>永远以最差的显示条件来检验对比度。</strong>
      </p>

      {/* Mistake 4: Direct color reuse across themes */}
      <h3>罪四：深色浅色主题直接复用颜色</h3>
      <p>
        同一个 <code className="text-xs bg-[var(--color-bg-tertiary)] px-1.5 py-0.5 rounded">blue-500</code> 在深色背景上很好看，放到白色背景上可能对比度就不够了——反之亦然。这就是 Johannes Itten 在 1961 年就指出的<strong>同时对比效应</strong>：同一种颜色在不同背景上看起来会不同。
      </p>

      {/* Dark vs Light theme demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">同时对比效应——同一张卡片在两种主题下</p>
        <div className="grid grid-cols-2 gap-4">
          {/* Dark theme */}
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-2">深色主题</p>
            <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-4 space-y-3">
              <div className="text-sm font-semibold text-zinc-100">项目进度</div>
              <div className="text-xs text-zinc-400">Sprint 14 · 还剩 3 天</div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "68%" }} />
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-blue-400 font-medium">68% 完成</span>
                <span className="text-zinc-500">目标: 100%</span>
              </div>
              <div className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-xs font-medium text-center">查看详情</div>
            </div>
          </div>
          {/* Light theme */}
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-2">浅色主题——需要调整</p>
            <div className="rounded-lg bg-white border border-zinc-200 p-4 space-y-3">
              <div className="text-sm font-semibold text-zinc-900">项目进度</div>
              <div className="text-xs text-zinc-500">Sprint 14 · 还剩 3 天</div>
              <div className="w-full bg-zinc-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "68%" }} />
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-blue-600 font-medium">68% 完成</span>
                <span className="text-zinc-400">目标: 100%</span>
              </div>
              <div className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs font-medium text-center">查看详情</div>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          注意浅色主题用了 blue-600 而非 blue-500——因为白色背景上 blue-500 对比度不够。深色主题用 blue-400 做文字色（更亮），浅色主题用 blue-600（更暗）。不是同一个色值切换背景就完了。
        </p>
      </div>

      <KeyInsight>
        如果你的产品需要同时支持深色和浅色主题，为每个主题准备独立的色彩 token。不要偷懒用同一套色值——在 CSS 变量或 Tailwind 配置中定义 <code className="text-xs bg-[var(--color-bg-tertiary)] px-1.5 py-0.5 rounded">--color-primary</code>，然后在两个主题下赋不同的值（深色: blue-500，浅色: blue-600）。
      </KeyInsight>

      {/* ===== 4.9 配色速查决策树 ===== */}
      <h2>4.9 配色速查决策树——30 秒选对颜色</h2>

      <p>
        不想读完整章？没关系。回答下面几个问题，直接跳到推荐方案。
      </p>

      {/* Decision tree rendered as a flowchart-like structure */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-5">配色速查决策树</p>

        {/* Level 1 */}
        <div className="text-center mb-4">
          <div className="inline-block bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] px-5 py-3">
            <div className="text-sm font-semibold text-[var(--color-text)]">你的产品是什么类型？</div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center mb-4">
          <div className="w-px h-6 bg-[var(--color-border)]" />
        </div>

        {/* Level 2: Branches */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {/* B2B / SaaS */}
          <div className="rounded-lg border border-blue-500/30 bg-blue-500/5 p-4 text-center space-y-2">
            <div className="text-xs font-medium text-blue-400">B2B / SaaS / 工具</div>
            <div className="w-px h-3 bg-blue-500/30 mx-auto" />
            <div className="flex justify-center gap-1.5">
              <div className="w-5 h-5 rounded bg-blue-500" />
              <div className="w-5 h-5 rounded bg-zinc-800 border border-zinc-600" />
            </div>
            <div className="text-[10px] text-[var(--color-text-tertiary)]">
              蓝色 + Zinc<br />专业、可信赖
            </div>
            <div className="text-[10px] font-mono text-blue-400">→ 方案 #1</div>
          </div>

          {/* Creative / Community */}
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-center space-y-2">
            <div className="text-xs font-medium text-amber-400">创意 / 社区 / 内容</div>
            <div className="w-px h-3 bg-amber-500/30 mx-auto" />
            <div className="flex justify-center gap-1.5">
              <div className="w-5 h-5 rounded bg-amber-500" />
              <div className="w-5 h-5 rounded bg-stone-800 border border-stone-600" />
            </div>
            <div className="text-[10px] text-[var(--color-text-tertiary)]">
              琥珀 + Stone<br />温暖、有亲和力
            </div>
            <div className="text-[10px] font-mono text-amber-400">→ 方案 #2</div>
          </div>

          {/* Fintech / Health */}
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4 text-center space-y-2">
            <div className="text-xs font-medium text-emerald-400">金融 / 健康 / 增长</div>
            <div className="w-px h-3 bg-emerald-500/30 mx-auto" />
            <div className="flex justify-center gap-1.5">
              <div className="w-5 h-5 rounded bg-emerald-500" />
              <div className="w-5 h-5 rounded bg-neutral-800 border border-neutral-600" />
            </div>
            <div className="text-[10px] text-[var(--color-text-tertiary)]">
              翡翠绿 + Neutral<br />增长、积极
            </div>
            <div className="text-[10px] font-mono text-emerald-400">→ 方案 #3</div>
          </div>

          {/* Design / AI */}
          <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4 text-center space-y-2">
            <div className="text-xs font-medium text-violet-400">设计 / AI / 创作者</div>
            <div className="w-px h-3 bg-violet-500/30 mx-auto" />
            <div className="flex justify-center gap-1.5">
              <div className="w-5 h-5 rounded bg-violet-500" />
              <div className="w-5 h-5 rounded bg-zinc-800 border border-zinc-600" />
            </div>
            <div className="text-[10px] text-[var(--color-text-tertiary)]">
              紫色 + Zinc<br />创新、想象力
            </div>
            <div className="text-[10px] font-mono text-violet-400">→ 方案 #4</div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-5 text-center">
          <div className="inline-block bg-[var(--color-bg)] rounded-lg border border-[var(--color-border-subtle)] px-4 py-2.5">
            <div className="text-xs text-[var(--color-text-tertiary)]">
              不确定？<strong className="text-[var(--color-text-secondary)]">选蓝色 + Zinc</strong>——它从来不会出错。
            </div>
          </div>
        </div>
      </div>

      {/* ===== 4.10 终极检查清单 ===== */}
      <h2>4.10 上线前的配色检查清单</h2>

      <p>在你的配色方案上线之前，逐条检查：</p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
        <div className="space-y-3">
          {[
            "界面在纯灰度下层次是否清晰？（灰度优先测试）",
            "彩色面积是否控制在 10% 以内？（60-30-10 法则）",
            "是否只有一个强调色？语义色是否遵循行业标准？",
            "所有正文文字的对比度是否达到 4.5:1？",
            "是否避免了仅靠颜色传达信息？（颜色 + 图标/文字标签）",
            "深色和浅色主题是否使用了各自调整过的色值？",
            "在最差的显示条件下（低亮度、阳光直射）文字是否可读？",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded border border-[var(--color-border)] bg-[var(--color-bg)] shrink-0 flex items-center justify-center mt-0.5">
                <span className="text-[10px] font-mono text-[var(--color-text-tertiary)]">{i + 1}</span>
              </div>
              <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <KeyInsight>
        配色的第一条规则：<strong>少用颜色</strong>。90% 的优秀 UI 其实只有中性色 + 一个强调色。如果你发现自己在用第三种彩色，先停下来问：「这个颜色在传达什么信息？这个信息能不能用大小、字重或间距来表达？」颜色是你手上最锋利的刀——正因为锋利，每一次使用都应该有明确的理由。
      </KeyInsight>
    </>
  );
}
