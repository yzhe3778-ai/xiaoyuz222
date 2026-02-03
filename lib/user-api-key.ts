"use client";

const API_KEY_STORAGE_KEY = "supadata_api_key";

/**
 * 获取用户自定义的 Supadata API 密钥
 * @returns 用户的 API 密钥，如果没有则返回 undefined
 */
export function getUserApiKey(): string | undefined {
    if (typeof window === "undefined") {
        return undefined;
    }

    try {
        const key = localStorage.getItem(API_KEY_STORAGE_KEY);
        return key?.trim() || undefined;
    } catch {
        return undefined;
    }
}

/**
 * 保存用户自定义的 Supadata API 密钥
 * @param key API 密钥
 */
export function setUserApiKey(key: string): void {
    if (typeof window === "undefined") {
        return;
    }

    try {
        if (key.trim()) {
            localStorage.setItem(API_KEY_STORAGE_KEY, key.trim());
        } else {
            localStorage.removeItem(API_KEY_STORAGE_KEY);
        }
    } catch {
        // localStorage 不可用时忽略
    }
}

/**
 * 清除用户自定义的 Supadata API 密钥
 */
export function clearUserApiKey(): void {
    if (typeof window === "undefined") {
        return;
    }

    try {
        localStorage.removeItem(API_KEY_STORAGE_KEY);
    } catch {
        // localStorage 不可用时忽略
    }
}
