'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Database, Clock, BarChart3, CircleCheck, Target, Code, GitBranch, RefreshCw, Send, Shield, Globe, Cpu } from "lucide-react"
import { useRouter } from "next/navigation"
import NavPill from "@/components/NavPill"

export default function N8nPage() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <NavPill />
      
      <main className="flex-grow pt-24 overflow-x-hidden w-full">
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-lg p-3">
                  <img src="/n8n.png" alt="n8n logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                n8n para <span className="text-primary">Automatización</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Automatiza procesos complejos, conecta aplicaciones y libera tiempo valioso con workflows inteligentes sin necesidad de código.
              </p>
              <Button className="h-11 px-8 py-4 text-lg" onClick={() => router.push('/contacto')}>
                Implementar n8n
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Automatización Inteligente</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Desde tareas simples hasta procesos empresariales complejos, n8n se adapta a tus necesidades
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Automatización de Procesos</h3>
                  <p className="text-muted-foreground">
                    Conecta herramientas y automatiza flujos de trabajo complejos sin necesidad de código, ahorrando horas de trabajo manual.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <Database className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Integración de Datos</h3>
                  <p className="text-muted-foreground">
                    Sincroniza información entre diferentes plataformas automáticamente, manteniendo datos actualizados en tiempo real.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Tareas Programadas</h3>
                  <p className="text-muted-foreground">
                    Ejecuta procesos automáticos en horarios específicos, como reportes, backups y sincronizaciones de datos.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Análisis y Monitoreo</h3>
                  <p className="text-muted-foreground">
                    Recopila métricas automáticamente y genera reportes personalizados con datos de múltiples fuentes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Conecta Todo</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Integración nativa con las herramientas que ya usas
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-8">
              {[
                "Google Workspace", "Slack", "Trello", "Asana", "Salesforce", "HubSpot",
                "Shopify", "WooCommerce", "Stripe", "PayPal", "Mailchimp", "GitHub",
                "GitLab", "Jira", "Confluence", "Notion", "GoHighLevel", "Airtable"
              ].map((tool, index) => (
                <Card key={index} className="text-center p-3">
                  <p className="text-sm font-medium text-muted-foreground">{tool}</p>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-primary">Y más de 400 integraciones disponibles</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué n8n?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Flexibilidad total para automatizar cualquier proceso de negocio.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Ahorra hasta 20 horas semanales en tareas repetitivas</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Conecta más de 400 aplicaciones y servicios</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Reduce errores humanos en un 95%</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Escalable desde pequeñas empresas hasta corporaciones</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Sin vendor lock-in: código abierto y auto-hospedable</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">400+</div>
                      <div className="text-sm text-muted-foreground">Integraciones nativas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">20h</div>
                      <div className="text-sm text-muted-foreground">Ahorro semanal promedio</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">95%</div>
                      <div className="text-sm text-muted-foreground">Reducción de errores</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">0%</div>
                      <div className="text-sm text-muted-foreground">Código necesario</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ejemplos de Workflows</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Casos reales de automatización que puedes implementar hoy mismo
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Lead Qualification</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">1</div>
                    <span className="text-sm">Nuevo lead en formulario</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">2</div>
                    <span className="text-sm">Validación automática</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">3</div>
                    <span className="text-sm">Scoring y clasificación</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">4</div>
                    <span className="text-sm">Asignación a vendedor</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Customer Onboarding</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">1</div>
                    <span className="text-sm">Cliente se registra</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">2</div>
                    <span className="text-sm">Envío de bienvenida</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">3</div>
                    <span className="text-sm">Creación de cuentas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">4</div>
                    <span className="text-sm">Seguimiento programado</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Reporting Automático</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">1</div>
                    <span className="text-sm">Recolección de datos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">2</div>
                    <span className="text-sm">Procesamiento y análisis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">3</div>
                    <span className="text-sm">Generación de reportes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">4</div>
                    <span className="text-sm">Envío a stakeholders</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para automatizar?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Implementación completa de n8n con workflows personalizados para tu empresa. Setup, capacitación y soporte incluidos.
              </p>
              <div className="flex justify-center">
                <Button className="h-11 px-8 py-4 text-lg" onClick={() => router.push('/contacto')}>
                  Agendar Reunión
                  <Target className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}