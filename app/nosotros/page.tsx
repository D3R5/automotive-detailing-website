import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Target, Heart, Award, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Nosotros | AutoShine Pro - Quiénes Somos",
  description: "Conoce al equipo de AutoShine Pro. Más de 8 años de experiencia en detailing automotriz profesional en Chile.",
}

const values = [
  {
    icon: Target,
    title: "Precisión",
    description: "Cada detalle importa. Nos enfocamos en la perfección y en superar las expectativas de nuestros clientes.",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos los autos tanto como tú. Cada vehículo que tratamos recibe el cuidado que merece.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Utilizamos solo los mejores productos y técnicas para garantizar resultados excepcionales.",
  },
  {
    icon: Users,
    title: "Compromiso",
    description: "Tu satisfacción es nuestra prioridad. Garantizamos cada servicio que realizamos.",
  },
]

const stats = [
  { value: "8+", label: "Años de experiencia" },
  { value: "500+", label: "Clientes satisfechos" },
  { value: "1,200+", label: "Vehículos atendidos" },
  { value: "100%", label: "Garantía de satisfacción" },
]

export default function NosotrosPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Sobre <span className="text-primary">Nosotros</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Somos un equipo apasionado por los autos y comprometido con la excelencia en cada servicio que ofrecemos.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/team.jpg"
                alt="Equipo de AutoShine Pro"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Nuestra Historia
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-balance">
                Más de 8 años cuidando tu vehículo
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AutoShine Pro nació en 2016 de la pasión de su fundador por los autos y el deseo de ofrecer servicios de detailing de clase mundial en Chile. Lo que comenzó como un pequeño emprendimiento, hoy se ha convertido en un referente del detailing automotriz profesional.
                </p>
                <p>
                  Nos hemos capacitado constantemente en las últimas técnicas y tecnologías de la industria, trayendo a Chile productos y métodos que antes solo estaban disponibles en mercados internacionales.
                </p>
                <p>
                  Cada miembro de nuestro equipo comparte la misma pasión por los autos y el compromiso con la excelencia. Creemos que cada vehículo, sin importar su marca o modelo, merece ser tratado con el máximo cuidado y profesionalismo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Nuestra Misión
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
              Entregar la mejor experiencia en cuidado automotriz, combinando técnicas profesionales con un servicio personalizado que supere tus expectativas.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Nuestros Valores
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
              Lo que nos define
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-secondary/50 border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
            ¿Listo para conocernos?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Visítanos o contáctanos para conocer más sobre nuestros servicios y cómo podemos ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contacto">
                Contáctanos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/servicios">Ver servicios</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
