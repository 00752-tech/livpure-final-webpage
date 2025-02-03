"use client"

import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At LivPure, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share
            your personal information when you visit our website or make a purchase.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you make a purchase, sign up for our
            newsletter, or contact us. This may include your name, email address, shipping address, and payment
            information.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to process your orders, communicate with you, and improve our services. We
            may also use your information to send you marketing communications, but you can opt out at any time.
          </p>
          <h2>Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share your information with service providers who help us
            operate our business, such as payment processors and shipping companies.
          </p>
          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. Please contact us at
            passiveincomestreaming@gmail.com for any privacy-related requests.
          </p>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at passiveincomestreaming@gmail.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

