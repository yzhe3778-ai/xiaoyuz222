# 共享规则

> 适用于前后端共享的类型、工具函数等

## 1. 类型定义规则

### 1.1 文件组织

```
types/
├── api.ts        # API 相关类型
├── models.ts     # 数据模型
└── index.ts      # 统一导出
```

### 1.2 命名规范

- 请求类型：`{Action}Request`
- 响应类型：`{Action}Response`
- 实体类型：`{Entity}`

## 2. 工具函数规则

### 2.1 纯函数优先

```typescript
// ✅ 纯函数，无副作用
export function formatDate(date: Date): string {
  return date.toLocaleDateString();
}
```

### 2.2 完整的类型

```typescript
// ✅ 参数和返回值都有类型
function add(a: number, b: number): number {
  return a + b;
}
```

## 3. 测试规则

- ✅ 工具函数 100% 测试覆盖
- ✅ 边界情况测试
- ✅ 类型测试

---

_适用于所有阶段_
