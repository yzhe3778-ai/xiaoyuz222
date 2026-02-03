# 规则变更日志

> 记录规则的版本更新历史
> 格式遵循 [Keep a Changelog](https://keepachangelog.com/)

---

## [1.0.5] - 2026-01-28

### 修复

- 版本号不一致 (#006)
  - 00-project-overview.md: 1.0.0 → 1.0.5
  - 99-落地实施规范.md: 1.0.0 → 1.0.5
  - package.json: version 更新为 1.0.5
- .markdown-link-check.json (#006)
  - timeout: "10s" → 10000（毫秒数字）
  - fallbackRetryDelay: "10s" → 10000
- package.json lint:links (#006)
  - `**/*.md` → `git ls-files *.md`
  - 只检查 git 跟踪的文件，避免扫描忽略目录

---

## [1.0.4] - 2026-01-28

### 新增

- .markdown-link-check.json (#005)
  - 链接检查白名单（localhost、example.com）
  - 重试策略（retryOn429、retryCount）
- .markdownlintignore (#005)
  - 忽略参考资料目录（123/、项目文档资料/）
  - 忽略模板文件
- .prettierignore (#005)
  - 同上忽略规则
- package-lock.json (#005)
  - 锁定依赖版本，确保可复现

### 修改

- package.json (#005)
  - lint-staged 添加 cspell（提交前拼写检查）
  - lint:links 使用配置文件
- ci.yml (#005)
  - `npm install` → `npm ci`（使用锁文件）

---

## [1.0.3] - 2026-01-28

### 新增

- .agent/knowledge/ (#004)
  - 知识库目录，支持 RAG
  - README.md：使用说明和模板
- .agent/prompts/ (#004)
  - 提示词模板库
  - README.md：通用模板和场景化模板
- .cursorrules (#004)
  - Cursor AI 自动上下文配置
- .windsurfrules (#004)
  - Windsurf AI 自动上下文配置

### 修改

- 00-project-overview.md (#004)
  - 新增知识库与提示词说明
  - 新增自动上下文配置说明

---

## [1.0.2] - 2026-01-28

### 修复

- package.json (#003)
  - 添加 markdown-link-check 依赖
  - glob 单引号改为双引号（Windows 兼容）
  - lint-staged: `*.md` → `**/*.md`（匹配所有目录）
- ci.yml (#003)
  - `npm ci` → `npm install`（无需 package-lock.json）
- cspell.json (#003)
  - ignorePaths 添加 `.agent/rules` 和 `.agent/feedback`
  - 扩展词库

---

## [1.0.1] - 2026-01-28

### 新增

- 99-落地实施规范.md：补充完整的落地指南
  - 规则文件引用矩阵
  - 反馈闭环流程
  - 阶段切换检查清单
  - 规则冲突优先级
  - 按项目类型剪裁
  - 最小可运行自动化配置
  - 权限管理策略
  - 度量指标体系

### 修改

- 00-project-overview.md：补充完整的规则清单和引用组合

---

## [1.0.0] - 2026-01-28

### 新增

- 初始化项目规则体系
- 00-project-overview.md：项目概览
- 01-frontend.md：前端规则
- 02-backend.md：后端规则
- 03-shared.md：共享规则
- 04-documentation.md：文档规则
- stages/prototype.md：原型阶段
- stages/development.md：开发阶段
- stages/testing.md：测试阶段
- stages/production.md：生产阶段
- feedback/rule-issues.md：问题记录模板

### 说明

- 当前阶段：DEVELOPMENT
- 项目类型：文档项目

---

## 变更记录规范

### 版本号规则

```
MAJOR.MINOR.PATCH

MAJOR：重大变更，不兼容旧规则
MINOR：新增规则或功能
PATCH：规则修复或小调整
```

### 条目格式

```markdown
## [X.X.X] - YYYY-MM-DD

### 新增

- 新增的规则（关联 issue #XXX）

### 修改

- 修改的规则（关联 issue #XXX）

### 删除

- 删除的规则

### 修复

- 修复的问题
```

### 与 rule-issues.md 联动

1. 问题采纳后，更新此文件
2. 条目中标注关联的 issue 编号
3. 同步更新 rule-issues.md 状态

---

_维护者：项目团队_
