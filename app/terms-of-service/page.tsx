"use client"

import Footer from "@/components/footer"


export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="prose max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Please read these Terms of Service carefully before using the LivPure website.</p>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws
            and regulations.
          </p>
          <h2>2. Use of Website</h2>
          <p>
            You may use our website for lawful purposes only. You must not use our website in any way that causes, or
            may cause, damage to the website or impairment of the availability or accessibility of the website.
          </p>
          <h2>3. Product Information</h2>
          <p>
            We strive to provide accurate product information, but we do not warrant that product descriptions or other
            content is accurate, complete, reliable, current, or error-free.
          </p>
          <h2>4. Pricing and Availability</h2>
          <p>
            All prices are subject to change without notice. We reserve the right to modify or discontinue any product
            without notice.
          </p>
          <h2>5. Disclaimer of Warranties</h2>
          <p>
            Our website and products are provided "as is" without any warranties, expressed or implied. LivPure does not
            warrant that the website will be uninterrupted or error-free.
          </p>
          <h2>6. Limitation of Liability</h2>
          <p>
            LivPure shall not be liable for any indirect, incidental, special, consequential or punitive damages
            resulting from your use of the website or our products.
          </p>
          <h2>7. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of [Your State/Country].
          </p>
          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Please review these terms periodically
            for changes.
          </p>
          <h2>9. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at
            passiveincomestreaming@gmail.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

