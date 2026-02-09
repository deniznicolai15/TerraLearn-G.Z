import Image from "next/image"
import { Leaf, CalendarDays, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-end min-h-screen px-6 md:px-16 pb-20 pt-32"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Misty river surrounded by tropical forest mountains at sunrise"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />

      <div className="relative z-10 max-w-5xl">
        <p className="text-primary text-sm tracking-widest uppercase mb-3 font-medium">Discover</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-foreground text-balance">
          EXPLORE<br />
          <span className="text-primary italic">NATURE</span>
        </h1>

        <div className="flex flex-wrap gap-8 mt-10 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-primary" />
            <span>Tropical Regions</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary" />
            <span>Year Round</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span>Guided Tours</span>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors"
        >
          Start Learning
        </button>
      </div>
    </section>
  )
}
