import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Droplets,
  Sparkles,
  Car,
  Shield,
  Wrench,
  Clock,
  Check,
  MessageCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Servicios | DINO GLOSS - Detailing Automotriz Profesional",
  description:
    "Servicios de detailing automotriz en Chile. Combos Básico, Avanzado y Deluxe, pulido profundo, sellado cerámico y eliminación de olores con ozono.",
}

const services = [
  {
    id: "basico",
    icon: Droplets,
    title: "Combo Básico",
    description:
      "Servicio completo de limpieza exterior e interior, ideal para mantener tu vehículo limpio y en óptimas condiciones.",
    duration: "2-3 horas",
    features: [
      "Pre-lavado y lavado full exterior",
      "Limpieza de llantas",
      "Limpieza marcos de puertas",
      "Limpieza de vidrios",
      "Renovador de neumáticos",
      "Limpieza y aspirado de interior",
      "Limpieza de tablero con APC",
      "Aspirado de asientos",
      "Limpieza de maletero",
    ],
    price: "S: $19.990 | M: $20.990 | L: $21.990",
  },
  {
    id: "avanzado",
    icon: Sparkles,
    title: "Combo Avanzado",
    description:
      "Limpieza profunda con hidratación de plásticos y lavado de tapiz para un acabado más completo y duradero.",
    duration: "3-4 horas",
    features: [
      "Pre-lavado y lavado full exterior",
      "Limpieza de llantas",
      "Limpieza marcos de puertas",
      "Limpieza de vidrios interior y exterior",
      "Renovador de neumáticos",
      "Limpieza y aspirado de interior",
      "Limpieza de tablero con APC",
      "Aspirado de asientos",
      "Limpieza de maletero",
      "Hidratación de plásticos interiores y exteriores",
      "Lavado de tapiz con aspiradora de tapiz",
    ],
    price: "S: $39.990 | M: $43.990 | L: $46.990",
  },
  {
    id: "deluxe",
    icon: Shield,
    title: "Combo Deluxe",
    description:
      "Servicio premium con descontaminación, pulido y encerado para un acabado profesional y protección superior.",
    duration: "1 día",
    features: [
      "Pre-lavado y lavado full exterior",
      "Limpieza de llantas",
      "Limpieza marcos de puertas",
      "Limpieza de vidrios interior y exterior",
      "Renovador de neumáticos",
      "Limpieza y aspirado de interior",
      "Limpieza de tablero con APC",
      "Aspirado de asientos",
      "Limpieza de maletero",
      "Hidratación de plásticos interiores y exteriores",
      "Lavado de tapiz con aspiradora y taladro",
      "Lavado de alfombras con aspiradora y taladro",
      "Descontaminación con claybar",
      "Pulido básico",
      "Encerado",
    ],
    price: "S: $104.990 | M: $119.990 | L: $129.990",
  },
  {
    id: "pulido2pasos",
    icon: Car,
    title: "Pulido Profundo en 2 Pasos",
    description:
      "Corrección avanzada de pintura con descontaminación para eliminar defectos más marcados.",
    duration: "1-2 días",
    features: [
      "Descontaminación de pintura",
      "Pulido profundo en 2 etapas",
      "Corrección de imperfecciones",
      "Mejora notable de brillo",
    ],
    price: "S: $90.000 | M: $120.000 | L: $150.000",
  },
  {
    id: "pulido-ceramico",
    icon: Shield,
    title: "Pulido 2 Pasos + Sellador Cerámico",
    description:
      "Corrección profunda más protección cerámica para mayor brillo y durabilidad.",
    duration: "2 días",
    features: [
      "Descontaminación de pintura",
      "Pulido profundo en 2 etapas",
      "Aplicación de sellador cerámico",
      "Protección y brillo prolongado",
    ],
    price: "S: $150.000 | M: $190.000 | L: $230.000",
  },
  {
    id: "ozono",
    icon: Wrench,
    title: "Eliminación de Olores con Ozono",
    description:
      "Tratamiento con máquina generadora de ozono para eliminar bacterias y olores persistentes.",
    duration: "1-2 horas",
    features: [
      "Aplicación con máquina generadora de ozono",
      "Eliminación de bacterias",
      "Neutralización de olores fuertes",
      "Ambiente interior más higiénico",
    ],
    price: "S: $25.000 | M: $30.000 | L: $30.000",
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
              Servicios <span className="text-primary">DINO GLOSS</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              En DINO GLOSS nos especializamos en el cuidado estético automotriz,
              entregando un servicio profesional, detallado y de alta calidad.
              Trabajamos con productos especializados y técnicas seguras para
              mantener tu vehículo limpio, protegido y con un acabado impecable.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12 lg:space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
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
                          href={`https://wa.me/56912345678?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(
                            service.title
                          )}`}
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
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-accent" />
                            </div>
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
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
            ¿Quieres agendar tu servicio?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contáctanos para reservar tu hora o solicitar información sobre
            nuestros combos y servicios adicionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
