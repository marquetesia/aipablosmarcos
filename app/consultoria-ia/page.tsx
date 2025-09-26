'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Lightbulb, TrendingUp, Users, ArrowRight, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import NavPill from "@/components/NavPill"
import Footer from "@/components/Footer"

export default function ConsultoriaIA() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      <NavPill />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tighter">
                <span className="text-brand-purple">Consultoría </span>
                <span className="font-bold text-foreground">en IA</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto mb-8">
                Transforma tu negocio con estrategias de Inteligencia Artificial personalizadas y resultados medibles
              </p>
              <div className="flex flex-row gap-3 justify-center">
                <Button
                  className="btn btn-outline h-11 px-8"
                  onClick={() => router.push('/contacto')}
                >
                  Solicitar Consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 tracking-tight">
              Servicios de Consultoría en IA
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-purple-100 text-brand-purple flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Estrategia IA</h3>
                <p className="text-muted-foreground">Desarrollamos una hoja de ruta personalizada para implementar IA en tu empresa de forma efectiva</p>
              </div>

              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Casos de Uso</h3>
                <p className="text-muted-foreground">Identificamos las mejores oportunidades para aplicar IA en tus procesos específicos</p>
              </div>

              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">ROI Medible</h3>
                <p className="text-muted-foreground">Garantizamos resultados cuantificables y retorno de inversión en todas nuestras implementaciones</p>
              </div>

              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Formación Equipos</h3>
                <p className="text-muted-foreground">Capacitamos a tu equipo para que pueda aprovechar al máximo las nuevas herramientas</p>
              </div>

              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Implementación</h3>
                <p className="text-muted-foreground">Nos encargamos de toda la implementación técnica y seguimiento post-lanzamiento</p>
              </div>

              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Soporte Continuo</h3>
                <p className="text-muted-foreground">Acompañamiento permanente para optimizar y escalar tu solución de IA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 tracking-tight">
              Nuestro Proceso
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-purple text-white flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Análisis</h3>
                <p className="text-muted-foreground">Evaluamos tu negocio y identificamos oportunidades de mejora con IA</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-purple text-white flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Estrategia</h3>
                <p className="text-muted-foreground">Diseñamos una estrategia personalizada con objetivos claros y medibles</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-purple text-white flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Implementación</h3>
                <p className="text-muted-foreground">Ejecutamos la solución con las mejores herramientas del mercado</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-purple text-white flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Optimización</h3>
                <p className="text-muted-foreground">Monitoreamos resultados y optimizamos continuamente el rendimiento</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                ¿Listo para transformar tu negocio con IA?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo la IA puede revolucionar tu empresa
              </p>
              <Button
                size="lg"
                className="btn-outline h-12 px-12 text-lg group"
                onClick={() => router.push('/contacto')}
              >
                Solicitar Consulta Gratuita
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}