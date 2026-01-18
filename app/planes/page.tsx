import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star, MessageCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Planes y Precios | AutoShine Pro - Detailing Automotriz",
  description: "Conoce nuestros planes de lavado y detailing automotriz. Precios transparentes en CLP para servicios Básico, Premium y Full Detailing.",
}

const plans = [
  {
    id: "basico",
    name: "Básico",
    description: "Ideal para mantenimiento regular de tu vehículo.",
    price: "35.000",
    period: "por servicio",
    popular: false,
    features: [
      "Lavado exterior a mano",
      "Limpieza de llantas y neumáticos",
      "Aspirado interior básico",
      "Limpieza de vidrios",
      "Aromatización",
      "Duración: 1-2 horas",
    ],
    notIncluded: [
      "Pulido de pintura",
      "Tratamiento de cuero",
      "Protección cerámica",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    description: "Nuestra opción más popular para resultados profesionales.",
    price: "85.000",
    period: "por servicio",
    popular: true,
    features: [
      "Todo lo del plan Básico",
      "Descontaminación con clay bar",
      "Pulido de corrección ligera",
      "Encerado de protección",
      "Limpieza profunda de interior",
      "Acondicionamiento de plásticos",
      "Tratamiento de cuero básico",
      "Duración: 4-5 horas",
    ],
    notIncluded: [
      "Protección cerámica",
    ],
  },
  {
    id: "full",
    name: "Full Detailing",
    description: "La experiencia completa para tu vehículo.",
    price: "180.000",
    period: "por servicio",
    popular: false,
    features: [
      "Todo lo del plan Premium",
      "Pulido de corrección completa",
      "Protección cerámica 6 meses",
      "Tratamiento de cuero premium",
      "Limpieza de motor",
      "Tratamiento hidrofóbico vidrios",
      "Certificado de servicio",
      "Duración: 1-2 días",
    ],
    notIncluded: [],
  },
]

const addons = [
  { name: "Limpieza de motor", price: "35.000" },
  { name: "Tratamiento de cuero premium", price: "25.000" },
  { name: "Upgrade a cerámica 1 año", price: "120.000" },
  { name: "Upgrade a cerámica 3 años", price: "250.000" },
  { name: "Tratamiento antiolor", price: "20.000" },
  { name: "Restauración de faros", price: "30.000" },
]

export default function PlanesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Planes y <span className="text-primary">Precios</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Elige el plan que mejor se adapte a las necesidades de tu vehículo. 
              Todos nuestros servicios incluyen productos premium y garantía de satisfacción.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-6 lg:p-8",
                  plan.popular
                    ? "bg-primary/5 border-primary"
                    : "bg-card border-border"
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      <Star className="w-3 h-3 fill-current" />
                      Más Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-muted-foreground">CLP</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.period}
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className={cn(
                    "w-full mb-6",
                    plan.popular ? "" : "bg-secondary text-foreground hover:bg-secondary/80"
                  )}
                  variant={plan.popular ? "default" : "secondary"}
                >
                  <a
                    href={`https://wa.me/56912345678?text=Hola,%20me%20interesa%20el%20plan%20${encodeURIComponent(plan.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Reservar
                  </a>
                </Button>

                {/* Features */}
                <div className="flex-grow">
                  <p className="text-sm font-semibold text-foreground mb-4">
                    Incluye:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="text-sm font-semibold text-foreground mt-6 mb-4">
                        No incluye:
                      </p>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                              <span className="w-2 h-0.5 bg-muted-foreground" />
                            </div>
                            <span className="text-sm text-muted-foreground/70">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 lg:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Servicios Adicionales
              </h2>
              <p className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
                Personaliza tu servicio
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addons.map((addon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <span className="text-foreground">{addon.name}</span>
                  <span className="text-primary font-semibold">
                    ${addon.price} CLP
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
            ¿Tienes dudas sobre qué plan elegir?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contáctanos y te ayudaremos a encontrar la mejor opción para tu vehículo y presupuesto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a
                href="https://wa.me/56912345678?text=Hola,%20necesito%20ayuda%20para%20elegir%20un%20plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consultar por WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contacto">
                Enviar mensaje
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
