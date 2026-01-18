import { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contacto | AutoShine Pro - Cotiza tu Servicio",
  description: "Contáctanos para cotizar tu servicio de detailing automotriz. WhatsApp, teléfono, email o visítanos en nuestra ubicación en Santiago, Chile.",
}

export default function ContactoPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              <span className="text-primary">Contáctanos</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              ¿Tienes preguntas o quieres cotizar un servicio? Estamos aquí para ayudarte. 
              Respuesta en menos de 2 horas durante horario laboral.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Envíanos un mensaje
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Información de contacto
              </h2>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Ubicación
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
              Visítanos en nuestra sede
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border bg-secondary">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.936799961!2d-70.6482700!3d-33.4372400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzE0LjEiUyA3MMKwMzgnNTMuOCJX!5e0!3m2!1sen!2scl!4v1635000000000!5m2!1sen!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de AutoShine Pro"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
