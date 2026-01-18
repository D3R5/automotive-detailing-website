import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    title: "Teléfono",
    content: "+56 9 1234 5678",
    href: "tel:+56912345678",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contacto@autoshinepro.cl",
    href: "mailto:contacto@autoshinepro.cl",
  },
  {
    icon: MapPin,
    title: "Dirección",
    content: "Av. Principal 1234, Santiago, Chile",
    href: "https://maps.google.com",
  },
]

const businessHours = [
  { day: "Lunes - Viernes", hours: "9:00 - 19:00" },
  { day: "Sábado", hours: "9:00 - 14:00" },
  { day: "Domingo", hours: "Cerrado" },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* WhatsApp CTA */}
      <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">WhatsApp</h3>
            <p className="text-sm text-muted-foreground">Respuesta rápida</p>
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-4">
          La forma más rápida de contactarnos. Respuesta en menos de 2 horas durante horario laboral.
        </p>
        <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          <a
            href="https://wa.me/56912345678?text=Hola,%20quiero%20cotizar%20un%20servicio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Abrir WhatsApp
          </a>
        </Button>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        {contactDetails.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{item.title}</p>
              <p className="text-foreground font-medium">{item.content}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Business Hours */}
      <div className="p-6 rounded-2xl bg-card border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">Horario de atención</h3>
        </div>
        <div className="space-y-3">
          {businessHours.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-border last:border-0"
            >
              <span className="text-muted-foreground">{item.day}</span>
              <span className="text-foreground font-medium">{item.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
