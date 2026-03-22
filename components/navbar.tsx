'use client'

import { useState } from "react"
import { Trees, Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { href: "#home", label: "HOME" },
    { href: "#treks", label: "TREKS" },
    { href: "#about", label: "ABOUT" },
    { href: "#contact", label: "CONTACT" },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-5 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center gap-2">
        <Trees className="h-6 w-6 text-primary" />
        <span className="text-base sm:text-lg font-bold tracking-wider text-foreground">TerraLearn G.Z</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex items-center justify-center w-10 h-10 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border/50 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col py-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="px-4 py-3 text-sm tracking-wide text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
