import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrekCarousel } from "@/components/trek-carousel"
import { AboutSection } from "@/components/about-section"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrekCarousel />
      <AboutSection />
    </main>
  )
}
