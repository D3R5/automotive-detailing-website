"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "Todos" },
  { id: "detailing", label: "Detailing" },
  { id: "pulido", label: "Pulido" },
  { id: "ceramica", label: "Cerámica" },
  { id: "interior", label: "Interior" },
]

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery/work-1.jpg",
    alt: "Pulido profesional en progreso",
    category: "pulido",
    title: "Pulido de Corrección",
    description: "Eliminación de rayones y swirl marks en BMW Serie 3",
  },
  {
    id: 2,
    src: "/images/gallery/work-2.jpg",
    alt: "Aplicación de coating cerámico",
    category: "ceramica",
    title: "Protección Cerámica",
    description: "Aplicación de coating cerámico profesional",
  },
  {
    id: 3,
    src: "/images/gallery/after-1.jpg",
    alt: "Detailing exterior completo",
    category: "detailing",
    title: "Detailing Completo",
    description: "Resultado final después del detailing exterior",
  },
  {
    id: 4,
    src: "/images/gallery/after-2.jpg",
    alt: "Interior limpio y acondicionado",
    category: "interior",
    title: "Limpieza Interior",
    description: "Interior completamente restaurado y acondicionado",
  },
  {
    id: 5,
    src: "/images/hero-car.jpg",
    alt: "Auto detallado en estudio",
    category: "detailing",
    title: "Resultado Premium",
    description: "Acabado espejo después del detailing completo",
  },
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section className="py-16 lg:py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Trabajos Recientes
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
            Nuestro portafolio de trabajos
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs text-primary font-medium mb-1 capitalize">
                  {item.category}
                </p>
                <h3 className="text-foreground font-semibold">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:text-primary transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={lightboxImage.src || "/placeholder.svg"}
                alt={lightboxImage.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-primary font-medium mb-1 capitalize">
                {lightboxImage.category}
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {lightboxImage.title}
              </h3>
              <p className="text-muted-foreground">
                {lightboxImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
