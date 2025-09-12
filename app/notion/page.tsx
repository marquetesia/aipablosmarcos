'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Users, FileText, ChartColumn, CircleCheck, Target } from "lucide-react"
import { useRouter } from "next/navigation"
import NavPill from "@/components/NavPill"

export default function NotionPage() {
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
                  <img src="/notion.png" alt="Notion logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Notion para <span className="text-primary">Empresas</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Centraliza conocimiento, organiza proyectos y automatiza documentación. La herramienta todo-en-uno que transforma la productividad de tu equipo.
              </p>
              <Button className="h-11 px-8 py-4 text-lg" onClick={() => router.push('/contacto')}>
                Implementar Notion
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Uso Principales</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Descubre cómo Notion puede transformar diferentes áreas de tu negocio
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Base de Conocimiento Central</h3>
                  <p className="text-muted-foreground">
                    Centraliza toda la documentación, procedimientos y conocimiento de tu empresa en un solo lugar accesible para todo el equipo.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Gestión de Proyectos Colaborativa</h3>
                  <p className="text-muted-foreground">
                    Organiza proyectos, asigna tareas y da seguimiento al progreso en tiempo real con herramientas visuales y colaborativas.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <FileText className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Documentación Automática</h3>
                  <p className="text-muted-foreground">
                    Crea y mantiene documentación actualizada automáticamente, con plantillas personalizadas para diferentes tipos de contenido.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <ChartColumn className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Dashboards de Negocio</h3>
                  <p className="text-muted-foreground">
                    Visualiza métricas, KPIs y datos importantes en dashboards interactivos que se actualizan en tiempo real.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué elegir Notion?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Una plataforma que se adapta a tu forma de trabajar, no al revés.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Reduce tiempo de búsqueda de información en un 70%</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Mejora la colaboración entre equipos</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Automatiza la creación de reportes y documentos</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Integra con más de 50 herramientas de trabajo</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Escalable desde equipos pequeños hasta empresas grandes</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">70%</div>
                      <div className="text-sm text-muted-foreground">Menos tiempo buscando info</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Integraciones disponibles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Acceso desde cualquier lugar</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">∞</div>
                      <div className="text-sm text-muted-foreground">Posibilidades de personalización</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar tu productividad?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Implemento Notion personalizado para tu empresa. Setup completo, capacitación y automatizaciones incluidas.
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