import ComparisonCard from "@/components/ComparisonCard";
import KeyInsight from "@/components/KeyInsight";

export default function ChapterHierarchy() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第三章</p>
      <h1>视觉层次 — 设计中最重要的概念</h1>

      <blockquote>
        "Visual hierarchy is the single most important concept in design. Get it right, and almost everything else follows."
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Refactoring UI</span>
      </blockquote>

      <p>
        如果你只能从这本手册中学到一个概念，让它是<strong>视觉层次</strong>。层次解决的是设计中最根本的问题：<strong>在一个有限的空间里，引导用户先看什么、再看什么、最后看什么</strong>。
      </p>

      <h2>3.1 没有层次的页面是什么样的</h2>

      <p>
        想象一个房间里所有人同时以相同音量说话。你听不清任何一个人。没有视觉层次的页面就是这种状态——所有元素同等大小、同等颜色、同等间距，用户的视线无处安放。
      </p>

      <p>
        Edward Tufte 在《The Visual Display of Quantitative Information》中把这种现象称为<strong>「chartjunk」</strong>——视觉噪音。AI 生成的界面之所以经常显得「平」，正是因为 AI 倾向于给所有元素相同的视觉权重。
      </p>

      <p>
        NNGroup（Nielsen Norman Group）的眼动追踪研究（Nielsen, 2006）揭示了用户浏览网页的典型模式：<strong>F-pattern</strong>（内容型页面，用户先水平扫描顶部，再扫描中部，最后沿左侧垂直扫描）和 <strong>Z-pattern</strong>（营销型页面，视线从左上到右上，斜穿到左下，再到右下）。理解这些模式后，你就知道页面的「黄金位置」在哪里。
      </p>

      <h2>3.2 建立层次的五个维度</h2>

      <h3>大小（Size）</h3>
      <p>
        大小是最直接的层次工具。类型比例尺（Type Scale）为字体大小提供了数学基础：以基础字号（通常 16px）为起点，按固定比例递增。常用比例包括：
      </p>
      <ul>
        <li><strong>Major Second</strong>（1.125）：保守，适合密集界面</li>
        <li><strong>Major Third</strong>（1.250）：平衡，最常用</li>
        <li><strong>Perfect Fourth</strong>（1.333）：明显，适合内容型页面</li>
        <li><strong>Golden Ratio</strong>（1.618）：戏剧性，适合营销页面</li>
      </ul>
      <p>
        以 Major Third 为例：16px → 20px → 25px → 31px → 39px。每一级之间有足够的差异让大脑识别为不同层级，又不会过于跳跃。
      </p>

      <h3>色彩重量（Visual Weight）</h3>
      <p>
        饱和色比中性色「重」，深色比浅色「重」。利用这个特性，你可以让关键信息（标题、CTA、错误提示）用高饱和色或深色来「浮」出页面，让辅助信息（时间戳、元数据、占位文字）用浅灰色「退」到背景中。
      </p>

      <h3>字重（Font Weight）</h3>
      <p>
        Bold（700）是视觉锚点。在一段文字中，Bold 文字会第一时间抓住注意力。但字重也遵循「稀缺性原则」——如果所有文字都是 Bold，就等于没有 Bold。一个界面通常只需要三种字重：Regular（400）用于正文、Medium（500）或 SemiBold（600）用于次标题、Bold（700）用于主标题和关键操作。
      </p>

      <h3>空间（Space）</h3>
      <p>
        这是最被低估的层次工具。格式塔接近性原理告诉我们，间距本身就是信息——近的东西相关，远的东西无关。当你在表单的「用户名」和「密码」之间用 16px 间距，在「密码」和「提交按钮」之间用 32px 间距时，你在告诉用户「输入区域」和「操作区域」是两个不同的功能块。
      </p>

      <h3>位置（Position）</h3>
      <p>
        对于从左到右阅读的语言，左上角获得最多注意，右下角最少。这就是为什么 logo 通常在左上、主操作按钮通常在右上或右下。位置层次是最容易被忽略的维度，但它决定了用户的第一印象。
      </p>

      <ComparisonCard
        title="案例：表单层次"
        bad={
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-[var(--color-text-secondary)]">用户名</span>
              <div className="mt-1 h-9 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
            </div>
            <div>
              <span className="text-[var(--color-text-secondary)]">密码</span>
              <div className="mt-1 h-9 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
            </div>
            <div>
              <span className="text-[var(--color-text-secondary)]">确认密码</span>
              <div className="mt-1 h-9 rounded border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
            </div>
            <div className="h-9 rounded bg-[var(--color-text-tertiary)] flex items-center justify-center text-xs text-[var(--color-bg)]">
              注册
            </div>
            <div className="text-xs text-[var(--color-text-secondary)]">已有账号？点击登录</div>
          </div>
        }
        good={
          <div className="text-sm">
            <h4 className="text-base font-semibold mb-1 text-[var(--color-text)]">创建账号</h4>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-5">请填写以下信息完成注册</p>
            <div className="space-y-4 mb-6">
              <div>
                <span className="text-xs font-medium text-[var(--color-text-secondary)]">用户名</span>
                <div className="mt-1.5 h-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
              </div>
              <div>
                <span className="text-xs font-medium text-[var(--color-text-secondary)]">密码</span>
                <div className="mt-1.5 h-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
              </div>
              <div>
                <span className="text-xs font-medium text-[var(--color-text-secondary)]">确认密码</span>
                <div className="mt-1.5 h-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]" />
              </div>
            </div>
            <div className="h-9 rounded-lg bg-[var(--color-text)] flex items-center justify-center text-xs font-medium text-[var(--color-bg)]">
              创建账号
            </div>
            <p className="text-xs text-[var(--color-text-tertiary)] mt-4 text-center">
              已有账号？<span className="text-[var(--color-accent)]">登录</span>
            </p>
          </div>
        }
        badNotes={[
          "没有标题，缺少上下文",
          "所有元素等距排列，无分组感",
          "按钮用灰色，与输入框缺乏区分",
          "圆角不一致（默认 vs 设计意图）",
        ]}
        goodNotes={[
          "标题 + 描述建立页面层次",
          "输入区域与操作区域用间距分隔（16px vs 24px）",
          "按钮用强对比色，视觉焦点明确",
          "辅助链接用小字 + 强调色，层级退后但可发现",
        ]}
      />

      <h2>3.3 层次的三个层级</h2>

      <p>
        优秀的界面在三个尺度上同时具有清晰的层次：
      </p>

      <p>
        <strong>宏观层次</strong>——页面各区块间的优先级。导航区让路给内容区，内容区让路给核心操作。以 Linear 为例：侧边栏窄且暗，把舞台让给中央的内容区；新建 Issue 按钮是全局唯一的强调色元素。
      </p>

      <p>
        <strong>中观层次</strong>——区块内部的信息结构。一个 Issue 卡片里：标题最大最粗（一眼看到是什么），状态标签用颜色编码（一眼看到进展），创建者和时间用最小的灰色字（需要时再看细节）。
      </p>

      <p>
        <strong>微观层次</strong>——单个元素内部的细节。一个按钮里：图标 + 文字 + 快捷键提示，三者用大小和透明度区分。一个表格单元格里：主值用正常字重，单位用小号灰色字。
      </p>

      <KeyInsight>
        检验层次是否清晰的方法：<strong>眯起眼睛看你的界面</strong>。当所有细节模糊后，你还能分辨出信息的主次吗？如果一切糊成一片灰色，说明层次不足。如果能看到明确的深浅区域和大小差异，说明层次到位。这就是为什么设计师经常对着 thumbnail 大小的截图审视自己的作品。
      </KeyInsight>
    </>
  );
}
