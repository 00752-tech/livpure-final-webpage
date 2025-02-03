"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-sky-100 to-white px-4">
      <div className="text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-sky-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Oops! Page not found
        </motion.p>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <svg className="w-64 h-64 mx-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#0095E1"
              d="M39.5,-65.3C50.2,-56.7,57.1,-44.3,62.6,-31.3C68,-18.2,72,-4.6,71.8,9.2C71.6,23,67.2,36.9,58.7,47.4C50.2,57.9,37.7,65,24.3,69.9C10.9,74.8,-3.4,77.5,-17.1,74.9C-30.8,72.3,-43.9,64.4,-54.4,53.7C-64.9,42.9,-72.8,29.2,-76.6,14.1C-80.4,-1,-80.1,-17.5,-73.6,-30.2C-67.1,-42.9,-54.4,-51.8,-41.5,-59.4C-28.6,-67,-14.3,-73.3,0.3,-73.8C14.9,-74.3,29.8,-69,39.5,-65.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </motion.div>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/" passHref>
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

