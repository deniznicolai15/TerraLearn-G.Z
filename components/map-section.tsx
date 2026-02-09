"use client"

import { useState } from "react"
import { InteractiveMap } from "./interactive-map"
import { TreeCloseButton } from "./tree-close-button"
import { MapPin, Clock, Mountain } from "lucide-react"

const pinDetails: Record<
  number,
  { name: string; label: string; color: string; description: string; details: { location: string; duration: string; elevation: string } }
> = {
  1: {
    name: "Cordillera Region",
    label: "TOPIC 01",
    color: "#A8B7B5",
    description:
      "The Cordillera Administrative Region features stunning rice terraces carved into the mountains by the Ifugao people over 2,000 years ago. A UNESCO World Heritage Site rich in biodiversity and culture.",
    details: { location: "Northern Luzon", duration: "Full Day", elevation: "1,500m" },
  },
  2: {
    name: "Sierra Madre",
    label: "TOPIC 02",
    color: "#8EB09A",
    description:
      "Sierra Madre is the longest mountain range in the Philippines, stretching across the eastern coast of Luzon. It serves as a vital watershed and home to numerous endemic species.",
    details: { location: "Eastern Luzon", duration: "Multi-Day", elevation: "1,800m" },
  },
  3: {
    name: "Palawan",
    label: "TOPIC 03",
    color: "#4B6B55",
    description:
      "Palawan is known as the last ecological frontier of the Philippines. Its pristine underground rivers, coral reefs, and lush rainforests make it a biodiversity hotspot.",
    details: { location: "Western Visayas", duration: "3-5 Days", elevation: "1,000m" },
  },
  4: {
    name: "Mindanao Highlands",
    label: "TOPIC 04",
    color: "#7A9E8C",
    description:
      "The highlands of Mindanao include Mount Apo, the highest peak in the Philippines. This region features unique flora, volcanic terrain, and rich indigenous cultural heritage.",
    details: { location: "Southern Mindanao", duration: "2-3 Days", elevation: "2,954m" },
  },
}

export function MapSection() {
  const [selectedPin, setSelectedPin] = useState<number | null>(null)
  const detail = selectedPin ? pinDetails[selectedPin] : null

  return (
    <section id="map" className="relative py-12 md:py-20 px-6 md:px-16 bg-background overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-8">
        <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">Interactive</span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2 text-balance">
          Explore the Philippines
        </h2>
        <p className="text-muted-foreground text-sm mt-3 max-w-md mx-auto leading-relaxed">
          Click on the map pins to discover the natural wonders of each region
        </p>
      </div>

      {/* Map - very large, no border or background box */}
      <InteractiveMap onPinClick={(id) => setSelectedPin(id)} />

      {/* Pin detail overlay */}
      {detail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div
            className="relative w-full max-w-lg rounded-2xl border bg-card p-8 shadow-2xl"
            style={{
              borderColor: `${detail.color}44`,
              animation: "modalIn 0.4s cubic-bezier(0.32, 0.72, 0, 1) forwards",
            }}
          >
            {/* Tree close button */}
            <div className="absolute top-3 right-3 z-20">
              <TreeCloseButton onClick={() => setSelectedPin(null)} size="sm" />
            </div>

            {/* Color swatch and heading */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl" style={{ backgroundColor: detail.color }} />
              <div>
                <h3 className="text-foreground font-serif text-2xl font-bold">{detail.name}</h3>
                <span className="text-muted-foreground text-xs tracking-widest uppercase">{detail.label}</span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{detail.description}</p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Location</span>
                  <p className="text-sm text-foreground">{detail.details.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Duration</span>
                  <p className="text-sm text-foreground">{detail.details.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50">
                <Mountain className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Elevation</span>
                  <p className="text-sm text-foreground">{detail.details.elevation}</p>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes modalIn {
              from {
                opacity: 0;
                transform: scale(0.92) translateY(10px);
              }
              to {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
          `}</style>
        </div>
      )}
    </section>
  )
}
