"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  const handleClick = (url: string) => {
    window.location.href = url
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold relative z-10">
            LivPureReview2025.com
          </Link>
          <nav className="flex items-center gap-8">
            <Link href="#benefits" className="text-gray-600 hover:text-gray-900 relative z-10">
              Benefits
            </Link>
            <Link href="#reviews" className="text-gray-600 hover:text-gray-900 relative z-10">
              Reviews
            </Link>
            <Button
              onClick={() => handleClick("https://hop.clickbank.net/?vendor=livpure&affiliate=smartdiet3&lid=6100")}
              className="bg-[#18181B] text-white px-6 py-2 rounded-full hover:bg-black relative z-10"
            >
              Order Now
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-12 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start justify-center max-w-[1200px] mx-auto gap-4">
            <div className="lg:w-[450px] mb-8 lg:mb-0 lg:pt-16">
              <div className="inline-block bg-gray-100 px-4 py-1 rounded-full text-sm mb-8">NATURAL LIVER SUPPORT</div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-[#0095E1]">Break free</span> from sluggish weight & low energy
              </h1>
              <p className="text-gray-600 text-xl mb-8 max-w-[500px]">
                Discover Livpure, the natural solution proven to detoxify your liver, ignite your metabolism, and unlock
                sustainable weight loss
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="px-10 py-4 border-2 border-gray-200 rounded-full text-gray-800 text-lg font-medium hover:bg-gray-50"
                  onClick={() => handleClick("https://hop.clickbank.net/?vendor=livpure&affiliate=smartdiet3&lid=6100")}
                >
                  How others use it
                </Button>
                <Button
                  className="px-10 py-4 bg-[#0095E1] text-white rounded-full text-lg font-medium hover:bg-[#0085CC] flex items-center justify-center"
                  onClick={() => handleClick("https://hop.clickbank.net/?vendor=livpure&affiliate=smartdiet3&lid=6100")}
                >
                  Try risk free <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="lg:w-[720px] relative h-[810px] lg:mt-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/livpure%20girl%20in%20bikini.jpg-7QurKOop1UFgA57MI64g7kECp8NGXN.png"
                alt="Fitness Results with LivPure"
                fill
                className="object-contain object-center scale-95"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
