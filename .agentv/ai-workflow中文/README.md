# Zevi 的 AI 开发工作流

这份文档包含了我用 AI 构建产品时使用的精确提示词、系统指令和斜杠命令。取你需要的，适配到你自己的项目和需求。

别忘了和我分享你是如何改进这些内容的，以及我哪里做错了！

## 📁 目录结构

```
ai-workflow/
├── CTO-Project-Setup/     # CTO 项目设置（在写代码前先设置这个）
├── Slash-Commands/        # 斜杠命令（工作流检查点）
├── Interview-Coach/       # 面试辅导项目
└── README.md             # 本文件
```

## 🚀 快速开始

### 第一步：设置 CTO 项目

在使用任何编码工具之前，先设置 `CTO-Project-Setup/` 中的指令。这是一个充当你的技术联合创始人的 ChatGPT 或 Claude 项目。

**关键点**：CTO 会提出反驳、提出澄清问题，直到真正理解为止，并将工作分解成阶段，以便及早发现错误。

### 第二步：使用斜杠命令

`Slash-Commands/` 文件夹包含保存的提示词，你可以在 Cursor 或 Claude Code 中用 `/命令名` 触发。每个命令都是工作流中的一个检查点。

### 第三步：面试辅导（可选）

如果你正在准备面试，使用 `Interview-Coach/` 中的指令。

## 📋 可用命令

| 命令 | 用途 |
|------|------|
| `/create-issue` | 快速捕获问题/功能 |
| `/explore` | 初步探索阶段 |
| `/plan` | 计划创建阶段 |
| `/implement` | 实现阶段 |
| `/review` | 代码审查 |
| `/peer-review` | 同行评审 |
| `/update-docs` | 更新文档 |
| `/teach` | 学习机会 |

## 💡 使用技巧

- 当上下文太长时：启动一个新会话，只加载计划文件
- 当 AI 一直在某件事上失败时：问"你的系统提示词或工具中是什么导致了这个错误？"然后更新你的文档
- 推荐模型：
  - **Claude** - 用于规划和复杂逻辑
  - **Codex** - 用于棘手的 bug
  - **Gemini** - 用于 UI
  - **Cursor 中的 Composer** - 当速度重要时

---

**来源**: [Zevi's AI Development Workflow](https://shorthaired-billboard-f9a.notion.site/Zevi-s-AI-Development-Workflow-2c86baffbc90810fa63bd0ee8ecffce9)
