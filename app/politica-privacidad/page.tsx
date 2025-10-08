'use client'

import { Shield, Mail, Phone, MapPin } from "lucide-react"
import NavPill from "@/components/NavPill"
import Footer from "@/components/Footer"

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavPill />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Shield className="w-16 h-16 mx-auto mb-6 text-brand-purple" />
              <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tighter">
                <span className="text-brand-purple">Política de </span>
                <span className="font-bold text-foreground">Privacidad</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto mb-8">
                Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales
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
                <h2 className="text-2xl font-bold text-foreground mb-6">1. Información del Responsable</h2>
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

                <h2 className="text-2xl font-bold text-foreground mb-6">2. Datos Personales que Recopilamos</h2>
                <p className="text-muted-foreground mb-4">
                  Recopilamos los siguientes tipos de datos personales cuando utilizas nuestros servicios:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li><strong>Datos de identificación:</strong> Nombre, apellidos, DNI/NIE/Pasaporte</li>
                  <li><strong>Datos de contacto:</strong> Dirección de correo electrónico, número de teléfono, dirección postal</li>
                  <li><strong>Datos profesionales:</strong> Empresa, cargo, sector de actividad</li>
                  <li><strong>Datos de navegación:</strong> Dirección IP, cookies, logs de actividad</li>
                  <li><strong>Datos contractuales:</strong> Información sobre servicios contratados, facturas, pagos</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">3. Finalidades del Tratamiento</h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos tus datos personales para las siguientes finalidades:
                </p>
                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-brand-purple pl-6">
                    <h3 className="font-bold text-foreground mb-2">Prestación de Servicios</h3>
                    <p className="text-muted-foreground">
                      Para proporcionar nuestros servicios de consultoría en IA, automatización y desarrollo web.
                    </p>
                  </div>
                  <div className="border-l-4 border-brand-purple pl-6">
                    <h3 className="font-bold text-foreground mb-2">Comunicación</h3>
                    <p className="text-muted-foreground">
                      Para responder a tus consultas, enviarte información sobre nuestros servicios y mantener la relación comercial.
                    </p>
                  </div>
                  <div className="border-l-4 border-brand-purple pl-6">
                    <h3 className="font-bold text-foreground mb-2">Marketing</h3>
                    <p className="text-muted-foreground">
                      Para enviarte newsletters, ofertas y información comercial relevante (solo con tu consentimiento).
                    </p>
                  </div>
                  <div className="border-l-4 border-brand-purple pl-6">
                    <h3 className="font-bold text-foreground mb-2">Cumplimiento Legal</h3>
                    <p className="text-muted-foreground">
                      Para cumplir con obligaciones legales, fiscales y contables.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-6">4. Base Legal</h2>
                <p className="text-muted-foreground mb-4">
                  El tratamiento de tus datos se basa en:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li><strong>Ejecución contractual:</strong> Para prestarte los servicios contratados</li>
                  <li><strong>Interés legítimo:</strong> Para la gestión comercial y mejora de servicios</li>
                  <li><strong>Consentimiento:</strong> Para comunicaciones comerciales y marketing</li>
                  <li><strong>Obligación legal:</strong> Para cumplir con la normativa fiscal y contable</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">5. Destinatarios de los Datos</h2>
                <p className="text-muted-foreground mb-4">
                  Tus datos pueden ser comunicados a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Proveedores de servicios tecnológicos (hosting, email, CRM)</li>
                  <li>Asesores legales, fiscales y contables</li>
                  <li>Entidades bancarias para la gestión de pagos</li>
                  <li>Organismos públicos cuando sea legalmente requerido</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">6. Transferencias Internacionales</h2>
                <p className="text-muted-foreground mb-8">
                  Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo.
                  En estos casos, garantizamos que las transferencias se realizan con las debidas garantías de protección,
                  incluyendo cláusulas contractuales tipo aprobadas por la Comisión Europea.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">7. Plazo de Conservación</h2>
                <p className="text-muted-foreground mb-4">
                  Conservaremos tus datos durante:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li><strong>Datos contractuales:</strong> Durante la relación comercial y hasta 6 años después</li>
                  <li><strong>Datos de marketing:</strong> Hasta que retires tu consentimiento</li>
                  <li><strong>Datos de navegación:</strong> Hasta 2 años desde la última visita</li>
                  <li><strong>Datos fiscales:</strong> 4 años según normativa fiscal</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">8. Tus Derechos</h2>
                <p className="text-muted-foreground mb-4">
                  Puedes ejercer los siguientes derechos:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">Acceso</h3>
                    <p className="text-sm text-muted-foreground">Obtener información sobre qué datos tratamos</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">Rectificación</h3>
                    <p className="text-sm text-muted-foreground">Corregir datos inexactos o incompletos</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">Supresión</h3>
                    <p className="text-sm text-muted-foreground">Solicitar la eliminación de tus datos</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">Portabilidad</h3>
                    <p className="text-sm text-muted-foreground">Recibir tus datos en formato estructurado</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">Oposición</h3>
                    <p className="text-sm text-muted-foreground">Oponerte al tratamiento de tus datos</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">Limitación</h3>
                    <p className="text-sm text-muted-foreground">Solicitar la limitación del tratamiento</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-6">9. Cómo Ejercer tus Derechos</h2>
                <p className="text-muted-foreground mb-4">
                  Para ejercer cualquiera de estos derechos, puedes contactarnos:
                </p>
                <div className="bg-secondary p-6 rounded-lg mb-8">
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>Email: privacidad@iaconsultora.net</span>
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

                <h2 className="text-2xl font-bold text-foreground mb-6">10. Autoridad de Control</h2>
                <p className="text-muted-foreground mb-8">
                  Tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD)
                  si consideras que el tratamiento de tus datos personales vulnera la normativa de protección de datos.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">11. Modificaciones</h2>
                <p className="text-muted-foreground mb-8">
                  Nos reservamos el derecho a modificar esta Política de Privacidad. Te notificaremos cualquier
                  cambio significativo a través del email o mediante aviso en nuestra web.
                </p>

                <div className="bg-brand-purple/10 border border-brand-purple/20 p-6 rounded-lg">
                  <h3 className="font-bold text-foreground mb-4">¿Tienes dudas sobre nuestra política de privacidad?</h3>
                  <p className="text-muted-foreground mb-4">
                    Estamos aquí para ayudarte. Contacta con nuestro equipo para cualquier consulta sobre el tratamiento de tus datos.
                  </p>
                  <div className="flex items-center gap-2 text-brand-purple">
                    <Mail className="w-4 h-4" />
                    <span className="font-semibold">privacidad@iaconsultora.net</span>
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