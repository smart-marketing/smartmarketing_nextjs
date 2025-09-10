import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ProblemsSection from '@/components/ProblemsSection'
import TrustSection from '@/components/TrustSection'
import SegmentsSection from '@/components/SegmentsSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import ResourcesSection from '@/components/ResourcesSection'
import CTASection from '@/components/CTASection'
import TestimonialsSection from '@/components/TestimonialSection'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <ProblemsSection />
        <TrustSection />
        <SegmentsSection />
        <TestimonialsSection />
        <CaseStudiesSection />
        <CTASection />
        <ResourcesSection />
      </main>
      <Footer />
    </>
  )
}