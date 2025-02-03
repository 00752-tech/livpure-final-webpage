"use client"

import { Check, ShieldCheck, Info, Truck } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider as TooltipProviderOriginal,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { OptimizedImage } from "./optimized-image"
import { memo, useCallback } from "react"
import dynamic from "next/dynamic"

// Dynamically import the tooltip to reduce initial bundle size
const TooltipProvider = dynamic(() => import("@/components/ui/tooltip").then((mod) => mod.TooltipProvider), {
  ssr: false,
  loading: () => <span className="text-xs text-muted-foreground">Loading...</span>,
})

// Memoize the package card component
const PackageCard = memo(function PackageCard({
  pkg,
  onOrderClick,
  index,
}: {
  pkg: any
  onOrderClick: () => void
  index: number
}) {
  return (
    <Card className={`relative flex flex-col ${pkg.popular ? "border-sky-600 border-2" : ""}`}>
      {pkg.popular && (
        <>
          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sky-600">Best Value</Badge>
          {pkg.bestSeller && <Badge className="absolute -top-3 right-4 bg-red-600">Best Seller</Badge>}
        </>
      )}
      <CardHeader className="flex flex-col items-center space-y-1 pb-4">
        <div className="w-28 h-28 sm:w-48 sm:h-48 mb-2 sm:mb-4">
          <OptimizedImage
            src={pkg.image}
            alt={`${pkg.title} LivPure Package`}
            width={192}
            height={192}
            priority={index === 1} // Prioritize loading the popular package image
            className="object-contain"
          />
        </div>
        <h3 className="text-lg sm:text-2xl font-bold text-sky-600 text-center">{pkg.title}</h3>
        <p className="text-base sm:text-lg text-gray-600">{pkg.subtitle}</p>
        <div className="flex flex-col items-center mt-2">
          <div className="flex items-baseline gap-2 flex-wrap justify-center">
            <div className="text-2xl sm:text-4xl font-bold text-gray-900">${pkg.price}</div>
            <span className="text-gray-600">per bottle</span>
          </div>
          <div className="mt-2 text-center">
            <div className="text-base sm:text-lg font-semibold">Total: ${pkg.totalPrice}</div>
            <div className="text-gray-500 line-through text-sm">Regular: ${pkg.originalPrice}</div>
            <div className="text-red-600 font-bold mt-1">YOU SAVE ${pkg.savings}!</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 items-center px-3 sm:px-6">
        <div className="w-full text-center space-y-2 mb-6">
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium min-h-[24px]">
            {pkg.popular ? (
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-red-600" />
                <span className="animate-[pulse_3s_ease-in-out_infinite] text-red-600">{pkg.shipping}</span>
              </div>
            ) : (
              <span>{pkg.shipping}</span>
            )}
          </div>
          <div className="h-px bg-gray-100" />
          <p className="text-xs sm:text-sm text-muted-foreground">60-Day Return Policy</p>
        </div>
        <div className="w-full mt-auto">
          <Button
            className="w-full h-14 sm:h-12 text-base sm:text-base bg-sky-600 hover:bg-sky-700 touch-manipulation"
            onClick={onOrderClick}
          >
            ADD TO CART
          </Button>
          <ul className="mt-6 space-y-3 text-xs sm:text-sm text-muted-foreground px-2">
            {pkg.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="h-4 w-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <span className="flex-1 leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
})

export default function PricingSection() {
  const packages = [
    {
      title: "2 BOTTLES",
      subtitle: "60 Day Supply",
      price: 79,
      totalPrice: 158,
      originalPrice: 398,
      savings: 240,
      shipping: "Standard Shipping (Global)",
      popular: false,
      image: "https://www.liv-pure.co/images/livpure/2-bottle.png",
      description:
        "LivPure offers this as their starter package, containing their supplement with milk thistle and other ingredients.",
      features: [
        "Contains milk thistle extract",
        "Blend of traditional herbs",
        "Natural ingredients",
        "60-day return policy",
        "Made in USA facility",
        "2-month supply",
      ],
    },
    {
      title: "6 BOTTLES",
      subtitle: "180 Day Supply",
      price: 49,
      totalPrice: 294,
      originalPrice: 1194,
      savings: 900,
      shipping: "FREE Shipping (US) / International Available",
      popular: true,
      bestSeller: true,
      image: "https://www.liv-pure.co/images/livpure/6-bottle.png",
      description:
        "LivPure promotes this as their best value package, providing a six-month supply of their supplement.",
      features: [
        "Contains milk thistle extract",
        "Blend of traditional herbs",
        "Natural ingredients",
        "Premium formulation",
        "Free shipping nationwide",
        "6-month supply",
      ],
    },
    {
      title: "3 BOTTLES",
      subtitle: "90 Day Supply",
      price: 69,
      totalPrice: 207,
      originalPrice: 597,
      savings: 390,
      shipping: "Standard Shipping (Global)",
      popular: false,
      image: "https://www.liv-pure.co/images/livpure/3-bottle.png",
      description:
        "This package offers a three-month supply of LivPure's supplement featuring milk thistle and other ingredients.",
      features: [
        "Contains milk thistle extract",
        "Blend of traditional herbs",
        "Natural ingredients",
        "Quality ingredients",
        "90-day supply",
        "Made in USA",
      ],
    },
  ]

  const handleClick = useCallback(() => {
    window.location.href = "https://hop.clickbank.net/?vendor=livpure&affiliate=smartdiet3&lid=6100"
  }, [])

  return (
    <section className="py-6 sm:py-12 md:py-24 bg-gradient-to-b from-sky-50 to-white" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-5xl">Choose Your LivPure Package</h2>
          <div className="max-w-[900px] space-y-2">
            <p className="text-gray-500 text-sm sm:text-base md:text-xl/relaxed">
              Select your preferred package of LivPure supplement containing milk thistle and other ingredients.
            </p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="inline-flex items-center text-xs text-muted-foreground hover:text-gray-900">
                  <Info className="h-4 w-4 mr-1" />
                  Important Information
                </TooltipTrigger>
                <TooltipContent className="max-w-xs text-xs">
                  These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat,
                  cure, or prevent any disease.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-16 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.title} pkg={pkg} onOrderClick={handleClick} index={index} />
          ))}
        </div>

        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>*International shipping available worldwide. Delivery times vary by location.</p>
          <p>Same-day processing on all orders.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-4 sm:p-8 shadow-lg border border-gray-100">
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 sm:w-12 sm:h-12 text-[#0095E1]" />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                LivPure's Approach: Natural Ingredients and Traditional Wisdom
              </h3>
              <p className="text-sm sm:text-lg text-gray-600 max-w-2xl">
                LivPure states that their supplement contains milk thistle and other traditional herbs that have been
                used in various wellness practices. They claim that each ingredient is carefully selected and tested for
                quality.
              </p>
              <div className="pt-2">
                <p className="text-lg sm:text-xl text-[#0095E1] font-bold">LivPure's 60-Day Return Policy</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  LivPure offers a 60-day return policy on purchases. Customers who are not satisfied can return the
                  product within this timeframe. For complete details, refer to LivPure's official return policy.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-xs text-gray-500 max-w-2xl mx-auto">
              *These statements have not been evaluated by the Food and Drug Administration. This product is not
              intended to diagnose, treat, cure, or prevent any disease. Results may vary. Consult your healthcare
              provider before starting any supplement regimen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
