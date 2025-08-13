'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Youtube, Home, Car, Cpu, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Reviews from "@/components/Reviews"

export default function MainLanding() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">Pablos Marcos</span>
            </div>
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent"
              onClick={() => router.push('/booking')}
            >
              Contacto
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-6 md:py-8 lg:py-12">
          <div className="text-center max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="relative mb-4 md:mb-6">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-cyan-400 animate-pulse opacity-30"></div>
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight px-2">
              Tu Partner en
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Negocios{" "}
              </span>
              Digitales
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-6 max-w-3xl mx-auto px-4">
              Servicios profesionales de consultoría para impulsar tu éxito empresarial
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 md:space-x-6 mb-6 md:mb-8">
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
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            Nuestros Servicios
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Real Estate Service */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm group hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6 md:p-8 text-center">
                <Home className="h-16 w-16 md:h-20 md:w-20 text-cyan-400 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Asesoría Inmobiliaria</h3>
                <p className="text-gray-300 mb-6">Expertos en inversiones inmobiliarias y gestión de propiedades</p>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-gray-300 bg-transparent cursor-not-allowed opacity-50"
                  disabled
                >
                  Próximamente
                </Button>
              </CardContent>
            </Card>

            {/* Carsharing Service */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm group hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6 md:p-8 text-center">
                <Car className="h-16 w-16 md:h-20 md:w-20 text-purple-400 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Carsharing y Rentabilidad</h3>
                <p className="text-gray-300 mb-6">Maximiza tus ingresos con gestión inteligente de vehículos</p>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-gray-300 bg-transparent cursor-not-allowed opacity-50"
                  disabled
                >
                  Próximamente
                </Button>
              </CardContent>
            </Card>

            {/* AI Service */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm group hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6 md:p-8 text-center">
                <Cpu className="h-16 w-16 md:h-20 md:w-20 text-pink-400 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Automatización con IA</h3>
                <p className="text-gray-300 mb-6">Transforma tu negocio con Inteligencia Artificial</p>
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => router.push('/ia')}
                >
                  Descubrir más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-slate-700">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Agenda una llamada gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-6 md:py-6 md:px-12 text-sm md:text-xl group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => router.push('/booking')}
            >
              Agenda tu llamada gratuita
              <ArrowRight className="ml-2 md:ml-4 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        {/* Reviews Section */}
        <Reviews />

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 border-t border-slate-800">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Pablos Marcos. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
