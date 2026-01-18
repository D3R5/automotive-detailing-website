import { Metadata } from "next"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { BeforeAfterSection } from "@/components/gallery/before-after-section"

export const metadata: Metadata = {
  title: "Galería | AutoShine Pro - Trabajos de Detailing Automotriz",
  description: "Mira nuestros trabajos de detailing, pulido, encerado y protección cerámica. Antes y después de nuestros servicios profesionales.",
}

export default function GaleriaPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Nuestra <span className="text-primary">Galería</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Explora nuestros trabajos más recientes y descubre la diferencia que hace el detailing profesional. 
              Cada vehículo es tratado con el máximo cuidado y atención al detalle.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* Gallery Grid */}
      <GalleryGrid />
    </div>
  )
}
