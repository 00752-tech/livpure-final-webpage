"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Link2, Heart } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ShareButtonProps {
  icon: React.ReactNode
  label: string
  onClick: () => void
  count: number|string
  color: string
}

const ShareButton = ({ icon, label, onClick, count, color }: ShareButtonProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-colors ${color}`}
          onClick={onClick}
        >
          <div className="text-white">{icon}</div>
          <span className="text-xs font-medium text-white">{count}</span>
        </motion.button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Share on {label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export default function SocialShare() {
  const [copied, setCopied] = useState(false)
  const [liked, setLiked] = useState(false)
  const url = "https://livpurereview2025.com"
  const title = "Break free from sluggish weight & low energy with LivPure - The Natural Solution for Liver Health"

  const shareButtons = [
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      onClick: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
      },
      count: 2.4,
      color: "bg-[#1877F2] hover:bg-[#0d6efd]",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      onClick: () => {
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          "_blank",
        )
      },
      count: 1.8,
      color: "bg-[#1DA1F2] hover:bg-[#0c8bed]",
    },
    {
      icon: <LinkedIn className="w-5 h-5" />,
      label: "LinkedIn",
      onClick: () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
      },
      count: 956,
      color: "bg-[#0A66C2] hover:bg-[#084d91]",
    },
  ]

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleLike = () => {
    setLiked(!liked)
  }

  const formatCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count
  }

  return (
    <div className="fixed bottom-24 right-4 z-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-4 rounded-lg shadow-lg space-y-4"
      >
        <div className="space-y-3">
          {shareButtons.map((button, index) => (
            <ShareButton
              key={index}
              icon={button.icon}
              label={button.label}
              onClick={button.onClick}
              count={formatCount(button.count)}
              color={button.color}
            />
          ))}

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyLink}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors"
                >
                  <div className="text-white">
                    <Link2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-white">{copied ? "Copied!" : "Copy"}</span>
                </motion.button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy link</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLike}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg bg-red-500 hover:bg-red-600 transition-colors"
                >
                  <div className="text-white">
                    <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
                  </div>
                  <span className="text-xs font-medium text-white">{formatCount(liked ? 1337 : 1336)}</span>
                </motion.button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{liked ? "Unlike" : "Like"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </motion.div>
    </div>
  )
}
