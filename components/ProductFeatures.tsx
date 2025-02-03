"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const features = [
  {
    title: "Powered By Nature",
    description: "Made with natural ingredients to support your health journey",
  },
  {
    title: "Plant Ingredients",
    description: "Premium plant-based ingredients for optimal effectiveness",
  },
  {
    title: "Non-GMO",
    description: "Free from genetically modified organisms",
  },
  {
    title: "Soy & Dairy Free",
    description: "Suitable for those with common dietary restrictions",
  },
  {
    title: "Easy To Swallow",
    description: "Convenient capsule size for comfortable daily use",
  },
  {
    title: "Non-Habit Forming",
    description: "Safe for long-term use as part of your wellness routine",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function ProductFeatures() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pure Natural Ingredients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the power of nature with our carefully selected ingredients, designed to support your wellness
            journey
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-sky-100 p-3">
                  <Check className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
