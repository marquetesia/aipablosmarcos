'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, MapPin, GraduationCap, Briefcase, Code, Users, Target, TrendingUp, Trophy, LinkedinIcon, Mail, Phone } from "lucide-react"
import { useRouter } from "next/navigation"
import NavPill from "@/components/NavPill"
import Footer from "@/components/Footer"

export default function SobreNosotros() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <NavPill />
      
      <main className="flex-grow pt-24 overflow-x-hidden w-full">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-brand-purple shadow-lg">
                  <img
                    src="/pablosmarcos.jpeg"
                    alt="Pablos y Marcos"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sobre <span className="text-primary">Nosotros</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Somos Marcos y Pablos, dos especialistas apasionados por transformar empresas
                a través de la automatización e inteligencia artificial.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

        {/* Team Profiles Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

              {/* Marcos Profile */}
              <Card className="overflow-hidden h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gradient-to-br from-green-500 to-blue-600">
                      <img
                        src="/marcos.jpeg"
                        alt="Marcos Manuel Guisado"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center top' }}
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Marcos Manuel Guisado Horcajuelo</h2>
                    <p className="text-primary font-medium">Sales & Strategy Expert</p>
                    <p className="text-sm text-muted-foreground mb-4">Especialista en ventas, desarrollo de negocio y estrategia comercial</p>
                  </div>
                  
                  <div className="space-y-4 mb-6 flex-grow">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Perfil</p>
                        <p className="text-sm text-muted-foreground">Emprendedor nativo digital con 23 años</p>
                        <p className="text-sm text-muted-foreground">Especialista en ventas y desarrollo de negocio</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Experiencia Actual</p>
                        <p className="text-sm text-muted-foreground">CEO y fundador de IAConsultora</p>
                        <p className="text-sm text-muted-foreground">Fundador y mediador de bienes raíz</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Especialidades</p>
                        <p className="text-sm text-muted-foreground">Innovación tecnológica</p>
                        <p className="text-sm text-muted-foreground">Real Estate</p>
                        <p className="text-sm text-muted-foreground">Procesos empresariales</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Trophy className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Fortalezas</p>
                        <p className="text-sm text-muted-foreground">Mentalidad ganadora y disciplina</p>
                        <p className="text-sm text-muted-foreground">Visión estratégica de negocios</p>
                        <p className="text-sm text-muted-foreground">Atención al cliente</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <a href="mailto:marcos@iaconsultora.net" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Button>
                    </a>
                    <a href="tel:+34916205922" className="flex-1">
                      <Button variant="outline" className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        Llamar
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Pablos Profile */}
              <Card className="overflow-hidden h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gradient-to-br from-blue-500 to-purple-600">
                      <img
                        src="/pablos.jpeg"
                        alt="Pablos Tselioudis"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center 18%' }}
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Pablos Tselioudis Garmendia</h2>
                    <p className="text-primary font-medium">AI Specialist and Web Developer</p>
                    <p className="text-sm text-muted-foreground mb-4">Experto en desarrollo de Web, machine learning e implementación de IA</p>
                  </div>

                  <div className="space-y-4 mb-6 flex-grow">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Educación</p>
                        <p className="text-sm text-muted-foreground">Data Science & Engineering - UC3M</p>
                        <p className="text-sm text-muted-foreground">Master's in AI - VU Amsterdam</p>
                        <p className="text-sm text-muted-foreground">Exchange - Northeastern University</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Experiencia</p>
                        <p className="text-sm text-muted-foreground">AI Intern - Toyota Insurance</p>
                        <p className="text-sm text-muted-foreground">ML Engineer - Motix Connected</p>
                        <p className="text-sm text-muted-foreground">Árbitro Oficial - Federación Madrid</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Logros</p>
                        <p className="text-sm text-muted-foreground">Beca de Excelencia Comunidad de Madrid</p>
                        <p className="text-sm text-muted-foreground">Dean's List - Khoury College</p>
                      </div>
                    </div>

                  </div>

                  <div className="flex gap-2 mt-auto">
                    <a href="mailto:pablos@iaconsultora.net" className="w-full">
                      <Button variant="outline" className="w-full text-sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Pablos
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Misión</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Combinamos la experiencia técnica en IA y Data Science con una visión empresarial 
                sólida para crear soluciones que realmente transformen tu negocio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovación Técnica</h3>
                <p className="text-muted-foreground">
                  Implementamos las últimas tecnologías de IA con estándares académicos y experiencia práctica.
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Visión de Negocio</h3>
                <p className="text-muted-foreground">
                  Entendemos las necesidades reales de las empresas y creamos soluciones que generan valor.
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enfoque Humano</h3>
                <p className="text-muted-foreground">
                  Creemos que la tecnología debe servir a las personas, no al revés. Priorizamos la usabilidad.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para conocernos?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Agenda una llamada y descubre cómo podemos ayudarte a llevar tu empresa al siguiente nivel.
              </p>
              <Button 
                className="h-12 px-8 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => router.push('/contacto')}
              >
                Agendar Reunión
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}