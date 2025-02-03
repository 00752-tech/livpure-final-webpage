import { Shield } from "lucide-react"

export default function GuaranteeSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-sky-50" id="guarantee">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 mb-6">
            <Shield className="w-8 h-8 text-sky-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-gray-900">
            60-DAY MONEY BACK GUARANTEE
          </h2>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <p className="text-xl leading-relaxed text-gray-600 mb-6">
              LivPure offers a 100% money back guarantee for 60 full days from the original purchase. If a customer is
              not totally and completely satisfied with the product, their results or experience in the first 60 days
              from purchase, they can contact LivPure's toll free number or send an email to receive a full refund
              within 48 hours of the product being returned.
            </p>

            <p className="text-xl leading-relaxed text-gray-600">
              That's right, customers can return the product, even empty bottles, anytime within 60 days of purchase and
              receive a full, no questions asked refund (less shipping and handling).
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              * Refund policy applies to all purchases made through official channels
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
