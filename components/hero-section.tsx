import Image from "next/image"
import { Leaf, CalendarDays, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-end min-h-screen px-4 sm:px-6 md:px-16 pb-12 sm:pb-20 pt-24 sm:pt-32"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpeg"
        alt="Misty river surrounded by tropical forest mountains at sunrise"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />

      <div className="relative z-10 max-w-5xl w-full">
        <p className="text-primary text-xs sm:text-sm tracking-widest uppercase mb-3 font-medium">Discover</p>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-foreground text-balance">
          EXPLORE<br />
          <span className="text-primary italic">NATURE</span>
        </h1>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 mt-8 sm:mt-10 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-primary flex-shrink-0" />
            <span>Tropical Regions</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary flex-shrink-0" />
            <span>Year Round</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary flex-shrink-0" />
            <span>Guided Tours</span>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-full text-xs sm:text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors"
        >
          Start Learning
        </button>
      </div>
    </section>
  )
}
