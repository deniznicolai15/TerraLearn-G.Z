"use client"

import { useState } from "react"
import Image from "next/image"

interface MapPin {
  id: number
  label: string
  name: string
  x: number // percentage from left
  y: number // percentage from top
  color: string
}

const pins: MapPin[] = [
  {
    id: 1,
    label: "TOPIC 01",
    name: "Cordillera Region",
    x: 42,
    y: 18,
    color: "#A8B7B5",
  },
  {
    id: 2,
    label: "TOPIC 02",
    name: "Sierra Madre",
    x: 62,
    y: 30,
    color: "#8EB09A",
  },
  {
    id: 3,
    label: "TOPIC 03",
    name: "Palawan",
    x: 22,
    y: 55,
    color: "#4B6B55",
  },
  {
    id: 4,
    label: "TOPIC 04",
    name: "Mindanao Highlands",
    x: 60,
    y: 78,
    color: "#7A9E8C",
  },
]

interface InteractiveMapProps {
  onPinClick?: (pinId: number) => void
}

export function InteractiveMap({ onPinClick }: InteractiveMapProps) {
  const [hoveredPin, setHoveredPin] = useState<number | null>(null)

  return (
    <div className="relative w-full flex items-center justify-center py-8">
      {/* Map container - large and transparent, no box/border */}
      <div className="relative w-full max-w-[700px] aspect-[3/4]">
        {/* Philippines map image */}
        <Image
          src="/images/ph-map-clean.png"
          alt="Philippines outline map"
          fill
          className="object-contain drop-shadow-[0_0_20px_hsla(141,18%,62%,0.15)]"
          style={{ filter: "invert(1) brightness(0.85) sepia(0.1) hue-rotate(90deg) saturate(0.3)" }}
          priority
        />

        {/* Map pins */}
        {pins.map((pin) => (
          <button
            key={pin.id}
            type="button"
            className="absolute group z-10"
            style={{
              left: `${pin.x}%`,
              top: `${pin.y}%`,
              transform: "translate(-50%, -100%)",
            }}
            onClick={() => onPinClick?.(pin.id)}
            onMouseEnter={() => setHoveredPin(pin.id)}
            onMouseLeave={() => setHoveredPin(null)}
            aria-label={`View ${pin.name}`}
          >
            {/* Tooltip */}
            <div
              className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-medium transition-all duration-300 pointer-events-none ${
                hoveredPin === pin.id
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              }`}
              style={{ backgroundColor: pin.color, color: "#1a1f1c" }}
            >
              <span className="font-sans">{pin.name}</span>
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
                style={{ borderTopColor: pin.color }}
              />
            </div>

            {/* Pin SVG - teardrop shape */}
            <svg
              width="32"
              height="42"
              viewBox="0 0 32 42"
              fill="none"
              className={`transition-all duration-300 drop-shadow-lg ${
                hoveredPin === pin.id ? "scale-125" : "scale-100"
              }`}
            >
              <path
                d="M16 0C7.163 0 0 7.163 0 16c0 12 16 26 16 26s16-14 16-26C32 7.163 24.837 0 16 0z"
                fill={pin.color}
              />
              <circle cx="16" cy="14" r="6" fill="#1a1f1c" opacity="0.3" />
              <circle cx="16" cy="14" r="4" fill="#fff" />
            </svg>

            {/* Label below pin */}
            <span
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[10px] tracking-widest uppercase font-medium whitespace-nowrap transition-all duration-300 ${
                hoveredPin === pin.id ? "opacity-100" : "opacity-60"
              }`}
              style={{ color: pin.color }}
            >
              {pin.label}
            </span>

            {/* Pulse ring */}
            <div
              className="absolute top-[14px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full animate-ping opacity-40"
              style={{ backgroundColor: pin.color }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
