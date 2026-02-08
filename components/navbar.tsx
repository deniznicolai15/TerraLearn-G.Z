import { Trees } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center gap-2">
        <Trees className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold tracking-wider text-foreground">TerraLearn G.Z.</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#home" className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">HOME</a>
        <a href="#treks" className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">TREKS</a>
        <a href="#about" className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">ABOUT</a>
        <a href="#contact" className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors">CONTACT</a>
      </div>
      <div className="w-6 md:hidden" />
    </nav>
  )
}
