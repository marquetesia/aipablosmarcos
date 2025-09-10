'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Youtube, Home, Car, Cpu, ArrowRight, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import NavPill from "@/components/NavPill"
import Hero from "@/components/Hero"

export default function MainLanding() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <NavPill />
      
      <main className="flex-grow pt-24 overflow-x-hidden w-full">
        {/* Hero Section - Background: bg-background */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-6 md:py-8 lg:py-12">
            <div className="text-center max-w-4xl mx-auto">
              {/* Profile Image */}
              <div className="relative mb-4 md:mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-2xl overflow-hidden border-4 border-brand-purple p-1">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src="/logo.png"
                      alt="Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <Hero />

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 md:space-x-6 mb-10 md:mb-12 mt-8">
                <a href="https://www.instagram.com/ia.pablosmarcos/" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-500/50">
                    <Instagram className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                </a>
                <a href="https://www.youtube.com/@IAPablosMarcos" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/50">
                    <Youtube className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                </a>
                <a href="https://www.tiktok.com/@iapablosmarcos" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-500/50">
                    <img src="/tiktok.jpg" alt="TikTok" className="h-10 w-10 md:h-14 md:w-14 object-cover rounded-full" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Background: bg-white */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Stat 1 */}
              <div className="card card-hover p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">30%</div>
                <div className="text-sm font-medium text-foreground mb-2">Más Productivo</div>
                <p className="text-sm text-muted-foreground">Tu equipo trabaja más rápido con automatización</p>
              </div>

              {/* Stat 2 */}
              <div className="card card-hover p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                <div className="text-sm font-medium text-foreground mb-2">Automatización</div>
                <p className="text-sm text-muted-foreground">Procesos que funcionan sin intervención manual</p>
              </div>

              {/* Stat 3 */}
              <div className="card card-hover p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-50 text-brand-purple flex items-center justify-center">
                  <Home className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <div className="text-sm font-medium text-foreground mb-2">Clientes</div>
                <p className="text-sm text-muted-foreground">Empresas que confían en nuestros servicios</p>
              </div>

              {/* Stat 4 */}
              <div className="card card-hover p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                <div className="text-sm font-medium text-foreground mb-2">Personalizado</div>
                <p className="text-sm text-muted-foreground">Soluciones adaptadas a tu negocio específico</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Background: bg-notion-gray/50 */}
        <section className="bg-notion-gray/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-8 md:mb-12 tracking-tight">
              Nuestros Servicios
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Real Estate Service */}
              <div className="card hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="pill bg-blue-100 text-blue-700 mb-4 w-fit">Próximamente</div>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100 text-blue-600 mb-6">
                    <Home className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Asesoría Inmobiliaria</h3>
                  <p className="text-muted-foreground mb-6">Expertos en inversiones inmobiliarias y gestión de propiedades</p>
                  <button className="inline-flex items-center text-brand-purple font-medium group cursor-not-allowed opacity-50">
                    Próximamente
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </div>

              {/* Carsharing Service */}
              <div className="card hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="pill bg-purple-100 text-purple-700 mb-4 w-fit">Próximamente</div>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-purple-100 text-brand-purple mb-6">
                    <Car className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Carsharing y Rentabilidad</h3>
                  <p className="text-muted-foreground mb-6">Maximiza tus ingresos con gestión inteligente de vehículos</p>
                  <button className="inline-flex items-center text-brand-purple font-medium group cursor-not-allowed opacity-50">
                    Próximamente
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </div>

              {/* AI Service */}
              <div className="card hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="pill bg-green-100 text-green-700 mb-4 w-fit">Disponible</div>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-100 text-green-600 mb-6">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Automatización con IA</h3>
                  <p className="text-muted-foreground mb-6">Transforma tu negocio con Inteligencia Artificial</p>
                  <button
                    className="inline-flex items-center text-brand-purple font-medium group"
                    onClick={() => router.push('/ia')}
                  >
                    Descubrir más
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Background: bg-white */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center card p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
                ¿Listo para empezar?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Agenda una llamada gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
              </p>
              <Button
                size="lg"
                className="btn-outline h-11 px-8 text-base group"
                onClick={() => router.push('/booking')}
              >
                Agenda tu llamada gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12 pt-6">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Pablos Marcos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
