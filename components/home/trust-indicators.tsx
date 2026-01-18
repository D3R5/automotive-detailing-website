import { Shield, Award, Sparkles, Clock } from "lucide-react"

const indicators = [
  {
    icon: Shield,
    title: "Productos Premium",
    description: "Utilizamos solo las mejores marcas internacionales en protección y limpieza automotriz.",
  },
  {
    icon: Award,
    title: "Técnicos Certificados",
    description: "Nuestro equipo está capacitado con las últimas técnicas de detailing profesional.",
  },
  {
    icon: Sparkles,
    title: "Resultados Garantizados",
    description: "Si no quedas satisfecho, repetimos el servicio sin costo adicional.",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Respetamos tu tiempo. Entregamos en el plazo acordado o antes.",
  },
]

export function TrustIndicators() {
  return (
    <section className="py-16 lg:py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
            Compromiso con la excelencia
          </p>
        </div>

        {/* Indicators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {indicators.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
