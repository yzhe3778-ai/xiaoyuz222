import { useState, useEffect } from 'react'
import { isInAppBrowser } from '@/lib/webview-detector'

/**
 * Hook to detect if the user is in an in-app browser (WebView).
 *
 * Useful for warning users that Google OAuth won't work in embedded browsers.
 */
export function useInAppBrowser(): boolean {
  const [isInApp, setIsInApp] = useState(false)

  useEffect(() => {
    setIsInApp(isInAppBrowser())
  }, [])

  return isInApp
}
