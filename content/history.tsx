import ComparisonCard from "@/components/ComparisonCard";
import DesignPrinciple from "@/components/DesignPrinciple";
import KeyInsight from "@/components/KeyInsight";

export default function ChapterHistory() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第二章</p>
      <h1>设计思想简史</h1>

      <blockquote>
        "Good design is as little design as possible."
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Dieter Rams</span>
      </blockquote>

      <p>
        你可能在想：我是来学审美的，为什么要上历史课？
      </p>
      <p>
        原因很简单——你每天使用的 UI 里，每一个「理所当然」的决策，都有一个来历。
        扁平化图标？2013 年 iOS 7 的革命。8px 间距？1961 年瑞士人发明的网格系统。
        深色主题？程序员文化 + 显示技术的演变。圆角卡片？Material Design 对「纸张」隐喻的系统化。
      </p>
      <p>
        理解来历，你就知道哪些是经过百年考验的好原则，哪些只是一时的潮流。
        更重要的是，你能预判下一步——因为设计史有一条清晰的主线，而这条主线还在延伸。
      </p>

      {/* ── Visual Timeline ── */}
      <div className="my-10 px-2">
        <h4 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-5">
          百年审美演变
        </h4>
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-3 left-0 right-0 h-px bg-[var(--color-border-subtle)]" />
          <div className="flex justify-between items-start relative">
            {[
              { year: "1880s", label: "工艺美术", color: "var(--color-text-tertiary)" },
              { year: "1919", label: "包豪斯", color: "var(--color-text-tertiary)" },
              { year: "1950s", label: "瑞士风格", color: "var(--color-text-tertiary)" },
              { year: "1984", label: "像素时代", color: "var(--color-text-tertiary)" },
              { year: "2007", label: "拟物化", color: "var(--color-text-tertiary)" },
              { year: "2013", label: "扁平化", color: "var(--color-text-tertiary)" },
              { year: "2014", label: "Material", color: "var(--color-text-tertiary)" },
              { year: "Now", label: "克制主义", color: "var(--color-accent)" },
            ].map((era) => (
              <div key={era.year} className="flex flex-col items-center gap-1.5 min-w-0">
                <div
                  className="w-2.5 h-2.5 rounded-full border-2 bg-[var(--color-bg)]"
                  style={{ borderColor: era.color }}
                />
                <span className="text-[10px] font-mono font-bold" style={{ color: era.color }}>
                  {era.year}
                </span>
                <span className="text-[10px] text-[var(--color-text-tertiary)] text-center leading-tight hidden sm:block">
                  {era.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          2.1 工艺美术运动
         ══════════════════════════════════════════════════════════ */}
      <h2>2.1 「有用就应该美」——一切的起点</h2>

      <p>
        1880 年代的英国，工业革命正在批量生产丑陋的廉价商品。工厂造出来的椅子能坐，
        但丑得让人不想坐。William Morris 看不下去了，他说了一句话，至今仍是设计学科的基石：
      </p>
      <p>
        <strong>「有用的东西都应该是美的，美的东西都应该是有用的。」</strong>
      </p>
      <p>
        这在当时是激进的——因为在此之前，「装饰」和「功能」被认为是两回事。
        你造一个能用的东西，然后找个画师在上面贴花纹。功能归工程师，美归艺术家。
        Morris 说：不对，它们是同一件事。
      </p>

      <ComparisonCard
        title="Then vs Now: 功能与美的关系"
        badLabel="工业革命时代"
        goodLabel="Morris 之后"
        bad={
          <div className="space-y-3">
            {/* An over-decorated, dysfunctional button */}
            <div className="relative inline-block">
              <button className="px-6 py-3 text-sm bg-amber-900 text-amber-100 border-4 border-double border-amber-600 font-serif italic tracking-widest shadow-inner">
                <span className="opacity-50">~</span> Submitte Thy Forme <span className="opacity-50">~</span>
              </button>
            </div>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              装饰性边框、花体字、模糊的行动指示——好看吗？也许。能用吗？犹豫了就是不能。
            </p>
          </div>
        }
        goodNotes={["功能清晰 = 视觉清晰", "美来自结构本身，不是外加的装饰"]}
        badNotes={["装饰掩盖了功能", "用户分不清哪里能交互"]}
        good={
          <div className="space-y-3">
            <button className="px-5 py-2.5 text-sm bg-[var(--color-accent)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
              提交表单
            </button>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              没有多余装饰。形状、颜色、文字共同传达一个信息：这里可以点击。
            </p>
          </div>
        }
      />

      <p>
        这个故事的启示放到今天依然成立：当你纠结一个界面要不要加渐变、加阴影、加动画时，
        先问自己——<strong>这个「美」是在帮助用户理解功能，还是在干扰？</strong>
      </p>

      {/* ══════════════════════════════════════════════════════════
          2.2 包豪斯
         ══════════════════════════════════════════════════════════ */}
      <h2>2.2 包豪斯——你用的每一个组件库，都是它的后代</h2>

      <p>
        1919 年，Walter Gropius 在德国魏玛创办包豪斯学院，提出了一个在当时堪称疯狂的主张：
        <strong>艺术家、手工匠人和工程师应该坐在同一张桌子旁</strong>。
        这直接催生了「设计师」这个职业——既不是纯艺术家，也不是纯工程师，而是两者的结合。
      </p>
      <p>
        听起来是不是很耳熟？今天的全栈设计师、Design Engineer、会写代码的设计师——
        都是这个思想的当代版本。
      </p>
      <p>
        但包豪斯最深远的遗产不是「形式追随功能」这句口号（这句其实来自建筑师 Louis Sullivan，1896），
        而是<strong>模块化思维</strong>。Marcel Breuer 的钢管家具、Herbert Bayer 的通用字体——
        用标准化的零件组合出复杂的系统。
      </p>

      <KeyInsight label="历史连线">
        打开你的 shadcn/ui 组件库——Button、Card、Input、Dialog、Select...
        这种用标准化零件组合出复杂界面的思路，正是 100 年前包豪斯发明的。
        组件库就是数字时代的「标准化零件箱」。
      </KeyInsight>

      {/* Visual: Modular thinking demo */}
      <div className="my-8 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] p-6">
        <h4 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">
          包豪斯的模块化思维 → 现代组件库
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic shapes */}
          <div className="space-y-3">
            <p className="text-xs text-[var(--color-text-tertiary)] font-mono">基础形状</p>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="w-16 h-10 rounded-md border-2 border-[var(--color-text-tertiary)] opacity-40" />
              <div className="w-10 h-10 rounded-full border-2 border-[var(--color-text-tertiary)] opacity-40" />
              <div className="w-20 h-0.5 bg-[var(--color-text-tertiary)] opacity-40" />
              <div className="w-10 h-10 rounded-md border-2 border-[var(--color-text-tertiary)] opacity-40 flex items-center justify-center">
                <span className="text-xs text-[var(--color-text-tertiary)]">Aa</span>
              </div>
            </div>
          </div>
          {/* Composed UI */}
          <div className="space-y-3">
            <p className="text-xs text-[var(--color-text-tertiary)] font-mono">组合成界面</p>
            <div className="bg-[var(--color-bg)] rounded-lg border border-[var(--color-border-subtle)] p-3 space-y-2 max-w-[240px]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/20" />
                <div className="space-y-1 flex-1">
                  <div className="h-2.5 bg-[var(--color-text)] rounded opacity-60 w-3/4" />
                  <div className="h-2 bg-[var(--color-text-tertiary)] rounded opacity-30 w-1/2" />
                </div>
              </div>
              <div className="h-px bg-[var(--color-border-subtle)]" />
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded-md bg-[var(--color-accent)] text-[10px] text-white font-medium">
                  确认
                </div>
                <div className="px-3 py-1.5 rounded-md border border-[var(--color-border-subtle)] text-[10px] text-[var(--color-text-secondary)] font-medium">
                  取消
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4">
          矩形 + 圆形 + 线条 + 文字 → 头像卡片 + 分隔线 + 按钮组。
          同样的基础元素，无穷的组合可能。这就是包豪斯留给我们的思维方式。
        </p>
      </div>

      <DesignPrinciple number="—" title="Dieter Rams 的十条设计原则" author="Dieter Rams, 1976">
        <p>
          作为包豪斯精神最忠实的继承者，Braun 设计总监 Dieter Rams 在 1976 年提出的十条原则
          至今仍是设计审美的黄金标尺。其中与 UI 最相关的几条：
        </p>
        <ol className="text-sm space-y-1 mt-2">
          <li>1. 好设计是<strong>创新</strong>的</li>
          <li>2. 好设计使产品<strong>有用</strong></li>
          <li>3. 好设计是<strong>美的</strong></li>
          <li>4. 好设计使产品<strong>易于理解</strong></li>
          <li>5. 好设计是<strong>克制的</strong></li>
          <li>6. 好设计是<strong>诚实的</strong></li>
          <li>7. 好设计是<strong>持久的</strong></li>
          <li>8. 好设计<strong>关注每一个细节</strong></li>
          <li>9. 好设计是<strong>环保的</strong></li>
          <li>10. 好设计是<strong>尽可能少</strong>的设计</li>
        </ol>
      </DesignPrinciple>

      <ComparisonCard
        title="Rams 原则实战：「克制」到底长什么样？"
        badLabel="不克制的 Dashboard"
        goodLabel="克制的 Dashboard"
        bad={
          <div className="bg-white rounded-lg p-3 space-y-2 text-black">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                ANALYTICS PRO+
              </span>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded p-1.5 text-center">
                <div className="text-[10px] text-blue-600 font-bold">USERS</div>
                <div className="text-sm font-black text-blue-800">1,234</div>
                <div className="text-[8px] text-green-600 font-bold">+12.5%</div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded p-1.5 text-center">
                <div className="text-[10px] text-purple-600 font-bold">REVENUE</div>
                <div className="text-sm font-black text-purple-800">$5.6K</div>
                <div className="text-[8px] text-green-600 font-bold">+8.3%</div>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded p-1.5 text-center">
                <div className="text-[10px] text-pink-600 font-bold">ORDERS</div>
                <div className="text-sm font-black text-pink-800">89</div>
                <div className="text-[8px] text-red-600 font-bold">-2.1%</div>
              </div>
            </div>
          </div>
        }
        badNotes={["每个卡片不同颜色，视觉混乱", "闪烁的状态灯分散注意力", "渐变文字降低可读性"]}
        good={
          <div className="bg-white rounded-lg p-3 space-y-2 text-black">
            <span className="text-xs font-medium text-zinc-500">Overview</span>
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-0.5">
                <div className="text-[10px] text-zinc-400">Users</div>
                <div className="text-sm font-semibold text-zinc-900">1,234</div>
                <div className="text-[10px] text-emerald-600">+12.5%</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] text-zinc-400">Revenue</div>
                <div className="text-sm font-semibold text-zinc-900">$5.6K</div>
                <div className="text-[10px] text-emerald-600">+8.3%</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] text-zinc-400">Orders</div>
                <div className="text-sm font-semibold text-zinc-900">89</div>
                <div className="text-[10px] text-red-500">-2.1%</div>
              </div>
            </div>
          </div>
        }
        goodNotes={["统一的颜色层级，数据才是主角", "只有关键变化用颜色强调（红/绿）", "留白让信息自己说话"]}
      />

      {/* ══════════════════════════════════════════════════════════
          2.3 瑞士风格
         ══════════════════════════════════════════════════════════ */}
      <h2>2.3 瑞士风格——你写的每一行 CSS Grid，都来自这里</h2>

      <p>
        1950 年代的瑞士，一群平面设计师做了一件事，影响延续至今：
        他们用<strong>数学网格</strong>来组织页面上的一切信息。
        Josef Muller-Brockmann 在 1961 年的经典著作《Grid Systems in Graphic Design》里
        把这套方法彻底系统化了。
      </p>
      <p>
        你猜怎么着？你今天在 CSS 里写的 <code>display: grid</code>，
        和 Muller-Brockmann 六十多年前在纸上画的，是完全同一个思想：
        <strong>信息不是随意摆放的，它需要一个数学骨架。</strong>
      </p>

      <ComparisonCard
        title="有网格 vs 没网格"
        badLabel="没有网格约束"
        goodLabel="网格系统"
        bad={
          <div className="bg-white rounded-lg p-4 text-black min-h-[140px] relative">
            <div className="absolute top-3 left-5 text-sm font-bold">Welcome</div>
            <div className="absolute top-10 left-8 text-[10px] text-zinc-500 max-w-[100px]">
              Here is some text that just floats around
            </div>
            <div className="absolute top-6 right-3">
              <div className="w-8 h-8 rounded bg-blue-100" />
            </div>
            <div className="absolute bottom-6 left-12">
              <div className="px-2 py-1 bg-blue-500 text-white text-[10px] rounded">Button</div>
            </div>
            <div className="absolute bottom-3 right-6 text-[10px] text-zinc-400">
              some footer info
            </div>
          </div>
        }
        badNotes={["元素位置靠「感觉」", "间距不一致，对齐混乱", "缩放时布局崩溃"]}
        good={
          <div className="bg-white rounded-lg p-4 text-black min-h-[140px]">
            {/* Grid overlay hint */}
            <div className="grid grid-cols-4 gap-2 h-full">
              <div className="col-span-3 space-y-2">
                <div className="text-sm font-bold text-zinc-900">Welcome</div>
                <div className="text-[10px] text-zinc-500 leading-relaxed">
                  Text aligned to the grid, consistent and predictable at any screen size.
                </div>
                <div className="pt-1">
                  <div className="inline-block px-2 py-1 bg-blue-500 text-white text-[10px] rounded">
                    Button
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="w-full aspect-square rounded bg-blue-100" />
                <div className="text-[10px] text-zinc-400 text-right">footer</div>
              </div>
            </div>
          </div>
        }
        goodNotes={["4 列网格，所有元素对齐", "间距成比例：8px 基线", "任何屏幕尺寸都稳定"]}
      />

      <p>
        同时期诞生的 Helvetica（1957, Max Miedinger）成为有史以来使用最广泛的字体。
        它的设计哲学——<strong>中性、清晰、不带感情色彩</strong>——直接影响了后来所有
        「现代感」无衬线字体的方向：Apple 的 San Francisco、Google 的 Roboto、
        Vercel 的 Geist。它们都是 Helvetica 的精神后代。
      </p>

      <KeyInsight label="历史连线">
        Josef Muller-Brockmann (1961) → Bootstrap 12 列 (2011) → CSS Grid (2017) → Tailwind gap/space (2019)。
        同一个思想，不同的载体。工具在变，原则没变。
      </KeyInsight>

      {/* ══════════════════════════════════════════════════════════
          2.4 从拟物到扁平
         ══════════════════════════════════════════════════════════ */}
      <h2>2.4 从拟物到扁平——设计审美是怎么大转弯的</h2>

      <p>
        这是设计史上最戏剧性的一章。我们用四个按钮来讲这个故事——
        因为按钮是 UI 里最基础的元素，它的变化浓缩了整个时代的审美转向。
      </p>

      {/* ── Four Eras of Button Design ── */}
      <div className="my-8 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] p-6">
        <h4 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-6">
          一颗按钮的四个时代
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Skeuomorphism */}
          <div className="space-y-3 text-center">
            <div className="text-[10px] font-mono text-[var(--color-text-tertiary)]">2007-2012</div>
            <div className="flex justify-center">
              <button
                className="px-5 py-2.5 rounded-xl text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(180deg, #6cb3f5 0%, #1a73e8 50%, #0d5bbd 100%)",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.3), inset 0 -2px 3px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(0,0,0,0.2)",
                  textShadow: "0 -1px 1px rgba(0,0,0,0.3)",
                }}
              >
                Submit
              </button>
            </div>
            <div className="text-[10px] text-[var(--color-text-tertiary)]">
              <strong className="text-[var(--color-text-secondary)]">拟物化</strong>
              <br />
              渐变 + 内阴影 + 高光
              <br />
              模拟真实按钮的立体感
            </div>
          </div>

          {/* Flat / iOS 7 */}
          <div className="space-y-3 text-center">
            <div className="text-[10px] font-mono text-[var(--color-text-tertiary)]">2013</div>
            <div className="flex justify-center">
              <button
                className="px-5 py-2.5 rounded-lg text-sm font-light tracking-wide"
                style={{
                  background: "#007AFF",
                  color: "white",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                Submit
              </button>
            </div>
            <div className="text-[10px] text-[var(--color-text-tertiary)]">
              <strong className="text-[var(--color-text-secondary)]">扁平化</strong>
              <br />
              纯色 + 无阴影 + 细字体
              <br />
              一切装饰归零
            </div>
          </div>

          {/* Material Design */}
          <div className="space-y-3 text-center">
            <div className="text-[10px] font-mono text-[var(--color-text-tertiary)]">2014</div>
            <div className="flex justify-center">
              <button
                className="px-5 py-2.5 rounded text-sm font-medium uppercase tracking-wide"
                style={{
                  background: "#1a73e8",
                  color: "white",
                  border: "none",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.12)",
                  letterSpacing: "0.05em",
                }}
              >
                SUBMIT
              </button>
            </div>
            <div className="text-[10px] text-[var(--color-text-tertiary)]">
              <strong className="text-[var(--color-text-secondary)]">Material</strong>
              <br />
              纯色 + elevation 阴影
              <br />
              「纸张」有厚度，悬浮在表面上
            </div>
          </div>

          {/* Current / Linear-style */}
          <div className="space-y-3 text-center">
            <div className="text-[10px] font-mono text-[var(--color-accent)]">Now</div>
            <div className="flex justify-center">
              <button
                className="px-5 py-2.5 rounded-md text-sm font-medium"
                style={{
                  background: "linear-gradient(180deg, #fafafa 0%, #f0f0f0 100%)",
                  color: "#18181b",
                  border: "1px solid rgba(0,0,0,0.1)",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                }}
              >
                Submit
              </button>
            </div>
            <div className="text-[10px] text-[var(--color-text-tertiary)]">
              <strong className="text-[var(--color-text-secondary)]">克制主义</strong>
              <br />
              微妙渐变 + 极细边框
              <br />
              存在感降到最低
            </div>
          </div>
        </div>
      </div>

      <p>
        <strong>1984：像素约束下的创造力</strong>。Susan Kare 为第一代 Macintosh 设计的图标
        ——笑脸、垃圾桶、手表——是数字时代的第一批设计符号。在 32x32 像素的极度约束下，
        她证明了约束不是创造力的敌人，而是催化剂。
        今天 Lucide 图标库里的每个 24x24 图标，都是这个精神的延续。
      </p>

      <p>
        <strong>2007-2012：拟物化的巅峰</strong>。第一代 iPhone 刚出来时，没人知道怎么用触屏。
        苹果的策略很聪明：让数字界面长得像真实世界——计算器看起来像实体计算器，
        备忘录看起来像黄色便签纸，书架上的书会投射阴影。这些隐喻大幅降低了学习成本。
      </p>

      <p>
        <strong>2013：那场著名的大转弯</strong>。WWDC 2013 年 6 月，
        苹果揭开 iOS 7 的面纱。全场设计师的反应分成两半：一半说「这太丑了」，
        一半说「这就是未来」。回头来看，后者是对的。
      </p>
      <p>
        为什么扁平化必须发生？不是因为设计师无聊了，而是因为用户变了。
        到 2013 年，大多数人已经用了五六年智能手机，<strong>不再需要拟物化隐喻来理解触屏</strong>。
        那些投射阴影和皮革纹理，从「学习辅助」变成了「视觉噪音」。
        去掉它们，让内容本身成为界面。
      </p>

      <p>
        <strong>2014：Google 的系统化实验</strong>。Material Design 做了一件了不起的事：
        它把「纸张和墨水」的物理隐喻变成了一套<strong>完整的数学系统</strong>。
        elevation 有 5 个层级，每个层级有精确的阴影参数；颜色有主色、辅色、表面色的层级关系；
        间距是 8 的倍数。Material 的贡献不在于视觉风格本身，
        而在于证明了<strong>设计可以被系统化、参数化、工程化</strong>。
      </p>

      <p>
        <strong>当下：克制主义</strong>。看看 Linear、Vercel、Stripe、Raycast 的界面——
        中性色为主体，颜色只在需要引导注意力时才出现。
        这不是「无聊」或「没有设计」，恰恰相反，这是把全部设计能量集中在信息传达上。
        Rams 的「尽可能少的设计」，在一百年后成了硅谷最前沿的审美共识。
      </p>

      {/* ── Card style evolution ── */}
      <div className="my-8 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] p-6">
        <h4 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-6">
          一张卡片的时代变迁
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Skeuomorphic card */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-[var(--color-text-tertiary)]">拟物化时代</div>
            <div
              className="rounded-xl p-4 text-black"
              style={{
                background: "linear-gradient(145deg, #f5f0e8 0%, #e8dcc8 100%)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.6)",
                border: "1px solid rgba(0,0,0,0.15)",
              }}
            >
              <div className="text-xs font-bold text-amber-900 mb-1" style={{ textShadow: "0 1px 0 rgba(255,255,255,0.5)" }}>
                My Note
              </div>
              <div className="text-[10px] text-amber-800/70 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
                This card looks like a piece of paper sitting on a desk. Leather texture, paper grain, drop shadow...
              </div>
            </div>
          </div>

          {/* Material card */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-[var(--color-text-tertiary)]">Material 时代</div>
            <div
              className="rounded-lg p-4 text-black bg-white"
              style={{
                boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
              }}
            >
              <div className="text-xs font-medium text-zinc-900 mb-1">My Note</div>
              <div className="text-[10px] text-zinc-600 leading-relaxed">
                Clean white surface with elevation. The shadow tells you this card &quot;floats&quot; above the background.
              </div>
            </div>
          </div>

          {/* Modern / Linear-style card */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-[var(--color-accent)]">当代克制主义</div>
            <div
              className="rounded-lg p-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.03)",
              }}
            >
              <div className="text-xs font-medium text-[var(--color-text)] mb-1">My Note</div>
              <div className="text-[10px] text-[var(--color-text-tertiary)] leading-relaxed">
                Almost invisible container. A whisper of a border. The content IS the design. Nothing else competes for attention.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          2.5 Design System 的崛起
         ══════════════════════════════════════════════════════════ */}
      <h2>2.5 Design System——审美的民主化</h2>

      <p>
        Design System 不是一个突然出现的概念，它是上面所有故事的合流：
        包豪斯的模块化 + 瑞士风格的网格 + 数字时代的工程化。
        但它的演变过程本身，也是一段审美变迁的微缩史。
      </p>

      {/* Design system evolution */}
      <div className="my-8 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] p-6">
        <h4 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-6">
          Design System 审美演变
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Bootstrap era */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="text-[10px] font-mono text-[var(--color-text-tertiary)]">Bootstrap 2011</div>
            </div>
            <div className="bg-white rounded-lg p-3 space-y-2">
              <button
                className="w-full py-2 rounded-md text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(180deg, #0088cc 0%, #0055cc 100%)",
                  border: "1px solid rgba(0,0,0,0.15)",
                  borderBottom: "3px solid rgba(0,0,0,0.2)",
                  textShadow: "0 -1px 0 rgba(0,0,0,0.25)",
                }}
              >
                Primary Action
              </button>
              <div className="flex gap-1.5">
                <button className="flex-1 py-1.5 rounded-md text-[10px] font-bold text-white"
                  style={{
                    background: "linear-gradient(180deg, #5bb75b 0%, #51a351 100%)",
                    border: "1px solid rgba(0,0,0,0.15)",
                  }}>Success</button>
                <button className="flex-1 py-1.5 rounded-md text-[10px] font-bold text-white"
                  style={{
                    background: "linear-gradient(180deg, #faa732 0%, #f89406 100%)",
                    border: "1px solid rgba(0,0,0,0.15)",
                  }}>Warning</button>
                <button className="flex-1 py-1.5 rounded-md text-[10px] font-bold text-white"
                  style={{
                    background: "linear-gradient(180deg, #da4f49 0%, #bd362f 100%)",
                    border: "1px solid rgba(0,0,0,0.15)",
                  }}>Danger</button>
              </div>
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)]">
              大量渐变和颜色区分。审美关键词：<strong>鲜明、丰富、一目了然</strong>。
            </p>
          </div>

          {/* Ant Design era */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-[var(--color-text-tertiary)]">Ant Design 2015</div>
            <div className="bg-white rounded-lg p-3 space-y-2">
              <button className="w-full py-2 rounded-md text-sm font-medium text-white"
                style={{ background: "#1677ff" }}>
                Primary Action
              </button>
              <div className="flex gap-1.5">
                <button className="flex-1 py-1.5 rounded-md text-[10px] font-medium text-white"
                  style={{ background: "#52c41a" }}>Success</button>
                <button className="flex-1 py-1.5 rounded-md text-[10px] font-medium text-white"
                  style={{ background: "#faad14", color: "#000" }}>Warning</button>
                <button className="flex-1 py-1.5 rounded-md text-[10px] font-medium text-white"
                  style={{ background: "#ff4d4f" }}>Danger</button>
              </div>
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)]">
              去掉渐变，纯色扁平。审美关键词：<strong>规范、标准化、企业级</strong>。
            </p>
          </div>

          {/* shadcn/ui era */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-[var(--color-accent)]">shadcn/ui 2023</div>
            <div className="bg-white rounded-lg p-3 space-y-2">
              <button className="w-full py-2 rounded-md text-sm font-medium text-white"
                style={{ background: "#18181b" }}>
                Primary Action
              </button>
              <div className="flex gap-1.5">
                <button className="flex-1 py-1.5 rounded-md text-[10px] font-medium"
                  style={{ background: "transparent", border: "1px solid #e4e4e7", color: "#18181b" }}>
                  Secondary
                </button>
                <button className="flex-1 py-1.5 rounded-md text-[10px] font-medium"
                  style={{ background: "transparent", border: "1px solid #e4e4e7", color: "#18181b" }}>
                  Outline
                </button>
                <button className="flex-1 py-1.5 rounded-md text-[10px] font-medium text-white"
                  style={{ background: "#dc2626" }}>
                  Danger
                </button>
              </div>
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)]">
              几乎只有黑白。颜色只在「危险」时出现。审美关键词：<strong>克制、中性、可定制</strong>。
            </p>
          </div>
        </div>
      </div>

      <p>
        看到趋势了吗？从「尽可能多的视觉区分」到「尽可能少的视觉干扰」。
        每一代 Design System 都比上一代更克制。不是因为设计师变懒了，
        而是因为行业对「好设计」的理解在不断深化。
      </p>

      <p>
        在 AI 时代，Design System 的角色发生了一个有趣的转变：从「约束」变成了<strong>「审美预设」</strong>。
        当你告诉 Cursor「用 shadcn/ui」时，你实际上是在说：
        <strong>「请使用这套源自包豪斯 → 瑞士风格 → 苹果设计 → 开源社区的百年审美积累。」</strong>
      </p>
      <p>
        你不需要自己从零推导出「按钮应该圆角 6px、间距 8px 倍数、中性色为主」这些决策——
        一百年的设计史已经替你验证过了，它们被编码进了组件库的每一行 CSS 里。
      </p>

      {/* ── Final Insight ── */}
      <KeyInsight>
        设计史的核心脉络是：<strong>装饰 → 功能 → 系统 → 克制</strong>。
        当代最好的 UI 设计不是「没有设计」，而是将所有设计能量集中在信息传达上，
        去掉一切不服务于功能的视觉元素。
        <br /><br />
        下次你看到一个界面，试着判断它处于这条线的哪个位置：
        它是在用装饰吸引注意力（装饰阶段）？用功能驱动形式（功能阶段）？
        有一套完整的设计规范（系统阶段）？还是连规范本身都克制到了极致（克制阶段）？
        <br /><br />
        能看出这条线，你就能区分「有意图的简约」和「偷懒的粗糙」——这是审美判断力的起点。
      </KeyInsight>
    </>
  );
}
