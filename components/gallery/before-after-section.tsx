"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const comparisons = [
  {
    id: 1,
    title: "Detailing Exterior Completo",
    service: "Detailing",
    before: "/images/gallery/before-1.jpg",
    after: "/images/gallery/after-1.jpg",
    description: "Transformación completa de la carrocería con pulido profesional y protección cerámica.",
  },
  {
    id: 2,
    title: "Limpieza Interior Profunda",
    service: "Interior",
    before: "/images/gallery/before-2.jpg",
    after: "/images/gallery/after-2.jpg",
    description: "Limpieza y acondicionamiento completo del habitáculo, incluyendo asientos y tapicería.",
  },
]

export function BeforeAfterSection() {
  const [activeComparison, setActiveComparison] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  const currentComparison = comparisons[activeComparison]

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Antes y Después
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
            Resultados que hablan por sí solos
          </p>
        </div>

        {/* Comparison Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {comparisons.map((comp, index) => (
            <button
              key={comp.id}
              onClick={() => {
                setActiveComparison(index)
                setSliderPosition(50)
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeComparison === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {comp.title}
            </button>
          ))}
        </div>

        {/* Comparison Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border">
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <Image
                src={currentComparison.after || "/placeholder.svg"}
                alt={`Después: ${currentComparison.title}`}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                Después
              </div>
            </div>

            {/* Before Image (Overlay with clip) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={currentComparison.before || "/placeholder.svg"}
                alt={`Antes: ${currentComparison.title}`}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-semibold">
                Antes
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <svg
                  className="w-5 h-5 text-primary-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>

            {/* Hidden Range Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
              aria-label="Comparación antes y después"
            />
          </div>

          {/* Description */}
          <div className="mt-6 text-center">
            <p className="text-sm text-primary font-medium mb-2">
              {currentComparison.service}
            </p>
            <p className="text-muted-foreground">
              {currentComparison.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
