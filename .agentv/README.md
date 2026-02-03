# 🧠 .agentv0 (极简 AI 规则包)

这是 **AI 辅助编程规则体系** 的极简版本。不含任何脚本、工具或依赖。
纯粹的规则文件，拿来即用。

---

## 🚀 如何使用

### 1. 复制文件

将此文件夹内的所有内容复制到你的项目根目录：

- 📂 `.agent/`
- 📄 `.cursorrules` (可选，如果你用 Cursor)
- 📄 `.windsurfrules` (可选，如果你用 Windsurf)

### 2. 激活 AI

- **Cursor / Windsurf**: 直接开始对话，规则会自动加载。
- **Antigravity / Copilot**: 在对话时引用规则：
  > "请阅读 @[.agent/rules/00-project-overview.md] 并按规则开发。"

### 3. 设置阶段

编辑 `.agent/.current-stage` 文件，填入当前阶段：

- `PROTOTYPE` (原型期 - 宽松)
- `DEVELOPMENT` (开发期 - 标准)
- `TESTING` (测试期 - 严格)

---

就是这么简单。
