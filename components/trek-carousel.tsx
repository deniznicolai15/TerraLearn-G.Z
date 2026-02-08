"use client"

import { useState, useCallback } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"

const treks = [
  { id: 1, label: "TREK 01" },
  { id: 2, label: "TREK 02" },
  { id: 3, label: "TREK 03" },
]

export function TrekCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % treks.length)
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + treks.length) % treks.length)
  }, [])

  return (
    <section id="treks" className="py-20 px-6 md:px-16 bg-background">
      {/* Section header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Join the treks
        </h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            aria-label="Previous trek"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Next trek"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel viewport */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {treks.map((trek) => (
            <div key={trek.id} className="w-full flex-shrink-0 px-2 first:pl-0 last:pr-0">
              <div className="relative w-full aspect-[16/9] rounded-2xl border-2 border-border bg-card flex items-center justify-center overflow-hidden group">
                {/* Empty placeholder box - replace with your image later */}
                <div className="absolute inset-0 bg-card" />

                {/* Label overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                  <span className="text-xs tracking-widest text-primary uppercase font-medium">
                    {trek.label}
                  </span>
                  <p className="text-foreground font-serif text-xl mt-1">
                    Your image here
                  </p>
                </div>

                {/* Centered placeholder text */}
                <span className="relative z-10 text-muted-foreground text-sm tracking-wide">
                  Image Placeholder
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {treks.map((trek, index) => (
          <button
            type="button"
            key={trek.id}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
