import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Auto detallado profesionalmente"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Expertos en Detailing Automotriz
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            Lavado y Detailing{" "}
            <span className="text-primary">Automotriz Profesional</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
            Protegemos, limpiamos y realzamos tu vehículo como se merece. 
            Utilizamos productos premium y técnicas profesionales para resultados excepcionales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base">
              <Link href="/contacto">
                Cotiza ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary text-base bg-transparent"
            >
              <Link href="/galeria">
                <Play className="w-5 h-5 mr-2" />
                Ver trabajos
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border/50">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">+500</p>
              <p className="text-sm text-muted-foreground mt-1">Clientes Satisfechos</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">8+</p>
              <p className="text-sm text-muted-foreground mt-1">Años de Experiencia</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Garantía</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
