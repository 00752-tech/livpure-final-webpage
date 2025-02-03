import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import ReviewsSection from "@/components/reviews-section"
import GuaranteeSection from "@/components/guarantee-section"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import { SiteHeader } from "@/components/site-header"
import { CookieConsent } from "@/components/cookie-consent"
import { BottomGuarantee } from "@/components/bottom-guarantee"
import { ContentProtection } from "@/components/content-protection"
import PodcastSection from "@/components/podcast-section"
import Footer from "@/components/footer"
import { ProductFeatures } from "@/components/ProductFeatures"
import { IngredientsSection } from "@/components/IngredientsSection"
import InternationalShippingBanner from "@/components/international-shipping-banner"
import ResearchSection from "@/components/research-section"
import PurchaseOptions from "@/components/purchase-options"
import FindLivPureNearYou from "@/components/find-livpure-near-you"
import SocialShare from "@/components/social-share"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <ContentProtection />
      <SiteHeader />
      <main  className="flex-1" >
      <InternationalShippingBanner />
        <HeroSection />
        <BenefitsSection />
        <ProductFeatures />
        <IngredientsSection />
        <PodcastSection />
        <ResearchSection />
        <ReviewsSection />
        <GuaranteeSection />
        <PurchaseOptions />
        <PricingSection />
        <FindLivPureNearYou />
        <FAQSection />
        <SocialShare />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}

