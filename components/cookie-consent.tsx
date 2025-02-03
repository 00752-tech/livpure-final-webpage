"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-md">
      <div className="container flex items-center justify-between">
        <p className="text-sm text-gray-700">
          We use cookies to improve your experience on our site. By continuing to use our site, you agree to our use of
          cookies.
        </p>
        <Button onClick={acceptCookies} className="ml-4">
          Accept
        </Button>
      </div>
    </div>
  )
}

