import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react"

const footerLinks = {
  servicios: [
    { href: "/servicios#lavado", label: "Lavado Exterior e Interior" },
    { href: "/servicios#detailing", label: "Detailing Completo" },
    { href: "/servicios#pulido", label: "Pulido y Encerado" },
    { href: "/servicios#ceramica", label: "Protección Cerámica" },
  ],
  navegacion: [
    { href: "/", label: "Inicio" },
    { href: "/galeria", label: "Galería" },
    { href: "/planes", label: "Planes" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AS</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                AutoShine<span className="text-primary">Pro</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Expertos en lavado y detailing automotriz. Protegemos, limpiamos y realzamos tu vehículo con los mejores productos y técnicas profesionales.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Navegación</h3>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Av. Principal 1234, Santiago, Chile
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+56912345678"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +56 9 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:contacto@autoshinepro.cl"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  contacto@autoshinepro.cl
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  <p>Lun - Vie: 9:00 - 19:00</p>
                  <p>Sáb: 9:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AutoShine Pro. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacidad"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
