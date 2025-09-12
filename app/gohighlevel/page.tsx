'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Users, TrendingUp, BarChart3, CircleCheck, Phone, MessageCircle, Monitor, Calendar, GitBranch, PieChart } from "lucide-react"
import { useRouter } from "next/navigation"
import NavPill from "@/components/NavPill"

export default function GoHighLevelPage() {
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
                  <img src="/gohighlevel.jpg" alt="GoHighLevel logo" className="w-full h-full object-contain rounded" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                GoHighLevel para <span className="text-primary">Ventas</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                La plataforma todo-en-uno para automatizar marketing, gestionar leads y multiplicar tus ventas con embudos optimizados.
              </p>
              <Button className="h-11 px-8 py-4 text-lg" onClick={() => router.push('/contacto')}>
                Implementar GoHighLevel
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Potencia tu Negocio</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Desde la captación hasta la conversión, GoHighLevel optimiza cada paso del proceso de ventas
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">CRM Completo y Automatizado</h3>
                  <p className="text-muted-foreground">
                    Gestiona leads, clientes y pipeline de ventas con automatización inteligente que convierte más prospectos en clientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Marketing Multicanal</h3>
                  <p className="text-muted-foreground">
                    Campañas automáticas por email, SMS, WhatsApp y redes sociales desde una sola plataforma integrada.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Embudos de Venta Optimizados</h3>
                  <p className="text-muted-foreground">
                    Crea landing pages, formularios y secuencias de follow-up que convierten visitantes en compradores.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Análisis y Reportes Avanzados</h3>
                  <p className="text-muted-foreground">
                    Dashboards completos con métricas de ROI, conversión y rendimiento de campañas en tiempo real.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué GoHighLevel?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  La única plataforma que necesitas para vender más y mejor.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Incrementa conversiones de leads en un 40%</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Automatiza hasta 90% del follow-up</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Unifica comunicación en todos los canales</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Reduce tiempo de gestión de campañas en 60%</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Escalable para cualquier tamaño de negocio</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">+40%</div>
                      <div className="text-sm text-muted-foreground">Conversión de leads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">90%</div>
                      <div className="text-sm text-muted-foreground">Follow-up automatizado</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">5x</div>
                      <div className="text-sm text-muted-foreground">Más rápido que otros CRMs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Automatización activa</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Todo lo que Necesitas</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Una sola plataforma que reemplaza múltiples herramientas
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Marketing</h3>
                <p className="text-sm text-muted-foreground">Campañas automatizadas con alta entregabilidad</p>
              </Card>

              <Card className="text-center p-6">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">SMS Marketing</h3>
                <p className="text-sm text-muted-foreground">Mensajería directa con tasas de apertura del 98%</p>
              </Card>

              <Card className="text-center p-6">
                <Monitor className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Landing Pages</h3>
                <p className="text-sm text-muted-foreground">Páginas optimizadas para conversión</p>
              </Card>

              <Card className="text-center p-6">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Calendarios</h3>
                <p className="text-sm text-muted-foreground">Agendamiento automático de citas</p>
              </Card>

              <Card className="text-center p-6">
                <GitBranch className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Pipelines</h3>
                <p className="text-sm text-muted-foreground">Visualización clara del proceso de ventas</p>
              </Card>

              <Card className="text-center p-6">
                <PieChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Reportes</h3>
                <p className="text-sm text-muted-foreground">Analytics completos en tiempo real</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para vender más?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Implementación completa de GoHighLevel con configuración personalizada para tu negocio.
              </p>
              <div className="flex justify-center">
                <Button className="h-11 px-8 py-4 text-lg" onClick={() => router.push('/contacto')}>
                  Agendar Llamada
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