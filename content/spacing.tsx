import ComparisonCard from "@/components/ComparisonCard";
import KeyInsight from "@/components/KeyInsight";
import SpacingDemo from "@/components/SpacingDemo";

export default function ChapterSpacing() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第六章</p>
      <h1>间距与布局 — 不可见的设计</h1>

      <blockquote>
        &ldquo;White space is to be regarded as an active element, not a passive background.&rdquo;
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Jan Tschichold, <em>Die neue Typographie</em>, 1928</span>
      </blockquote>

      <p>
        间距是设计中最强大却最不可见的工具。你不会「看到」间距本身，但你会感受到它——就像你不会注意到空气，直到空气不够或太冷。
      </p>
      <p>
        想想你走进一家精品店和一家杂货铺的区别。精品店里每件商品之间都有充足的空间，你的目光自然地从一件滑向下一件；杂货铺里货架塞得满满当当，你的眼睛在货架之间弹来弹去，什么都看到了又什么都没记住。<strong>间距就是界面里的「店铺陈列」</strong>——它决定了用户是从容浏览还是手忙脚乱。
      </p>
      <p>
        大多数 AI 生成的界面最容易诊断的问题就是间距——要么太挤（所有元素紧密排列），要么太均匀（所有间距相同，缺乏分组）。这一章，我们要让你<strong>看见</strong>那些不可见的空白，并学会精确控制它们。
      </p>

      {/* ===== 6.1 间距的认知科学 ===== */}
      <h2>6.1 接近性——大脑的自动分组器</h2>

      <p>
        在超市买东西时，你怎么知道哪些商品是一组的？不需要看标签——摆在一起的就是一组。洗发水和护发素紧挨着放，和三个货架外的牙膏显然是不同品类。你的大脑在 0.1 秒内完成了这个判断，完全不需要思考。
      </p>
      <p>
        格式塔心理学把这叫做<strong>接近性原则（Proximity Principle）</strong>。Stephen Palmer（1992）的实验量化了这个直觉：当两组元素的组间距离是组内距离的 <strong>2 倍以上</strong>时，人们会可靠地将它们感知为两组。比例越大，分组感越强。
      </p>
      <p>
        来，亲眼看看不同的间距比例如何影响分组感知：
      </p>

      {/* Proximity quantified demo: 3 rows with different ratios */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-5">视觉演示：组间距 vs 组内距的比例如何影响分组</p>
        <div className="space-y-6">
          {/* Ratio 1:1 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-red-400 font-semibold">比例 1:1</span>
              <span className="text-[10px] text-red-400">组间距 = 组内距</span>
            </div>
            <div className="flex items-center gap-0 rounded-lg bg-[var(--color-bg)] border border-red-500/20 px-5 py-4">
              {/* Group A */}
              <div className="w-8 h-8 rounded bg-blue-500/60" />
              <div style={{ width: "12px" }} />
              <div className="w-8 h-8 rounded bg-blue-500/60" />
              <div style={{ width: "12px" }} />
              <div className="w-8 h-8 rounded bg-blue-500/60" />
              {/* Gap between groups - same as within */}
              <div style={{ width: "12px" }} />
              {/* Group B */}
              <div className="w-8 h-8 rounded bg-emerald-500/60" />
              <div style={{ width: "12px" }} />
              <div className="w-8 h-8 rounded bg-emerald-500/60" />
              <div style={{ width: "12px" }} />
              <div className="w-8 h-8 rounded bg-emerald-500/60" />
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)] mt-1.5 italic">所有间距相同——大脑看到一排 6 个方块，分不清两组。</p>
          </div>

          {/* Ratio 2:1 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-amber-400 font-semibold">比例 2:1</span>
              <span className="text-[10px] text-amber-400">组间距 = 组内距 x 2</span>
            </div>
            <div className="flex items-center gap-0 rounded-lg bg-[var(--color-bg)] border border-amber-500/20 px-5 py-4">
              <div className="w-8 h-8 rounded bg-blue-500/60" />
              <div style={{ width: "12px" }} />
              <div className="w-8 h-8 rounded bg-blue-500/60" />
              <div style={{ width: "12px" }} />
              <div className="w-8 h-8 rounded bg-blue-500/60" />
              <div style={{ width: "24px" }} />
              <div className="w-8 h-8 rounded bg-emerald-500/60" />
              <div style={{ width: "12px" }} />
              <div className="w-8 h-8 rounded bg-emerald-500/60" />
              <div style={{ width: "12px" }} />
              <div className="w-8 h-8 rounded bg-emerald-500/60" />
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)] mt-1.5 italic">开始感觉到分组了——中间的空白在「说话」：这是两组不同的东西。</p>
          </div>

          {/* Ratio 3:1 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-green-400 font-semibold">比例 3:1</span>
              <span className="text-[10px] text-green-400">组间距 = 组内距 x 3</span>
            </div>
            <div className="flex items-center gap-0 rounded-lg bg-[var(--color-bg)] border border-green-500/20 px-5 py-4">
              <div className="w-8 h-8 rounded bg-blue-500/60" />
              <div style={{ width: "12px" }} />
              <div className="w-8 h-8 rounded bg-blue-500/60" />
              <div style={{ width: "12px" }} />
              <div className="w-8 h-8 rounded bg-blue-500/60" />
              <div style={{ width: "36px" }} />
              <div className="w-8 h-8 rounded bg-emerald-500/60" />
              <div style={{ width: "12px" }} />
              <div className="w-8 h-8 rounded bg-emerald-500/60" />
              <div style={{ width: "12px" }} />
              <div className="w-8 h-8 rounded bg-emerald-500/60" />
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)] mt-1.5 italic">毫无疑问——这是两组。3:1 的比例让分组感知完全清晰。</p>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-5 italic">
          注意：这三行用的是完全相同的色块。唯一的变量是中间的空白。间距本身就是信息——不需要边框、颜色、分隔线，光靠空白就能告诉大脑「这是两组」。
        </p>
      </div>

      <p>
        这给了我们一条实用的设计参数：<strong>不相关元素之间的间距应至少是相关元素间距的 2 倍</strong>。这不是审美建议——这是认知科学的硬指标。
      </p>

      {/* ===== 6.2 Padding vs Margin ===== */}
      <h2>6.2 Padding vs Margin——归属与分离</h2>

      <p>
        CSS 给了我们两种间距工具：<code className="text-xs bg-[var(--color-bg-tertiary)] px-1.5 py-0.5 rounded">padding</code> 和 <code className="text-xs bg-[var(--color-bg-tertiary)] px-1.5 py-0.5 rounded">margin</code>。很多人把它们当作「内间距」和「外间距」来死记——但这没有抓住本质。
      </p>
      <p>
        换个思路：想象你住在一栋公寓里。<strong>Padding 是你家客厅里沙发到墙壁的距离</strong>——它定义了「家」的舒适度，它说「这些东西属于同一个空间」。<strong>Margin 是你家门和邻居家门之间走廊的宽度</strong>——它定义了「两个家庭」的边界，它说「这是两个独立的单元」。
      </p>
      <p>
        一个词总结：Padding = <strong>归属</strong>，Margin = <strong>分离</strong>。来，亲眼看看：
      </p>

      {/* Padding vs Margin visual demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-5">视觉演示：Padding（归属）vs Margin（分离）</p>
        <div className="flex justify-center">
          <div className="space-y-0">
            {/* Card 1 with visible padding and margin */}
            <div className="relative">
              {/* Margin area - red tint */}
              <div className="bg-red-500/10 border border-red-500/20 border-dashed rounded-xl p-4">
                {/* Margin label */}
                <div className="absolute -top-0.5 left-4 -translate-y-full">
                  <span className="text-[10px] font-mono text-red-400 bg-[var(--color-bg-secondary)] px-1.5 py-0.5 rounded">margin: 16px &mdash; 分离</span>
                </div>
                {/* Card with padding area - blue tint */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg relative">
                  {/* Padding label */}
                  <div className="absolute top-1.5 right-2">
                    <span className="text-[10px] font-mono text-blue-400">padding: 24px &mdash; 归属</span>
                  </div>
                  <div className="p-6">
                    <div className="bg-[var(--color-bg)] rounded-lg border border-[var(--color-border-subtle)] p-4">
                      <div className="text-sm font-semibold text-[var(--color-text)] mb-1">用户资料卡</div>
                      <div className="text-xs text-[var(--color-text-tertiary)]">这些内容「属于」这张卡片</div>
                      <div className="text-xs text-[var(--color-text-tertiary)] mt-1">padding 把内容包裹在卡片内部</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative">
              <div className="bg-red-500/10 border border-red-500/20 border-dashed rounded-xl p-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="p-6">
                    <div className="bg-[var(--color-bg)] rounded-lg border border-[var(--color-border-subtle)] p-4">
                      <div className="text-sm font-semibold text-[var(--color-text)] mb-1">订单信息卡</div>
                      <div className="text-xs text-[var(--color-text-tertiary)]">这是另一个独立单元</div>
                      <div className="text-xs text-[var(--color-text-tertiary)] mt-1">margin 让两张卡片保持距离</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 mt-5 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-500/20 border border-blue-500/30" />
            <span className="text-xs text-[var(--color-text-tertiary)]">Padding（蓝色）= 内容归属于容器</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500/15 border border-red-500/20 border-dashed" />
            <span className="text-xs text-[var(--color-text-tertiary)]">Margin（红色）= 容器之间的分离</span>
          </div>
        </div>
      </div>

      <p>
        实用规则：一个卡片的 <code className="text-xs bg-[var(--color-bg-tertiary)] px-1.5 py-0.5 rounded">padding: 24px</code> 说的是「卡片内容属于卡片」；卡片的 <code className="text-xs bg-[var(--color-bg-tertiary)] px-1.5 py-0.5 rounded">margin-bottom: 16px</code> 说的是「这张卡片和下一张卡片是不同的单元」。一旦你建立了「归属 vs 分离」的心智模型，padding 和 margin 的选择就变成了直觉而非死记。
      </p>

      <KeyInsight label="实用技巧">
        下次纠结用 padding 还是 margin 时，问自己一个问题：<strong>「这个空白是在说归属还是分离？」</strong>元素和它所属容器之间的距离 = padding（归属）。容器和另一个容器之间的距离 = margin（分离）。这个心智模型比「内间距/外间距」的死记硬背有用得多。
      </KeyInsight>

      {/* ===== 6.3 间距系统 ===== */}
      <h2>6.3 8px 间距系统——间距也有「字母表」</h2>

      <p>
        想象一下，如果音乐家演奏时音高可以是任意数值——不是 A、B、C 这些固定音符，而是无限连续的频率。结果会怎样？混乱。你没法和弦，没法合奏，每次演出都不一样。
      </p>
      <p>
        间距系统做的是同样的事：<strong>把无限的像素值收敛成有限的「音符」</strong>。<strong>4px 基准网格</strong>是现代 UI 间距系统的基础——所有间距值都是 4 的倍数：4、8、12、16、20、24、32、40、48、64。这不是随意选择——4px 足够小以提供精细控制，又能保证所有元素在视觉上对齐。
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

      <p>
        光看抽象的色条还不够直观——来看看每个间距值在真实 UI 中<strong>具体用在哪里</strong>：
      </p>

      {/* Real UI mockup showing WHERE each spacing value is used */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-5">间距地图：一个真实卡片中的间距标注</p>
        <div className="flex justify-center">
          <div className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-6 max-w-sm w-full relative">
            {/* Padding annotation */}
            <div className="absolute -top-0.5 -left-0.5 -translate-y-full">
              <span className="text-[10px] font-mono text-blue-400 bg-[var(--color-bg-secondary)] px-1.5 py-0.5 rounded">padding: 24px</span>
            </div>

            {/* Header row: icon + text */}
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold shrink-0">P</div>
              {/* 4px gap annotation */}
              <div className="relative mx-0">
                <div className="w-2 h-4 border-l border-r border-dashed border-amber-400/60" />
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-[9px] font-mono text-amber-400">4px</span>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--color-text)]">项目名称</div>
                <div className="text-xs text-[var(--color-text-tertiary)]">上次更新 2 小时前</div>
              </div>
            </div>

            {/* 8px gap annotation between items */}
            <div className="relative h-2 mb-0">
              <div className="absolute left-0 right-0 top-0 bottom-0 border-t border-b border-dashed border-green-400/60" />
              <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 translate-x-full">
                <span className="text-[9px] font-mono text-green-400 ml-1">8px 列表项间距</span>
              </div>
            </div>

            {/* List items with 8px gaps */}
            <div className="space-y-2 mb-4 mt-2">
              <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                设计稿已完成
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                前端开发中
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                测试待开始
              </div>
            </div>

            {/* 16px section gap annotation */}
            <div className="relative h-4 mb-0">
              <div className="absolute left-0 right-0 top-0 bottom-0 border-t border-b border-dashed border-purple-400/60" />
              <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 translate-x-full">
                <span className="text-[9px] font-mono text-purple-400 ml-1">16px 区块间距</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 mt-4">
              <div className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-xs font-medium">查看详情</div>
              <div className="px-3 py-1.5 rounded-md border border-[var(--color-border)] text-[var(--color-text-secondary)] text-xs">归档</div>
            </div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-[10px] text-[var(--color-text-tertiary)]"><strong className="font-mono">4px</strong> = 图标与文字之间</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-[10px] text-[var(--color-text-tertiary)]"><strong className="font-mono">8px</strong> = 列表项之间</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-[10px] text-[var(--color-text-tertiary)]"><strong className="font-mono">16px</strong> = 内容区块之间</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-[10px] text-[var(--color-text-tertiary)]"><strong className="font-mono">24px</strong> = 卡片内边距（padding）</span>
          </div>
        </div>
      </div>

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

      {/* ===== 6.4 网格系统 ===== */}
      <h2>6.4 网格系统——看不见的脚手架</h2>

      <p>
        你有没有注意到，城市里的街道要么是整齐的网格（纽约曼哈顿），要么是自然生长的迷宫（北京胡同）？网格街道让你永远不会迷路——「往北走 3 个街区，往东走 2 个街区」。UI 中的网格系统做的是同样的事：<strong>给所有元素一个共同的坐标系</strong>。
      </p>
      <p>
        12 列网格之所以成为行业标准，是因为 12 的因数最多：可以等分为 1、2、3、4、6、12 列。这意味着你可以灵活地创建各种布局组合而不需要任何不整除的计算。来看看它是怎么工作的：
      </p>

      {/* 12-column grid demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-5">视觉演示：12 列网格的灵活性</p>

        {/* The 12 columns */}
        <div className="mb-5">
          <p className="text-xs text-[var(--color-text-tertiary)] mb-2">12 列基础网格</p>
          <div className="grid grid-cols-12 gap-1.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-8 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <span className="text-[9px] font-mono text-blue-400">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2 columns (6+6) */}
        <div className="mb-3">
          <p className="text-xs text-[var(--color-text-tertiary)] mb-2">2 等分（6 + 6）— 对比布局、双栏文章</p>
          <div className="grid grid-cols-12 gap-1.5">
            <div className="col-span-6 h-10 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <span className="text-[10px] font-mono text-emerald-400">6 col</span>
            </div>
            <div className="col-span-6 h-10 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <span className="text-[10px] font-mono text-emerald-400">6 col</span>
            </div>
          </div>
        </div>

        {/* 3 columns (4+4+4) */}
        <div className="mb-3">
          <p className="text-xs text-[var(--color-text-tertiary)] mb-2">3 等分（4 + 4 + 4）— 卡片网格、功能展示</p>
          <div className="grid grid-cols-12 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="col-span-4 h-10 rounded bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                <span className="text-[10px] font-mono text-amber-400">4 col</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 columns (3+3+3+3) */}
        <div className="mb-3">
          <p className="text-xs text-[var(--color-text-tertiary)] mb-2">4 等分（3 + 3 + 3 + 3）— 数据面板、统计卡片</p>
          <div className="grid grid-cols-12 gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="col-span-3 h-10 rounded bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                <span className="text-[10px] font-mono text-violet-400">3 col</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar layout (3+9) */}
        <div className="mb-3">
          <p className="text-xs text-[var(--color-text-tertiary)] mb-2">侧边栏布局（3 + 9）— Dashboard、文档站</p>
          <div className="grid grid-cols-12 gap-1.5">
            <div className="col-span-3 h-10 rounded bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
              <span className="text-[10px] font-mono text-rose-400">Sidebar</span>
            </div>
            <div className="col-span-9 h-10 rounded bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
              <span className="text-[10px] font-mono text-rose-400">Main Content</span>
            </div>
          </div>
        </div>

        {/* Asymmetric layout (8+4) */}
        <div>
          <p className="text-xs text-[var(--color-text-tertiary)] mb-2">非对称布局（8 + 4）— 博客 + 侧边栏</p>
          <div className="grid grid-cols-12 gap-1.5">
            <div className="col-span-8 h-10 rounded bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
              <span className="text-[10px] font-mono text-cyan-400">Article</span>
            </div>
            <div className="col-span-4 h-10 rounded bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
              <span className="text-[10px] font-mono text-cyan-400">Aside</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-[var(--color-text-tertiary)] mt-5 italic">
          Muller-Brockmann 在 1961 年用印刷网格解决的问题，和今天 CSS Grid 解决的问题完全相同：如何在有限空间内系统地组织信息，使其既灵活又一致。12 列 = 一套网格覆盖所有布局需求。
        </p>
      </div>

      {/* ===== 6.5 节奏感 ===== */}
      <h2>6.5 间距的节奏——一致性比具体数值更重要</h2>

      <p>
        听一个鼓手演奏。如果每一拍之间的间隔忽大忽小——哪怕平均节奏是对的——你会觉得这个人不会打鼓。但如果每一拍的间隔完全一致，哪怕节奏偏快或偏慢，你会觉得「这个人有范儿」。
      </p>
      <p>
        UI 间距的「节奏感」也是一样：<strong>一致的间距 &gt; 「正确」但不一致的间距</strong>。来看看两组完全相同的卡片，唯一的区别是间距是否一致：
      </p>

      {/* Rhythm demo: consistent vs inconsistent */}
      <ComparisonCard
        title="间距节奏"
        bad={
          <div className="space-y-0">
            {[
              { gap: "10px", label: "项目 Alpha" },
              { gap: "15px", label: "项目 Beta" },
              { gap: "20px", label: "项目 Gamma" },
              { gap: "12px", label: "项目 Delta" },
            ].map((item, i) => (
              <div key={i}>
                <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-3">
                  <div className="text-xs font-medium text-[var(--color-text)]">{item.label}</div>
                  <div className="text-[10px] text-[var(--color-text-tertiary)] mt-0.5">3 个任务进行中</div>
                </div>
                {i < 3 && (
                  <div style={{ height: item.gap }} className="relative">
                    <div className="absolute right-0 top-0 bottom-0 flex items-center">
                      <span className="text-[9px] font-mono text-red-400/70">{item.gap}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        }
        good={
          <div className="space-y-0">
            {["项目 Alpha", "项目 Beta", "项目 Gamma", "项目 Delta"].map((label, i) => (
              <div key={i}>
                <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-3">
                  <div className="text-xs font-medium text-[var(--color-text)]">{label}</div>
                  <div className="text-[10px] text-[var(--color-text-tertiary)] mt-0.5">3 个任务进行中</div>
                </div>
                {i < 3 && (
                  <div style={{ height: "16px" }} className="relative">
                    <div className="absolute right-0 top-0 bottom-0 flex items-center">
                      <span className="text-[9px] font-mono text-green-400/70">16px</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        }
        badNotes={[
          "间距分别是 10px、15px、20px、12px",
          "看起来像随手拖出来的",
          "大脑检测到不规律，产生「不专业」的感觉",
        ]}
        goodNotes={[
          "所有间距统一 16px",
          "严格的节奏感 = 专业感",
          "不需要思考，直觉上就「对」",
        ]}
      />

      <KeyInsight>
        当你用了间距系统（4px 倍数）之后，节奏不一致的问题几乎自动消失——因为你只能从有限的音符中选择。这就像五线谱上只有固定的音高位置，你不可能弹出一个「差不多的 C」。<strong>约束产生一致性，一致性产生专业感。</strong>
      </KeyInsight>

      {/* ===== 6.6 留白的艺术 ===== */}
      <h2>6.6 主动留白 vs 被动留白——空白也有质量</h2>

      <p>
        两个人站在一个空旷的广场上。一个是迷路了不知道往哪走（被动留白），另一个是故意站在广场中央享受阳光（主动留白）。空间一样大，但一个让人焦虑，一个让人舒适。
      </p>
      <p>
        Tschichold 的观点值得反复强调：<strong>留白是主动的设计元素，不是被动的空余空间</strong>。被动留白是「没东西放了所以空着」，主动留白是「故意留空让视觉呼吸」。来看看同一个 Hero 区域的两个版本：
      </p>

      {/* Active vs Passive whitespace demo */}
      <ComparisonCard
        title="被动留白 vs 主动留白"
        bad={
          <div className="rounded-lg bg-zinc-900 border border-zinc-700 p-4">
            {/* Accidental whitespace - elements just floating */}
            <div className="text-lg font-bold text-zinc-100 mb-1">
              打造你的下一个产品
            </div>
            <div className="text-xs text-zinc-500 mb-1">
              From idea to launch, faster than ever.
            </div>


            <div className="text-xs text-zinc-400 mb-2 max-w-xs">
              我们提供从设计到开发的一站式解决方案，帮助创业者和团队快速将想法变为现实。
            </div>
            <div className="flex gap-1 mb-1">
              <div className="px-2 py-1 rounded bg-blue-500 text-white text-[10px]">立即开始</div>
              <div className="px-2 py-1 rounded text-[10px] text-zinc-400">了解更多</div>
            </div>

            <div className="flex gap-3 mt-1">
              <div className="text-center">
                <div className="text-xs font-bold text-zinc-300">2.5k+</div>
                <div className="text-[9px] text-zinc-600">用户</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-zinc-300">99.9%</div>
                <div className="text-[9px] text-zinc-600">在线率</div>
              </div>
            </div>
          </div>
        }
        good={
          <div className="rounded-lg bg-zinc-900 border border-zinc-700 px-6 py-8">
            {/* Intentional whitespace - deliberate breathing room */}
            <div className="text-lg font-bold text-zinc-100 mb-2">
              打造你的下一个产品
            </div>
            <div className="text-xs text-zinc-500 mb-5">
              From idea to launch, faster than ever.
            </div>

            <div className="text-xs text-zinc-400 leading-relaxed mb-6 max-w-xs">
              我们提供从设计到开发的一站式解决方案，帮助创业者和团队快速将想法变为现实。
            </div>

            <div className="flex gap-3 mb-8">
              <div className="px-4 py-2 rounded-lg bg-blue-500 text-white text-xs font-medium">立即开始</div>
              <div className="px-4 py-2 rounded-lg text-xs text-zinc-400">了解更多</div>
            </div>

            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-sm font-bold text-zinc-200">2.5k+</div>
                <div className="text-[10px] text-zinc-500">用户</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-zinc-200">99.9%</div>
                <div className="text-[10px] text-zinc-500">在线率</div>
              </div>
            </div>
          </div>
        }
        badNotes={[
          "所有元素挤在一起，间距零散不统一",
          "留白是「用完了空间剩下的」——被动的",
          "感觉像草稿，不像成品",
        ]}
        goodNotes={[
          "每个区块之间有明确的呼吸空间",
          "间距递增：标题(2)→描述(5)→正文(6)→按钮(8)",
          "留白是「故意设计的」——主动的、从容的",
        ]}
      />

      <p>
        <strong>Micro White Space</strong>——行间距、字间距、图标与文字的间距。这些间距影响的是可读性和精致度。差一两个像素，外行可能说不出区别，但会感到「粗糙」或「精致」。
      </p>
      <p>
        <strong>Macro White Space</strong>——区块间距、边距、页面留白。这些间距影响的是整体的呼吸感和信息密度。一个 padding 为 16px 的卡片和 padding 为 32px 的卡片，传递的是完全不同的设计意图：前者紧凑高效，后者从容大气。
      </p>

      {/* ===== 6.7 为什么 AI 界面总是显得「满」 ===== */}
      <h2>6.7 为什么 AI 生成的界面总是显得「满」</h2>

      <p>
        如果你让 AI 生成一个 Dashboard，你几乎肯定会得到一个塞得满满当当的界面——每一寸空间都有东西，每个角落都被利用了。为什么？因为 AI 的训练目标是「填充空间」——空白在 AI 看来是未完成的缺陷。
      </p>
      <p>
        但在设计中，<strong>空白是信息</strong>。它告诉用户「这里有一个停顿」「这两块内容不相关」「你可以在这里喘口气」。来看看 AI 典型输出和专业设计的区别：
      </p>

      <ComparisonCard
        title="AI 密集布局 vs 专业留白"
        bad={
          <div className="rounded-lg bg-zinc-900 p-2 space-y-1.5">
            <div className="text-[10px] font-semibold text-zinc-200 mb-1">Dashboard Overview</div>
            {/* Stats row - packed tight */}
            <div className="grid grid-cols-3 gap-1">
              <div className="bg-zinc-800 rounded p-1.5">
                <div className="text-[8px] text-zinc-500">Users</div>
                <div className="text-[10px] font-bold text-zinc-200">12.8k</div>
                <div className="text-[7px] text-green-500">+23%</div>
              </div>
              <div className="bg-zinc-800 rounded p-1.5">
                <div className="text-[8px] text-zinc-500">Revenue</div>
                <div className="text-[10px] font-bold text-zinc-200">$48k</div>
                <div className="text-[7px] text-green-500">+12%</div>
              </div>
              <div className="bg-zinc-800 rounded p-1.5">
                <div className="text-[8px] text-zinc-500">Orders</div>
                <div className="text-[10px] font-bold text-zinc-200">847</div>
                <div className="text-[7px] text-red-500">-3%</div>
              </div>
            </div>
            {/* Chart placeholder */}
            <div className="bg-zinc-800 rounded p-1.5">
              <div className="text-[8px] text-zinc-500 mb-1">Weekly Trend</div>
              <div className="flex items-end gap-0.5 h-8">
                {[40, 55, 35, 60, 45, 70, 65].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-500/40 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            {/* Table - also packed */}
            <div className="bg-zinc-800 rounded p-1.5">
              <div className="text-[8px] text-zinc-500 mb-1">Recent Orders</div>
              {["#1234 — $120", "#1233 — $89", "#1232 — $240"].map((order, i) => (
                <div key={i} className="text-[8px] text-zinc-400 py-0.5 border-b border-zinc-700 last:border-0">{order}</div>
              ))}
            </div>
            {/* Another widget squeezed in */}
            <div className="bg-zinc-800 rounded p-1.5">
              <div className="text-[8px] text-zinc-500">Top Products</div>
              <div className="text-[8px] text-zinc-400">Widget A (32%) · Widget B (28%)</div>
            </div>
          </div>
        }
        good={
          <div className="rounded-lg bg-zinc-900 p-4 space-y-4">
            <div className="text-xs font-semibold text-zinc-200">Dashboard Overview</div>
            {/* Stats row - with breathing room */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-zinc-800 rounded-lg p-3">
                <div className="text-[10px] text-zinc-500 mb-1">Users</div>
                <div className="text-sm font-bold text-zinc-200">12.8k</div>
                <div className="text-[10px] text-green-500 mt-1">+23%</div>
              </div>
              <div className="bg-zinc-800 rounded-lg p-3">
                <div className="text-[10px] text-zinc-500 mb-1">Revenue</div>
                <div className="text-sm font-bold text-zinc-200">$48k</div>
                <div className="text-[10px] text-green-500 mt-1">+12%</div>
              </div>
              <div className="bg-zinc-800 rounded-lg p-3">
                <div className="text-[10px] text-zinc-500 mb-1">Orders</div>
                <div className="text-sm font-bold text-zinc-200">847</div>
                <div className="text-[10px] text-red-500 mt-1">-3%</div>
              </div>
            </div>
            {/* Chart placeholder - with room */}
            <div className="bg-zinc-800 rounded-lg p-4">
              <div className="text-[10px] text-zinc-500 mb-3">Weekly Trend</div>
              <div className="flex items-end gap-1.5 h-12">
                {[40, 55, 35, 60, 45, 70, 65].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-500/40 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        }
        badNotes={[
          "5 个组件塞进同样的空间",
          "padding 只有 6-8px，信息挤在一起",
          "像一个信息轰炸——什么都展示了，但什么都没传达",
        ]}
        goodNotes={[
          "只展示 3 个关键指标 + 1 个图表",
          "充足的 padding（12-16px），信息清晰可读",
          "少即是多——留白让重要信息自己「说话」",
        ]}
      />

      <KeyInsight>
        学会主动使用留白，是从「业余」到「专业」最显著的分水岭。当你觉得界面看起来「空」的时候——停下来。问自己：「这个空白是在服务于阅读体验，还是真的浪费了空间？」大多数时候，你的第一直觉「太空了」其实恰好是对的留白量。<strong>专业设计师删掉的东西，比留下的多得多。</strong>
      </KeyInsight>

      {/* ===== 6.8 间距急救手册 ===== */}
      <h2>6.8 间距急救手册——5 个最常见的问题</h2>

      <p>
        以下是我在代码审查中见过最多次的 5 个间距问题。每个都附带了 before/after，让你一眼看出问题在哪、怎么修。
      </p>

      {/* Problem 1: Title closer to content below than above */}
      <h3>问题一：标题离下方内容太近，离上方太远</h3>
      <p>
        标题应该「属于」它下方的内容，而不是浮在两段内容之间。如果标题到上方段落和到下方段落的距离相同，大脑不知道它属于哪一部分。
      </p>

      <ComparisonCard
        title="标题归属问题"
        bad={
          <div className="text-xs text-[var(--color-text-secondary)] space-y-4">
            <p>这是第一部分的最后一段文字，讲完了上一个概念的内容。</p>
            <div className="font-semibold text-sm text-[var(--color-text)]">第二部分标题</div>
            <p>这是第二部分的第一段文字，开始介绍新的概念。</p>
          </div>
        }
        good={
          <div className="text-xs text-[var(--color-text-secondary)]">
            <p>这是第一部分的最后一段文字，讲完了上一个概念的内容。</p>
            <div className="font-semibold text-sm text-[var(--color-text)] mt-6 mb-2">第二部分标题</div>
            <p>这是第二部分的第一段文字，开始介绍新的概念。</p>
          </div>
        }
        badNotes={[
          "标题上下间距相同（16px）",
          "标题浮在两段之间，不知道属于谁",
        ]}
        goodNotes={[
          "标题上方 24px（分离），下方 8px（归属）",
          "标题明确「属于」下方内容",
        ]}
      />

      {/* Problem 2: Card padding too small */}
      <h3>问题二：卡片内边距太小</h3>
      <p>
        内容紧贴卡片边缘，就像一个人贴着墙站——让人窒息。卡片需要呼吸空间。
      </p>

      <ComparisonCard
        title="卡片内边距"
        bad={
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-2">
            <div className="text-xs font-semibold text-[var(--color-text)] mb-0.5">月度报告</div>
            <div className="text-[10px] text-[var(--color-text-tertiary)] mb-1">2024年3月</div>
            <div className="text-[10px] text-[var(--color-text-secondary)]">本月完成了 47 个任务，超额完成目标 15%。团队效率持续提升。</div>
            <div className="mt-1 px-2 py-0.5 rounded bg-blue-500 text-white text-[10px] text-center">查看详情</div>
          </div>
        }
        good={
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-5">
            <div className="text-xs font-semibold text-[var(--color-text)] mb-1">月度报告</div>
            <div className="text-[10px] text-[var(--color-text-tertiary)] mb-3">2024年3月</div>
            <div className="text-[10px] text-[var(--color-text-secondary)] leading-relaxed mb-4">本月完成了 47 个任务，超额完成目标 15%。团队效率持续提升。</div>
            <div className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-[10px] font-medium text-center">查看详情</div>
          </div>
        }
        badNotes={[
          "padding: 8px — 内容贴着边缘",
          "按钮也被挤扁了",
          "看起来像没做完的半成品",
        ]}
        goodNotes={[
          "padding: 20px — 内容有充足的呼吸空间",
          "元素之间的间距也随之增大",
          "同样的内容，质感完全不同",
        ]}
      />

      {/* Problem 3: Inconsistent gaps in a grid */}
      <h3>问题三：网格间距不一致</h3>
      <p>
        水平间距 16px，垂直间距 12px——或者更常见的，同一方向上有的 gap 是 12px 有的是 16px。这种「差不多」的随意感，是让界面看起来业余的头号原因。
      </p>

      <ComparisonCard
        title="网格间距一致性"
        bad={
          <div className="space-y-0">
            <div className="flex gap-4 mb-2">
              <div className="flex-1 h-16 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]" />
              <div className="flex-1 h-16 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]" />
            </div>
            <div className="flex gap-3 mb-3">
              <div className="flex-1 h-16 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]" />
              <div className="flex-1 h-16 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 h-16 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]" />
              <div className="flex-1 h-16 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]" />
            </div>
          </div>
        }
        good={
          <div className="grid grid-cols-2 gap-3">
            <div className="h-16 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]" />
            <div className="h-16 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]" />
            <div className="h-16 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]" />
            <div className="h-16 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]" />
            <div className="h-16 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]" />
            <div className="h-16 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]" />
          </div>
        }
        badNotes={[
          "水平 gap: 16px, 12px, 16px — 不一致",
          "垂直 gap: 8px, 12px — 也不一致",
          "看起来像手动拖拽出来的布局",
        ]}
        goodNotes={[
          "用 CSS Grid 的 gap: 12px 统一控制",
          "水平和垂直间距完全相同",
          "严格的网格 = 严格的专业感",
        ]}
      />

      {/* Problem 4: No spacing between form groups */}
      <h3>问题四：表单分组之间没有间距</h3>
      <p>
        一个注册表单，「个人信息」和「账户设置」是两个逻辑分组，但它们之间的间距和组内字段之间的间距完全相同——用户看到一个冗长的字段列表，而不是两个清晰的步骤。
      </p>

      <ComparisonCard
        title="表单分组"
        bad={
          <div className="space-y-3 text-xs">
            <div className="font-medium text-[var(--color-text-secondary)]">姓名</div>
            <div className="h-7 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
            <div className="font-medium text-[var(--color-text-secondary)]">邮箱</div>
            <div className="h-7 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
            <div className="font-medium text-[var(--color-text-secondary)]">密码</div>
            <div className="h-7 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
            <div className="font-medium text-[var(--color-text-secondary)]">公司名称</div>
            <div className="h-7 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
            <div className="font-medium text-[var(--color-text-secondary)]">团队规模</div>
            <div className="h-7 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
          </div>
        }
        good={
          <div className="text-xs">
            <div className="text-[10px] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">个人信息</div>
            <div className="space-y-3 mb-6">
              <div>
                <div className="font-medium text-[var(--color-text-secondary)] mb-1">姓名</div>
                <div className="h-7 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
              </div>
              <div>
                <div className="font-medium text-[var(--color-text-secondary)] mb-1">邮箱</div>
                <div className="h-7 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
              </div>
              <div>
                <div className="font-medium text-[var(--color-text-secondary)] mb-1">密码</div>
                <div className="h-7 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
              </div>
            </div>
            <div className="text-[10px] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">公司信息</div>
            <div className="space-y-3">
              <div>
                <div className="font-medium text-[var(--color-text-secondary)] mb-1">公司名称</div>
                <div className="h-7 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
              </div>
              <div>
                <div className="font-medium text-[var(--color-text-secondary)] mb-1">团队规模</div>
                <div className="h-7 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
              </div>
            </div>
          </div>
        }
        badNotes={[
          "5 个字段平铺，没有逻辑分组",
          "用户看到一个冗长的列表",
          "填到第三个就开始烦了",
        ]}
        goodNotes={[
          "分成「个人信息」和「公司信息」两组",
          "组间距（24px）远大于组内距（12px）",
          "用户感知到的是两个小步骤而非一个大表单",
        ]}
      />

      {/* Problem 5: Button group too tight */}
      <h3>问题五：按钮组太紧</h3>
      <p>
        多个按钮挤在一起，点击时容易误触，视觉上也分不清彼此。特别是在移动端，按钮之间至少需要 8px 的间距。
      </p>

      <ComparisonCard
        title="按钮间距"
        bad={
          <div className="flex flex-wrap gap-1">
            <div className="px-2 py-1 rounded bg-blue-500 text-white text-[10px]">保存</div>
            <div className="px-2 py-1 rounded bg-zinc-700 text-zinc-300 text-[10px]">预览</div>
            <div className="px-2 py-1 rounded bg-zinc-700 text-zinc-300 text-[10px]">草稿</div>
            <div className="px-2 py-1 rounded bg-red-500/20 text-red-400 text-[10px]">删除</div>
          </div>
        }
        good={
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-[10px] font-medium">保存</div>
            <div className="px-3 py-1.5 rounded-md bg-zinc-700 text-zinc-300 text-[10px]">预览</div>
            <div className="px-3 py-1.5 rounded-md bg-zinc-700 text-zinc-300 text-[10px]">草稿</div>
            <div className="w-px h-5 bg-[var(--color-border)]" />
            <div className="px-3 py-1.5 rounded-md text-red-400 text-[10px]">删除</div>
          </div>
        }
        badNotes={[
          "gap: 4px — 按钮几乎贴在一起",
          "移动端极易误触",
          "删除按钮和其他按钮视觉权重相同",
        ]}
        goodNotes={[
          "gap: 12px — 每个按钮都有点击空间",
          "删除按钮用分隔线隔开 + 降级为纯文字",
          "操作的主次关系一目了然",
        ]}
      />

      {/* ===== 6.9 间距检查清单 ===== */}
      <h2>6.9 间距速查清单——上线前逐项检查</h2>

      <p>
        以下是你的间距系统上线前应该检查的每一项。满足这些条件，你的布局质量就能超过 90% 的非设计师作品。
      </p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
        <div className="space-y-3">
          {[
            "所有间距值是否来自 4px 基准网格（4、8、12、16、24、32、48、64）？",
            "相关元素的间距是否小于无关元素的间距？（接近性原则）",
            "标题是否更靠近它下方的内容而非上方的内容？",
            "卡片 padding 是否至少 16px（移动端）/ 24px（桌面端）？",
            "同一组件列表的间距是否完全一致？（节奏感）",
            "网格的水平和垂直间距是否相同？",
            "表单字段是否按逻辑分组，且组间距 > 组内距？",
            "按钮之间的间距是否至少 8px？（防误触）",
            "页面边距是否足够（移动端至少 16px，桌面端至少 24px）？",
            "是否有意识地使用了留白来引导视觉流？（不是塞满每一寸空间）",
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
        间距是投入产出比最高的设计维度之一。你不需要学配色理论、不需要选字体、不需要画图标——<strong>只要把间距调对，一个「感觉粗糙」的界面就能瞬间变得「看起来专业」</strong>。因为间距直接影响信息的分组和层次，而分组和层次是人脑理解信息的基础。当你不知道怎么改善一个界面时，先别动颜色和布局——打开开发者工具，检查每一个 padding 和 margin。答案往往就在那些你看不见的像素里。
      </KeyInsight>
    </>
  );
}
