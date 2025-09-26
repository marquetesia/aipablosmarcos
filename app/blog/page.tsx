'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight, BookOpen, Tag } from "lucide-react"
import { useRouter } from "next/navigation"
import NavPill from "@/components/NavPill"
import Footer from "@/components/Footer"

export default function Blog() {
  const router = useRouter()

  const blogPosts = [
    {
      id: 1,
      title: "Cómo la IA está transformando el sector inmobiliario en 2025",
      excerpt: "Descubre las últimas tendencias en inteligencia artificial aplicada al mercado inmobiliario y cómo pueden beneficiar tu inversión.",
      category: "IA & Inmobiliario",
      date: "15 Marzo 2025",
      author: "Pablos Marcos",
      readTime: "5 min",
      image: "/blog/ai-real-estate.jpg"
    },
    {
      id: 2,
      title: "Automatización de procesos con n8n: Guía completa para principiantes",
      excerpt: "Aprende a automatizar tus procesos empresariales con n8n desde cero. Incluye ejemplos prácticos y casos de uso reales.",
      category: "Automatización",
      date: "12 Marzo 2025",
      author: "Pablos Marcos",
      readTime: "8 min",
      image: "/blog/n8n-automation.jpg"
    },
    {
      id: 3,
      title: "GoHighLevel vs. HubSpot: Comparativa completa para empresas",
      excerpt: "Análisis detallado de las dos plataformas CRM más populares del mercado. Descubre cuál se adapta mejor a tu negocio.",
      category: "CRM & Marketing",
      date: "8 Marzo 2025",
      author: "Pablos Marcos",
      readTime: "6 min",
      image: "/blog/crm-comparison.jpg"
    },
    {
      id: 4,
      title: "Guía completa para crear tu primera página web empresarial",
      excerpt: "Todo lo que necesitas saber para desarrollar un sitio web que convierta visitantes en clientes potenciales.",
      category: "Desarrollo Web",
      date: "5 Marzo 2025",
      author: "Pablos Marcos",
      readTime: "7 min",
      image: "/blog/web-development.jpg"
    },
    {
      id: 5,
      title: "Notion para empresas: Cómo crear un sistema de gestión completo",
      excerpt: "Tutorial paso a paso para implementar Notion como tu centro de operaciones empresarial. Incluye plantillas descargables.",
      category: "Productividad",
      date: "1 Marzo 2025",
      author: "Pablos Marcos",
      readTime: "10 min",
      image: "/blog/notion-business.jpg"
    },
    {
      id: 6,
      title: "ROI en proyectos de IA: Cómo medir el éxito de tu implementación",
      excerpt: "Métricas clave y metodologías para evaluar el retorno de inversión en proyectos de inteligencia artificial empresarial.",
      category: "IA & Business",
      date: "25 Febrero 2025",
      author: "Pablos Marcos",
      readTime: "6 min",
      image: "/blog/ai-roi.jpg"
    }
  ]

  const categories = ["Todos", "IA & Business", "Automatización", "CRM & Marketing", "Movilidad", "Productividad", "Inmobiliario"]

  return (
    <div className="min-h-screen flex flex-col">
      <NavPill />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tighter">
                <span className="text-brand-purple">Blog </span>
                <span className="font-bold text-foreground">IAconsultora</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto mb-8">
                Insights, tutoriales y tendencias sobre IA, automatización y tecnología empresarial
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="bg-white py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  className={category === "Todos" ? "bg-brand-purple hover:bg-brand-purple/90" : ""}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="bg-white py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-secondary flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Blog Próximamente
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Estamos preparando contenido de alta calidad sobre IA, automatización y mejores prácticas empresariales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="btn-outline h-12 px-8"
                  onClick={() => router.push('/contacto')}
                >
                  Contáctanos para Más Info
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                ¿No te pierdas ningún artículo?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Suscríbete a nuestro newsletter y recibe los últimos insights sobre IA y automatización
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
                <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white px-6">
                  Suscribirse
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}