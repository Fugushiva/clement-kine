'use client'

import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

interface CookieConsent {
  analytics: boolean
  third_party: boolean
  timestamp: string
}

export function AnalyticsConditional() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    function checkConsent() {
      try {
        const raw = localStorage.getItem('cookie-consent')
        if (raw) {
          const consent = JSON.parse(raw) as CookieConsent
          setAnalyticsEnabled(consent.analytics === true)
        }
      } catch {
        setAnalyticsEnabled(false)
      }
    }

    checkConsent()

    // Re-check when consent changes (e.g. after banner interaction)
    window.addEventListener('storage', checkConsent)
    return () => window.removeEventListener('storage', checkConsent)
  }, [])

  if (!analyticsEnabled) return null

  return <Analytics />
}
