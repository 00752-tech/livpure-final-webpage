"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export function PodcastTranscriptContent() {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0)

    // Initialize voice bars
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
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <Link href="/" className="text-xl font-bold">
          LivPureReview2025.com
        </Link>
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-6">LivPure Podcast Transcript: Fat Burning Breakthrough</h1>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-2xl font-bold mb-4">Fat Burning Breakthrough: How LivPure Supports Metabolism</h2>
            <p className="text-gray-600 mb-6">
              Explore the revolutionary approach of targeting mitochondrial function for effective weight management.
              Discover how LivPure's unique formula is setting a new standard in the world of natural supplements.
            </p>
            <div
              id="podcast-player"
              className="font-sans max-w-[700px] mx-auto my-5 p-5 bg-gradient-to-r from-[#2c3e50] to-[#3498db] rounded-xl text-white shadow-2xl"
            >
              <h2 className="text-2xl mb-2.5">
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
                  detoxify the liver, boost metabolism, and promote fat burning. We delve into the specific functions of
                  each ingredient, from liver cell regeneration to improved insulin sensitivity. Tune in to understand
                  how LivPure could be a valuable part of your health and wellness journey.
                </span>
                <span>Duration: 16:19</span>
              </div>
              <div
                id="voiceBar"
                className="flex justify-between items-end h-[50px] bg-gradient-to-r from-[#1a1a2e] to-[#16213e] p-1 rounded-lg overflow-hidden"
              />
            </div>

            <script
              dangerouslySetInnerHTML={{
                __html: ``,
              }}
            />
            <p className="text-sm text-gray-500">Duration: 16:19 - Published January 24, 2025</p>
          </div>
        </CardContent>
      </Card>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Full Transcript</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-600">Introduction</h3>
          <p>
            [00:00:00] Host: Welcome to the LivPure podcast, where we explore the science behind effective weight loss
            and liver health. I'm your host, Dr. Sarah Mitchell.
          </p>

          <p>
            [00:00:15] Host: Today, we're diving deep into the revolutionary approach that's helping thousands of people
            achieve their weight loss goals through improved liver function.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Understanding the Liver-Weight Connection</h3>
          <p>
            [00:00:30] Dr. Mitchell: Let's start by understanding why the liver is so crucial for weight loss. Your
            liver isn't just a detoxification organ - it's actually a key player in your metabolism.
          </p>

          <p>
            [00:00:45] Dr. Mitchell: When your liver is functioning optimally, it efficiently processes fats, regulates
            blood sugar, and helps maintain healthy energy levels.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">The Science Behind LivPure</h3>
          <p>
            [00:01:00] Host: Let's talk about the science behind LivPure's formula. What makes it different from other
            supplements on the market?
          </p>

          <p>
            [00:01:15] Dr. Mitchell: The key lies in our proprietary blend of natural ingredients, each chosen for their
            specific role in supporting liver health and metabolism.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Key Ingredients and Their Benefits</h3>
          <p>
            [00:01:30] Dr. Mitchell: First, we have Silymarin, extracted from milk thistle. This powerful antioxidant
            helps protect and regenerate liver cells.
          </p>

          <p>
            [00:01:45] Dr. Mitchell: Then there's Berberine, which has been shown to support healthy blood sugar levels
            and improve insulin sensitivity.
          </p>

          <p>
            [00:02:00] Dr. Mitchell: We also include Betaine, which supports liver function and helps maintain cellular
            health.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Supporting Ingredients</h3>
          <p>
            [00:02:15] Dr. Mitchell: Moving on to our supporting complex, we have Molybdenum, an essential mineral for
            detoxification processes.
          </p>

          <p>
            [00:02:30] Dr. Mitchell: Glutathione, often called the body's master antioxidant, plays a vital role in
            liver health and cellular protection.
          </p>

          <p>[00:02:45] Host: These ingredients sound impressive. Can you explain how they work together?</p>

          <h3 className="text-xl font-semibold text-blue-600">Synergistic Effects</h3>
          <p>
            [00:03:00] Dr. Mitchell: Absolutely. The power of LivPure lies in how these ingredients work
            synergistically. When combined, they create a comprehensive approach to liver support.
          </p>

          <p>
            [00:03:30] Dr. Mitchell: For example, while Silymarin protects liver cells, Berberine helps optimize their
            function. Meanwhile, Betaine supports the liver's natural detoxification processes.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">The Role of Metabolism</h3>
          <p>
            [00:04:00] Host: Let's discuss metabolism more specifically. How does liver health impact our metabolic
            rate?
          </p>

          <p>
            [00:04:30] Dr. Mitchell: The liver plays a central role in metabolism. It processes nutrients, stores
            energy, and helps regulate blood sugar levels. When the liver is functioning optimally, it can more
            efficiently convert stored fat into energy.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">User Experiences</h3>
          <p>
            [00:05:00] Host: We've received numerous success stories from LivPure users. Can you share some typical
            experiences?
          </p>

          <p>
            [00:05:30] Dr. Mitchell: Many users report noticeable improvements within the first few weeks. Common
            benefits include increased energy levels, better sleep quality, and gradual, sustainable weight loss.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Scientific Research</h3>
          <p>[00:06:00] Host: What does the research say about these ingredients?</p>

          <p>
            [00:06:30] Dr. Mitchell: Clinical studies have shown promising results. For instance, research on Silymarin
            has demonstrated its effectiveness in supporting liver health and function.
          </p>

          <p>
            [00:07:00] Dr. Mitchell: Studies on Berberine have shown its potential in supporting healthy blood sugar
            levels and metabolism.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Optimal Usage</h3>
          <p>[00:07:30] Host: How should people take LivPure for the best results?</p>

          <p>
            [00:08:00] Dr. Mitchell: We recommend taking LivPure consistently each day, preferably with meals. It's also
            important to maintain a healthy lifestyle, including proper hydration and regular exercise.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Lifestyle Integration</h3>
          <p>[00:08:30] Host: Speaking of lifestyle, what other changes can complement LivPure's effects?</p>

          <p>
            [00:09:00] Dr. Mitchell: While LivPure is effective on its own, combining it with healthy habits can enhance
            results. This includes maintaining a balanced diet, staying active, and getting adequate sleep.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Safety and Quality</h3>
          <p>[00:09:30] Host: Let's discuss safety. What measures are in place to ensure product quality?</p>

          <p>
            [00:10:00] Dr. Mitchell: LivPure is manufactured in an FDA-registered facility following strict quality
            control standards. All ingredients are tested for purity and potency.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Long-term Benefits</h3>
          <p>[00:10:30] Host: What about long-term use? Is LivPure safe for extended periods?</p>

          <p>
            [00:11:00] Dr. Mitchell: Yes, LivPure is designed for long-term use. The natural ingredients are
            well-tolerated and support ongoing liver health.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Common Questions</h3>
          <p>[00:11:30] Host: What are some common questions you receive about LivPure?</p>

          <p>
            [00:12:00] Dr. Mitchell: People often ask about how quickly they'll see results. While individual
            experiences vary, most users notice improvements in energy levels within the first few weeks.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Success Stories</h3>
          <p>[00:12:30] Host: Can you share some specific success stories?</p>

          <p>
            [00:13:00] Dr. Mitchell: We've had numerous success stories. For example, Sarah from Colorado lost 25 pounds
            over three months while using LivPure alongside a healthy diet.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Future Developments</h3>
          <p>[00:13:30] Host: What's next for LivPure? Any new developments in the pipeline?</p>

          <p>
            [00:14:00] Dr. Mitchell: We're constantly researching and refining our formula. Our team is exploring
            additional natural compounds that could enhance liver support.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Expert Recommendations</h3>
          <p>[00:14:30] Host: What do other health professionals say about LivPure?</p>

          <p>
            [00:15:00] Dr. Mitchell: Many healthcare providers have recognized the potential of our formula. They
            appreciate our science-based approach to liver health and weight management.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Clinical Evidence and Results</h3>
          <p>
            [00:15:45] Dr. Mitchell: The results we're seeing in clinical studies are remarkable. Users report increased
            energy, improved metabolism, and significant weight loss when combined with a healthy lifestyle.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">Conclusion</h3>
          <p>
            [00:16:00] Host: Thank you for joining us today. Remember, LivPure is backed by our 60-day satisfaction
            guarantee.
          </p>

          <p>[00:16:19] Host: This concludes our episode on the science behind LivPure's fat-burning breakthrough.</p>
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-8">
          <p className="font-bold">Disclaimer:</p>
          <p>
            This transcript is for informational purposes only and does not constitute medical advice. Individual
            results may vary. Always consult with your healthcare provider before starting any new supplement regimen.
          </p>
        </div>
      </div>

      <Card className="mt-8">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Ready to Try LivPure?</h3>
          <p className="mb-4">
            Experience the benefits of LivPure for yourself and start your journey to better liver health and weight
            management.
          </p>
          <Button asChild>
            <Link href="/#pricing">Order LivPure Now</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

