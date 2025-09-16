'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Brain, Zap, ArrowRight, Phone, Code } from "lucide-react"
import { useRouter } from "next/navigation"
import NavPill from "@/components/NavPill"

export default function AIConsultingLanding() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <NavPill />
      
      <main className="flex-grow pt-24 overflow-x-hidden w-full">
        {/* Hero Section - Background: bg-background */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-2xl overflow-hidden border-4 border-brand-purple p-1">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src="/pablosmarcos.jpeg"
                      alt="Pablos y Marcos"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tighter">
                <span className="text-brand-purple">Transforma tu </span>
                <span className="font-bold text-foreground">negocio </span>
                <span className="text-brand-purple">con IA</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto mb-8">
                Descubre el poder de la Inteligencia Artificial para revolucionar tu empresa y alcanzar nuevos niveles de éxito
              </p>


              <div className="flex flex-row gap-3 justify-center">
                <a href="/contacto" className="btn btn-outline h-11 px-8 gap-4">
                  Agendar Reunión
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Background: bg-white */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12 tracking-tight">
              ¿Por qué elegir IA para tu negocio?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Automatización</h3>
                <p className="text-muted-foreground">Optimiza procesos y reduce costos operativos con soluciones inteligentes que trabajan 24/7</p>
              </div>

              {/* Feature 2 */}
              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-purple-100 text-brand-purple flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Análisis Inteligente</h3>
                <p className="text-muted-foreground">Toma decisiones basadas en datos precisos y patrones que solo la IA puede identificar</p>
              </div>

              {/* Feature 3 */}
              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Innovación</h3>
                <p className="text-muted-foreground">Mantente a la vanguardia tecnológica e impulsa la transformación digital de tu empresa</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section - Background: bg-secondary */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4 tracking-tight">
              Herramientas que domino
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Implemento las mejores plataformas de automatización para transformar tu negocio
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Notion */}
              <div className="card p-8 flex flex-col h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center p-2">
                  <img src="/notion.png" alt="Notion" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">Notion</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Bases de datos relacionales</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Automatizaciones internas</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Gestión de proyectos</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Dashboards personalizados</span>
                  </li>
                </ul>
                <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 mt-auto" onClick={() => router.push('/notion')}>
                  Explorar Notion
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* GoHighLevel */}
              <div className="card p-8 flex flex-col h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center p-2">
                  <img src="/gohighlevel.jpg" alt="GoHighLevel" className="w-full h-full object-contain rounded" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">GoHighLevel</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">CRM completo</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Email marketing</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Funnels de ventas</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Automatización de leads</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-5 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105 mt-auto" onClick={() => router.push('/gohighlevel')}>
                  Explorar GHL
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* n8n */}
              <div className="card p-8 flex flex-col h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center p-2">
                  <img src="/n8n.png" alt="n8n" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">n8n</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Workflows personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Integraciones API</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Automatización compleja</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Conexión entre sistemas</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 mt-auto" onClick={() => router.push('/n8n')}>
                  Explorar n8n
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Desarrollo de Webs */}
              <div className="card p-8 flex flex-col h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center p-2">
                  <Code className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">Desarrollo de Webs</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Sitios web modernos</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Apps web personalizadas</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Diseño responsivo</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Optimización SEO</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 mt-auto" onClick={() => router.push('/contacto')}>
                  Solicitar Desarrollo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Background: bg-white */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                ¿Listo para transformar tu negocio?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Agenda una llamada y descubre cómo la IA puede revolucionar tu empresa
              </p>
              <Button
                size="lg"
                className="btn-outline h-12 px-12 text-lg group"
                onClick={() => router.push('/contacto')}
              >
                Agenda tu Reunión
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12 pt-6">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Consultoría IA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}