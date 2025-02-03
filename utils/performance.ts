export const imageLoadingPriorities = {
  high: ["hero", "logo", "above-fold"],
  medium: ["testimonials", "products"],
  low: ["footer", "background"],
}

export const deferNonCritical = (callback: () => void, timeout = 1000) => {
  if (typeof window !== "undefined") {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(callback)
    } else {
      setTimeout(callback, timeout)
    }
  }
}

export const addPassiveEventListener = (target: Element, type: string, listener: EventListener) => {
  target.addEventListener(type, listener, { passive: true })
  return () => target.removeEventListener(type, listener)
}

// Font loading optimization
export const optimizeFontLoading = () => {
  if (typeof window !== "undefined") {
    const fontStylesheet = document.createElement("link")
    fontStylesheet.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
    fontStylesheet.rel = "stylesheet"
    fontStylesheet.media = "print"
    fontStylesheet.onload = () => {
      fontStylesheet.media = "all"
    }
    document.head.appendChild(fontStylesheet)
  }
}

// Reduce DOM size by cleaning up unnecessary elements
export const cleanupDOM = () => {
  const removeEmptyElements = () => {
    const emptyElements = document.querySelectorAll(
      ":empty:not(img):not(input):not(br):not(hr):not(area):not(base):not(col):not(embed):not(link):not(meta):not(param):not(source):not(track):not(wbr)",
    )
    emptyElements.forEach((element) => element.remove())
  }

  if (typeof window !== "undefined") {
    deferNonCritical(removeEmptyElements)
  }
}

export const preloadResources = [
  // Critical CSS
  { rel: "preload", href: "/styles/critical.css", as: "style" },
  // Logo
  {
    rel: "preload",
    href: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/O%20(1)-KhR1uRHPCivZGREMOVO8rhpxd5Pq41.png",
    as: "image",
  },
  // Hero image
  {
    rel: "preload",
    href: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/livpure%20girl%20in%20bikini.jpg-7QurKOop1UFgA57MI64g7kECp8NGXN.png",
    as: "image",
  },
]

