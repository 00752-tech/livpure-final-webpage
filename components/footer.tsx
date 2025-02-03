import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-bold mb-4">LivPureReview2025.com</h3>
            <p className="text-sm text-gray-600">
              Your trusted source for LivPure reviews and information. We provide comprehensive coverage of this natural
              liver support and weight loss supplement, with worldwide shipping available.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Disclaimers</h4>
            <p className="text-xs text-gray-500">
              These statements have not been evaluated by the Food and Drug Administration. This product is not intended
              to diagnose, treat, cure, or prevent any disease.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Results may vary. Always consult with your healthcare provider before starting any new supplement regimen.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} livpurereview2025.com. All rights reserved.</p>
          <p className="mt-2">
            <strong>Affiliate Disclosure:</strong> This site contains affiliate links. As an affiliate, we may earn a
            commission from qualifying purchases. This means that if you click on a link and make a purchase, we may
            receive a small percentage of the sale at no additional cost to you. This helps support our site and allows
            us to continue to provide valuable content. We only promote products that we believe in and that align with
            our values. Your support is greatly appreciated.
          </p>
          <p className="mt-2">
            For more information, please see our{" "}
            <Link href="/privacy-policy" className="underline">
              privacy policy
            </Link>{" "}
            and{" "}
            <Link href="/terms-of-service" className="underline">
              terms of service
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
