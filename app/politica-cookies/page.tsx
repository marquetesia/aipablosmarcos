'use client'

import { Cookie, Settings, BarChart, Shield, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavPill from "@/components/NavPill"
import Footer from "@/components/Footer"

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavPill />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Cookie className="w-16 h-16 mx-auto mb-6 text-brand-purple" />
              <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tighter">
                <span className="text-brand-purple">Política de </span>
                <span className="font-bold text-foreground">Cookies</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto mb-8">
                Información sobre el uso de cookies y tecnologías similares en nuestro sitio web
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
                <h2 className="text-2xl font-bold text-foreground mb-6">1. ¿Qué son las Cookies?</h2>
                <p className="text-muted-foreground mb-4">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas
                  un sitio web. Permiten que el sitio web recuerde tus acciones y preferencias durante un
                  período de tiempo.
                </p>
                <p className="text-muted-foreground mb-8">
                  Utilizamos cookies para mejorar tu experiencia de navegación, proporcionar funcionalidades
                  personalizadas y analizar el uso de nuestro sitio web.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">2. Tipos de Cookies que Utilizamos</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="card p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Settings className="w-8 h-8 text-blue-600" />
                      <h3 className="text-xl font-bold text-foreground">Cookies Técnicas</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      <strong>Propósito:</strong> Son esenciales para el funcionamiento del sitio web.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Duración:</strong> Sesión
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Ejemplos:</strong> Gestión de sesiones, seguridad, funcionalidades básicas
                    </p>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <BarChart className="w-8 h-8 text-green-600" />
                      <h3 className="text-xl font-bold text-foreground">Cookies Analíticas</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      <strong>Propósito:</strong> Analizar el comportamiento de los usuarios.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Duración:</strong> Hasta 24 meses
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Ejemplos:</strong> Google Analytics, estadísticas de uso
                    </p>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Cookie className="w-8 h-8 text-purple-600" />
                      <h3 className="text-xl font-bold text-foreground">Cookies de Personalización</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      <strong>Propósito:</strong> Recordar preferencias del usuario.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Duración:</strong> Hasta 12 meses
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Ejemplos:</strong> Idioma, tema, configuraciones
                    </p>
                  </div>

                  <div className="card p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-8 h-8 text-red-600" />
                      <h3 className="text-xl font-bold text-foreground">Cookies de Marketing</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      <strong>Propósito:</strong> Mostrar publicidad relevante.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Duración:</strong> Hasta 24 meses
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Ejemplos:</strong> Google Ads, Facebook Pixel, remarketing
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-6">3. Cookies Específicas que Utilizamos</h2>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-secondary">
                        <th className="border border-border p-3 text-left font-bold">Cookie</th>
                        <th className="border border-border p-3 text-left font-bold">Propósito</th>
                        <th className="border border-border p-3 text-left font-bold">Duración</th>
                        <th className="border border-border p-3 text-left font-bold">Tipo</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr>
                        <td className="border border-border p-3">_ga</td>
                        <td className="border border-border p-3">Distinguir usuarios únicos</td>
                        <td className="border border-border p-3">24 meses</td>
                        <td className="border border-border p-3">Analítica</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">_ga_*</td>
                        <td className="border border-border p-3">Recopilar datos analíticos</td>
                        <td className="border border-border p-3">24 meses</td>
                        <td className="border border-border p-3">Analítica</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">_gid</td>
                        <td className="border border-border p-3">Distinguir usuarios únicos</td>
                        <td className="border border-border p-3">24 horas</td>
                        <td className="border border-border p-3">Analítica</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">_fbp</td>
                        <td className="border border-border p-3">Facebook Pixel para remarketing</td>
                        <td className="border border-border p-3">3 meses</td>
                        <td className="border border-border p-3">Marketing</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">session_id</td>
                        <td className="border border-border p-3">Mantener sesión del usuario</td>
                        <td className="border border-border p-3">Sesión</td>
                        <td className="border border-border p-3">Técnica</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">cookie_consent</td>
                        <td className="border border-border p-3">Recordar preferencias de cookies</td>
                        <td className="border border-border p-3">12 meses</td>
                        <td className="border border-border p-3">Técnica</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-6">4. Cookies de Terceros</h2>
                <p className="text-muted-foreground mb-4">
                  Nuestro sitio web utiliza servicios de terceros que pueden instalar sus propias cookies:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="font-bold text-foreground mb-2">Google Analytics</h3>
                    <p className="text-muted-foreground mb-2">
                      Utilizado para analizar el tráfico del sitio web y el comportamiento de los usuarios.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Más información: <a href="https://policies.google.com/privacy" className="text-brand-purple underline">Política de Privacidad de Google</a>
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="font-bold text-foreground mb-2">Google Ads</h3>
                    <p className="text-muted-foreground mb-2">
                      Para mostrar anuncios personalizados y medir la efectividad de nuestras campañas.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Más información: <a href="https://policies.google.com/technologies/ads" className="text-brand-purple underline">Política de Anuncios de Google</a>
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="font-bold text-foreground mb-2">Facebook Pixel</h3>
                    <p className="text-muted-foreground mb-2">
                      Para remarketing y análisis de conversiones en redes sociales.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Más información: <a href="https://www.facebook.com/privacy/explanation" className="text-brand-purple underline">Política de Privacidad de Meta</a>
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-6">5. Gestión de Cookies</h2>

                <h3 className="text-xl font-bold text-foreground mb-4">5.1 Panel de Configuración</h3>
                <p className="text-muted-foreground mb-4">
                  Puedes gestionar tus preferencias de cookies desde nuestro panel de configuración:
                </p>
                <div className="bg-secondary p-6 rounded-lg mb-6">
                  <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white">
                    <Settings className="w-4 h-4 mr-2" />
                    Configurar Cookies
                  </Button>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">5.2 Configuración del Navegador</h3>
                <p className="text-muted-foreground mb-4">
                  También puedes gestionar las cookies directamente desde tu navegador:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                  <li><strong>Firefox:</strong> Preferencias → Privacidad y seguridad → Cookies</li>
                  <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                  <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mb-4">5.3 Herramientas de Opt-out</h3>
                <p className="text-muted-foreground mb-4">
                  Para servicios específicos, puedes usar estas herramientas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-brand-purple underline">Add-on de exclusión</a></li>
                  <li>Google Ads: <a href="https://adssettings.google.com" className="text-brand-purple underline">Configuración de anuncios</a></li>
                  <li>Facebook: <a href="https://www.facebook.com/settings?tab=ads" className="text-brand-purple underline">Configuración de anuncios</a></li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">6. Consecuencias de Deshabilitar Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Si deshabilitas ciertas cookies, es posible que experimentes limitaciones en:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Funcionalidades personalizadas del sitio web</li>
                  <li>Recordar tus preferencias y configuraciones</li>
                  <li>Análisis de rendimiento para mejorar nuestros servicios</li>
                  <li>Relevancia de la publicidad mostrada</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mb-6">7. Actualizaciones de la Política</h2>
                <p className="text-muted-foreground mb-8">
                  Esta política de cookies puede actualizarse periódicamente para reflejar cambios en
                  nuestras prácticas o en la legislación aplicable. Te notificaremos de cambios
                  significativos a través de nuestro sitio web.
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">8. Normativa Aplicable</h2>
                <p className="text-muted-foreground mb-8">
                  Esta política de cookies cumple con la legislación española y europea en materia de
                  protección de datos, incluyendo el RGPD y la Ley de Servicios de la Sociedad de la
                  Información y Comercio Electrónico (LSSI-CE).
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">9. Contacto</h2>
                <p className="text-muted-foreground mb-4">
                  Para cualquier consulta sobre nuestra política de cookies:
                </p>
                <div className="bg-secondary p-6 rounded-lg mb-8">
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>Email: cookies@iaconsultora.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>Teléfono: (+34) 916 20 59 22</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Dirección: Av. de Europa, 19, 28108 Madrid, España</span>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-purple/10 border border-brand-purple/20 p-6 rounded-lg">
                  <h3 className="font-bold text-foreground mb-4">¿Necesitas ayuda con la configuración de cookies?</h3>
                  <p className="text-muted-foreground mb-4">
                    Nuestro equipo está disponible para ayudarte a configurar tus preferencias de cookies
                    de acuerdo a tus necesidades.
                  </p>
                  <div className="flex items-center gap-2 text-brand-purple">
                    <Mail className="w-4 h-4" />
                    <span className="font-semibold">cookies@iaconsultora.com</span>
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