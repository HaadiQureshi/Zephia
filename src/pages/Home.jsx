import SEO from '../components/SEO'
import Hero from '../components/Hero'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <>
      <SEO
        title="Property Acquisitions Brisbane"
        description="Zephia Property Group is a specialist property acquisitions advisory across Brisbane and South East Queensland, focused on development and commercial sourcing for developers and investors."
        path="/"
      />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
