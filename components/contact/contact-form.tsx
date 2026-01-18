"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Loader2, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl bg-card border border-border text-center">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-muted-foreground mb-6">
          Gracias por contactarnos. Te responderemos lo antes posible.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
        >
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre completo</Label>
          <Input
            id="name"
            name="name"
            placeholder="Tu nombre"
            required
            className="bg-card"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+56 9 1234 5678"
            required
            className="bg-card"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          required
          className="bg-card"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Servicio de interés</Label>
        <select
          id="service"
          name="service"
          className="w-full h-10 px-3 py-2 rounded-md border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          required
        >
          <option value="">Selecciona un servicio</option>
          <option value="lavado">Lavado Exterior e Interior</option>
          <option value="detailing">Detailing Completo</option>
          <option value="pulido">Pulido y Encerado</option>
          <option value="ceramica">Protección Cerámica</option>
          <option value="tapiz">Limpieza de Tapiz</option>
          <option value="otro">Otro / Consulta general</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Cuéntanos sobre tu vehículo y qué servicio necesitas..."
          rows={5}
          required
          className="bg-card resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Enviar mensaje
          </>
        )}
      </Button>
    </form>
  )
}
