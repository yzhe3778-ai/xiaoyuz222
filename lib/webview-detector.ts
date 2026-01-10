/**
 * Detects if the user is accessing the site from an in-app browser (WebView).
 *
 * Google blocks OAuth flows from embedded browsers for security reasons.
 * This detection allows us to warn users before they attempt Google sign-in.
 */

// Common in-app browser/WebView user agent patterns
const WEBVIEW_PATTERNS = [
  /FBAN|FBAV/i,           // Facebook
  /Instagram/i,            // Instagram
  /Twitter/i,              // Twitter/X
  /LinkedIn/i,             // LinkedIn
  /MicroMessenger/i,       // WeChat
  /WhatsApp/i,             // WhatsApp
  /Line\//i,               // Line
  /Snapchat/i,             // Snapchat
  /WebView/i,              // Generic WebView
  /wv\)/i,                 // Android WebView indicator
]

/**
 * Checks if the current browser is an in-app browser (WebView).
 * Returns false during SSR.
 */
export function isInAppBrowser(): boolean {
  if (typeof navigator === 'undefined') return false
  const ua = navigator.userAgent
  return WEBVIEW_PATTERNS.some(pattern => pattern.test(ua))
}
