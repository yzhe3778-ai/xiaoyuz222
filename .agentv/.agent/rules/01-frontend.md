# 前端开发规则

> 适用于 React/Vue/Next.js 等前端项目

## 1. TypeScript 规则

### 1.1 类型定义

- ✅ 所有公共接口必须有类型定义
- ✅ 禁止使用 `any`，使用 `unknown` 代替
- ✅ Props 接口命名：`{ComponentName}Props`

**示例：**

```typescript
// ✅ 正确
interface UserCardProps {
  user: User;
  onEdit?: (id: string) => void;
}

// ❌ 错误
function process(data: any) {}
```

## 2. React 组件规则

### 2.1 组件结构

- ✅ 使用函数式组件
- ✅ 使用 TypeScript
- ✅ 复杂组件提取自定义 Hook

### 2.2 文件结构

```
components/
├── Button/
│   ├── Button.tsx
│   ├── Button.test.tsx
│   └── index.ts
```

## 3. 样式规则

- ✅ 使用 Tailwind CSS 或 CSS Modules
- ✅ 避免内联样式
- ✅ 响应式设计优先

## 4. 性能规则

- ✅ 使用 `memo` 优化重渲染
- ✅ 使用 `useCallback` 缓存函数
- ✅ 使用 `useMemo` 缓存计算

## 5. 测试规则

- ✅ 核心组件必须有单元测试
- ✅ 使用 React Testing Library
- ✅ 测试覆盖率 ≥ 70%

---

_适用于开发阶段_
