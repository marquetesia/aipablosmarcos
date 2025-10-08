'use client'

import { FileText, Mail, Phone, MapPin, AlertTriangle } from "lucide-react"
import NavPill from "@/components/NavPill"
import Footer from "@/components/Footer"

export default function TerminosServicio() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavPill />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <FileText className="w-16 h-16 mx-auto mb-6 text-brand-purple" />
              <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tighter">
                <span className="text-brand-purple">Términos de </span>
                <span className="font-bold text-foreground">Servicio</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto mb-8">
                Condiciones generales que rigen el uso de nuestros servicios y plataforma
              </p>
              <p className="text-sm text-muted-foreground">
                Última actualización: 1 de marzo de 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="card p-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">1. Información General</h2>
                <div className="bg-secondary p-6 rounded-lg mb-8">
                  <h3 className="font-bold text-foreground mb-4">IAconsultora</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>C. del Mirador, 6, 28860, Madrid, Spain, España</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>info@iaconsultora.net</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>(+34) 916 20 59 22</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-6">2. Objeto y Ámbito de Aplicación</h2>
                <p className="text-muted-foreground mb-4">
                  Los presentes términos y condiciones generales (en adelante, "Términos") regulan el uso de los servicios
                  ofrecidos por IAconsultora, incluyendo:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Consultoría en Inteligencia Artificial y automatización</li>
                  <li>Desarrollo e implementación de soluciones tecnológicas</li>
                  <li>Desarrollo de sitios web y aplicaciones</li>
                  <li>Formación y soporte técnico</li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-yellow-800 mb-2">Importante</h3>
                      <p className="text-yellow-700">
                        Al contratar cualquiera de nuestros servicios, aceptas automáticamente estos términos y condiciones.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-6">3. Servicios Ofrecidos</h2>

                <h3 className="text-xl font-bold text-foreground mb-4">3.1 Consultoría en IA</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Análisis de necesidades y desarrollo de estrategias de IA</li>
                  <li>Implementación de soluciones de automatización</li>
                  <li>Integración con sistemas existentes</li>
                  <li>Formación de equipos internos</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mb-4">3.2 Desarrollo Web</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Diseño y desarrollo de sitios web</li>
                  <li>Aplicaciones web personalizadas</li>
                  <li>Optimización SEO y rendimiento</li>
                  <li>Mantenimiento y actualizaciones</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">4. Obligaciones del Cliente</h2>
                <p className="text-muted-foreground mb-4">
                  El cliente se compromete a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Proporcionar información veraz y actualizada</li>
                  <li>Facilitar el acceso a sistemas y datos necesarios para la prestación del servicio</li>
                  <li>Designar personas de contacto autorizadas</li>
                  <li>Cumplir con los plazos de pago establecidos</li>
                  <li>Colaborar activamente en el desarrollo del proyecto</li>
                  <li>Mantener la confidencialidad de la información compartida</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">5. Obligaciones de IAconsultora</h2>
                <p className="text-muted-foreground mb-4">
                  Nos comprometemos a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Prestar los servicios con la máxima profesionalidad</li>
                  <li>Cumplir con los plazos acordados</li>
                  <li>Mantener la confidencialidad de la información del cliente</li>
                  <li>Proporcionar soporte técnico según lo establecido en el contrato</li>
                  <li>Garantizar la calidad de los servicios prestados</li>
                  <li>Informar de cualquier incidencia que pueda afectar al servicio</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">6. Precios y Condiciones de Pago</h2>

                <h3 className="text-xl font-bold text-foreground mb-4">6.1 Precios</h3>
                <p className="text-muted-foreground mb-4">
                  Los precios se establecen según la propuesta económica aceptada por el cliente. Todos los precios incluyen IVA salvo que se indique lo contrario.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-4">6.2 Condiciones de Pago</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li><strong>Proyectos únicos:</strong> 50% al inicio, 50% al finalizar</li>
                  <li><strong>Servicios mensuales:</strong> Pago mensual por adelantado</li>
                  <li><strong>Proyectos grandes:</strong> Pagos escalonados según hitos</li>
                  <li><strong>Plazo de pago:</strong> 15 días desde la emisión de la factura</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">7. Garantías y Limitaciones</h2>

                <h3 className="text-xl font-bold text-foreground mb-4">7.1 Garantías</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Garantizamos la funcionalidad de nuestras soluciones durante 6 meses</li>
                  <li>Ofrecemos soporte técnico incluido en el período de garantía</li>
                  <li>Para proyectos superiores a €10,000, garantizamos ROI mínimo del 200%</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mb-4">7.2 Limitaciones</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>La garantía no cubre modificaciones realizadas por terceros</li>
                  <li>No nos responsabilizamos de pérdidas derivadas del mal uso del sistema</li>
                  <li>La responsabilidad máxima está limitada al importe del contrato</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">8. Confidencialidad</h2>
                <p className="text-muted-foreground mb-8">
                  Ambas partes se comprometen a mantener la máxima confidencialidad sobre toda la información
                  intercambiada durante la prestación de los servicios. Esta obligación permanecerá vigente
                  incluso después de la finalización del contrato.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">9. Propiedad Intelectual</h2>
                <p className="text-muted-foreground mb-4">
                  Salvo acuerdo expreso en contrario:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>El cliente mantiene la propiedad de sus datos y contenidos</li>
                  <li>IAconsultora mantiene la propiedad de las metodologías y herramientas desarrolladas</li>
                  <li>Las soluciones específicas desarrolladas para el cliente serán de su propiedad</li>
                  <li>Ambas partes respetarán los derechos de terceros</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">10. Modificaciones y Cancelaciones</h2>

                <h3 className="text-xl font-bold text-foreground mb-4">10.1 Modificaciones</h3>
                <p className="text-muted-foreground mb-4">
                  Las modificaciones al alcance del proyecto deben ser acordadas por escrito y pueden implicar
                  ajustes en el precio y cronograma.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-4">10.2 Cancelaciones</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>El cliente puede cancelar con 15 días de antelación</li>
                  <li>Se facturará el trabajo realizado hasta la fecha de cancelación</li>
                  <li>En caso de cancelación por parte de IAconsultora, se reembolsarán los pagos no devengados</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">11. Resolución de Conflictos</h2>
                <p className="text-muted-foreground mb-8">
                  En caso de controversia, las partes intentarán resolverla de forma amistosa. Si no fuera posible,
                  será competente la jurisdicción de Madrid, renunciando expresamente a cualquier otro fuero.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">12. Modificaciones de los Términos</h2>
                <p className="text-muted-foreground mb-8">
                  Nos reservamos el derecho a modificar estos términos. Los cambios entrarán en vigor tras su
                  publicación en nuestra web y notificación a los clientes activos.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">13. Contacto</h2>
                <p className="text-muted-foreground mb-4">
                  Para cualquier consulta sobre estos términos:
                </p>
                <div className="bg-secondary p-6 rounded-lg mb-8">
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>Email: legal@iaconsultora.net</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>Teléfono: (+34) 916 20 59 22</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Dirección: C. del Mirador, 6, 28860, Madrid, Spain, España</span>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-purple/10 border border-brand-purple/20 p-6 rounded-lg">
                  <h3 className="font-bold text-foreground mb-4">¿Dudas sobre nuestros términos?</h3>
                  <p className="text-muted-foreground mb-4">
                    Estamos disponibles para aclarar cualquier aspecto de estos términos y condiciones.
                  </p>
                  <div className="flex items-center gap-2 text-brand-purple">
                    <Mail className="w-4 h-4" />
                    <span className="font-semibold">legal@iaconsultora.net</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}