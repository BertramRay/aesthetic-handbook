export interface Chapter {
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  readingTime: string;
}

export const chapters: Chapter[] = [
  {
    slug: "preface",
    number: "序",
    title: "为什么需要审美能力",
    description: "AI 生成界面的审美困境、审美的科学基础、本手册的学习路径",
    readingTime: "3 分钟",
  },
  {
    slug: "perception",
    number: "01",
    title: "视觉感知的科学基础",
    subtitle: "Gestalt · 认知负荷 · 加工流畅性",
    description: "格式塔原理、前注意特征、认知负荷理论、审美的心理学机制",
    readingTime: "12 分钟",
  },
  {
    slug: "history",
    number: "02",
    title: "设计思想简史",
    subtitle: "包豪斯 · 瑞士风格 · 数字革命",
    description: "从工艺美术运动到 Design System，理解当代 UI 审美的源流",
    readingTime: "15 分钟",
  },
  {
    slug: "hierarchy",
    number: "03",
    title: "视觉层次",
    subtitle: "设计中最重要的概念",
    description: "信息优先级可视化、五个层次维度、宏观/中观/微观层次",
    readingTime: "10 分钟",
  },
  {
    slug: "color",
    number: "04",
    title: "色彩理论与实践",
    subtitle: "科学 · 心理学 · 工作流",
    description: "HSL 色彩模型、60-30-10 法则、色彩心理学、实用配色工作流",
    readingTime: "10 分钟",
  },
  {
    slug: "typography",
    number: "05",
    title: "字体排版",
    subtitle: "历史 · 数学 · 中英文搭配",
    description: "类型比例尺、行高与段落宽度、字重纪律、中文排版特殊性",
    readingTime: "8 分钟",
  },
  {
    slug: "spacing",
    number: "06",
    title: "间距与布局",
    subtitle: "网格 · 留白 · 呼吸感",
    description: "4px 基准网格、间距即关系、网格系统、留白的艺术",
    readingTime: "8 分钟",
  },
  {
    slug: "components",
    number: "07",
    title: "组件审美",
    subtitle: "按钮 · 表单 · 卡片 · 导航 · 表格",
    description: "常见 UI 元素的设计解剖，从 AI 生成到设计师水准的改造路径",
    readingTime: "15 分钟",
  },
  {
    slug: "expression",
    number: "08",
    title: "学会表达",
    subtitle: "从模糊感受到精确语言",
    description: "审美词汇系统、AI Prompt 写法、Code Review 设计反馈",
    readingTime: "8 分钟",
  },
  {
    slug: "practice",
    number: "09",
    title: "持续训练",
    subtitle: "Skills · Figma MCP · 团队机制",
    description: "Claude Code 设计 Skills 工具链、Figma MCP 配置、审美资源体系、团队提升机制",
    readingTime: "12 分钟",
  },
];

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function getAdjacentChapters(slug: string) {
  const index = chapters.findIndex((c) => c.slug === slug);
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}
