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
        title="Property Developer Brisbane"
        description="Zephia is a Brisbane property developer delivering premium residential projects across SEQ — architecture-led design, disciplined delivery, and investment-grade outcomes."
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
