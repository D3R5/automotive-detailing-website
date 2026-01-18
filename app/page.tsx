import { HeroSection } from "@/components/home/hero-section"
import { TrustIndicators } from "@/components/home/trust-indicators"
import { FeaturedServices } from "@/components/home/featured-services"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <FeaturedServices />
      <CTASection />
    </>
  )
}
