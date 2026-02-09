"use client"

import { useState, useCallback } from "react"
import { MapPin, Clock, Mountain } from "lucide-react"
import { TreeCloseButton } from "./tree-close-button"

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
]

export function TrekCarousel() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [previousIds, setPreviousIds] = useState<number[]>([])

  const handleExpand = useCallback(
    (id: number) => {
      if (expandedId === id) return
      if (expandedId !== null) {
        setPreviousIds((prev) => {
          const filtered = prev.filter((pid) => pid !== id)
          return [...filtered, expandedId]
        })
      }
      setExpandedId(id)
    },
    [expandedId]
  )

  const handleClose = useCallback(() => {
    setExpandedId(null)
    setPreviousIds([])
  }, [])

  const expandedTrek = treks.find((t) => t.id === expandedId)
  const shrunkTreks = previousIds
    .map((id) => treks.find((t) => t.id === id))
    .filter(Boolean) as typeof treks

  return (
    <section id="treks" className="py-20 px-6 md:px-16 bg-background">
      {/* Section header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Explore Topics
        </h2>
        <span className="text-muted-foreground text-sm">
          {treks.length} Topics
        </span>
      </div>

      {/* Topic grid - collapsed state */}
      {expandedId === null && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treks.map((trek, index) => (
            <button
              key={trek.id}
              type="button"
              onClick={() => handleExpand(trek.id)}
              className="group relative rounded-2xl border-2 border-border bg-card overflow-hidden cursor-pointer text-left transition-all duration-500 hover:border-primary/50 hover:scale-[1.02]"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.5s ease forwards",
              }}
            >
              <div className="aspect-[4/5] relative flex flex-col items-center justify-center p-6">
                {/* Colored background tint */}
                <div
                  className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-25"
                  style={{ backgroundColor: trek.color }}
                />

                {/* Icon */}
                <div
                  className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: trek.color }}
                >
                  <Mountain className="h-7 w-7 text-card" />
                </div>

                {/* Label and name */}
                <span className="relative z-10 text-[10px] tracking-widest uppercase font-medium" style={{ color: trek.color }}>
                  {trek.label}
                </span>
                <p className="relative z-10 text-foreground font-serif text-lg mt-2 text-center text-balance">
                  {trek.name}
                </p>
                <span className="relative z-10 text-muted-foreground text-xs mt-3">
                  Click to explore
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Expanded state */}
      {expandedId !== null && (
        <div className="flex gap-4 items-start">
          {/* Shrunk previous topics - left sidebar */}
          {shrunkTreks.length > 0 && (
            <div className="flex flex-col gap-3 flex-shrink-0 w-16 md:w-20">
              {shrunkTreks.map((trek) => (
                <button
                  key={trek.id}
                  type="button"
                  onClick={() => handleExpand(trek.id)}
                  className="group relative rounded-xl border border-border bg-card overflow-hidden cursor-pointer transition-all duration-500 hover:border-primary/50 hover:scale-105"
                  title={trek.name}
                >
                  <div className="aspect-square relative flex items-center justify-center">
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{ backgroundColor: trek.color }}
                    />
                    <div
                      className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: trek.color }}
                    >
                      <Mountain className="h-4 w-4 md:h-5 md:w-5 text-card" />
                    </div>
                  </div>
                  <div className="px-1 py-1.5 text-center">
                    <span
                      className="text-[8px] md:text-[9px] tracking-wider uppercase font-medium block"
                      style={{ color: trek.color }}
                    >
                      {trek.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Expanded topic - takes remaining space */}
          {expandedTrek && (
            <div
              className="flex-1 rounded-2xl border-2 border-border bg-card overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{
                animation: "expandIn 0.6s cubic-bezier(0.32, 0.72, 0, 1) forwards",
                borderColor: `${expandedTrek.color}33`,
              }}
            >
              <div className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col">
                {/* Color background */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{ backgroundColor: expandedTrek.color }}
                />

                {/* Close button - tree style */}
                <div className="absolute top-4 right-4 z-20">
                  <TreeCloseButton onClick={handleClose} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col md:flex-row">
                  {/* Left: Visual area */}
                  <div className="flex-1 flex items-center justify-center p-8 md:p-12">
                    <div className="text-center">
                      <div
                        className="w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-500"
                        style={{ backgroundColor: expandedTrek.color }}
                      >
                        <Mountain className="h-12 w-12 md:h-16 md:w-16 text-card" />
                      </div>
                      <span
                        className="text-xs tracking-[0.3em] uppercase font-medium"
                        style={{ color: expandedTrek.color }}
                      >
                        {expandedTrek.label}
                      </span>
                      <h3 className="text-foreground font-serif text-3xl md:text-5xl font-bold mt-3 text-balance">
                        {expandedTrek.name}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Info area */}
                  <div className="flex-1 flex flex-col justify-center p-8 md:p-12 md:border-l border-t md:border-t-0 border-border">
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                      {expandedTrek.description}
                    </p>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Location</span>
                          <p className="text-sm text-foreground">{expandedTrek.details.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50">
                        <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Duration</span>
                          <p className="text-sm text-foreground">{expandedTrek.details.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50">
                        <Mountain className="h-4 w-4 text-primary flex-shrink-0" />
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Elevation</span>
                          <p className="text-sm text-foreground">{expandedTrek.details.elevation}</p>
                        </div>
                      </div>
                    </div>

                    {/* Navigate to other topics */}
                    <div className="mt-8 flex gap-2">
                      {treks
                        .filter((t) => t.id !== expandedTrek.id)
                        .map((trek) => (
                          <button
                            key={trek.id}
                            type="button"
                            onClick={() => handleExpand(trek.id)}
                            className="flex-1 py-2.5 rounded-lg text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:scale-[1.02]"
                            style={{
                              backgroundColor: `${trek.color}22`,
                              color: trek.color,
                              border: `1px solid ${trek.color}33`,
                            }}
                          >
                            {trek.label}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expandIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}
