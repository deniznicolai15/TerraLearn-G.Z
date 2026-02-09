"use client"

interface TreeCloseButtonProps {
  onClick: () => void
  size?: "sm" | "md" | "lg"
  className?: string
}

export function TreeCloseButton({ onClick, size = "md", className = "" }: TreeCloseButtonProps) {
  const dimensions = {
    sm: { w: 32, h: 36, viewBox: "0 0 32 36" },
    md: { w: 40, h: 44, viewBox: "0 0 40 44" },
    lg: { w: 48, h: 52, viewBox: "0 0 48 52" },
  }

  const d = dimensions[size]

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 ${className}`}
      aria-label="Close"
      title="Close"
    >
      <svg
        width={d.w}
        height={d.h}
        viewBox={d.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        {/* Tree trunk */}
        <rect
          x={d.w / 2 - 2}
          y={d.h * 0.7}
          width="4"
          height={d.h * 0.22}
          rx="1.5"
          fill="#8B6914"
          className="group-hover:fill-[#A07A1A] transition-colors duration-300"
        />
        {/* Bottom layer (largest) */}
        <path
          d={`M${d.w / 2} ${d.h * 0.2} L${d.w * 0.82} ${d.h * 0.72} L${d.w * 0.18} ${d.h * 0.72} Z`}
          fill="hsl(141, 18%, 52%)"
          className="group-hover:fill-[hsl(141,22%,58%)] transition-colors duration-300"
        />
        {/* Middle layer */}
        <path
          d={`M${d.w / 2} ${d.h * 0.1} L${d.w * 0.72} ${d.h * 0.52} L${d.w * 0.28} ${d.h * 0.52} Z`}
          fill="hsl(141, 20%, 45%)"
          className="group-hover:fill-[hsl(141,24%,50%)] transition-colors duration-300"
        />
        {/* Top layer (smallest) */}
        <path
          d={`M${d.w / 2} ${d.h * 0.02} L${d.w * 0.62} ${d.h * 0.34} L${d.w * 0.38} ${d.h * 0.34} Z`}
          fill="hsl(141, 22%, 38%)"
          className="group-hover:fill-[hsl(141,26%,44%)] transition-colors duration-300"
        />
        {/* X mark on the tree */}
        <line
          x1={d.w / 2 - 4}
          y1={d.h * 0.32}
          x2={d.w / 2 + 4}
          y2={d.h * 0.46}
          stroke="hsl(140, 10%, 92%)"
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
        <line
          x1={d.w / 2 + 4}
          y1={d.h * 0.32}
          x2={d.w / 2 - 4}
          y2={d.h * 0.46}
          stroke="hsl(140, 10%, 92%)"
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      </svg>
    </button>
  )
}
