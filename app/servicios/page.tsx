import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Droplets, Sparkles, Car, Shield, Sofa, Wrench, Clock, Check, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Servicios | AutoShine Pro - Detailing Automotriz Profesional",
  description: "Descubre nuestros servicios de lavado, detailing, pulido, encerado y protección cerámica. Soluciones profesionales para todo tipo de vehículos en Chile.",
}

const services = [
  {
    id: "lavado",
    icon: Droplets,
    title: "Lavado Exterior e Interior",
    description: "Limpieza profunda y meticulosa de todo tu vehículo, incluyendo carrocería, vidrios, llantas y habitáculo completo.",
    duration: "1-2 horas",
    features: [
      "Lavado a mano de carrocería",
      "Limpieza de llantas y neumáticos",
      "Aspirado completo del interior",
      "Limpieza de vidrios interior y exterior",
      "Limpieza de plásticos y paneles",
      "Aromatización del habitáculo",
    ],
    price: "Desde $25.000 CLP",
  },
  {
    id: "detailing",
    icon: Sparkles,
    title: "Detailing Completo",
    description: "Restauración integral de tu vehículo con técnicas profesionales de descontaminación, corrección y protección.",
    duration: "4-6 horas",
    features: [
      "Lavado profesional con espuma",
      "Descontaminación con clay bar",
      "Pulido de corrección en una etapa",
      "Encerado de protección",
      "Acondicionamiento de plásticos",
      "Limpieza profunda de tapicería",
      "Tratamiento de vidrios",
      "Limpieza del motor",
    ],
    price: "Desde $120.000 CLP",
  },
  {
    id: "pulido",
    icon: Car,
    title: "Pulido y Encerado",
    description: "Eliminamos rayones superficiales, swirl marks y oxidación para devolverle el brillo original a tu pintura.",
    duration: "3-4 horas",
    features: [
      "Evaluación del estado de la pintura",
      "Pulido de corrección profesional",
      "Eliminación de rayones superficiales",
      "Remoción de swirl marks",
      "Encerado premium de protección",
      "Brillo espejo garantizado",
    ],
    price: "Desde $80.000 CLP",
  },
  {
    id: "ceramica",
    icon: Shield,
    title: "Protección Cerámica",
    description: "Coating cerámico de última generación que protege tu pintura de rayones, químicos y rayos UV por hasta 3 años.",
    duration: "1-2 días",
    features: [
      "Preparación completa de pintura",
      "Corrección de pintura profesional",
      "Aplicación de coating cerámico",
      "Protección hidrofóbica extrema",
      "Resistencia a rayones menores",
      "Protección UV garantizada",
      "Certificado de aplicación",
      "Garantía de hasta 3 años",
    ],
    price: "Desde $350.000 CLP",
  },
  {
    id: "tapiz",
    icon: Sofa,
    title: "Limpieza de Tapiz",
    description: "Limpieza profunda de asientos, alfombras y tapicería con productos especializados y equipos profesionales.",
    duration: "2-3 horas",
    features: [
      "Aspirado profundo",
      "Limpieza de asientos de tela/cuero",
      "Tratamiento de manchas",
      "Limpieza de alfombras",
      "Acondicionamiento de cuero",
      "Eliminación de olores",
    ],
    price: "Desde $45.000 CLP",
  },
  {
    id: "motor",
    icon: Wrench,
    title: "Limpieza de Motor",
    description: "Limpieza segura y profesional del compartimento del motor para mantenerlo en óptimas condiciones.",
    duration: "1-2 horas",
    features: [
      "Protección de componentes eléctricos",
      "Desengrasado profesional",
      "Limpieza con vapor a baja presión",
      "Acondicionamiento de plásticos",
      "Secado completo",
      "Inspección visual general",
    ],
    price: "Desde $35.000 CLP",
  },
]

export default function ServiciosPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Nuestros <span className="text-primary">Servicios</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Ofrecemos una gama completa de servicios de lavado y detailing automotriz, 
              utilizando productos premium y técnicas profesionales para resultados excepcionales.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12 lg:space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Info Card */}
                  <div className="lg:w-1/2">
                    <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border h-full">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>Duración: {service.duration}</span>
                        </div>
                        <div className="text-lg font-semibold text-primary">
                          {service.price}
                        </div>
                      </div>
                      <Button asChild>
                        <a
                          href={`https://wa.me/56912345678?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Consultar por WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="lg:w-1/2">
                    <div className="p-6 lg:p-8 rounded-2xl bg-secondary/50 border border-border h-full">
                      <h3 className="text-lg font-semibold text-foreground mb-6">
                        ¿Qué incluye?
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-accent" />
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contáctanos para servicios personalizados o combinaciones de tratamientos especiales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/planes">Ver planes y precios</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
