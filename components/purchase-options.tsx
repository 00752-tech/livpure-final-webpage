import { MapPin, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PurchaseOptions() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Where to Buy LivPure</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold">Find LivPure Near You</h3>
            </div>
            <p className="mb-4">
              Looking for "LivPure near me"? While LivPure is primarily available online, we're expanding our reach to
              local health stores in select cities.
            </p>
            <Link href="/find-livpure" passHref>
              <Button variant="outline">Check Local Availability</Button>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Truck className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold">Buy LivPure Online</h3>
            </div>
            <p className="mb-4">
              Purchase LivPure directly from our official website for worldwide shipping. Available across the USA and
              internationally with same-day order processing.
            </p>
            <Link href="https://hop.clickbank.net/?vendor=livpure&affiliate=smartdiet3&lid=6100" passHref>
              <Button>Order LivPure Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
