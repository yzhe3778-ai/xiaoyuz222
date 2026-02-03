# 后端 API 开发规则

> 适用于 Node.js/Express/Next.js API 等后端项目

## 1. API 设计规则

### 1.1 RESTful 规范

- ✅ 使用名词复数：`/api/users`
- ✅ 使用正确的 HTTP 方法
- ✅ 返回正确的状态码

### 1.2 响应格式

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}
```

## 2. 参数验证规则

- ✅ 所有输入必须验证
- ✅ 使用 Zod 或 Yup
- ✅ 返回清晰的错误信息

**示例：**

```typescript
import { z } from "zod";

const createUserSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
});
```

## 3. 错误处理规则

- ✅ 统一错误处理中间件
- ✅ 分类处理不同错误
- ✅ 记录错误日志

## 4. 安全规则

- ✅ 输入验证和清理
- ✅ SQL 注入防护
- ✅ XSS 防护
- ✅ 速率限制

## 5. 日志规则

- ✅ 请求日志记录
- ✅ 错误日志记录
- ✅ 敏感信息脱敏

---

_适用于开发阶段_
