import type { Metadata } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: "LivPure Review 2025: Natural Supplement for Liver Support and Wellness",
    template: "%s | LivPure Review 2025",
  },
  description:
    "Discover LivPure, a natural supplement designed to support liver health and overall wellness. Find comprehensive reviews, podcast episodes, and scientific research about LivPure ingredients, effectiveness, and real user experiences.",
  keywords:
    "LivPure, LivPure reviews 2025, liver health supplement, natural liver detox, weight loss supplement, LivPure podcast, LivPure ingredients, buy LivPure",
  openGraph: {
    title: "LivPure Review 2025: Natural Supplement for Liver Support and Wellness",
    description:
      "Discover LivPure, a natural supplement designed to support liver health and overall wellness. Find comprehensive reviews, podcast episodes, and scientific research about LivPure ingredients, effectiveness, and real user experiences.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/livpure%20girl%20in%20bikini.jpg-7QurKOop1UFgA57MI64g7kECp8NGXN.png",
        width: 1200,
        height: 630,
        alt: "LivPure Natural Supplement Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LivPure Review 2025: Natural Supplement for Liver Support and Wellness",
    description:
      "Discover LivPure, a natural supplement designed to support liver health and overall wellness. Find comprehensive reviews, podcast episodes, and scientific research about LivPure ingredients, effectiveness, and real user experiences.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/livpure%20girl%20in%20bikini.jpg-7QurKOop1UFgA57MI64g7kECp8NGXN.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "OcggD5Q9axLnsmoxKSptD43VnaJbuLLx0hdKSam8gFM",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

