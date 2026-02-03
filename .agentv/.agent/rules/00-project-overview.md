# 项目规则概览

## 项目信息

| 项目     | 说明                    |
| -------- | ----------------------- |
| 项目名称 | GLM-4.7 AI编程指南      |
| 项目类型 | 文档项目 / 学习资料     |
| 当前阶段 | 开发阶段                |
| 阶段文件 | `.agent/.current-stage` |

---

## 规则文件完整清单

### 核心配置

| 文件                     | 引用级别 | 说明             |
| ------------------------ | -------- | ---------------- |
| `.current-stage`         | 必读     | 当前阶段标识     |
| `CHANGELOG.md`           | 必更新   | 规则变更日志     |
| `00-project-overview.md` | 必读     | 本文件，项目入口 |

### 领域规则

| 文件                  | 适用项目 | 本项目引用 |
| --------------------- | -------- | ---------- |
| `01-frontend.md`      | 前端项目 | 可选       |
| `02-backend.md`       | 后端项目 | 可选       |
| `03-shared.md`        | 所有项目 | 推荐       |
| `04-documentation.md` | 文档项目 | **必读**   |

### 阶段规则

| 文件                    | 阶段   | 规则松紧 |
| ----------------------- | ------ | -------- |
| `stages/prototype.md`   | 原型期 | 宽松     |
| `stages/development.md` | 开发期 | 标准     |
| `stages/testing.md`     | 测试期 | 严格     |
| `stages/production.md`  | 生产期 | 最严     |

### 反馈与落地

| 文件                      | 用途         |
| ------------------------- | ------------ |
| `feedback/rule-issues.md` | 问题记录     |
| `99-落地实施规范.md`      | 完整落地指南 |

### 知识库与提示词

| 目录         | 用途                                       |
| ------------ | ------------------------------------------ |
| `knowledge/` | 项目知识库（API 文档、设计文档、参考资料） |
| `prompts/`   | 常用提示词模板                             |
| `metrics/`   | 度量报告                                   |

### 自动上下文配置

| 文件             | 用途                     |
| ---------------- | ------------------------ |
| `.cursorrules`   | Cursor AI 自动加载规则   |
| `.windsurfrules` | Windsurf AI 自动加载规则 |

---

## 规则优先级（冲突处理）

```
优先级从高到低：

1. 阶段规则（stages/*.md）
2. 领域规则（01-*.md / 02-*.md / 04-*.md）
3. 共享规则（03-shared.md）
4. 项目概览（本文件）

冲突时，高优先级规则覆盖低优先级
```

---

## 本项目引用组合

**文档项目标准引用：**

```
必须引用：
@.agent/.current-stage
@.agent/rules/00-project-overview.md
@.agent/rules/stages/development.md
@.agent/rules/04-documentation.md

推荐引用：
@.agent/rules/03-shared.md
@.agent/rules/99-落地实施规范.md
```

---

## 自动化配置（文档项目）

### 工具链

| 工具         | 用途              |
| ------------ | ----------------- |
| markdownlint | Markdown 语法检查 |
| cspell       | 拼写检查          |
| prettier     | 格式化            |
| husky        | Git hooks         |
| commitlint   | 提交信息规范      |

### 安装命令

```bash
npm install -D markdownlint-cli cspell prettier husky @commitlint/cli @commitlint/config-conventional
npx husky install
```

---

## 闭环流程

### 问题处理

```
记录问题 -> 评审讨论 -> 采纳/拒绝 -> 更新规则 -> 更新CHANGELOG
```

### 阶段切换

```
确认目标达成 -> 更新.current-stage -> 调整自动化 -> 记录CHANGELOG -> 通知团队
```

---

## 度量指标

| 指标         | 阈值   | 周期 |
| ------------ | ------ | ---- |
| 规则遵循率   | >= 90% | 每周 |
| 问题反馈周期 | < 14天 | 每月 |
| 规则采纳率   | >= 50% | 每月 |

---

## 快速开始

### 与 AI 对话模板

```
当前阶段：@.agent/.current-stage
项目概览：@.agent/rules/00-project-overview.md
阶段规则：@.agent/rules/stages/development.md
文档规则：@.agent/rules/04-documentation.md
落地规范：@.agent/rules/99-落地实施规范.md

请帮我 [具体需求]
```

---

_最后更新：2026-01-28_
_规则版本：1.0.5_
