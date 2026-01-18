import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-background to-accent/10 border border-primary/20 p-8 lg:p-16">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              ¿Listo para transformar tu vehículo?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Contáctanos hoy y recibe una cotización personalizada sin compromiso. 
              Respuesta en menos de 2 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <a
                  href="https://wa.me/56912345678?text=Hola,%20quiero%20cotizar%20un%20servicio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Cotizar por WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground/20 text-foreground hover:bg-foreground/10 text-base bg-transparent"
              >
                <Link href="/planes">
                  Ver planes y precios
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
