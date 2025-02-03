"use client"

import { motion } from "framer-motion"
import { Plane, Timer, Globe } from "lucide-react"

export default function InternationalShippingBanner() {
  return (
    <div className="bg-sky-50 py-4">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600"
        >
          <div className="flex items-center gap-2">
            <Plane className="h-4 w-4 text-sky-600" />
            <span>Worldwide Shipping Available</span>
          </div>
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4 text-sky-600" />
            <span>Same-Day Order Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-sky-600" />
            <span>International Orders Welcome</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
