'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Clock, DollarSign, ArrowRight, Building, Target, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import NavPill from "@/components/NavPill"
import Footer from "@/components/Footer"

export default function CasosEstudio() {
  const router = useRouter()

  const caseStudies = [
    {
      id: 1,
      title: "Automatización de procesos en startup fintech",
      client: "FinTech Solutions S.L.",
      industry: "Servicios Financieros",
      challenge: "Procesos manuales que consumían 40 horas semanales del equipo",
      solution: "Implementación de n8n para automatizar onboarding de clientes y reportes",
      results: {
        timeSaved: "35 horas/semana",
        costReduction: "60%",
        efficiency: "300%",
        roi: "400%"
      },
      technologies: ["n8n", "Notion", "API Integration"],
      description: "Esta startup fintech estaba experimentando un crecimiento acelerado pero sus procesos manuales limitaban su escalabilidad. Implementamos una solución completa de automatización que transformó su operación.",
      image: "/cases/fintech.jpg"
    },
    {
      id: 2,
      title: "Plataforma web personalizada para consultoría empresarial",
      client: "Business Consulting Group",
      industry: "Consultoría",
      challenge: "Sitio web obsoleto que no generaba leads de calidad",
      solution: "Desarrollo de sitio web moderno con sistema de captación de leads integrado",
      results: {
        timeSaved: "25 horas/semana",
        costReduction: "45%",
        efficiency: "250%",
        roi: "350%"
      },
      technologies: ["GoHighLevel", "API Integration", "Email Marketing"],
      description: "Esta consultoría necesitaba un sitio web que reflejara su experiencia y generara leads de calidad. Desarrollamos una plataforma moderna con formularios inteligentes y contenido optimizado.",
      image: "/cases/real-estate.jpg"
    },
    {
      id: 3,
      title: "Sistema de gestión para consultoría empresarial",
      client: "Business Consulting Group",
      industry: "Consultoría",
      challenge: "Desorganización en proyectos y falta de visibilidad del progreso",
      solution: "Workspace completo en Notion con dashboards personalizados y automatizaciones",
      results: {
        timeSaved: "20 horas/semana",
        costReduction: "40%",
        efficiency: "200%",
        roi: "280%"
      },
      technologies: ["Notion", "Zapier", "Custom Databases"],
      description: "Esta consultoría necesitaba centralizar toda su información y tener visibilidad completa de sus proyectos. Desarrollamos un sistema en Notion que se convirtió en el centro de operaciones de la empresa.",
      image: "/cases/consulting.jpg"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <NavPill />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tighter">
                <span className="text-brand-purple">Casos de </span>
                <span className="font-bold text-foreground">Éxito</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto mb-8">
                Descubre cómo hemos transformado empresas con soluciones de IA y automatización
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="bg-white py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-secondary flex items-center justify-center">
                <Target className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Casos de Estudio Próximamente
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Estamos documentando nuestros proyectos más exitosos para compartir resultados reales y metodologías comprobadas.
              </p>
              <div className="bg-secondary p-8 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Mientras tanto, descubre:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Nuestros servicios de automatización</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Preguntas frecuentes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Consulta gratuita personalizada</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="btn-outline h-12 px-8"
                  onClick={() => router.push('/servicios')}
                >
                  Ver Nuestros Servicios
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="bg-brand-purple hover:bg-brand-purple/90 text-white h-12 px-8"
                  onClick={() => router.push('/contacto')}
                >
                  Agenda una Consulta
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="text-center card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                ¿Listo para ser nuestro próximo caso de éxito?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Agenda una consulta y descubre cómo podemos transformar tu empresa con resultados medibles
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