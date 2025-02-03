"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Truck, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

// Mock data for virtual locations based on state
const mockLocationsByState: Record<string, Array<{ name: string; address: string; distance: string }>> = {
  California: [
    {
      name: "LivPure Virtual Store - Los Angeles",
      address: "Online Exclusive for Southern California",
      distance: "Virtual Location",
    },
    {
      name: "LivPure E-Commerce Hub - San Francisco",
      address: "Fast Shipping to Northern California",
      distance: "Virtual Location",
    },
    {
      name: "LivPure Digital Outlet - San Diego",
      address: "Serving Your SoCal Region Online",
      distance: "Virtual Location",
    },
  ],
  NewYork: [
    {
      name: "LivPure Virtual Store - New York City",
      address: "Online Exclusive for NYC Metro Area",
      distance: "Virtual Location",
    },
    {
      name: "LivPure E-Commerce Hub - Albany",
      address: "Fast Shipping to Upstate New York",
      distance: "Virtual Location",
    },
    {
      name: "LivPure Digital Outlet - Long Island",
      address: "Serving Your NY Region Online",
      distance: "Virtual Location",
    },
  ],
  Texas: [
    {
      name: "LivPure Virtual Store - Houston",
      address: "Online Exclusive for Southeast Texas",
      distance: "Virtual Location",
    },
    { name: "LivPure E-Commerce Hub - Dallas", address: "Fast Shipping to North Texas", distance: "Virtual Location" },
    {
      name: "LivPure Digital Outlet - Austin",
      address: "Serving Your Central Texas Region Online",
      distance: "Virtual Location",
    },
  ],
  // Add more states as needed
}

// Function to determine state from zip code (simplified version)
function getStateFromZipCode(zipCode: string): string {
  const prefix = Number.parseInt(zipCode.substring(0, 3))
  if (prefix >= 900 && prefix <= 961) return "California"
  if (prefix >= 100 && prefix <= 149) return "NewYork"
  if (prefix >= 750 && prefix <= 799) return "Texas"
  return "Other" // Default case
}

export default function FindLivPureNearYou() {
  const [location, setLocation] = useState("")
  const [stores, setStores] = useState<Array<{ name: string; address: string; distance: string }>>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [shippingEstimate, setShippingEstimate] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check if the entered zip code is valid (simple check for demonstration)
      if (!/^\d{5}$/.test(location)) {
        throw new Error("Please enter a valid 5-digit zip code")
      }

      const state = getStateFromZipCode(location)
      const stateLocations = mockLocationsByState[state] || []
      setStores(
        stateLocations.length > 0
          ? stateLocations
          : [{ name: "LivPure Online Store", address: "Serving Your Area Online", distance: "Virtual Location" }],
      )

      // Generate a random shipping estimate between 2-5 days
      const estimatedDays = location.length === 5 ? "7-10 business days (US)" : "10-15 business days (International)"
      setShippingEstimate(estimatedDays)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setStores([])
      setShippingEstimate("")
    } finally {
      setIsLoading(false)
    }
  }

  const handleCheckAvailability = () => {
    window.location.href = "https://hop.clickbank.net/?vendor=livpure&affiliate=smartdiet3&lid=6100"
  }

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "LivPure Online Store",
            description:
              "Find LivPure supplements near you with our online store locator. Fast shipping available to your area.",
            url: "https://livpurereview2025.com/find-livpure",
            telephone: "+1-800-123-4567",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 LivPure Way",
              addressLocality: "Health City",
              addressRegion: "NY",
              postalCode: "12345",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "40.7128",
              longitude: "-74.0060",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
          })}
        </script>
      </Head>
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <MapPin className="w-12 h-12 text-blue-500" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Find LivPure - Available Worldwide
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Enter your location to check shipping estimates and availability in your area. We ship to most countries
              worldwide.
            </p>
          </div>
          <div className="mt-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">How to Find LivPure in Your Area:</h3>
            <ol className="space-y-4">
              {[
                "Enter your 5-digit zip code in the search box below",
                'Click the "Find LivPure" button to see availability',
                "View the list of virtual stores serving your area",
                'Click "Check Online Availability" to shop directly',
                "Enjoy fast shipping right to your doorstep",
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Input
              type="text"
              placeholder="Enter your zip code"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full sm:w-auto min-w-[300px]"
            />
            <Button type="submit" size="lg" disabled={isLoading}>
              {isLoading ? "Searching..." : "Find LivPure"}
            </Button>
          </form>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          {stores.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">LivPure Availability in Your Area:</h3>
              <div className="space-y-4">
                {stores.map((store, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold">{store.name}</h4>
                    <p>{store.address}</p>
                    <p className="text-sm text-gray-500">{store.distance}</p>
                    <Button onClick={handleCheckAvailability} className="mt-2">
                      Check Online Availability
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {shippingEstimate && (
            <div className="mt-6 bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold flex items-center">
                <Truck className="w-5 h-5 mr-2" />
                Estimated Shipping to {location}
              </h4>
              <p className="text-green-600">Delivery in approximately {shippingEstimate}</p>
            </div>
          )}
          <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <ShoppingCart className="w-6 h-6 mr-2 text-blue-500" />
              Exclusive Online Offer
            </h3>
            <p className="mb-4">
              LivPure is available exclusively through our official online store. Enjoy special discounts and fast,
              direct shipping to your location!
            </p>
            <Link href="https://hop.clickbank.net/?vendor=livpure&affiliate=smartdiet3&lid=6100" passHref>
              <Button size="lg" className="w-full sm:w-auto">
                Shop LivPure Online Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
