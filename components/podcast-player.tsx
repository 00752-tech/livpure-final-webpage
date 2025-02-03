"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"

interface PodcastPlayerProps {
  src: string
  className?: string
}

export function PodcastPlayer({ src, className = "" }: PodcastPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const visualizerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Audio bar animation setup
    const style = document.createElement("style")
    style.textContent = `
      @keyframes soundBar {
        0% { height: var(--min-height); }
        50% { height: var(--max-height); }
        100% { height: var(--min-height); }
      }
    `
    document.head.appendChild(style)

    if (visualizerRef.current) {
      // Clear existing bars
      visualizerRef.current.innerHTML = ""

      // Create audio visualization bars
      for (let i = 0; i < 100; i++) {
        const bar = document.createElement("div")
        bar.className = "w-[2px] bg-blue-400"

        // Random animation parameters
        const minHeight = Math.random() * 20 + 10 // Between 10% and 30%
        const maxHeight = Math.random() * 30 + 40 // Between 40% and 70%
        const animationDuration = (Math.random() * 0.8 + 0.2).toFixed(2) // Between 0.2s and 1s
        const animationDelay = (Math.random() * 0.5).toFixed(2) // Between 0s and 0.5s

        bar.style.cssText = `
          --min-height: ${minHeight}%;
          --max-height: ${maxHeight}%;
          animation: soundBar ${animationDuration}s ease-in-out infinite;
          animation-delay: ${animationDelay}s;
          border-radius: 1px;
          box-shadow: 0 0 2px rgba(66, 153, 225, 0.5);
        `

        visualizerRef.current.appendChild(bar)
      }
    }

    // Audio event listeners
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
    const handleLoadedMetadata = () => setDuration(audio.duration)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("ended", handleEnded)

    return () => {
      document.head.removeChild(style)
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate)
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
        audio.removeEventListener("ended", handleEnded)
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
        // Add active class to visualizer
        visualizerRef.current?.classList.add("opacity-100")
      } else {
        audioRef.current.pause()
        // Remove active class from visualizer
        visualizerRef.current?.classList.remove("opacity-100")
      }
    }
  }, [isPlaying])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (newValue: number[]) => {
    const volumeValue = newValue[0]
    if (audioRef.current) {
      audioRef.current.volume = volumeValue
      setVolume(volumeValue)
    }
  }

  const handleTimeChange = (newValue: number[]) => {
    const timeValue = newValue[0]
    if (audioRef.current) {
      audioRef.current.currentTime = timeValue
      setCurrentTime(timeValue)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className={`bg-gradient-to-r from-[#2c3e50] to-[#3498db] p-6 rounded-xl text-white ${className}`}>
      <audio ref={audioRef} src={src} />

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="text-white hover:text-white hover:bg-white/20"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>

          <div className="flex-1">
            <Slider
              value={[currentTime]}
              min={0}
              max={duration || 100}
              step={1}
              onValueChange={handleTimeChange}
              className="w-full"
            />
          </div>

          <span className="text-sm min-w-[48px]">{formatTime(currentTime)}</span>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMute}
              className="text-white hover:text-white hover:bg-white/20"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
            <Slider
              value={[isMuted ? 0 : volume]}
              min={0}
              max={1}
              step={0.1}
              onValueChange={handleVolumeChange}
              className="w-[100px]"
            />
          </div>
        </div>

        <div
          ref={visualizerRef}
          className="flex items-end justify-between h-16 gap-[1px] bg-black/20 rounded-lg p-2 transition-opacity duration-300 opacity-50"
        />
      </div>
    </div>
  )
}

