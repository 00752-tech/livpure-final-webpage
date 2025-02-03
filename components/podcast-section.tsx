"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"
import { useEffect } from "react"
import Link from "next/link"

export default function PodcastSection() {
  const handleClick = () => {
    window.location.href = "https://hop.clickbank.net/?vendor=livpure&affiliate=smartdiet3&lid=6100"
  }

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes irregularSound {
        0% { height: calc(10% + var(--random-height, 0%)); }
        50% { height: calc(50% + var(--random-height, 0%)); }
        100% { height: calc(30% + var(--random-height, 0%)); }
      }
    `
    document.head.appendChild(style)

    const createVoiceBars = () => {
      const voiceBar = document.getElementById("voiceBar")
      if (!voiceBar) return

      // Clear existing bars
      voiceBar.innerHTML = ""

      for (let i = 0; i < 100; i++) {
        const bar = document.createElement("div")
        bar.style.width = "1px"
        bar.style.backgroundColor = "#ff4500"
        bar.style.height = "100%"
        bar.style.animation = "irregularSound 0.5s ease-in-out infinite alternate"
        bar.style.borderRadius = "1px"
        bar.style.boxShadow = "0 0 3px #ff4500, 0 0 6px #ff4500"
        const randomHeight = Math.floor(Math.random() * 30)
        bar.style.setProperty("--random-height", `${randomHeight}%`)
        bar.style.animationDelay = `${Math.random() * 0.5}s`
        voiceBar.appendChild(bar)
      }
    }

    // Create voice bars after a short delay to ensure DOM is ready
    setTimeout(createVoiceBars, 100)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white" id="podcast">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-4 rounded-full text-sm bg-blue-50 text-blue-600">
            <PlayCircle className="w-4 h-4 mr-2" />
            NEW EPISODE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            The Science Behind LivPure&apos;s Natural Weight Loss Formula
          </h2>
          <p className="text-xl text-gray-600 max-w-[800px]">
            Discover how our breakthrough liver-targeting approach is helping thousands achieve their weight loss goals
          </p>
        </div>

        <div className="max-w-[700px] mx-auto">
          <div
            id="podcast-player"
            className="font-sans p-5 bg-gradient-to-r from-[#2c3e50] to-[#3498db] rounded-xl text-white shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-2.5">
              PODCAST
              <br />
              <br />
              Fat Burning Breakthrough: How LivPure Supports Metabolism
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Explore the revolutionary approach of targeting mitochondrial function for effective weight management.
              Discover how LivPure's unique formula is setting a new standard in the world of natural supplements.
            </p>
            <iframe
              className="w-full h-[50px] border-none mb-2.5"
              src="https://drive.google.com/file/d/1oNWpA4_A8wCaFcN2JE9ubhcHrW5mTMl_/preview"
              allow="autoplay"
            />
            <div className="flex justify-between items-center text-sm mb-2.5">
              <span className="flex-1 mr-4">
                Discover the science-backed ingredients in LivPure and how they support liver health and weight loss.
                This podcast explores how LivPure's blend of Silymarin, Berberine, and other key compounds helps
                detoxify the liver, boost metabolism, and promote fat burning.
              </span>
              <span>Duration: 16:19</span>
            </div>
            <div
              id="voiceBar"
              className="flex justify-between items-end h-[50px] bg-gradient-to-r from-[#1a1a2e] to-[#16213e] p-1 rounded-lg overflow-hidden"
            />
            <div className="mt-4 text-center">
              <Link href="/podcast-transcript" className="text-white hover:text-blue-200 underline">
                Read Full Transcript
              </Link>
            </div>
          </div>

          {/* Featured Snippet */}
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Key Takeaways from the Podcast:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>LivPure's unique blend of ingredients targets liver health for effective weight management</li>
              <li>Silymarin and Berberine are key compounds that support liver detoxification and metabolism</li>
              <li>The podcast explores how improved liver function can lead to increased energy and fat burning</li>
              <li>Scientific evidence behind LivPure's approach to sustainable weight loss is discussed</li>
              <li>Listeners will learn how LivPure can be integrated into a holistic health and wellness journey</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Button
              onClick={handleClick}
              className="px-8 py-6 bg-[#0095E1] text-white rounded-full text-lg font-medium hover:bg-[#0085CC] inline-flex items-center"
            >
              Try LivPure Risk-Free Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-4 text-sm text-gray-500">*Results may vary. 60-day money-back guarantee.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
