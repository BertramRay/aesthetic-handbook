import ComparisonCard from "@/components/ComparisonCard";
import KeyInsight from "@/components/KeyInsight";
import DesignPrinciple from "@/components/DesignPrinciple";

export default function ChapterHierarchy() {
  return (
    <>
      <p className="text-[var(--color-text-tertiary)] text-sm font-mono mb-2">第三章</p>
      <h1>视觉层次 — 设计中最重要的概念</h1>

      <blockquote>
        &ldquo;Visual hierarchy is the single most important concept in design. Get it right, and almost everything else follows.&rdquo;
        <br />
        <span className="text-[var(--color-text-tertiary)] text-sm">— Refactoring UI</span>
      </blockquote>

      <p>
        打开一个页面，如果所有文字都是 16px Regular，你的眼睛不知道该先看什么——这就像走进一个所有人同时说话的房间。没有人在喊，也没有人在低语，所有声音都在同一个音量。三秒后你会做什么？关门走人。
      </p>
      <p>
        如果你只能从这本手册中学到一个概念，让它是<strong>视觉层次</strong>。层次解决的是设计中最根本的问题：<strong>在一个有限的空间里，引导用户先看什么、再看什么、最后看什么</strong>。它不是锦上添花的装饰技巧，而是信息能否被理解的基础设施。
      </p>

      {/* ===== 3.1 没有层次 vs 有层次 ===== */}
      <h2>3.1 没有层次的页面是什么样的</h2>

      <p>
        想象你写了一封紧急邮件，但通篇用同一个字号、同一个颜色、同一个字重。收件人会从头读到尾吗？不会。他会扫一眼，觉得「不知道重点是什么」，然后标记为「稍后处理」——也就是永远不处理。
      </p>
      <p>
        Edward Tufte 在《The Visual Display of Quantitative Information》中把这种现象称为<strong>「chartjunk」</strong>——视觉噪音。AI 生成的界面之所以经常显得「平」，正是因为 AI 倾向于给所有元素相同的视觉权重。来，亲眼感受一下差距：
      </p>

      {/* No hierarchy vs hierarchy demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示：同一段内容，层次感天差地别</p>
        <div className="grid grid-cols-2 gap-6">
          {/* No hierarchy */}
          <div className="space-y-2">
            <p className="text-xs text-[var(--color-text-tertiary)] mb-2">没有层次</p>
            <div className="text-sm text-[var(--color-text-secondary)] space-y-1.5">
              <div>项目周报</div>
              <div>2024年3月18日</div>
              <div>本周完成了用户认证模块的开发</div>
              <div>修复了12个bug</div>
              <div>下周计划：启动支付集成</div>
              <div>风险：第三方API文档不完善</div>
            </div>
          </div>
          {/* With hierarchy */}
          <div className="space-y-2">
            <p className="text-xs text-[var(--color-text-tertiary)] mb-2">有层次</p>
            <div className="space-y-1.5">
              <div className="text-base font-semibold text-[var(--color-text)]">项目周报</div>
              <div className="text-xs text-[var(--color-text-tertiary)]">2024年3月18日</div>
              <div className="text-sm text-[var(--color-text)] mt-2 font-medium">本周完成了用户认证模块的开发</div>
              <div className="text-sm text-[var(--color-text-secondary)]">修复了 12 个 bug</div>
              <div className="text-sm text-[var(--color-accent)] font-medium mt-2">下周计划：启动支付集成</div>
              <div className="text-xs text-[var(--color-text-tertiary)]">风险：第三方 API 文档不完善</div>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          同样 6 行内容。左边你必须逐行阅读才能理解结构；右边你扫一眼就知道标题、正文、行动项、风险分别在哪。
        </p>
      </div>

      {/* ===== 3.2 建立层次的五个维度 ===== */}
      <h2>3.2 建立层次的五个维度</h2>

      <p>
        层次不是一种工具，而是一个工具箱。里面有五把不同的扳手，高手会同时使用多把来拧紧同一颗螺丝。
      </p>

      {/* --- 大小 --- */}
      <DesignPrinciple number="01" title="大小 Size" author="Type Scale Theory">
        大小是最直接的层次信号——大的东西重要，小的东西次要。但「随手挑几个字号」和「用数学比例尺选字号」之间，差着一个专业级别。类型比例尺（Type Scale）给了你一套经过验证的数学基础，让每一级之间的差异既足够明显，又不会过于跳跃。
      </DesignPrinciple>

      <p>
        以基础字号 16px 为起点，按固定比例递增。不同比例适合不同场景：
      </p>
      <ul>
        <li><strong>Major Second</strong>（1.125）：保守，适合数据密集型界面（Notion、Linear）</li>
        <li><strong>Major Third</strong>（1.250）：平衡，最常用的通用选择</li>
        <li><strong>Perfect Fourth</strong>（1.333）：明显，适合内容型页面（博客、文档）</li>
        <li><strong>Golden Ratio</strong>（1.618）：戏剧性，适合营销着陆页</li>
      </ul>

      {/* Type Scale visual demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">类型比例尺实感 — Major Third (1.250)</p>
        <div className="space-y-4">
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-20 text-right shrink-0 text-xs font-mono">12px</span>
            <div className="flex-1">
              <span style={{ fontSize: "12px" }} className="text-[var(--color-text-tertiary)]">辅助信息、时间戳、元数据</span>
              <div className="mt-1 h-1 rounded-full bg-[var(--color-text-tertiary)]/15" style={{ width: "15%" }} />
            </div>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-20 text-right shrink-0 text-xs font-mono">14px</span>
            <div className="flex-1">
              <span style={{ fontSize: "14px" }} className="text-[var(--color-text-secondary)]">次要正文、描述文字</span>
              <div className="mt-1 h-1 rounded-full bg-[var(--color-text-tertiary)]/20" style={{ width: "25%" }} />
            </div>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-20 text-right shrink-0 text-xs font-mono">16px</span>
            <div className="flex-1">
              <span style={{ fontSize: "16px" }} className="text-[var(--color-text)]">正文 — 你的基础单位</span>
              <div className="mt-1 h-1.5 rounded-full bg-[var(--color-accent)]/40" style={{ width: "40%" }} />
            </div>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-20 text-right shrink-0 text-xs font-mono">20px</span>
            <div className="flex-1">
              <span style={{ fontSize: "20px" }} className="font-medium text-[var(--color-text)]">小标题、卡片标题</span>
              <div className="mt-1 h-1.5 rounded-full bg-[var(--color-accent)]/50" style={{ width: "55%" }} />
            </div>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-20 text-right shrink-0 text-xs font-mono">25px</span>
            <div className="flex-1">
              <span style={{ fontSize: "25px" }} className="font-semibold text-[var(--color-text)]">区块标题</span>
              <div className="mt-1 h-2 rounded-full bg-[var(--color-accent)]/60" style={{ width: "70%" }} />
            </div>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-20 text-right shrink-0 text-xs font-mono">31px</span>
            <div className="flex-1">
              <span style={{ fontSize: "31px" }} className="font-semibold text-[var(--color-text)]">页面标题</span>
              <div className="mt-1 h-2 rounded-full bg-[var(--color-accent)]/75" style={{ width: "85%" }} />
            </div>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[var(--color-text-tertiary)] w-20 text-right shrink-0 text-xs font-mono">39px</span>
            <div className="flex-1">
              <span style={{ fontSize: "39px" }} className="font-bold text-[var(--color-text)]">Hero</span>
              <div className="mt-1 h-2 rounded-full bg-[var(--color-accent)]" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          每一级 &times; 1.25 = 下一级。注意相邻两级之间的差异足以让大脑识别为不同层级，但又不会让人觉得突兀。右侧的进度条帮你感受「视觉权重」的递增。
        </p>
      </div>

      {/* --- 色彩重量 --- */}
      <DesignPrinciple number="02" title="色彩重量 Visual Weight" author="Itten, 1961">
        想象你在白纸上滴了一滴墨水。不管你在纸上写了多少铅笔字，视线总会先被那滴墨水吸走。饱和色比中性色「重」，深色比浅色「重」——利用这个特性，你可以让关键信息「浮」出页面，让辅助信息「退」到背景中。
      </DesignPrinciple>

      {/* Visual Weight demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示：色彩重量如何引导注意力</p>
        <div className="grid grid-cols-2 gap-6">
          {/* Muted version */}
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-3">全部低饱和——没有焦点</p>
            <div className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-text-tertiary)]/20" />
                <div>
                  <div className="text-sm text-[var(--color-text-tertiary)]">新功能上线</div>
                  <div className="text-xs text-[var(--color-text-tertiary)]/60">2 小时前</div>
                </div>
              </div>
              <div className="text-xs text-[var(--color-text-tertiary)]">我们刚刚发布了全新的协作编辑器，支持实时多人协作。</div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded text-xs text-[var(--color-text-tertiary)] bg-[var(--color-text-tertiary)]/10">了解更多</div>
                <div className="px-3 py-1.5 rounded text-xs text-[var(--color-text-tertiary)] bg-[var(--color-text-tertiary)]/10">忽略</div>
              </div>
            </div>
          </div>
          {/* Weighted version */}
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-3">有选择地加重——焦点清晰</p>
            <div className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] text-xs font-bold">N</div>
                <div>
                  <div className="text-sm font-medium text-[var(--color-text)]">新功能上线</div>
                  <div className="text-xs text-[var(--color-text-tertiary)]">2 小时前</div>
                </div>
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">我们刚刚发布了全新的协作编辑器，支持实时多人协作。</div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded text-xs font-medium text-white bg-[var(--color-accent)]">了解更多</div>
                <div className="px-3 py-1.5 rounded text-xs text-[var(--color-text-tertiary)]">忽略</div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          同一张卡片。左边所有元素「平等」，用户不知道该看哪里。右边通过标题加深、头像用主题色、CTA 按钮上色，视线自然被引导到关键操作上。
        </p>
      </div>

      {/* --- 字重 --- */}
      <DesignPrinciple number="03" title="字重 Font Weight">
        Bold 是视觉世界的麦克风——拿到它的人自动获得全场注意力。但如果所有人都拿着麦克风，效果和没有麦克风一模一样。一个界面通常只需要三种字重：Regular（400）用于正文、Medium（500）用于次标题、Bold（700）用于主标题和关键操作。
      </DesignPrinciple>

      {/* Font weight demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">视觉演示：字重是稀缺资源</p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-3">全部加粗 = 没有加粗</p>
            <div className="space-y-1 font-bold text-sm text-[var(--color-text)]">
              <div>项目名称</div>
              <div>创建时间：2024-03-18</div>
              <div>负责人：张三</div>
              <div>状态：进行中</div>
              <div>优先级：高</div>
            </div>
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-3">有选择地加粗 = 信息分层</p>
            <div className="space-y-1 text-sm">
              <div className="font-semibold text-[var(--color-text)]">项目名称</div>
              <div className="text-[var(--color-text-tertiary)]">创建时间：2024-03-18</div>
              <div className="text-[var(--color-text-secondary)]">负责人：张三</div>
              <div className="font-medium text-[var(--color-accent)]">状态：进行中</div>
              <div className="text-[var(--color-text-tertiary)]">优先级：高</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 空间 --- */}
      <DesignPrinciple number="04" title="空间 Space" author="Gestalt, Proximity">
        空间是最被低估的层次工具，也是最安静的沟通方式。格式塔接近性原理告诉我们，间距本身就是信息——近的东西相关，远的东西无关。你不需要画一条分割线来告诉用户「这里是新的一组」，只需要多留 8px 的空白。
      </DesignPrinciple>

      <p>
        当你在表单的「用户名」和「密码」之间用 16px 间距，在「密码」和「提交按钮」之间用 32px 间距时，你在告诉用户「输入区域」和「操作区域」是两个不同的功能块。不需要任何文字说明，空间已经把结构讲清楚了。
      </p>

      {/* --- 位置 --- */}
      <DesignPrinciple number="05" title="位置 Position" author="Nielsen, 2006">
        对于从左到右阅读的语言，左上角获得最多注意，右下角最少。这就是为什么 logo 通常在左上、主操作按钮通常在右上或右下。位置层次是最容易被忽略的维度，但它决定了用户的第一印象。
      </DesignPrinciple>

      {/* ===== 表单层次案例（保留原有） ===== */}
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

      {/* ===== 新增案例：Dashboard 卡片 ===== */}
      <ComparisonCard
        title="案例：Dashboard 数据卡片"
        bad={
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[var(--color-text-secondary)]">月活用户</span>
              <span className="text-[var(--color-text-secondary)]">12,847</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-text-secondary)]">增长率</span>
              <span className="text-[var(--color-text-secondary)]">+23.5%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-text-secondary)]">上月</span>
              <span className="text-[var(--color-text-secondary)]">10,403</span>
            </div>
          </div>
        }
        good={
          <div className="text-sm">
            <div className="text-xs text-[var(--color-text-tertiary)] mb-1">月活用户</div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-bold text-[var(--color-text)]">12,847</span>
              <span className="text-xs font-medium text-green-500">+23.5%</span>
            </div>
            <div className="text-xs text-[var(--color-text-tertiary)]">
              上月 10,403
            </div>
          </div>
        }
        badNotes={[
          "所有数据同等大小、同等颜色",
          "无法一眼看到核心指标",
          "增长率被淹没在文字中",
        ]}
        goodNotes={[
          "核心数字用 2xl + bold，一眼抓住",
          "增长率用绿色标注，语义即视觉",
          "辅助信息退到最小字号",
        ]}
      />

      {/* ===== 新增案例：设置页 ===== */}
      <ComparisonCard
        title="案例：设置页面"
        bad={
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-[var(--color-text-secondary)]">暗色模式</span>
              <div className="w-8 h-4 rounded-full bg-[var(--color-text-tertiary)]/30" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[var(--color-text-secondary)]">通知推送</span>
              <div className="w-8 h-4 rounded-full bg-[var(--color-text-tertiary)]/30" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[var(--color-text-secondary)]">语言</span>
              <span className="text-[var(--color-text-secondary)]">中文</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[var(--color-text-secondary)]">删除账号</span>
              <span className="text-[var(--color-text-secondary)]">点击删除</span>
            </div>
          </div>
        }
        good={
          <div className="text-sm space-y-4">
            <div>
              <div className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-2">外观</div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[var(--color-text)]">暗色模式</div>
                    <div className="text-xs text-[var(--color-text-tertiary)]">降低屏幕亮度以保护眼睛</div>
                  </div>
                  <div className="w-8 h-4 rounded-full bg-[var(--color-accent)]" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[var(--color-text)]">语言</div>
                    <div className="text-xs text-[var(--color-text-tertiary)]">界面显示语言</div>
                  </div>
                  <span className="text-xs text-[var(--color-text-secondary)]">中文</span>
                </div>
              </div>
            </div>
            <div className="border-t border-[var(--color-border-subtle)] pt-4">
              <div className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-2">通知</div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-[var(--color-text)]">推送通知</div>
                  <div className="text-xs text-[var(--color-text-tertiary)]">接收新消息和更新提醒</div>
                </div>
                <div className="w-8 h-4 rounded-full bg-[var(--color-text-tertiary)]/30" />
              </div>
            </div>
            <div className="border-t border-red-500/20 pt-4">
              <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">危险区域</div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-[var(--color-text)]">删除账号</div>
                  <div className="text-xs text-[var(--color-text-tertiary)]">此操作不可撤销</div>
                </div>
                <span className="text-xs text-red-400 font-medium">删除</span>
              </div>
            </div>
          </div>
        }
        badNotes={[
          "所有设置项平铺，无分组",
          "「删除账号」和「暗色模式」视觉权重相同",
          "没有描述文字，选项含义模糊",
        ]}
        goodNotes={[
          "用分组标题 + 分割线建立宏观结构",
          "每项设置有描述文字，减少歧义",
          "危险操作用红色隔离，防止误触",
        ]}
      />

      {/* ===== 3.3 F-pattern 和 Z-pattern ===== */}
      <h2>3.3 眼动路径——你的用户在怎样「扫」页面</h2>

      <p>
        NNGroup（Nielsen Norman Group）的眼动追踪研究（Nielsen, 2006）揭示了两种最典型的浏览模式。理解它们之后，你就知道页面的「黄金位置」在哪里——以及为什么某些重要信息总是被用户忽略。
      </p>

      {/* F-pattern and Z-pattern wireframe demos */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-5">眼动路径演示</p>
        <div className="grid grid-cols-2 gap-8">
          {/* F-pattern */}
          <div>
            <p className="text-xs font-medium text-[var(--color-text)] mb-3">F-pattern — 内容型页面</p>
            <div className="relative rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-4 space-y-3">
              {/* Top horizontal scan */}
              <div className="h-2.5 bg-[var(--color-accent)] rounded-full w-full" />
              <div className="h-1.5 bg-[var(--color-accent)]/30 rounded-full w-4/5" />
              {/* Middle horizontal scan */}
              <div className="h-1.5 bg-[var(--color-text-tertiary)]/15 rounded-full w-full mt-2" />
              <div className="h-2 bg-[var(--color-accent)]/60 rounded-full w-3/5" />
              <div className="h-1.5 bg-[var(--color-accent)]/20 rounded-full w-2/5" />
              {/* Left vertical scan */}
              <div className="h-1.5 bg-[var(--color-text-tertiary)]/15 rounded-full w-full" />
              <div className="h-1.5 bg-[var(--color-accent)]/40 rounded-full w-1/4" />
              <div className="h-1.5 bg-[var(--color-text-tertiary)]/15 rounded-full w-full" />
              <div className="h-1.5 bg-[var(--color-accent)]/30 rounded-full w-1/5" />
              {/* F-shape overlay hint */}
              <div className="absolute top-3 left-3 w-1 h-[85%] bg-[var(--color-accent)]/20 rounded-full" />
            </div>
            <p className="text-xs text-[var(--color-text-tertiary)] mt-2">
              先水平扫顶部 → 再扫中部 → 然后沿左侧垂直下滑。博客、新闻、文档都符合这个模式。
            </p>
          </div>
          {/* Z-pattern */}
          <div>
            <p className="text-xs font-medium text-[var(--color-text)] mb-3">Z-pattern — 营销型页面</p>
            <div className="relative rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-4">
              <div className="flex justify-between items-center mb-6">
                <div className="w-16 h-4 bg-[var(--color-accent)] rounded" />
                <div className="flex gap-2">
                  <div className="w-8 h-2 bg-[var(--color-text-tertiary)]/30 rounded" />
                  <div className="w-8 h-2 bg-[var(--color-text-tertiary)]/30 rounded" />
                  <div className="w-8 h-2 bg-[var(--color-text-tertiary)]/30 rounded" />
                </div>
              </div>
              <div className="text-center space-y-3 my-6">
                <div className="h-3 bg-[var(--color-text-tertiary)]/20 rounded w-3/5 mx-auto" />
                <div className="h-2 bg-[var(--color-text-tertiary)]/10 rounded w-4/5 mx-auto" />
              </div>
              <div className="flex justify-between items-end mt-6">
                <div className="w-20 h-2 bg-[var(--color-text-tertiary)]/20 rounded" />
                <div className="w-20 h-7 bg-[var(--color-accent)] rounded-md" />
              </div>
              {/* Z-path dots */}
              <div className="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] opacity-60 flex items-center justify-center text-[8px] text-white font-bold">1</div>
              <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] opacity-60 flex items-center justify-center text-[8px] text-white font-bold">2</div>
              <div className="absolute bottom-4 left-4 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] opacity-60 flex items-center justify-center text-[8px] text-white font-bold">3</div>
              <div className="absolute bottom-4 right-4 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] opacity-60 flex items-center justify-center text-[8px] text-white font-bold">4</div>
            </div>
            <p className="text-xs text-[var(--color-text-tertiary)] mt-2">
              左上（Logo）→ 右上（导航）→ 斜穿到左下 → 右下（CTA）。着陆页、海报、广告都利用这个路径。
            </p>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          设计启示：把最重要的信息放在用户自然扫到的路径上。F-pattern 页面的标题比正文重要 10 倍；Z-pattern 页面的右下角是 CTA 的最佳位置。
        </p>
      </div>

      {/* ===== 3.4 层次的三个层级 ===== */}
      <h2>3.4 层次的三个层级——宏观、中观、微观</h2>

      <p>
        一个真正专业的界面，在三个尺度上同时具有清晰的层次——就像一座城市在卫星图（城市规划）、街景（建筑立面）和室内设计三个层面上都需要秩序。
      </p>

      <h3>宏观层次——页面各区块间的优先级</h3>
      <p>
        导航区让路给内容区，内容区让路给核心操作。以 Linear 为例：侧边栏窄且暗，把舞台让给中央的内容区；新建 Issue 按钮是全局唯一的强调色元素。
      </p>

      <h3>中观层次——区块内部的信息结构</h3>
      <p>
        一个 Issue 卡片里：标题最大最粗（一眼看到是什么），状态标签用颜色编码（一眼看到进展），创建者和时间用最小的灰色字（需要时再看细节）。
      </p>

      <h3>微观层次——单个元素内部的细节</h3>
      <p>
        一个按钮里：图标 + 文字 + 快捷键提示，三者用大小和透明度区分。一个表格单元格里：主值用正常字重，单位用小号灰色字。
      </p>

      {/* Three-level hierarchy mockup: Linear-style issue detail page */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl border border-[var(--color-border-subtle)] overflow-hidden">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider px-6 pt-5 mb-4">完整案例：三级层次拆解（仿 Linear Issue 详情页）</p>
        <div className="flex text-xs">
          {/* Sidebar - macro: recedes */}
          <div className="w-40 shrink-0 bg-[var(--color-bg-tertiary)] border-r border-[var(--color-border-subtle)] p-3 space-y-3">
            <div className="text-[10px] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-2">
              <span className="text-[var(--color-accent)] text-[10px]">&#9664;</span> 宏观
            </div>
            <div className="flex items-center gap-2 text-[var(--color-text-tertiary)]">
              <div className="w-3 h-3 rounded bg-[var(--color-text-tertiary)]/20" />
              <span>Inbox</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--color-text-tertiary)]">
              <div className="w-3 h-3 rounded bg-[var(--color-text-tertiary)]/20" />
              <span>My Issues</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--color-accent)] font-medium bg-[var(--color-accent)]/10 -mx-1 px-1 py-0.5 rounded">
              <div className="w-3 h-3 rounded bg-[var(--color-accent)]/30" />
              <span>Projects</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--color-text-tertiary)]">
              <div className="w-3 h-3 rounded bg-[var(--color-text-tertiary)]/20" />
              <span>Views</span>
            </div>
            <div className="border-t border-[var(--color-border-subtle)] pt-3 mt-4">
              <div className="text-[var(--color-text-tertiary)]/60">Teams</div>
            </div>
          </div>
          {/* Main content - macro: takes the stage */}
          <div className="flex-1 p-5 space-y-4">
            {/* Issue header - meso level */}
            <div>
              <div className="text-[10px] font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
                &#9664; 中观：卡片内信息结构
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[var(--color-text-tertiary)] font-mono text-[10px]">PROJ-142</span>
                <div className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-500 text-[10px] font-medium">In Progress</div>
              </div>
              <div className="text-base font-semibold text-[var(--color-text)]">
                重构用户认证流程，支持 SSO 登录
              </div>
              <div className="text-[var(--color-text-tertiary)] mt-1">
                张三 &middot; 3 小时前 &middot; Engineering
              </div>
            </div>
            {/* Issue body */}
            <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-2">
              <div className="h-1.5 bg-[var(--color-text-tertiary)]/10 rounded-full w-full" />
              <div className="h-1.5 bg-[var(--color-text-tertiary)]/10 rounded-full w-5/6" />
              <div className="h-1.5 bg-[var(--color-text-tertiary)]/10 rounded-full w-4/6" />
            </div>
            {/* Action bar - micro level */}
            <div className="flex items-center gap-2 pt-2 border-t border-[var(--color-border-subtle)]">
              <div className="text-[10px] font-semibold text-[var(--color-accent)] uppercase tracking-wider mr-2">
                &#9664; 微观
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]">
                <span className="text-[10px]">+</span>
                <span>Add label</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]">
                <span>Assign</span>
                <span className="text-[10px] text-[var(--color-text-tertiary)] font-mono ml-1">A</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]">
                <span>Priority</span>
                <span className="text-[10px] text-[var(--color-text-tertiary)] font-mono ml-1">P</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 pb-5">
          <p className="text-xs text-[var(--color-text-tertiary)] italic">
            宏观：侧边栏用深色背景「退后」，内容区占据 75% 宽度成为舞台。中观：Issue 标题 &gt; 状态标签 &gt; 元数据，三级信息清晰分层。微观：按钮内文字 + 快捷键用透明度区分主次。
          </p>
        </div>
      </div>

      {/* ===== 3.5 眯眼测试 ===== */}
      <h2>3.5 眯眼测试——30 秒验证你的层次是否到位</h2>

      <p>
        这是设计师之间口口相传的快速检验法：<strong>眯起眼睛看你的界面</strong>。当所有细节模糊后，你还能分辨出信息的主次吗？如果一切糊成一片灰色，说明层次不足。如果能看到明确的深浅区域和大小差异，说明层次到位。
      </p>

      {/* Squint test visual demo */}
      <div className="my-6 bg-[var(--color-bg-secondary)] rounded-xl p-6 border border-[var(--color-border-subtle)]">
        <p className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-4">眯眼测试模拟</p>
        <div className="grid grid-cols-2 gap-6">
          {/* Normal view */}
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-3">正常视图</p>
            <div className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-4 space-y-3">
              <div className="text-base font-semibold text-[var(--color-text)]">订单确认</div>
              <div className="text-xs text-[var(--color-text-tertiary)]">订单号: #2024031842</div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">MacBook Pro 14&quot;</span>
                  <span className="text-[var(--color-text)]">¥14,999</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">运费</span>
                  <span className="text-[var(--color-text)]">免费</span>
                </div>
              </div>
              <div className="border-t border-[var(--color-border-subtle)] pt-2 flex justify-between">
                <span className="font-medium text-[var(--color-text)]">合计</span>
                <span className="font-bold text-[var(--color-text)]">¥14,999</span>
              </div>
              <div className="h-8 rounded-md bg-[var(--color-accent)] flex items-center justify-center text-xs font-medium text-white">
                确认支付
              </div>
            </div>
          </div>
          {/* Blurred view (simulated with opacity + blur concept) */}
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)] mb-3">模糊后（模拟眯眼效果）</p>
            <div className="rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-4 space-y-3" style={{ filter: "blur(2px)" }}>
              <div className="text-base font-semibold text-[var(--color-text)]">订单确认</div>
              <div className="text-xs text-[var(--color-text-tertiary)]">订单号: #2024031842</div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">MacBook Pro 14&quot;</span>
                  <span className="text-[var(--color-text)]">¥14,999</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">运费</span>
                  <span className="text-[var(--color-text)]">免费</span>
                </div>
              </div>
              <div className="border-t border-[var(--color-border-subtle)] pt-2 flex justify-between">
                <span className="font-medium text-[var(--color-text)]">合计</span>
                <span className="font-bold text-[var(--color-text)]">¥14,999</span>
              </div>
              <div className="h-8 rounded-md bg-[var(--color-accent)] flex items-center justify-center text-xs font-medium text-white">
                确认支付
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)] mt-4 italic">
          即使模糊后，你仍然能看到：顶部有一个深色的标题、底部有一个强调色的按钮、中间有一条分割线把内容和合计分开。这就是层次到位的标志——结构在模糊后依然存活。
        </p>
      </div>

      <KeyInsight>
        眯眼测试的本质是在检验你的层次是否依赖文字内容。如果必须阅读文字才能理解结构，说明你的层次是用语义（semantics）而非视觉（visuals）建立的。好的视觉层次应该在<strong>语言不通的人面前也能传达结构</strong>——标题就是标题，按钮就是按钮，哪怕你不认识上面的字。
      </KeyInsight>

      {/* ===== 3.6 层次急救清单 ===== */}
      <h2>3.6 层次急救清单——5 个最常见的问题和快速修复</h2>

      <p>
        如果你的界面看起来「平」但说不清哪里不对，按顺序检查以下五个问题。这些覆盖了 90% 的层次问题，每个都可以在 5 分钟内修复。
      </p>

      <div className="my-6 space-y-4">
        {/* Fix 1 */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-lg font-bold text-[var(--color-accent)] font-mono">01</span>
            <h4 className="text-sm font-semibold text-[var(--color-text)]">所有文字都是同一个颜色</h4>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">
            <strong>症状</strong>：整个页面像一篇未排版的 Word 文档。
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            <strong>快速修复</strong>：建立三层文字颜色——主要内容用 <code className="text-xs bg-[var(--color-bg-tertiary)] px-1.5 py-0.5 rounded">--color-text</code>（深色），次要信息用 <code className="text-xs bg-[var(--color-bg-tertiary)] px-1.5 py-0.5 rounded">--color-text-secondary</code>（中灰），辅助信息用 <code className="text-xs bg-[var(--color-bg-tertiary)] px-1.5 py-0.5 rounded">--color-text-tertiary</code>（浅灰）。光这一步就能让层次感提升 50%。
          </p>
        </div>

        {/* Fix 2 */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-lg font-bold text-[var(--color-accent)] font-mono">02</span>
            <h4 className="text-sm font-semibold text-[var(--color-text)]">间距到处都一样</h4>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">
            <strong>症状</strong>：元素之间全是 16px，看不出分组。
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            <strong>快速修复</strong>：「组内间距」用 8-12px，「组间间距」用 24-32px。相关的元素靠近，不相关的元素拉远。记住：间距差至少 2 倍才能被感知为不同。
          </p>
        </div>

        {/* Fix 3 */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-lg font-bold text-[var(--color-accent)] font-mono">03</span>
            <h4 className="text-sm font-semibold text-[var(--color-text)]">没有明确的视觉入口</h4>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">
            <strong>症状</strong>：用户目光在页面上「漂」，不知道先看哪里。
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            <strong>快速修复</strong>：确保页面有且只有一个最大/最粗/最深色的元素作为视觉锚点。通常是标题或 Hero 区域。如果存在两个同等大小的元素在竞争注意力，削弱其中一个。
          </p>
        </div>

        {/* Fix 4 */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-lg font-bold text-[var(--color-accent)] font-mono">04</span>
            <h4 className="text-sm font-semibold text-[var(--color-text)]">CTA 按钮不够突出</h4>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">
            <strong>症状</strong>：用户找不到「下一步该点哪」。
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            <strong>快速修复</strong>：主按钮用实心强调色（filled），次要按钮用描边（outlined）或纯文字（text-only）。同一个视图中只有一个 primary 按钮。如果有多个实心按钮，它们在互相抢注意力。
          </p>
        </div>

        {/* Fix 5 */}
        <div className="bg-[var(--color-bg-secondary)] rounded-xl p-5 border border-[var(--color-border-subtle)]">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-lg font-bold text-[var(--color-accent)] font-mono">05</span>
            <h4 className="text-sm font-semibold text-[var(--color-text)]">用边框代替间距来分组</h4>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">
            <strong>症状</strong>：页面上到处是线条和边框，看起来像铁笼。
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            <strong>快速修复</strong>：删掉 50% 的边框和分割线。用间距和背景色差异代替线条来分组。回顾第一章的接近性原理——距离本身就是最优雅的分组方式。只有在需要精确分割（如表格行）时才保留线条。
          </p>
        </div>
      </div>

      <KeyInsight>
        视觉层次不是一项独立的技能，而是前两章所有原理的<strong>综合应用</strong>。大小、颜色、字重、间距、位置——每一种都是格式塔和前注意特征的具体武器。掌握层次的关键不是学会更多技巧，而是培养一个习惯：<strong>每放一个元素，先问自己「它在整个页面中排第几重要？」</strong>然后让它的视觉权重精确匹配这个排名。排名第一就给它最大的尺寸和最深的颜色，排名第五就让它安静地退到角落。这就是层次——让重要的东西看起来重要，让不重要的东西主动消失。
      </KeyInsight>
    </>
  );
}
