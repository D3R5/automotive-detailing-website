import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Droplets, Sparkles, Shield, Car } from "lucide-react"

const services = [
  {
    icon: Droplets,
    title: "Lavado Exterior e Interior",
    description: "Limpieza profunda de carrocería, vidrios, llantas y habitáculo completo.",
    duration: "1-2 horas",
    href: "/servicios#lavado",
  },
  {
    icon: Sparkles,
    title: "Detailing Completo",
    description: "Restauración total del vehículo, incluyendo pulido, descontaminación y protección.",
    duration: "4-6 horas",
    href: "/servicios#detailing",
  },
  {
    icon: Car,
    title: "Pulido y Encerado",
    description: "Eliminamos rayones superficiales y devolvemos el brillo original a tu pintura.",
    duration: "3-4 horas",
    href: "/servicios#pulido",
  },
  {
    icon: Shield,
    title: "Protección Cerámica",
    description: "Coating cerámico de última generación para protección duradera hasta 3 años.",
    duration: "1-2 días",
    href: "/servicios#ceramica",
  },
]

export function FeaturedServices() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Nuestros Servicios
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
              Soluciones profesionales para tu vehículo
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit bg-transparent">
            <Link href="/servicios">
              Ver todos los servicios
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Duración estimada: {service.duration}
                </div>

                {/* Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
