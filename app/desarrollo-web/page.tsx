'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Zap, Smartphone, Search, ArrowRight, CheckCircle, Globe, Palette, Database } from "lucide-react"
import { useRouter } from "next/navigation"
import NavPill from "@/components/NavPill"
import Footer from "@/components/Footer"

export default function DesarrolloWeb() {
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
                <span className="text-brand-purple">Desarrollo </span>
                <span className="font-bold text-foreground">Web</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto mb-8">
                Sitios web modernos, rápidos y optimizados que convierten visitantes en clientes
              </p>
              <div className="flex flex-row gap-3 justify-center">
                <Button
                  className="btn btn-outline h-11 px-8"
                  onClick={() => router.push('/contacto')}
                >
                  Solicitar Presupuesto
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
              Servicios de Desarrollo Web
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Desarrollo a Medida</h3>
                <p className="text-muted-foreground">Sitios web únicos desarrollados específicamente para tu negocio y objetivos</p>
              </div>

              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Diseño Responsive</h3>
                <p className="text-muted-foreground">Perfecta visualización en todos los dispositivos: móvil, tablet y desktop</p>
              </div>

              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-purple-100 text-brand-purple flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Optimización de Velocidad</h3>
                <p className="text-muted-foreground">Sitios web ultra-rápidos que mejoran la experiencia del usuario y el SEO</p>
              </div>

              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">SEO Optimizado</h3>
                <p className="text-muted-foreground">Optimización para motores de búsqueda desde el primer día</p>
              </div>

              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Diseño Moderno</h3>
                <p className="text-muted-foreground">Interfaces atractivas y funcionales que reflejan la identidad de tu marca</p>
              </div>

              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Gestión de Contenido</h3>
                <p className="text-muted-foreground">Paneles de administración intuitivos para que actualices tu contenido fácilmente</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 tracking-tight">
              Tecnologías que Utilizamos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Frontend Moderno</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>React.js / Next.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Tailwind CSS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Responsive Design</span>
                  </li>
                </ul>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Backend Robusto</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Node.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Bases de datos modernas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>APIs RESTful</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Hosting en la nube</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white py-16">
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
                <p className="text-muted-foreground">Entendemos tu negocio, objetivos y audiencia objetivo</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-purple text-white flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Diseño</h3>
                <p className="text-muted-foreground">Creamos mockups y prototipos que reflejen tu marca</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-purple text-white flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Desarrollo</h3>
                <p className="text-muted-foreground">Programamos tu sitio web con las mejores tecnologías</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-purple text-white flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Lanzamiento</h3>
                <p className="text-muted-foreground">Publicamos tu sitio y te damos formación para gestionarlo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 tracking-tight">
              ¿Qué Incluye tu Proyecto?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground">Diseño Personalizado</h3>
                    <p className="text-sm text-muted-foreground">Único para tu marca, no plantillas genéricas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground">Optimización SEO</h3>
                    <p className="text-sm text-muted-foreground">Configuración completa para aparecer en Google</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground">Formularios de Contacto</h3>
                    <p className="text-sm text-muted-foreground">Conectados a tu email para recibir consultas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground">Analytics Integrado</h3>
                    <p className="text-sm text-muted-foreground">Google Analytics para medir el rendimiento</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground">Certificado SSL</h3>
                    <p className="text-sm text-muted-foreground">Sitio seguro con HTTPS incluido</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground">Hosting Incluido</h3>
                    <p className="text-sm text-muted-foreground">1 año de alojamiento web profesional</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground">Soporte Post-Lanzamiento</h3>
                    <p className="text-sm text-muted-foreground">3 meses de soporte y actualizaciones gratuitas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground">Formación Incluida</h3>
                    <p className="text-sm text-muted-foreground">Te enseñamos a gestionar tu web</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                ¿Listo para tener tu sitio web profesional?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo podemos crear el sitio web perfecto para tu negocio
              </p>
              <Button
                size="lg"
                className="btn-outline h-12 px-12 text-lg group"
                onClick={() => router.push('/contacto')}
              >
                Solicitar Presupuesto Gratuito
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