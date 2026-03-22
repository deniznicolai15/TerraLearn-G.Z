"use client"

import { useState, useCallback } from "react"
import { ChevronRight, ChevronLeft, X, MapPin, Clock, Mountain } from "lucide-react"

const treks = [
  {
    id: 1,
    label: "TOPIC 01",
    name: "Misty Pine Trail",
    color: "#A8B7B5",
    description:
      "A serene walk through ancient pine forests blanketed in mist. This trail offers breathtaking views of the valley below and connects to several alpine meadows.",
    details: { location: "Northern Alps", duration: "3-4 hours", elevation: "1,200m" },
  },
  {
    id: 2,
    label: "TOPIC 02",
    name: "Wild Sage Path",
    color: "#8EB09A",
    description:
      "Wind through rolling hills covered in wild sage and aromatic herbs. This moderate trek rewards hikers with panoramic views at the summit ridge.",
    details: { location: "Eastern Ridge", duration: "5-6 hours", elevation: "1,800m" },
  },
  {
    id: 3,
    label: "TOPIC 03",
    name: "Deep Moss Canyon",
    color: "#4B6B55",
    description:
      "Descend into a lush canyon where moss blankets every surface. Ancient trees tower overhead while a crystal stream carves through the forest floor.",
    details: { location: "Western Gorge", duration: "6-8 hours", elevation: "2,400m" },
  },
  {
    id: 4,
    label: "TOPIC 04",
    name: "River Fog Basin",
    color: "#7A9E8C",
    description:
      "Navigate through a low-lying basin where morning fog clings to a winding river. The humid air supports a rich diversity of ferns and mosses.",
    details: { location: "Southern Basin", duration: "4-5 hours", elevation: "800m" },
  },
  {
    id: 5,
    label: "TOPIC 05",
    name: "Canopy Walkway",
    color: "#5C8A6E",
    description:
      "Ascend into the treetops on elevated walkways that thread between ancient hardwoods. Observe bird species and epiphytic plants from a unique perspective.",
    details: { location: "Central Forest", duration: "2-3 hours", elevation: "600m" },
  },
  {
    id: 6,
    label: "TOPIC 06",
    name: "Sunrise Summit",
    color: "#3D5A47",
    description:
      "An early morning ascent to catch the golden sunrise over misty valleys. This challenging route passes through multiple vegetation zones.",
    details: { location: "Peak Region", duration: "7-9 hours", elevation: "3,100m" },
  },
]

export function TrekCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedTrek, setSelectedTrek] = useState<(typeof treks)[0] | null>(null)

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % treks.length)
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + treks.length) % treks.length)
  }, [])

  return (
    <section id="treks" className="py-12 sm:py-20 px-4 sm:px-6 md:px-16 bg-background">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
          Explore Topics
        </h2>
        <span className="text-muted-foreground text-xs sm:text-sm">
          {currentIndex + 1} / {treks.length}
        </span>
      </div>

      {/* Carousel with side buttons */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Prev button - vertically centered beside the image */}
        <button
          type="button"
          onClick={handlePrev}
          className="hidden sm:flex flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-border items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 sm:h-5 w-4 sm:w-5" />
        </button>

        {/* Carousel viewport */}
        <div className="flex-1 overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {treks.map((trek) => (
              <div key={trek.id} className="w-full flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedTrek(trek)}
                  className="relative w-full aspect-[16/9] rounded-2xl border-2 border-border bg-card flex items-center justify-center overflow-hidden group cursor-pointer text-left transition-all hover:border-primary/50"
                >
                  {/* Empty placeholder box with subtle color tint */}
                  <div
                    className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20"
                    style={{ backgroundColor: trek.color }}
                  />

                  {/* Label overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                    <span className="text-xs tracking-widest text-primary uppercase font-medium">
                      {trek.label}
                    </span>
                    <p className="text-foreground font-serif text-xl mt-1">
                      {trek.name}
                    </p>
                  </div>

                  {/* Centered placeholder indicator */}
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: trek.color }}
                    >
                      <Mountain className="h-7 w-7 text-card" />
                    </div>
                    <span className="text-muted-foreground text-xs tracking-wide">
                      Click for info
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Next button - vertically centered beside the image */}
        <button
          type="button"
          onClick={handleNext}
          className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center hover:bg-primary/90 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile buttons below */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-6">
        <button
          type="button"
          onClick={handlePrev}
          className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
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

      {/* Info modal */}
      {selectedTrek && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedTrek(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Color swatch */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-xl"
                style={{ backgroundColor: selectedTrek.color }}
              />
              <div>
                <h3 className="text-foreground font-serif text-2xl font-bold">
                  {selectedTrek.name}
                </h3>
                <span className="text-muted-foreground text-xs tracking-widest uppercase">
                  {selectedTrek.label}
                </span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {selectedTrek.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">{selectedTrek.details.location}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">{selectedTrek.details.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted">
                <Mountain className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">{selectedTrek.details.elevation}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
