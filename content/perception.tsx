import ComparisonCard from "@/components/ComparisonCard";
import KeyInsight from "@/components/KeyInsight";
import DesignPrinciple from "@/components/DesignPrinciple";

export default function ChapterPerception() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第一章</p>
      <h1>视觉感知的科学基础</h1>

      <blockquote>
        &ldquo;The eye is not a passive recorder... It is an active organ that interprets, organizes, and constructs.&rdquo;
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Rudolf Arnheim, <em>Art and Visual Perception</em>, 1954</span>
      </blockquote>

      <p>
        你有没有注意过，打开一个陌生的 app，你会在 1-2 秒内形成「好不好用」的第一印象？这个判断发生得如此之快，你甚至来不及阅读任何文字。
      </p>
      <p>
        这不是直觉，也不是玄学。这是你的大脑在<strong>自动解析视觉结构</strong>——它在一瞬间完成了分组、排序、赋予意义。你的眼睛不是一台被动的摄像头，它更像一个急于「讲故事」的编辑，拿到画面的第一时间就开始组织信息。
      </p>
      <p>
        理解这个过程，你就握住了一切设计原则的源头。接下来我们不讲抽象理论——我们用你能<strong>亲眼看到</strong>的例子，把这些原理一个一个拆开。
      </p>

      {/* ===== 1.1 格式塔 ===== */}
      <h2>1.1 格式塔感知原理——大脑的自动分组本能</h2>

      <p>
        走进一家超市，你不需要阅读任何标牌就能分辨出饮料区、零食区、日用品区。为什么？因为相同的商品被放在一起（接近性），同类包装看起来相似（相似性），货架和通道形成了天然的分区（共同区域）。
      </p>
      <p>
        你的大脑在你意识到之前就完成了这些分组。界面设计利用的是<strong>完全相同的本能</strong>。1923 年，心理学家 Wertheimer 把这套规律写成了论文，后人称之为「格式塔原理」。一百年过去了，它们仍然是 UI 设计最硬核的理论地基。
      </p>

      {/* --- 01 接近性 --- */}
      <DesignPrinciple number="01" title="接近性 Proximity" author="Wertheimer, 1923">
        离得近的东西，大脑会自动认为「它们是一伙的」。这是人类视觉最基本的分组法则——不需要线条、不需要边框，光靠距离就够了。你每次把表单的 label 紧贴 input、把不同字段组拉开间距，用的就是这条本能。
      </DesignPrinciple>

      {/* Proximity visual demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示</p>
        {/* Row 1: evenly spaced - no grouping */}
        <div className="mb-2">
          <p className="text-xs text-[var(--color-text-tertiary)] mb-2">均匀间距——看不出分组</p>
          <div className="flex gap-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-[var(--color-text-tertiary)]" />
            ))}
          </div>
        </div>
        {/* Row 2: grouped - clear 3 groups */}
        <div className="mt-5">
          <p className="text-xs text-[var(--color-text-tertiary)] mb-2">加入间距差异——立刻出现三组</p>
          <div className="flex items-center">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
            </div>
            <div className="w-8" />
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
            </div>
            <div className="w-8" />
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          同样 9 个圆点，仅靠间距就能传达完全不同的结构。
        </p>
      </div>

      {/* Proximity UI application */}
      <ComparisonCard
        title="接近性在表单中的应用"
        bad={
          <div className="space-y-3 text-sm">
            <div className="text-[var(--color-text-secondary)]">用户名</div>
            <div className="h-8 rounded border border-[var(--color-border-subtle)] bg-[var(--color-bg)]" />
            <div className="text-[var(--color-text-secondary)]">邮箱</div>
            <div className="h-8 rounded border border-[var(--color-border-subtle)] bg-[var(--color-bg)]" />
            <div className="text-[var(--color-text-secondary)]">密码</div>
            <div className="h-8 rounded border border-[var(--color-border-subtle)] bg-[var(--color-bg)]" />
            <div className="text-[var(--color-text-secondary)]">确认密码</div>
            <div className="h-8 rounded border border-[var(--color-border-subtle)] bg-[var(--color-bg)]" />
          </div>
        }
        good={
          <div className="text-sm">
            <div className="mb-5">
              <div className="text-[var(--color-text-secondary)] mb-1.5">用户名</div>
              <div className="h-8 rounded border border-[var(--color-border-subtle)] bg-[var(--color-bg)]" />
            </div>
            <div className="mb-5">
              <div className="text-[var(--color-text-secondary)] mb-1.5">邮箱</div>
              <div className="h-8 rounded border border-[var(--color-border-subtle)] bg-[var(--color-bg)]" />
            </div>
            <div className="mb-5">
              <div className="text-[var(--color-text-secondary)] mb-1.5">密码</div>
              <div className="h-8 rounded border border-[var(--color-border-subtle)] bg-[var(--color-bg)]" />
            </div>
            <div>
              <div className="text-[var(--color-text-secondary)] mb-1.5">确认密码</div>
              <div className="h-8 rounded border border-[var(--color-border-subtle)] bg-[var(--color-bg)]" />
            </div>
          </div>
        }
        badNotes={["所有元素等距排列", "label 和 input 的归属关系模糊"]}
        goodNotes={["label 紧贴对应的 input", "字段组之间留出更大间距"]}
      />

      {/* --- 02 相似性 --- */}
      <DesignPrinciple number="02" title="相似性 Similarity" author="Wertheimer, 1923">
        就像你能在人群中一眼找到穿校服的学生，大脑会把颜色、大小、形状相同的元素自动归为一类。Design System 要求同类组件使用统一样式，不是为了「好看」，而是因为<strong>视觉相似 = 语义相似</strong>，这是大脑的硬编码逻辑。
      </DesignPrinciple>

      {/* Similarity visual demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示</p>
        <p className="text-xs text-[var(--color-text-tertiary)] mb-3">同一个网格，黄色圆点自动被你的大脑「选中」为一组：</p>
        <div className="grid grid-cols-6 gap-3 max-w-xs">
          {[0,1,0,1,0,0, 1,0,0,0,1,0, 0,0,1,0,0,1, 0,1,0,0,0,0, 1,0,0,1,0,0, 0,0,0,0,1,0].map((isBlue, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full ${
                isBlue
                  ? "bg-[var(--color-accent)]"
                  : "bg-[var(--color-text-tertiary)]/30"
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          你没有刻意去数，但黄色圆点已经在你脑中「亮」了起来。这就是相似性——颜色相同的元素被自动关联。
        </p>
      </div>

      {/* Similarity UI application */}
      <ComparisonCard
        title="相似性在导航中的应用"
        bad={
          <div className="flex gap-2 text-xs">
            <div className="px-3 py-1.5 rounded-full bg-[var(--color-accent)] text-white font-medium">首页</div>
            <div className="px-3 py-1.5 rounded border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] italic">产品</div>
            <div className="px-3 py-1.5 rounded-lg bg-[var(--color-bg)] text-[var(--color-text)] font-bold underline">定价</div>
            <div className="px-3 py-1.5 text-[var(--color-text-tertiary)]">关于</div>
          </div>
        }
        good={
          <div className="flex gap-1 text-xs">
            <div className="px-3 py-1.5 rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">首页</div>
            <div className="px-3 py-1.5 rounded-md text-[var(--color-text-secondary)]">产品</div>
            <div className="px-3 py-1.5 rounded-md text-[var(--color-text-secondary)]">定价</div>
            <div className="px-3 py-1.5 rounded-md text-[var(--color-text-secondary)]">关于</div>
          </div>
        }
        badNotes={["每个导航项样式都不同", "无法分辨哪些是同级别选项"]}
        goodNotes={["未选中项样式一致 = 同类", "选中项用一种差异突出 = 当前位置"]}
      />

      {/* --- 03 连续性 --- */}
      <DesignPrinciple number="03" title="连续性 Continuity" author="Wertheimer, 1923">
        你的视线喜欢沿着平滑的路径走——就像高速公路上开车，你会自然跟着车道线的方向。这就是导航栏、进度条、时间线能「带着你走」的原因。打断连续性会制造急刹车——可以用来吸引注意，但用错了地方就是制造混乱。
      </DesignPrinciple>

      {/* Continuity visual demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示</p>
        <div className="grid grid-cols-2 gap-8">
          {/* Aligned - feels like a flow */}
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-3">对齐 = 流畅的视觉路径</p>
            <div className="space-y-2">
              <div className="h-2 bg-[var(--color-accent)] rounded-full w-full" />
              <div className="h-2 bg-[var(--color-accent)]/60 rounded-full w-full" />
              <div className="h-2 bg-[var(--color-accent)]/30 rounded-full w-full" />
            </div>
          </div>
          {/* Misaligned - feels broken */}
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-3">错位 = 视线被反复打断</p>
            <div className="space-y-2">
              <div className="h-2 bg-[var(--color-text-tertiary)]/40 rounded-full w-4/5" />
              <div className="h-2 bg-[var(--color-text-tertiary)]/40 rounded-full w-full ml-4" />
              <div className="h-2 bg-[var(--color-text-tertiary)]/40 rounded-full w-3/5 ml-1" />
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          左边的三条线起点对齐，视线一路向下毫无阻碍。右边的起点各不相同，每一行都在迫使你重新定位。
        </p>
      </div>

      {/* --- 04 闭合性 --- */}
      <DesignPrinciple number="04" title="闭合性 Closure" author="Wertheimer, 1923">
        给大脑一个不完整的形状，它会忍不住替你「补全」。这就是为什么极简图标只用几根线就能传达复杂含义——你的大脑在画完剩下的部分。也是为什么卡片不需要四面边框也能被感知为容器。
      </DesignPrinciple>

      {/* Closure visual demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示</p>
        <p className="text-xs text-[var(--color-text-tertiary)] mb-3">你能看到一个「正方形」吗？其实只有四段弧线：</p>
        <div className="flex items-center gap-12">
          {/* Incomplete square using corner arcs */}
          <div className="relative w-20 h-20">
            {/* Top-left corner */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent)] rounded-tl-sm" />
            {/* Top-right corner */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)] rounded-tr-sm" />
            {/* Bottom-left corner */}
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--color-accent)] rounded-bl-sm" />
            {/* Bottom-right corner */}
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent)] rounded-br-sm" />
          </div>
          {/* Incomplete circle using dashed border */}
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-[var(--color-accent)] border-r-transparent border-b-transparent" />
          {/* Triangle from three dots */}
          <div className="relative w-20 h-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-accent)]" />
            <div className="absolute bottom-1 left-1 w-3 h-3 rounded-full bg-[var(--color-accent)]" />
            <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[var(--color-accent)]" />
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          四个角 → 正方形。两段弧 → 圆。三个点 → 三角形。大脑无法忍受「不完整」，它会自动替你画完。
        </p>
      </div>

      {/* --- 05 共同区域 --- */}
      <DesignPrinciple number="05" title="共同区域 Common Region" author="Palmer, 1992">
        把几个东西装进同一个框里，大脑就会认为它们属于一个单元。这是卡片（Card）组件的全部理论基础——一个矩形边界就足以建立归属感。你甚至不需要线条，一块浅色背景就够了。
      </DesignPrinciple>

      {/* Common Region visual demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示</p>
        <div className="grid grid-cols-2 gap-8">
          {/* Without region */}
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-3">没有区域——6 个独立元素</p>
            <div className="flex flex-wrap gap-3">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <div
                  key={letter}
                  className="w-8 h-8 rounded flex items-center justify-center text-xs font-mono text-[var(--color-text-secondary)] bg-[var(--color-bg)]"
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>
          {/* With region */}
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-3">加上区域——变成 2 组</p>
            <div className="flex gap-4">
              <div className="flex gap-2 bg-[var(--color-accent)]/10 rounded-lg p-2 border border-[var(--color-accent)]/20">
                {["A", "B", "C"].map((letter) => (
                  <div
                    key={letter}
                    className="w-8 h-8 rounded flex items-center justify-center text-xs font-mono text-[var(--color-accent)] bg-[var(--color-bg)]"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 bg-[var(--color-text-tertiary)]/10 rounded-lg p-2 border border-[var(--color-text-tertiary)]/20">
                {["D", "E", "F"].map((letter) => (
                  <div
                    key={letter}
                    className="w-8 h-8 rounded flex items-center justify-center text-xs font-mono text-[var(--color-text-secondary)] bg-[var(--color-bg)]"
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          同样 6 个字母，加一层浅色背景就从「散装」变成了「分组」。不需要文字说明。
        </p>
      </div>

      <KeyInsight>
        格式塔原理的核心启示：<strong>设计不是在空白画布上摆放元素，而是在跟大脑的自动分组本能合作</strong>。顺着它，信息结构一目了然；逆着它，用户就要花额外的脑力去理解「这个东西到底跟谁是一组的」。学会这五条法则，你就能用间距、颜色和边界<strong>无声地</strong>指挥用户的注意力。
      </KeyInsight>

      {/* ===== 1.2 视觉注意力 ===== */}
      <h2>1.2 视觉注意力——为什么大按钮和红色总是先被看到</h2>

      <p>
        打开任何一个 app 的首页，你的目光最先落在哪里？几乎可以肯定是：最大的元素、颜色最扎眼的元素、或者唯一在动的元素。这不是巧合，也不是你「没有认真看」——你的视觉系统在你做出任何决定之前，就已经替你筛选了信息。
      </p>

      <h3>前注意特征——0.2 秒内的自动扫描</h3>

      <p>
        认知科学家 Healey 和 Enns（2012）发现，人类视觉系统能在 200 毫秒内——<strong>甚至在意识参与之前</strong>——检测到某些特征的差异。他们管这叫「前注意特征（Pre-attentive Attributes）」。来，亲眼体验一下：
      </p>

      {/* Pre-attentive demo: color pop-out */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">实验 A：找到红色方块</p>
        <div className="grid grid-cols-8 gap-2 max-w-xs mb-3">
          {Array.from({ length: 32 }).map((_, i) => (
            <div
              key={i}
              className={`w-5 h-5 rounded-sm ${
                i === 19
                  ? "bg-red-500"
                  : "bg-[var(--color-text-tertiary)]/25"
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] mb-6">
          瞬间就找到了，对吧？你的大脑甚至没有「扫描」——红色方块是自己「跳」出来的。
        </p>

        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">实验 B：找到数字 53</p>
        <div className="grid grid-cols-8 gap-2 max-w-xs text-xs font-mono text-[var(--color-text-secondary)]">
          {["17","42","88","31","76","09","64","23","51","38","95","12","67","84","29","46","73","08","35","53","91","62","47","14","86","20","59","71","33","98","45","06"].map((num, i) => (
            <div key={i} className="w-5 h-5 flex items-center justify-center">
              {num}
            </div>
          ))}
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] mt-3">
          这次慢多了吧？因为「在数字中找特定数字」不是前注意任务——你必须逐个扫描。
        </p>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          设计启示：如果你希望某个元素被「秒级」注意到，用颜色/大小/形状差异；如果需要用户逐个阅读才能分辨，那就不是有效的视觉层次。
        </p>
      </div>

      <p>
        这就是为什么 CTA 按钮要用强调色——它利用的不是「审美」，而是前注意层面的色彩差异。用户甚至不需要「读」页面就能注意到它。四种最强的前注意特征：
      </p>

      <ul>
        <li><strong>颜色</strong>——一个红色元素在一堆灰色中瞬间跳出</li>
        <li><strong>大小</strong>——更大的元素自动获得更多注意</li>
        <li><strong>方向</strong>——倾斜的线条在水平线中显眼</li>
        <li><strong>形状</strong>——圆形在方形中、方形在圆形中都很突出</li>
      </ul>

      <h3>Hick 定律——选项越多，大脑越瘫痪</h3>

      <p>
        你有没有在餐厅拿到一本 20 页菜单时，突然觉得「算了随便吧」？Hick-Hyman 定律（Hick, 1952; Hyman, 1953）量化了这个现象：<strong>选项数量每翻倍，决策时间增加约 150ms</strong>。听起来不多？但 12 个导航项比 4 个多消耗的不只是时间，还有用户的意愿。
      </p>

      {/* Hick's Law UI demo */}
      <ComparisonCard
        title="Hick 定律在导航中的应用"
        bad={
          <div>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {["首页","产品","方案","定价","文档","博客","社区","招聘","关于","联系","下载","合作伙伴"].map((item) => (
                <div key={item} className="px-2.5 py-1 rounded text-[var(--color-text-secondary)] bg-[var(--color-bg)]">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-xs text-[var(--color-text-tertiary)] mt-2">12 个选项，每一个都在争夺注意力</p>
          </div>
        }
        good={
          <div>
            <div className="flex gap-1.5 text-xs mb-2">
              {["产品","定价","文档","博客","关于"].map((item) => (
                <div key={item} className="px-2.5 py-1 rounded text-[var(--color-text-secondary)] bg-[var(--color-bg)]">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-xs text-[var(--color-text-tertiary)]">5 个核心选项，其余收入「更多」菜单</p>
          </div>
        }
        badNotes={["选项过多，用户陷入选择瘫痪", "重要选项被淹没在噪音中"]}
        goodNotes={["核心路径一目了然", "次要选项分层收纳，需要时可展开"]}
      />

      <h3>认知负荷——你的大脑是一块电量有限的电池</h3>

      <p>
        认知负荷理论（Sweller, 1988）有一个绝妙的比喻：你的大脑就像手机电池——<strong>每个不一致的间距、多余的颜色、错位的元素都在后台偷偷耗电</strong>。这些「耗电」是无意识的，你察觉不到自己在消耗认知资源，只会模糊地感到「这个界面好累」。
      </p>
      <p>
        简洁的界面不只是「更好看」——它在客观上更高效，因为它把认知电量省下来，留给用户真正需要做的事情：理解内容、做出决策、完成任务。
      </p>

      {/* Cognitive load demo */}
      <ComparisonCard
        title="认知负荷对比"
        bad={
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="font-bold text-base text-[var(--color-text)]">订单详情</span>
              <span className="text-red-500 text-xs italic underline">重要提醒!</span>
            </div>
            <div className="flex justify-between text-[var(--color-text-secondary)]">
              <span className="font-medium">商品名称</span>
              <span className="font-bold text-[var(--color-text)]">MacBook Pro 14&quot;</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-text-tertiary)] text-xs uppercase tracking-widest">数量</span>
              <span className="text-lg text-[var(--color-accent)]">1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[var(--color-text-secondary)] underline">合计金额</span>
              <span className="font-black text-xl text-green-500">¥14,999</span>
            </div>
          </div>
        }
        good={
          <div className="space-y-2.5 text-sm">
            <div className="font-semibold text-[var(--color-text)]">订单详情</div>
            <div className="flex justify-between text-[var(--color-text-secondary)]">
              <span>商品名称</span>
              <span className="text-[var(--color-text)]">MacBook Pro 14&quot;</span>
            </div>
            <div className="flex justify-between text-[var(--color-text-secondary)]">
              <span>数量</span>
              <span className="text-[var(--color-text)]">1</span>
            </div>
            <div className="border-t border-[var(--color-border-subtle)] pt-2 flex justify-between">
              <span className="text-[var(--color-text-secondary)]">合计</span>
              <span className="font-semibold text-[var(--color-text)]">¥14,999</span>
            </div>
          </div>
        }
        badNotes={["5 种字号、4 种颜色、下划线 + 斜体 + 粗体混用", "每一行都在「喊」，但什么都没突出"]}
        goodNotes={["2 种字重、一致的文字颜色层级", "安静的界面，重点自然浮现"]}
      />

      <KeyInsight>
        视觉注意力是稀缺资源。高手设计师不是让每个元素都「被看到」，而是精确控制<strong>什么先被看到、什么后被看到、什么可以不被看到</strong>。记住这个优先级：颜色 &gt; 大小 &gt; 形状 &gt; 位置。每多一个视觉重点，所有重点的效力都在递减。
      </KeyInsight>

      {/* ===== 1.3 审美的心理学 ===== */}
      <h2>1.3 为什么「好看」不是玄学——审美的心理学解释</h2>

      <p>
        每次设计评审听到「我觉得不太好看」，你是不是很抓狂？好消息是：审美偏好不是纯主观的，背后有可以分析的认知机制。我们来一个一个拆。
      </p>

      <h3>加工流畅性——大脑觉得「容易」的东西就是「好看」的</h3>

      <p>
        为什么你第一次用某个 app 就觉得「这个看起来很靠谱」？不是因为你分析了它的配色和排版，而是因为你的大脑处理它的信息<strong>毫不费力</strong>。心理学家 Reber、Schwarz 和 Winkielman（2004）管这叫 Processing Fluency（加工流畅性）——越容易被大脑处理的东西，越被判断为「好看」和「值得信赖」。
      </p>
      <p>
        这解释了一切：对称让人舒服，因为处理对称图形只需要一半的信息量；对齐让人安心，因为视线可以沿直线扫过；一致性让人愉悦，因为大脑不需要为每个新元素建立新的识别模型。
      </p>

      {/* Processing fluency demo */}
      <ComparisonCard
        title="同样的内容，不同的加工流畅性"
        bad={
          <div className="text-sm space-y-3">
            <div className="font-bold text-lg text-[var(--color-text)]" style={{ fontFamily: "serif" }}>我们的服务</div>
            <div className="flex gap-2">
              <div className="bg-blue-500/20 rounded p-2.5 flex-1 text-center">
                <div className="text-xs text-blue-400 font-bold">设计</div>
              </div>
              <div className="bg-green-500/20 rounded-xl p-3 flex-1">
                <div className="text-xs text-green-400 italic">开发</div>
              </div>
              <div className="bg-purple-500/20 p-2 flex-1 text-right">
                <div className="text-sm text-purple-400 underline">运营</div>
              </div>
            </div>
            <div className="text-[var(--color-text-tertiary)] text-xs ml-4">
              为您提供全方位的数字化解决方案
            </div>
          </div>
        }
        good={
          <div className="text-sm space-y-3">
            <div className="font-semibold text-[var(--color-text)]">我们的服务</div>
            <div className="grid grid-cols-3 gap-2">
              {["设计", "开发", "运营"].map((item) => (
                <div key={item} className="bg-[var(--color-accent)]/10 rounded-lg p-2.5 text-center">
                  <div className="text-xs text-[var(--color-accent)] font-medium">{item}</div>
                </div>
              ))}
            </div>
            <div className="text-[var(--color-text-tertiary)] text-xs">
              为您提供全方位的数字化解决方案
            </div>
          </div>
        }
        badNotes={["三种圆角、三种颜色、三种对齐", "大脑需要为每个卡片重新建立模型"]}
        goodNotes={["统一样式 = 一次识别，三次复用", "信息瞬间清晰，毫不费力"]}
      />

      <h3>纯粹接触效应——熟悉感就是信任感</h3>

      <p>
        为什么所有 SaaS 产品的定价页看起来都差不多？三栏、中间高亮推荐、右上角最贵？不是因为设计师偷懒，而是因为 Zajonc（1968）发现了一个反直觉的真相：<strong>仅仅是重复接触就能产生好感</strong>。用户已经习惯了这个模式，熟悉感本身就是信任的来源。
      </p>
      <p>
        这不意味着你不能创新——而是说创新的代价是真实的。每一个偏离约定的设计决策，都在消耗用户的信任储备。所以，<strong>在不重要的地方遵循约定，把创新的预算花在真正需要差异化的地方</strong>。
      </p>

      {/* Familiar pattern demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">你见过无数次的定价页模式</p>
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-[var(--color-border-subtle)] p-3 text-center">
            <div className="text-xs text-[var(--color-text-tertiary)] mb-1">Basic</div>
            <div className="text-lg font-bold text-[var(--color-text)]">$9</div>
            <div className="text-xs text-[var(--color-text-tertiary)]">/月</div>
          </div>
          <div className="rounded-lg border-2 border-[var(--color-accent)] p-3 text-center relative">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-white text-[10px] px-2 py-0.5 rounded-full font-medium">推荐</div>
            <div className="text-xs text-[var(--color-accent)] mb-1 font-medium">Pro</div>
            <div className="text-lg font-bold text-[var(--color-text)]">$29</div>
            <div className="text-xs text-[var(--color-text-tertiary)]">/月</div>
          </div>
          <div className="rounded-lg border border-[var(--color-border-subtle)] p-3 text-center">
            <div className="text-xs text-[var(--color-text-tertiary)] mb-1">Enterprise</div>
            <div className="text-lg font-bold text-[var(--color-text)]">$99</div>
            <div className="text-xs text-[var(--color-text-tertiary)]">/月</div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          三栏、中间高亮、推荐标签——你不需要任何说明就知道怎么读这个页面。这就是纯粹接触效应的力量。
        </p>
      </div>

      <h3>峰终效应——用户只记住两个时刻</h3>

      <p>
        Kahneman（1999）证明了一个反直觉的发现：人们对一段体验的记忆<strong>不是</strong>所有时刻的平均值，而是主要取决于两个瞬间——<strong>最强烈的峰值</strong>和<strong>结尾</strong>。
      </p>
      <p>
        这意味着什么？你的界面不需要每个角落都完美。但这几个时刻的设计质量，会不成比例地影响整体印象：
      </p>
      <ul>
        <li><strong>Notion</strong> 的加载动画——等待变成了一个令人愉悦的小插曲</li>
        <li><strong>Stripe</strong> 的支付成功页面——一个精心设计的「完成」时刻</li>
        <li><strong>Linear</strong> 的键盘快捷键提示——让「高效」变成了体感峰值</li>
      </ul>
      <p>
        这些「小细节」之所以被反复称赞，正是因为它们出现在体验的峰值或结尾时刻。<strong>在资源有限时，把 80% 的打磨精力花在这 20% 的关键时刻上。</strong>
      </p>

      {/* Peak-End demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">峰终效应示意</p>
        <div className="flex items-end gap-1 h-24">
          {[2,3,2,3,4,3,2,8,3,2,3,2,2,3,6].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t transition-all ${
                i === 7
                  ? "bg-[var(--color-accent)]"
                  : i === 14
                    ? "bg-[var(--color-accent)]/70"
                    : "bg-[var(--color-text-tertiary)]/20"
              }`}
              style={{ height: `${h * 12}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-[var(--color-text-tertiary)]">
          <span>体验开始 →</span>
          <span className="text-[var(--color-accent)] font-medium">← 峰值</span>
          <span className="text-[var(--color-accent)]/70 font-medium">结尾 →</span>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-3 italic">
          用户最终记住的不是中间那些平淡的 3 分时刻，而是那个 8 分的峰值和最后一个 6 分的结尾。
        </p>
      </div>

      <KeyInsight>
        审美偏好不是随意的主观感受，而是有进化和认知基础的模式识别反应。掌握了加工流畅性、纯粹接触效应和峰终效应，你就可以把「我觉得不好看」翻译成具体的、可以讨论和改进的工程问题：<strong>「这里的视觉不一致增加了加工成本」「这个布局偏离了用户的熟悉模式」「关键时刻的细节打磨不够」</strong>。
      </KeyInsight>
    </>
  );
}
