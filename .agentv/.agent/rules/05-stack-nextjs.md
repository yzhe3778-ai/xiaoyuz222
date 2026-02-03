# Next.js 全栈开发规则 (Vibe Stack)

> 适用技术栈：Next.js 14+ (App Router) + Tailwind CSS + Shadcn/ui + Lucide React + Supabase

---

## 🏗️ 核心架构规范

- **框架版本**：必须使用 Next.js 14+ **App Router** (`app/` 目录结构)。
- **语言**：强制使用 **TypeScript**。
- **组件库**：强制使用 **Shadcn/ui**。
- **图标库**：强制使用 **Lucide React**。
- **样式**：强制使用 **Tailwind CSS**，禁止创建 `.css` / `.scss` 文件（`globals.css` 除外）。

---

## 📂 目录结构

```
app/
  layout.tsx       # 全局布局
  page.tsx         # 首页
  (auth)/          # 路由分组（不影响URL）
    login/
      page.tsx
components/
  ui/              # Shadcn 组件（Button, Card等）
  shared/          # 业务通用组件
lib/
  utils.ts         # 工具函数
  supabase.ts      # 数据库客户端
types/             # 全局类型定义
```

---

## 🧩 编码规范

### 1. 组件开发

- **服务端组件优先**：默认使用 Server Component。
- **客户端组件**：只有在用到 `useState`, `useEffect`, `onClick` 等交互时，才在文件顶部加 `"use client"`。
- **图标使用**：
  ```tsx
  import { Loader2, Plus } from 'lucide-react';
  <Loader2 className="animate-spin" />;
  ```
- **Shadcn 使用**：
  不要自己写复杂的 UI 组件，随时优先复用 `components/ui` 下的基础组件。
  ```tsx
  import { Button } from '@/components/ui/button';
  <Button variant="outline">点击我</Button>;
  ```

### 2. 样式规范 (Tailwind)

- **响应式**：移动端优先，使用 `md:`, `lg:` 覆盖桌面端样式。
- **颜色**：使用 CSS 变量（如 `bg-primary`, `text-muted-foreground`）以支持深色模式。
- **布局**：优先使用 Flexbox 和 Grid。

  ```tsx
  // ✅ 正确
  <div className="flex items-center justify-between p-4">

  // ❌ 错误（不要用 style 属性）
  <div style={{ display: 'flex', padding: '16px' }}>
  ```

### 3. 数据获取 (Supabase)

- **服务端获取（推荐）**：直接在 Page 中 async/await，不需要 API 路由。
  ```tsx
  // app/page.tsx
  export default async function Page() {
    const supabase = createClient();
    const { data } = await supabase.from('todos').select();

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }
  ```

---

## 🚀 初始化检查清单

当你开始一个新任务时，请检查：

1. [ ] 是否已安装 Shadcn 组件？(`npx shadcn-ui@latest add button card ...`)
2. [ ] 是否使用了 Lucide 图标？
3. [ ] 是否优先使用了 Tailwind 类名？
4. [ ] 数据库操作是否类型安全？

---
