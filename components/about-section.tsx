import { Trees } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-16 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Trees className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">ABOUT US</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              TerraLearn G.Z is dedicated to sharing knowledge about the natural world,
              from tropical forests and river ecosystems to mountain habitats and beyond.
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-semibold text-sm mb-3 tracking-wide uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#home" className="text-muted-foreground text-sm hover:text-primary transition-colors">Home</a></li>
              <li><a href="#treks" className="text-muted-foreground text-sm hover:text-primary transition-colors">Treks</a></li>
              <li><a href="#about" className="text-muted-foreground text-sm hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground font-semibold text-sm mb-3 tracking-wide uppercase">Contact</h3>
            <ul className="flex flex-col gap-2 text-muted-foreground text-sm">
              <li>info@terralearn.gz</li>
              <li>+1 234 567 890</li>
              <li>Alpine Region, Europe</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            &copy; 2026 TerraLearn G.Z All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
