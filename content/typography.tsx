import ComparisonCard from "@/components/ComparisonCard";
import KeyInsight from "@/components/KeyInsight";

export default function ChapterTypography() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第五章</p>
      <h1>字体排版 — 界面的「声音」</h1>

      <blockquote>
        &ldquo;Typography is the craft of endowing human language with a durable visual form.&rdquo;
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Robert Bringhurst, <em>The Elements of Typographic Style</em></span>
      </blockquote>

      <p>
        界面上 90% 的内容是文字。但大多数人对字体的思考停留在「挑一个好看的字体」。这就像说音乐就是「挑一个好听的乐器」——忽略了节奏、和声、力度等所有真正重要的东西。
      </p>
      <p>
        一把吉他在不同人手里听起来完全不同。同样，同一个字体在不同的字号、行高、字重、行宽组合下，传达的感觉天差地别。排版不是选字体，排版是<strong>用文字的视觉属性来组织信息</strong>。这一章，我们要让你<strong>听见</strong>文字的声音。
      </p>

      {/* ===== 5.1 字体的性格 ===== */}
      <h2>5.1 字体有性格——亲耳「听」一下</h2>

      <p>
        字体有性格，就像人有声音。选错字体就像让一个严肃的法律文件用儿童声音朗读——内容没变，但信任感全毁了。与其用文字描述这种差异，不如直接感受。下面是同一句话，三种完全不同的「声音」：
      </p>

      {/* Font personality demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-5">视觉演示：同一句话，三种「声音」</p>
        <div className="space-y-6">
          {/* Serif */}
          <div className="flex items-start gap-4">
            <div className="w-28 shrink-0 text-right">
              <div className="text-xs font-medium text-[var(--color-text-secondary)]">衬线体 Serif</div>
              <div className="text-[10px] text-[var(--color-text-tertiary)]">Georgia</div>
            </div>
            <div className="flex-1 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)] px-5 py-4">
              <p style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "18px", lineHeight: 1.6 }} className="text-[var(--color-text)]">
                我们致力于为每一位用户提供安全、可靠的金融服务。
              </p>
              <p className="text-[10px] text-[var(--color-text-tertiary)] mt-2 italic">
                感觉：权威、传统、值得信赖。适合金融、法律、学术。
              </p>
            </div>
          </div>
          {/* Sans-serif */}
          <div className="flex items-start gap-4">
            <div className="w-28 shrink-0 text-right">
              <div className="text-xs font-medium text-[var(--color-text-secondary)]">无衬线体 Sans</div>
              <div className="text-[10px] text-[var(--color-text-tertiary)]">Inter / SF Pro</div>
            </div>
            <div className="flex-1 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)] px-5 py-4">
              <p style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif", fontSize: "18px", lineHeight: 1.6 }} className="text-[var(--color-text)]">
                我们致力于为每一位用户提供安全、可靠的金融服务。
              </p>
              <p className="text-[10px] text-[var(--color-text-tertiary)] mt-2 italic">
                感觉：现代、干净、中性。适合 SaaS、科技产品、通用 UI。
              </p>
            </div>
          </div>
          {/* Monospace */}
          <div className="flex items-start gap-4">
            <div className="w-28 shrink-0 text-right">
              <div className="text-xs font-medium text-[var(--color-text-secondary)]">等宽体 Mono</div>
              <div className="text-[10px] text-[var(--color-text-tertiary)]">JetBrains Mono</div>
            </div>
            <div className="flex-1 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)] px-5 py-4">
              <p style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace", fontSize: "18px", lineHeight: 1.6 }} className="text-[var(--color-text)]">
                我们致力于为每一位用户提供安全、可靠的金融服务。
              </p>
              <p className="text-[10px] text-[var(--color-text-tertiary)] mt-2 italic">
                感觉：技术、精确、极客。适合开发者工具、数据展示、终端界面。
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-5 italic">
          同样的文字，衬线体像穿西装的银行家在讲话，无衬线体像穿卫衣的产品经理在做分享，等宽体像穿格子衫的工程师在写文档。字体选择不是审美问题——它是品牌调性的第一声。
        </p>
      </div>

      <p>
        <strong>衬线体（Serif）</strong>——Times New Roman、Georgia、Merriweather。笔画末端的小装饰（衬线）赋予它们权威感和历史感。传统上用于长文阅读（报纸、书籍），在数字界面中常用于内容型网站、金融、法律等需要信任感的领域。
      </p>
      <p>
        <strong>无衬线体（Sans-serif）</strong>——Inter、SF Pro、Geist、Roboto、Helvetica。干净、现代、中性。是当代 UI 设计的默认选择，因为它们在小字号和屏幕渲染中可读性更好。
      </p>
      <p>
        <strong>等宽体（Monospace）</strong>——JetBrains Mono、Fira Code、Geist Mono。每个字符占据相同宽度，天然对齐。用于代码、数据表格、数字展示等需要精确对齐的场景。等宽字体在 UI 中的出现会自动触发「技术/精确」的心理联想。
      </p>

      <KeyInsight label="选字体的实用法则">
        不知道选什么字体？<strong>默认选无衬线体</strong>（Inter、SF Pro、Geist）。它们是 UI 设计的「白衬衫」——永远不会出错。只有当你有明确的品牌调性需求时，才考虑衬线体或其他个性字体。选字体不是展示品味，而是<strong>服务于内容</strong>。
      </KeyInsight>

      {/* ===== 5.2 类型比例尺 ===== */}
      <h2>5.2 字号的数学——别再拍脑袋选大小</h2>

      <p>
        你见过多少界面，标题 24px、副标题 18px、正文 15px、说明文字 13px？这些数字是怎么来的？拍脑袋来的。结果就是层次不清——24 和 18 的差异不够明显，13 和 15 几乎看不出区别。
      </p>
      <p>
        好的字体层级遵循<strong>数学比例</strong>，就像音乐中的音阶。以 16px 为基础，乘以固定比例（通常 1.25，称为 Major Third），每一级之间的差异自然和谐：
      </p>

      {/* Type scale visual demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">类型比例尺 — Major Third (1.250)</p>
        <div className="space-y-3">
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-24 text-right shrink-0 font-mono text-xs">12px</span>
            <span style={{ fontSize: "12px" }} className="text-[var(--color-text-tertiary)]">辅助文字 · Caption</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-24 text-right shrink-0 font-mono text-xs">14px</span>
            <span style={{ fontSize: "14px" }} className="text-[var(--color-text-secondary)]">次要正文 · Body Small</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-24 text-right shrink-0 font-mono text-xs">16px</span>
            <span style={{ fontSize: "16px" }} className="text-[var(--color-text)]">正文 · Body</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-24 text-right shrink-0 font-mono text-xs">20px</span>
            <span style={{ fontSize: "20px" }} className="font-medium text-[var(--color-text)]">小标题 · H4</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-24 text-right shrink-0 font-mono text-xs">25px</span>
            <span style={{ fontSize: "25px" }} className="font-semibold text-[var(--color-text)]">标题 · H3</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-24 text-right shrink-0 font-mono text-xs">31px</span>
            <span style={{ fontSize: "31px" }} className="font-semibold text-[var(--color-text)]">大标题 · H2</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-24 text-right shrink-0 font-mono text-xs">39px</span>
            <span style={{ fontSize: "39px" }} className="font-bold text-[var(--color-text)]">页面标题 · H1</span>
          </div>
        </div>
        <p className="text-[var(--color-text-tertiary)] text-xs mt-4">
          Major Third scale (1.250) &middot; Base: 16px &middot; 每一级 &times; 1.25 = 下一级
        </p>
      </div>

      {/* Type scale applied to a real UI mockup */}
      <p>
        光看孤立的字号列表还不够直观。来看看这套比例尺应用到一个真实的博客文章页面是什么效果：
      </p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-5">比例尺实战：一篇博客文章</p>
        <div className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-6 max-w-lg">
          {/* Blog post mockup */}
          <div className="text-xs text-[var(--color-text-tertiary)] mb-2 font-mono">12px — 元数据</div>
          <div style={{ fontSize: "12px" }} className="text-[var(--color-text-tertiary)] mb-4">
            2024年3月18日 &middot; 阅读 8 分钟 &middot; 设计
          </div>
          <div className="text-xs text-[var(--color-text-tertiary)] mb-1 font-mono">31px — 文章标题</div>
          <h2 style={{ fontSize: "31px", lineHeight: 1.2 }} className="font-semibold text-[var(--color-text)] mb-3 !mt-0 !border-0">
            为什么你的界面看起来总是「差一点」
          </h2>
          <div className="text-xs text-[var(--color-text-tertiary)] mb-1 font-mono">16px — 正文</div>
          <p style={{ fontSize: "16px", lineHeight: 1.7 }} className="text-[var(--color-text-secondary)] mb-4">
            大多数非设计背景的开发者都有这样的经历：功能做好了，但界面看起来总是「差一点」。不是色彩不对，不是布局有问题，而是一种说不清的粗糙感。
          </p>
          <div className="text-xs text-[var(--color-text-tertiary)] mb-1 font-mono">20px — 小标题</div>
          <h3 style={{ fontSize: "20px", lineHeight: 1.3 }} className="font-medium text-[var(--color-text)] mb-2 !mt-0 !border-0">
            问题的根源：缺少排版系统
          </h3>
          <p style={{ fontSize: "16px", lineHeight: 1.7 }} className="text-[var(--color-text-secondary)] mb-3">
            当你随意选字号时，每一级之间的差异要么太大要么太小。数学比例尺解决的就是这个问题。
          </p>
          <div className="text-xs text-[var(--color-text-tertiary)] mb-1 font-mono">14px — 次要正文</div>
          <p style={{ fontSize: "14px" }} className="text-[var(--color-text-tertiary)] italic">
            本文基于 Robert Bringhurst 的《The Elements of Typographic Style》整理。
          </p>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          注意每一级字号之间的差异：标题和正文之间是两个跳跃（31 → 20 → 16），让层次一目了然。元数据用最小的 12px 安静地退到背景中。这不是随意的——这是数学。
        </p>
      </div>

      {/* ===== 5.3 行高 ===== */}
      <h2>5.3 行高——文字需要呼吸</h2>

      <p>
        如果字号是音量，行高就是节奏中的休止符。行高太紧，文字挤在一起像沙丁鱼罐头；行高太松，段落散成一地零件。Bringhurst 推荐正文行高在 1.4-1.8 之间，但光说数字没有体感。来，亲眼看看同一段文字在不同行高下的差距：
      </p>

      {/* Line height comparison demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-5">视觉演示：行高对阅读舒适度的影响</p>
        <div className="grid grid-cols-3 gap-4">
          {/* 1.2 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-red-400 font-semibold">line-height: 1.2</span>
              <span className="text-[10px] text-red-400">太紧</span>
            </div>
            <div className="rounded-lg bg-[var(--color-bg)] border border-red-500/20 px-4 py-3">
              <p style={{ fontSize: "14px", lineHeight: 1.2 }} className="text-[var(--color-text-secondary)]">
                排版不是选字体，排版是用文字的视觉属性来组织信息。好的排版让读者毫不费力地获取内容，坏的排版让读者在第三行就想关掉页面。
              </p>
            </div>
          </div>
          {/* 1.5 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-green-400 font-semibold">line-height: 1.5</span>
              <span className="text-[10px] text-green-400">英文推荐</span>
            </div>
            <div className="rounded-lg bg-[var(--color-bg)] border border-green-500/20 px-4 py-3">
              <p style={{ fontSize: "14px", lineHeight: 1.5 }} className="text-[var(--color-text-secondary)]">
                排版不是选字体，排版是用文字的视觉属性来组织信息。好的排版让读者毫不费力地获取内容，坏的排版让读者在第三行就想关掉页面。
              </p>
            </div>
          </div>
          {/* 1.8 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-amber-400 font-semibold">line-height: 1.8</span>
              <span className="text-[10px] text-amber-400">中文推荐</span>
            </div>
            <div className="rounded-lg bg-[var(--color-bg)] border border-amber-500/20 px-4 py-3">
              <p style={{ fontSize: "14px", lineHeight: 1.8 }} className="text-[var(--color-text-secondary)]">
                排版不是选字体，排版是用文字的视觉属性来组织信息。好的排版让读者毫不费力地获取内容，坏的排版让读者在第三行就想关掉页面。
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          1.2 的行高让行与行几乎贴在一起，阅读时眼睛容易「串行」。1.5 是英文正文的黄金值。1.8 给了中文方块字更多呼吸空间。差异不大？仔细看第三行——1.2 和 1.8 之间的舒适度差距是巨大的。
        </p>
      </div>

      <p>
        实用规则：
      </p>
      <ul>
        <li><strong>正文</strong>：1.5-1.75（中文需要更大，推荐 1.7-1.8）</li>
        <li><strong>标题</strong>：1.2-1.3（大字号行高应更紧凑，否则会显得松散）</li>
        <li><strong>UI 元素</strong>（按钮、标签）：1.0-1.2</li>
      </ul>

      {/* ===== 5.4 段落宽度 ===== */}
      <h2>5.4 段落宽度——为什么全屏文字让人崩溃</h2>

      <p>
        你有没有打开过一个页面，文字从屏幕最左边一直铺到最右边？读了两行就想关掉。为什么？因为<strong>你的眼睛找不到下一行的开头</strong>。当一行文字太长，视线扫到行尾后需要一个大幅度的「回车跳跃」才能回到下一行行首——跳错行的概率大幅增加。
      </p>
      <p>
        Bringhurst 给出的「舒适阅读宽度」是<strong>每行 45-75 个字符</strong>，最理想是 66 个字符。对中文来说，最佳行宽约 25-35 个汉字。来感受一下不同行宽的阅读体验：
      </p>

      {/* Measure (line width) demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-5">视觉演示：行宽对阅读舒适度的影响</p>

        <div className="space-y-6">
          {/* 40ch - too narrow */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-amber-400">max-width: 40ch</span>
              <span className="text-[10px] text-amber-400">偏窄</span>
            </div>
            <div className="rounded-lg bg-[var(--color-bg)] border border-amber-500/20 px-4 py-3" style={{ maxWidth: "40ch" }}>
              <p style={{ fontSize: "14px", lineHeight: 1.6 }} className="text-[var(--color-text-secondary)]">
                好的排版系统不是随意挑几个字号和颜色，而是建立一套有数学基础的比例关系。当每一级之间的差异遵循固定比例时，信息层次自然清晰，阅读体验自然流畅。这就是为什么专业设计师总是从比例尺开始。
              </p>
            </div>
          </div>

          {/* 65ch - ideal */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-green-400">max-width: 65ch</span>
              <span className="text-[10px] text-green-400">理想</span>
            </div>
            <div className="rounded-lg bg-[var(--color-bg)] border border-green-500/20 px-4 py-3" style={{ maxWidth: "65ch" }}>
              <p style={{ fontSize: "14px", lineHeight: 1.6 }} className="text-[var(--color-text-secondary)]">
                好的排版系统不是随意挑几个字号和颜色，而是建立一套有数学基础的比例关系。当每一级之间的差异遵循固定比例时，信息层次自然清晰，阅读体验自然流畅。这就是为什么专业设计师总是从比例尺开始。
              </p>
            </div>
          </div>

          {/* 100ch - too wide */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-red-400">max-width: 100ch</span>
              <span className="text-[10px] text-red-400">太宽</span>
            </div>
            <div className="rounded-lg bg-[var(--color-bg)] border border-red-500/20 px-4 py-3" style={{ maxWidth: "100ch" }}>
              <p style={{ fontSize: "14px", lineHeight: 1.6 }} className="text-[var(--color-text-secondary)]">
                好的排版系统不是随意挑几个字号和颜色，而是建立一套有数学基础的比例关系。当每一级之间的差异遵循固定比例时，信息层次自然清晰，阅读体验自然流畅。这就是为什么专业设计师总是从比例尺开始。
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          40ch 太窄——频繁换行打断阅读节奏，每行只有几个词就断了。65ch 刚好——视线轻松回到下一行行首。100ch 太宽——读到行尾后眼睛很难准确找到下一行的起点。这就是为什么本手册的正文区域限制在 ~720px。
        </p>
      </div>

      {/* ===== 5.5 中文排版特殊性 ===== */}
      <h2>5.5 中文排版——跟英文不是一套规则</h2>

      <p>
        如果你在做中文产品（或中英文混排），有一些特殊规则必须知道。中文是方块字系统，每个字的视觉密度远高于拉丁字母。这意味着同样的排版参数，用在中文上效果完全不同。
      </p>

      {/* Chinese vs English line-height demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-5">视觉演示：同样的 line-height: 1.4，中文和英文的差距</p>
        <div className="grid grid-cols-2 gap-5">
          {/* English at 1.4 */}
          <div>
            <p className="text-xs text-green-400 font-medium mb-2">English — line-height: 1.4 (comfortable)</p>
            <div className="rounded-lg bg-[var(--color-bg)] border border-green-500/20 px-4 py-3">
              <p style={{ fontSize: "15px", lineHeight: 1.4 }} className="text-[var(--color-text-secondary)]">
                Good typography is not about choosing beautiful fonts. It is about organizing information through visual attributes of text. When the hierarchy is clear, reading becomes effortless.
              </p>
            </div>
          </div>
          {/* Chinese at 1.4 */}
          <div>
            <p className="text-xs text-red-400 font-medium mb-2">中文 — line-height: 1.4 (too tight!)</p>
            <div className="rounded-lg bg-[var(--color-bg)] border border-red-500/20 px-4 py-3">
              <p style={{ fontSize: "15px", lineHeight: 1.4 }} className="text-[var(--color-text-secondary)]">
                好的排版不是选择漂亮的字体，而是通过文字的视觉属性来组织信息。当层次清晰时，阅读变得毫不费力。每个字符的笔画密度决定了行间需要多少呼吸空间。
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-5">
          <div />
          {/* Chinese at 1.7 */}
          <div>
            <p className="text-xs text-green-400 font-medium mb-2">中文 — line-height: 1.7 (comfortable)</p>
            <div className="rounded-lg bg-[var(--color-bg)] border border-green-500/20 px-4 py-3">
              <p style={{ fontSize: "15px", lineHeight: 1.7 }} className="text-[var(--color-text-secondary)]">
                好的排版不是选择漂亮的字体，而是通过文字的视觉属性来组织信息。当层次清晰时，阅读变得毫不费力。每个字符的笔画密度决定了行间需要多少呼吸空间。
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          英文字母大多在 x-height 范围内，只有少数字母有上伸（b, d）和下伸（g, p），行间自然有空隙。中文每个字都是满满当当的方块，行间几乎没有天然的呼吸空间。所以中文需要至少 1.7 的行高才能达到英文 1.4 的舒适度。
        </p>
      </div>

      <p>
        中文排版的其他注意事项：
      </p>
      <ul>
        <li><strong>标点挤压</strong>：中文标点（逗号、句号）占一个全角字位，连续出现时视觉上会显得松散，专业排版会做标点压缩</li>
        <li><strong>中英文混排间距</strong>：中英文之间应有约 0.25em 的间距（称为 pangu spacing），许多现代字体已内置此特性</li>
        <li><strong>行宽</strong>：中文最佳行宽约 25-35 个汉字（对应英文 45-75 字符的等价体验）</li>
      </ul>

      <KeyInsight label="中文排版速记">
        做中文产品，记住三个数字：<strong>行高 1.7+、行宽 30 字左右、字号不低于 14px</strong>。如果你的产品是中英文混排，先按中文标准来设置行高（1.7），英文会觉得稍松但完全可接受；反过来按英文标准（1.4-1.5），中文会挤得喘不过气。
      </KeyInsight>

      {/* ===== 5.6 字重纪律 ===== */}
      <h2>5.6 字重作为信息架构工具</h2>

      <p>
        <strong>一个界面最多使用三种字重</strong>，这是一条经过无数项目验证的纪律。当你用了 Light、Regular、Medium、SemiBold、Bold 五种字重时，与其说你在建立层次，不如说你在制造混乱。字重过多就像所有人都在喊「我很重要！」——结果没有人重要。
      </p>

      <ComparisonCard
        title="字重使用"
        bad={
          <div className="space-y-2 text-sm">
            <div className="font-light text-[var(--color-text)]">Light 300 — 页面描述</div>
            <div className="font-normal text-[var(--color-text)]">Regular 400 — 正文</div>
            <div className="font-medium text-[var(--color-text)]">Medium 500 — 小标题</div>
            <div className="font-semibold text-[var(--color-text)]">SemiBold 600 — 标题</div>
            <div className="font-bold text-[var(--color-text)]">Bold 700 — 大标题</div>
            <div className="font-extrabold text-[var(--color-text)]">ExtraBold 800 — 页面标题</div>
          </div>
        }
        good={
          <div className="space-y-2 text-sm">
            <div className="font-normal text-[var(--color-text-secondary)]">Regular 400 — 正文、描述</div>
            <div className="font-medium text-[var(--color-text)]">Medium 500 — 小标题、标签</div>
            <div className="font-bold text-[var(--color-text)]">Bold 700 — 标题、关键操作</div>
          </div>
        }
        badNotes={[
          "6 种字重，层级过多难以区分",
          "Light 在屏幕上可读性差",
          "相邻字重差异太小（500 vs 600）",
        ]}
        goodNotes={[
          "3 种字重，层级清晰一目了然",
          "每级之间差异明显（400 → 500 → 700）",
          "最轻也是 Regular，保证可读性",
        ]}
      />

      {/* Bold inflation demo */}
      <h3>「加粗膨胀」——当所有东西都重要时</h3>
      <p>
        这是一个真实场景：写文案的人想强调每个要点，于是每隔一句话就加粗。结果？加粗失去了所有的强调力。就像一个人说话时每个词都重读——你反而什么都记不住。
      </p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-5">视觉演示：加粗膨胀 vs 精准加粗</p>
        <div className="grid grid-cols-2 gap-5">
          {/* Over-bolded */}
          <div>
            <p className="text-xs text-red-400 font-medium mb-2">每句都加粗 — 什么都不突出</p>
            <div className="rounded-lg bg-[var(--color-bg)] border border-red-500/20 px-4 py-3">
              <p style={{ fontSize: "14px", lineHeight: 1.7 }} className="text-[var(--color-text-secondary)]">
                <strong>我们的产品帮助团队更高效地协作。</strong>通过实时编辑和评论功能，<strong>团队成员可以在同一个文档中同步工作。</strong>不再需要来回发送文件，<strong>所有修改都会自动保存和同步。</strong>现在就开始免费试用，<strong>体验全新的协作方式。</strong>
              </p>
            </div>
          </div>
          {/* Precise bold */}
          <div>
            <p className="text-xs text-green-400 font-medium mb-2">只加粗关键词 — 重点清晰</p>
            <div className="rounded-lg bg-[var(--color-bg)] border border-green-500/20 px-4 py-3">
              <p style={{ fontSize: "14px", lineHeight: 1.7 }} className="text-[var(--color-text-secondary)]">
                我们的产品帮助团队更高效地协作。通过<strong>实时编辑</strong>和评论功能，团队成员可以在同一个文档中同步工作。不再需要来回发送文件，所有修改都会<strong>自动保存和同步</strong>。现在就开始免费试用，体验全新的协作方式。
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          左边：四句话全加粗，眼睛不知道该停在哪里。右边：只有「实时编辑」和「自动保存和同步」两处加粗——这正是用户最需要知道的核心卖点。加粗是稀缺资源，用一次少一次。
        </p>
      </div>

      {/* ===== 5.7 字体搭配 ===== */}
      <h2>5.7 字体搭配——CJK + Latin 的三个安全组合</h2>

      <p>
        字体搭配的核心原则很简单：<strong>对比但不冲突</strong>。就像穿搭一样，你需要不同的单品（对比），但它们整体看起来要协调（不冲突）。在中英文混排的场景下，选对 CJK + Latin 的搭配至关重要。
      </p>
      <p>
        以下三组是经过验证的安全组合，你可以直接拿去用：
      </p>

      {/* Font pairing demos */}
      <div className="my-6 space-y-4">
        {/* Pairing 1: Noto Sans + Inter */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-lg font-bold text-[var(--color-accent)] font-mono">01</span>
            <div>
              <h4 className="text-sm font-semibold text-[var(--color-text)]">Noto Sans SC + Inter</h4>
              <p className="text-xs text-[var(--color-text-tertiary)]">最安全的通用组合 &middot; 适合 SaaS、工具类产品</p>
            </div>
          </div>
          <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)] px-5 py-4">
            <p style={{ fontFamily: "'Noto Sans SC', 'Inter', system-ui, sans-serif", fontSize: "16px", lineHeight: 1.7 }} className="text-[var(--color-text-secondary)]">
              全新的 Dashboard 2.0 已经上线。我们重新设计了 analytics 面板的 layout，优化了 real-time data 的展示效果。现在你可以在同一个 view 中查看所有 KPI metrics。
            </p>
          </div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mt-2">Google 出品，开源免费，字符覆盖最全。两者的 x-height 和笔画粗细高度一致，混排时几乎无违和感。</p>
        </div>

        {/* Pairing 2: PingFang + SF Pro */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-lg font-bold text-[var(--color-accent)] font-mono">02</span>
            <div>
              <h4 className="text-sm font-semibold text-[var(--color-text)]">PingFang SC + SF Pro</h4>
              <p className="text-xs text-[var(--color-text-tertiary)]">Apple 生态系统首选 &middot; 精致、现代</p>
            </div>
          </div>
          <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)] px-5 py-4">
            <p style={{ fontFamily: "'PingFang SC', 'SF Pro Display', -apple-system, sans-serif", fontSize: "16px", lineHeight: 1.7 }} className="text-[var(--color-text-secondary)]">
              全新的 Dashboard 2.0 已经上线。我们重新设计了 analytics 面板的 layout，优化了 real-time data 的展示效果。现在你可以在同一个 view 中查看所有 KPI metrics。
            </p>
          </div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mt-2">Apple 系统自带，macOS/iOS 上渲染效果最佳。笔画更细腻精致，适合注重视觉品质的产品。但非 Apple 平台需要 fallback。</p>
        </div>

        {/* Pairing 3: Source Han Sans + Geist */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-lg font-bold text-[var(--color-accent)] font-mono">03</span>
            <div>
              <h4 className="text-sm font-semibold text-[var(--color-text)]">Source Han Sans + Geist</h4>
              <p className="text-xs text-[var(--color-text-tertiary)]">开发者产品首选 &middot; 技术感、干净</p>
            </div>
          </div>
          <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)] px-5 py-4">
            <p style={{ fontFamily: "'Source Han Sans SC', 'Geist', system-ui, sans-serif", fontSize: "16px", lineHeight: 1.7 }} className="text-[var(--color-text-secondary)]">
              全新的 Dashboard 2.0 已经上线。我们重新设计了 analytics 面板的 layout，优化了 real-time data 的展示效果。现在你可以在同一个 view 中查看所有 KPI metrics。
            </p>
          </div>
          <p className="text-[10px] text-[var(--color-text-tertiary)] mt-2">Adobe + Google 联合出品（思源黑体）。Geist 是 Vercel 设计的现代无衬线体，笔画几何感强。两者搭配适合开发者工具和技术产品。</p>
        </div>
      </div>

      <KeyInsight label="字体搭配铁律">
        <strong>不确定就用系统字体栈</strong>。<code className="text-xs bg-[var(--color-bg-tertiary)] px-1.5 py-0.5 rounded">font-family: system-ui, -apple-system, sans-serif</code> 会自动使用用户操作系统的默认字体（macOS 用苹方 + SF Pro，Windows 用微软雅黑 + Segoe UI），渲染效果最好，加载速度最快（零字体请求），而且用户对系统字体有天然的熟悉感。自定义字体是锦上添花，不是必须。
      </KeyInsight>

      {/* ===== 5.8 排版反模式 ===== */}
      <h2>5.8 排版的常见错误——你中了几个？</h2>

      <p>
        讲完了原理和最佳实践，来看看最常见的排版错误。这些在新手作品中出现的频率高得惊人，但一旦你意识到，就再也不会犯。
      </p>

      {/* Anti-pattern 1: Font size too small on mobile */}
      <ComparisonCard
        title="反模式：移动端字号太小"
        bad={
          <div className="space-y-3">
            <p className="text-xs text-[var(--color-text-tertiary)] mb-2">模拟手机屏幕上的 12px 正文</p>
            <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)] p-3 max-w-[200px]">
              <div style={{ fontSize: "12px", lineHeight: 1.4 }} className="text-[var(--color-text-secondary)]">
                <div className="font-medium text-[var(--color-text)] mb-1" style={{ fontSize: "14px" }}>产品更新</div>
                我们很高兴地宣布新版本已经发布。此次更新包含了多项性能优化和界面改进，让你的使用体验更加流畅。点击下方按钮了解更多。
              </div>
              <div className="mt-2 px-2 py-1 rounded bg-[var(--color-accent)] text-center" style={{ fontSize: "11px" }}>
                <span className="text-white">了解详情</span>
              </div>
            </div>
          </div>
        }
        good={
          <div className="space-y-3">
            <p className="text-xs text-[var(--color-text-tertiary)] mb-2">模拟手机屏幕上的 16px 正文</p>
            <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)] p-3 max-w-[200px]">
              <div style={{ fontSize: "16px", lineHeight: 1.6 }} className="text-[var(--color-text-secondary)]">
                <div className="font-medium text-[var(--color-text)] mb-1" style={{ fontSize: "18px" }}>产品更新</div>
                我们很高兴地宣布新版本已经发布。此次更新包含了多项性能优化和界面改进。
              </div>
              <div className="mt-3 px-3 py-1.5 rounded bg-[var(--color-accent)] text-center" style={{ fontSize: "14px" }}>
                <span className="text-white font-medium">了解详情</span>
              </div>
            </div>
          </div>
        }
        badNotes={[
          "12px 正文在手机上需要凑近才能读",
          "按钮文字 11px，几乎看不清",
          "用户在阳光下或运动中完全无法阅读",
        ]}
        goodNotes={[
          "16px 是移动端正文的最低标准",
          "按钮文字 14px，清晰可读",
          "iOS 和 Android 的系统默认都是 16-17px",
        ]}
      />

      {/* Anti-pattern 2: Too many font sizes */}
      <ComparisonCard
        title="反模式：字号太多"
        bad={
          <div className="space-y-2">
            <p className="text-xs text-[var(--color-text-tertiary)] mb-2">6 种字号——看起来在即兴发挥</p>
            <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)] p-4 space-y-2">
              <div style={{ fontSize: "22px" }} className="font-semibold text-[var(--color-text)]">项目概览</div>
              <div style={{ fontSize: "17px" }} className="text-[var(--color-text-secondary)]">本月进展</div>
              <div style={{ fontSize: "15px" }} className="text-[var(--color-text-secondary)]">已完成 12 个任务</div>
              <div style={{ fontSize: "13px" }} className="text-[var(--color-text-tertiary)]">更新于 3 小时前</div>
              <div style={{ fontSize: "11px" }} className="text-[var(--color-text-tertiary)]">by 张三</div>
              <div style={{ fontSize: "19px" }} className="font-medium text-[var(--color-accent)]">查看详情</div>
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)] font-mono">
              22 · 19 · 17 · 15 · 13 · 11 — 六种字号
            </p>
          </div>
        }
        good={
          <div className="space-y-2">
            <p className="text-xs text-[var(--color-text-tertiary)] mb-2">3 种字号——来自比例尺</p>
            <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-subtle)] p-4 space-y-2">
              <div style={{ fontSize: "20px" }} className="font-semibold text-[var(--color-text)]">项目概览</div>
              <div style={{ fontSize: "14px" }} className="font-medium text-[var(--color-text-secondary)]">本月进展 &middot; 已完成 12 个任务</div>
              <div style={{ fontSize: "12px" }} className="text-[var(--color-text-tertiary)]">更新于 3 小时前 &middot; by 张三</div>
              <div style={{ fontSize: "14px" }} className="font-medium text-[var(--color-accent)] mt-1">查看详情 &rarr;</div>
            </div>
            <p className="text-[10px] text-[var(--color-text-tertiary)] font-mono">
              20 · 14 · 12 — 三种字号，来自 Major Third
            </p>
          </div>
        }
        badNotes={[
          "6 种字号是即兴创作，不是设计系统",
          "22 和 19、17 和 15 之间差异太小，区分不了层级",
          "给人感觉每个元素是单独调的",
        ]}
        goodNotes={[
          "只用 3 种字号，每级差异明确",
          "用字重和颜色弥补字号种类不足",
          "来自 Type Scale，数学保证和谐",
        ]}
      />

      {/* ===== 5.9 排版实战清单 ===== */}
      <h2>5.9 排版速查清单——上线前逐项检查</h2>

      <p>
        以下是你的排版系统上线前应该检查的每一项。满足这些条件，你的排版质量就能超过 90% 的非设计师作品。
      </p>

      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
        <div className="space-y-3">
          {[
            "是否使用了 Type Scale（数学比例尺）来决定字号？",
            "字号种类是否控制在 4-5 种以内？",
            "字重是否控制在 3 种以内（Regular / Medium / Bold）？",
            "正文行高是否在 1.5-1.8 之间？（中文 ≥ 1.7）",
            "正文行宽是否控制在 45-75 字符（中文 25-35 字）？",
            "移动端正文字号是否 ≥ 16px？",
            "中英文混排是否有适当间距（pangu spacing）？",
            "标题行高是否比正文更紧凑（1.2-1.3）？",
            "是否避免了 Light (300) 字重？（屏幕可读性差）",
            "bold 是否只用于真正需要强调的地方？（不超过内容的 10%）",
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
        排版的本质是<strong>用视觉手段给信息排优先级</strong>。字号决定谁先被看见，字重决定谁被记住，行高决定阅读是否舒适，行宽决定读者是否愿意读完。四个参数，四种控制力。当你不知道怎么改善一个界面时，先别动颜色和布局——<strong>调一下排版</strong>，效果可能超出你的预期。排版是投入产出比最高的设计维度，因为它直接影响 90% 的内容呈现。
      </KeyInsight>
    </>
  );
}
