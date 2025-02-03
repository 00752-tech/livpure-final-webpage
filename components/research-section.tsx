"use client"

import { motion } from "framer-motion"
import { ExternalLink, FileText, Users, BookOpen, FlaskRoundIcon as Flask, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

const researchLinks = [
  {
    title: "Milk Thistle and Liver Health",
    source: "National Institutes of Health",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5435266/",
    domain: ".gov",
    icon: FileText,
    summary:
      "This comprehensive review explores the potential benefits of milk thistle for liver health. It discusses the herb's antioxidant, anti-inflammatory, and hepatoprotective properties, which may contribute to improved liver function and protection against various liver diseases.",
  },
  {
    title: "Weight Management: State of the Science",
    source: "Harvard School of Public Health",
    url: "https://www.hsph.harvard.edu/obesity-prevention-source/obesity-causes/diet-and-weight/",
    domain: ".edu",
    icon: BookOpen,
    summary:
      "This comprehensive resource from Harvard examines the latest scientific understanding of weight management. It covers various factors influencing weight, including diet, physical activity, and metabolism, providing insights into effective strategies for maintaining a healthy weight.",
  },
  {
    title: "Understanding Liver Function",
    source: "Cleveland Clinic",
    url: "https://health.clevelandclinic.org/liver-function/",
    domain: ".health",
    icon: FileText,
    summary:
      "This article provides an in-depth look at the liver's crucial roles in the body, including detoxification, protein synthesis, and the production of biochemicals necessary for digestion. It explains how maintaining liver health is essential for overall wellness and metabolic function.",
  },
  {
    title: "Natural Compounds in Liver Health",
    source: "Journal of Nutritional Science",
    url: "https://www.cambridge.org/core/journals/journal-of-nutritional-science",
    domain: ".org",
    icon: Flask,
    summary:
      "A detailed analysis of various natural compounds and their effects on liver health. The study examines multiple botanical extracts and their potential benefits for liver function, detoxification processes, and overall hepatic health.",
  },
  {
    title: "Metabolism and Energy Balance",
    source: "Nature Reviews Endocrinology",
    url: "https://www.nature.com/nrendo/",
    domain: ".com",
    icon: Brain,
    summary:
      "This review discusses the complex relationship between liver function, metabolism, and energy balance. It explores how various factors, including dietary supplements and natural compounds, can influence these interconnected systems.",
  },
]

const communityReviews = [
  {
    platform: "Reddit",
    title: "Real User Experiences with LivPure",
    excerpt: '"After 2 months of consistent use, I\'ve noticed significant improvements in my energy levels..."',
    votes: "147 upvotes",
    comments: "32 comments",
    source: "/r/weightlossdiets",
  },
  {
    platform: "Reddit",
    title: "LivPure Success Stories Thread",
    excerpt: '"The natural ingredients really made a difference in my wellness journey..."',
    votes: "93 upvotes",
    comments: "28 comments",
    source: "/r/supplementreviews",
  },
  {
    platform: "Reddit",
    title: "My LivPure Journey - 3 Month Update",
    excerpt: '"Started seeing real changes in month 2. Energy levels are up and feeling much better overall..."',
    votes: "126 upvotes",
    comments: "45 comments",
    source: "/r/supplementreviews",
  },
  {
    platform: "Reddit",
    title: "Honest Review: LivPure for Liver Health",
    excerpt: '"Been using it for 4 months now. Blood work shows improvement in liver function markers..."',
    votes: "182 upvotes",
    comments: "56 comments",
    source: "/r/liverhealth",
  },
  {
    platform: "Reddit",
    title: "LivPure + Lifestyle Changes Results",
    excerpt: '"Combining LivPure with better diet and exercise has been a game changer for my health..."',
    votes: "165 upvotes",
    comments: "41 comments",
    source: "/r/weightlossdiets",
  },
]

export default function ResearchSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Research & Community Insights
          </h2>
          <p className="text-gray-500 md:text-lg max-w-[900px] mx-auto">
            Explore scientific research about the key ingredients in LivPure and read real experiences from our
            community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Scientific Research</h3>
            <div className="space-y-4">
              {researchLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="rounded-full p-2 bg-blue-100">
                        <link.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{link.title}</CardTitle>
                        <CardDescription>
                          {link.source} <span className="text-blue-600 font-medium">{link.domain}</span>
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">{link.summary}</p>
                      <Link href={link.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="link" className="text-gray-600 hover:text-gray-900">
                          View Research <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Community Reviews</h3>
            <div className="space-y-4">
              {communityReviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-gray-500">{review.platform}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{review.source}</span>
                      </div>
                      <CardTitle className="text-lg">{review.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{review.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{review.votes}</span>
                        <span>{review.comments}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>
            * External references are provided for informational purposes. While we strive to keep our content
            up-to-date, please refer to the original sources for the most current information.
          </p>
        </div>
      </div>
    </section>
  )
}
