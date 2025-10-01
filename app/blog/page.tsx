'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight, Tag } from "lucide-react"
import { useRouter } from "next/navigation"
import NavPill from "@/components/NavPill"
import Footer from "@/components/Footer"
import NewsletterSubscribe from "@/components/NewsletterSubscribe"

export default function Blog() {
  const router = useRouter()

  const blogPosts = [
    {
      id: 1,
      title: "Inteligencia artificial para pymes: Cómo automatizar procesos, ahorrar tiempo y ganar ventaja competitiva",
      excerpt: "Descubre cómo aplicar inteligencia artificial en tu pyme para automatizar tareas repetitivas, ahorrar tiempo y mejorar la productividad con herramientas prácticas y pasos claros.",
      category: "Transformación Empresarial con IA",
      date: "29 Septiembre 2024",
      image: "/IAparapymes.png",
      slug: "inteligencia-artificial-para-pymes"
    },
    {
      id: 2,
      title: "Reuniones sin actas manuales: así funcionan los resúmenes automáticos con IA",
      excerpt: "Implementa resúmenes automáticos con IA para automatizar tus reuniones comerciales. Mejora el seguimiento de ventas, ahorra tiempo y aumenta la conversión.",
      category: "Ventas & Clientes",
      date: "27 Septiembre 2024",
      image: "/reuniones.png",
      slug: "reuniones-resumenes-automaticos-ia"
    }
  ]

  const categories = [
    "Todos",
    "Automatización de Procesos",
    "Aplicaciones Internas & Herramientas",
    "Ventas & Clientes",
    "Conocimiento Corporativo",
    "Desarrollo Digital",
    "Transformación Empresarial con IA"
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

        {/* Blog Posts Grid */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-brand-purple/10 text-brand-purple rounded-full">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-brand-purple hover:text-brand-purple/80 p-0"
                        onClick={() => {
                          if (post.slug) {
                            router.push(`/blog/${post.slug}`)
                          }
                        }}
                      >
                        Leer más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
              <NewsletterSubscribe />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}