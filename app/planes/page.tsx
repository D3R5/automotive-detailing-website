import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star, MessageCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Planes y Precios | DINO GLOSS - Detailing Automotriz",
  description:
    "En DINO GLOSS nos especializamos en el cuidado estético automotriz, entregando un servicio profesional y de alta calidad.",
}

const plans = [
  {
    id: "basico",
    name: "Combo Básico",
    description:
      "Servicio ideal para mantener tu vehículo limpio y en óptimas condiciones.",
    prices: {
      S: "19.990",
      M: "20.990",
      L: "21.990",
    },
    popular: false,
    features: [
      "Pre-lavado y lavado full exterior",
      "Limpieza de llantas",
      "Limpieza marcos de puertas",
      "Limpieza de vidrios",
      "Renovador de neumáticos",
      "Limpieza y aspirado de interior",
      "Limpieza de tablero con APC",
      "Aspirado de asientos",
      "Limpieza maletero",
    ],
  },
  {
    id: "avanzado",
    name: "Combo Avanzado",
    description:
      "Mayor nivel de detalle y tratamiento interior para un acabado superior.",
    prices: {
      S: "39.990",
      M: "43.990",
      L: "46.990",
    },
    popular: true,
    features: [
      "Todo lo del Combo Básico",
      "Vidrios interior y exterior",
      "Hidratación de plásticos interiores y exteriores",
      "Lavado de tapiz con aspiradora de tapiz",
      "Aspirado profundo de maletero",
    ],
  },
  {
    id: "deluxe",
    name: "Combo Deluxe",
    description:
      "Experiencia completa de detailing con descontaminación y protección.",
    prices: {
      S: "104.990",
      M: "119.990",
      L: "129.990",
    },
    popular: false,
    features: [
      "Todo lo del Combo Avanzado",
      "Lavado alfombra con aspiradora y taladro",
      "Descontaminación con claybar",
      "Pulido básico",
      "Encerado",
    ],
  },
]

const extras = [
  {
    name: "Pulido profundo en 2 pasos",
    prices: { S: "90.000", M: "120.000", L: "150.000" },
  },
  {
    name: "Pulido profundo + Sellador cerámico",
    prices: { S: "150.000", M: "190.000", L: "230.000" },
  },
  {
    name: "Eliminación de olores con ozono",
    prices: { S: "25.000", M: "30.000", L: "30.000" },
  },
]

export default function PlanesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Planes y <span className="text-primary">Precios</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            En DINO GLOSS nos especializamos en el cuidado estético automotriz,
            entregando un servicio profesional, detallado y de alta calidad.
          </p>
        </div>
      </section>

      {/* Planes */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 max-w-6xl">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "rounded-2xl border p-8 flex flex-col",
                plan.popular
                  ? "bg-primary/5 border-primary"
                  : "bg-card border-border"
              )}
            >
              {plan.popular && (
                <div className="mb-4 text-xs font-semibold text-primary">
                  ⭐ Más Popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {plan.description}
              </p>

              {/* Precios por tamaño */}
              <div className="mb-6 space-y-2">
                {Object.entries(plan.prices).map(([size, price]) => (
                  <div
                    key={size}
                    className="flex justify-between text-sm border-b pb-1"
                  >
                    <span>Tamaño {size}</span>
                    <span className="font-semibold">${price} CLP</span>
                  </div>
                ))}
              </div>

              <Button asChild className="mb-6">
                <a
                  href={`https://wa.me/56912345678?text=Hola,%20me%20interesa%20el%20${encodeURIComponent(
                    plan.name
                  )}`}
                  target="_blank"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Reservar
                </a>
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Extras */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-10">
            Servicios Extra
          </h2>

          <div className="space-y-6">
            {extras.map((extra, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 bg-secondary/40"
              >
                <h3 className="font-semibold mb-4">{extra.name}</h3>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  {Object.entries(extra.prices).map(([size, price]) => (
                    <div key={size} className="flex justify-between">
                      <span>Tamaño {size}</span>
                      <span className="font-semibold">${price} CLP</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          ¿No sabes qué combo elegir?
        </h2>
        <p className="text-muted-foreground mb-8">
          Escríbenos y te ayudamos a elegir la mejor opción para tu vehículo.
        </p>
        <Button asChild size="lg">
          <a
            href="https://wa.me/56912345678?text=Hola,%20necesito%20asesoría"
            target="_blank"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Consultar por WhatsApp
          </a>
        </Button>
      </section>
    </div>
  )
}
