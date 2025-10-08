'use client'

import { Scale, Mail, Phone, MapPin, Building, Globe } from "lucide-react"
import NavPill from "@/components/NavPill"
import Footer from "@/components/Footer"

export default function AvisoLegal() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavPill />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Scale className="w-16 h-16 mx-auto mb-6 text-brand-purple" />
              <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tighter">
                <span className="text-brand-purple">Aviso </span>
                <span className="font-bold text-foreground">Legal</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto mb-8">
                Información legal sobre IAconsultora y el uso de este sitio web
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
                <h2 className="text-2xl font-bold text-foreground mb-6">1. Datos del Titular</h2>
                <div className="bg-secondary p-6 rounded-lg mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <Building className="w-5 h-5" />
                        Información Empresarial
                      </h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>Denominación social:</strong> IAconsultora S.L.</p>
                        <p><strong>CIF:</strong> B-12345678</p>
                        <p><strong>Registro Mercantil:</strong> Madrid, Tomo 1234, Folio 567, Hoja M-89012</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Datos de Contacto
                      </h3>
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
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          <span>www.iaconsultora.net</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-6">2. Actividad Empresarial</h2>
                <p className="text-muted-foreground mb-4">
                  IAconsultora es una empresa especializada en:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Consultoría en Inteligencia Artificial y transformación digital</li>
                  <li>Desarrollo e implementación de soluciones de automatización</li>
                  <li>Integración de sistemas empresariales (n8n, GoHighLevel, Notion)</li>
                  <li>Asesoría y servicios inmobiliarios especializados</li>
                  <li>Desarrollo de sitios web y aplicaciones</li>
                  <li>Formación y consultoría tecnológica</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">3. Objeto del Sitio Web</h2>
                <p className="text-muted-foreground mb-4">
                  Este sitio web tiene como finalidad:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Informar sobre nuestros servicios y soluciones</li>
                  <li>Facilitar el contacto con potenciales clientes</li>
                  <li>Proporcionar recursos educativos sobre IA y automatización</li>
                  <li>Mostrar casos de éxito y portfolio de proyectos</li>
                  <li>Permitir la contratación de servicios online</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">4. Condiciones de Uso</h2>

                <h3 className="text-xl font-bold text-foreground mb-4">4.1 Acceso y Navegación</h3>
                <p className="text-muted-foreground mb-4">
                  El acceso y uso de este sitio web es gratuito. Sin embargo, algunos servicios pueden requerir
                  registro previo o contratación específica.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-4">4.2 Uso Permitido</h3>
                <p className="text-muted-foreground mb-4">
                  El usuario se compromete a utilizar el sitio web de conformidad con la ley y estos términos.
                  Queda prohibido:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Realizar actividades ilícitas o que puedan dañar el sitio</li>
                  <li>Introducir virus o código malicioso</li>
                  <li>Intentar acceder a áreas restringidas</li>
                  <li>Reproducir contenidos sin autorización</li>
                  <li>Utilizar el sitio para fines comerciales no autorizados</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mb-4">4.3 Responsabilidad del Usuario</h3>
                <p className="text-muted-foreground mb-8">
                  El usuario es responsable de mantener la confidencialidad de sus credenciales de acceso
                  y de todas las actividades realizadas bajo su cuenta.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">5. Propiedad Intelectual</h2>
                <p className="text-muted-foreground mb-4">
                  Todos los contenidos de este sitio web (textos, imágenes, logos, diseños, código fuente, etc.)
                  son propiedad de IAconsultora o de terceros que han autorizado su uso.
                </p>
                <p className="text-muted-foreground mb-8">
                  Queda prohibida la reproducción, distribución, comunicación pública o transformación
                  de cualquier contenido sin autorización expresa del titular de los derechos.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">6. Enlaces Externos</h2>
                <p className="text-muted-foreground mb-4">
                  Este sitio web puede contener enlaces a sitios web de terceros. IAconsultora no se
                  responsabiliza del contenido, políticas de privacidad o prácticas de estos sitios externos.
                </p>
                <p className="text-muted-foreground mb-8">
                  Los enlaces se proporcionan únicamente para conveniencia del usuario y no constituyen
                  una recomendación o respaldo de los contenidos enlazados.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">7. Disponibilidad del Servicio</h2>
                <p className="text-muted-foreground mb-4">
                  Nos esforzamos por mantener el sitio web disponible de forma continua, pero no podemos
                  garantizar que esté libre de interrupciones, errores o defectos.
                </p>
                <p className="text-muted-foreground mb-8">
                  Nos reservamos el derecho a suspender temporalmente el acceso por mantenimiento,
                  actualizaciones o por causas técnicas justificadas.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">8. Limitación de Responsabilidad</h2>
                <p className="text-muted-foreground mb-4">
                  IAconsultora no se responsabiliza de:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Daños derivados del uso incorrecto del sitio web</li>
                  <li>Interrupciones del servicio por causas técnicas</li>
                  <li>Contenidos de sitios web enlazados</li>
                  <li>Decisiones tomadas basándose únicamente en información del sitio</li>
                  <li>Virus o malware que puedan afectar el equipo del usuario</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">9. Modificaciones</h2>
                <p className="text-muted-foreground mb-8">
                  Nos reservamos el derecho a modificar este aviso legal en cualquier momento.
                  Las modificaciones entrarán en vigor desde su publicación en el sitio web.
                  Recomendamos revisar periódicamente este documento.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">10. Legislación Aplicable y Jurisdicción</h2>
                <p className="text-muted-foreground mb-8">
                  Este aviso legal se rige por la legislación española. Para la resolución de cualquier
                  controversia derivada del uso de este sitio web, las partes se someten a la jurisdicción
                  de los Juzgados y Tribunales de Madrid, renunciando expresamente a cualquier otro fuero.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">11. Información Adicional</h2>

                <h3 className="text-xl font-bold text-foreground mb-4">11.1 Profesión Regulada</h3>
                <p className="text-muted-foreground mb-4">
                  Los servicios de desarrollo web y consultoría tecnológica se prestan bajo los más altos estándares profesionales y siguiendo las mejores prácticas del sector.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-4">11.2 Resolución de Disputas Online</h3>
                <p className="text-muted-foreground mb-4">
                  Para consumidores de la UE, la Comisión Europea proporciona una plataforma de resolución
                  de disputas online disponible en: https://ec.europa.eu/consumers/odr/
                </p>

                <h3 className="text-xl font-bold text-foreground mb-4">11.3 Código de Conducta</h3>
                <p className="text-muted-foreground mb-8">
                  Nos adherimos a los códigos de buenas prácticas de nuestros sectores de actividad
                  y mantenemos los más altos estándares de calidad y ética profesional.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">12. Contacto</h2>
                <p className="text-muted-foreground mb-4">
                  Para cualquier consulta sobre este aviso legal o sobre nuestros servicios:
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
                    <p className="mt-4 text-sm">
                      <strong>Horario de atención:</strong> Lunes a Viernes de 9:00 a 18:00 horas
                    </p>
                  </div>
                </div>

                <div className="bg-brand-purple/10 border border-brand-purple/20 p-6 rounded-lg">
                  <h3 className="font-bold text-foreground mb-4">¿Necesitas más información legal?</h3>
                  <p className="text-muted-foreground mb-4">
                    Nuestro equipo legal está disponible para resolver cualquier duda sobre el marco
                    normativo de nuestros servicios.
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