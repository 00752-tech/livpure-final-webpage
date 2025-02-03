"use client"

import Image from "next/image"
import { useState, useEffect, memo } from "react"
import { getBlurDataURL } from "@/utils/image-optimization"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
}

export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: "50px" },
    )

    const currentElement = document.querySelector(`[data-image-src="${src}"]`)
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      observer.disconnect()
    }
  }, [src])

  if (!inView && !priority) {
    return <div data-image-src={src} className={`${className} bg-gray-100`} style={{ width, height }} />
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className={`
          duration-700 ease-in-out
          ${isLoading ? "scale-110 blur-sm" : "scale-100 blur-0"}
        `}
        onLoadingComplete={() => setLoading(false)}
        placeholder="blur"
        blurDataURL={getBlurDataURL(width, height)}
      />
    </div>
  )
})

