"use client"

import { useEffect } from "react"
import { disableDevTools } from "@/utils/content-protection"

export function ContentProtection() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // Disable right-click context menu
      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault()
        return false
      }

      // Disable keyboard shortcuts
      const handleKeyDown = (e: KeyboardEvent) => {
        // Prevent Ctrl+S, Ctrl+U, Ctrl+Shift+I, F12
        if (
          (e.ctrlKey && (e.key === "s" || e.key === "u")) ||
          (e.ctrlKey && e.shiftKey && e.key === "i") ||
          e.key === "F12"
        ) {
          e.preventDefault()
          return false
        }
      }

      // Disable text selection in protected areas
      const handleSelection = (e: Event) => {
        const target = e.target as HTMLElement
        if (target.closest(".protect-selection")) {
          e.preventDefault()
          return false
        }
      }

      // Disable image dragging
      const handleDragStart = (e: DragEvent) => {
        const target = e.target as HTMLElement
        if (target.tagName === "IMG") {
          e.preventDefault()
          return false
        }
      }

      // Add event listeners
      document.addEventListener("contextmenu", handleContextMenu)
      document.addEventListener("keydown", handleKeyDown)
      document.addEventListener("selectstart", handleSelection)
      document.addEventListener("dragstart", handleDragStart)

      // Disable dev tools
      disableDevTools()

      // Cleanup
      return () => {
        document.removeEventListener("contextmenu", handleContextMenu)
        document.removeEventListener("keydown", handleKeyDown)
        document.removeEventListener("selectstart", handleSelection)
        document.removeEventListener("dragstart", handleDragStart)
      }
    }
  }, [])

  return null
}

