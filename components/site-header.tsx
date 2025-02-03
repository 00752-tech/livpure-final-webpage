"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.currentTarget as HTMLAnchorElement
      const targetId = target.getAttribute("href")?.slice(1)
      const targetElement = document.getElementById(targetId || "")
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])

  const handleOrderClick = () => {
    window.location.href = "https://hop.clickbank.net/?vendor=livpure&affiliate=smartdiet3&lid=6100"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">LivPure</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link
              href="#benefits"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Benefits
            </Link>
            <Link
              href="#reviews"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Reviews
            </Link>
            <Button onClick={handleOrderClick}>Order Now</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

