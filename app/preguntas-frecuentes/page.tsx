'use client'

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, ArrowRight, Brain, Wrench, DollarSign, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import NavPill from "@/components/NavPill"
import Footer from "@/components/Footer"

export default function PreguntasFrecuentes() {
  const router = useRouter()

  const faqCategories = [
    {
      title: "Servicios Generales",
      icon: HelpCircle,
      questions: [
        {
          q: "¿Qué servicios ofrecen exactamente?",
          a: "Ofrecemos consultoría en IA, automatización de procesos con herramientas como n8n y GoHighLevel, integración con Notion y desarrollo de sitios web modernos. Cada servicio está diseñado para optimizar la eficiencia y reducir costos operativos."
        },
        {
          q: "¿Trabajan con empresas de cualquier tamaño?",
          a: "Sí, trabajamos tanto con startups como con grandes empresas. Adaptamos nuestras soluciones al tamaño, presupuesto y necesidades específicas de cada cliente, desde automatizaciones simples hasta transformaciones digitales completas."
        },
        {
          q: "¿En qué países operan?",
          a: "Operamos principalmente en España, pero ofrecemos servicios remotos a empresas de toda Europa y Latinoamérica. Todos nuestros servicios de consultoría y desarrollo se pueden realizar de forma remota."
        },
        {
          q: "¿Cuánto tiempo toma implementar una solución?",
          a: "Depende de la complejidad del proyecto. Automatizaciones simples pueden estar listas en 1-2 semanas, mientras que sistemas completos de CRM o transformaciones digitales pueden tomar 2-3 meses. Siempre proporcionamos un cronograma detallado al inicio."
        }
      ]
    },
    {
      title: "Inteligencia Artificial",
      icon: Brain,
      questions: [
        {
          q: "¿Qué tipos de IA implementan?",
          a: "Implementamos soluciones de IA práticas como chatbots inteligentes, análisis predictivo, automatización de decisiones, procesamiento de lenguaje natural y visión por computadora. Nos enfocamos en IA aplicada que genera ROI medible."
        },
        {
          q: "¿Necesito conocimientos técnicos para usar las soluciones de IA?",
          a: "No, diseñamos todas nuestras soluciones para ser user-friendly. Incluimos formación completa para tu equipo y documentación detallada. El objetivo es que puedas usar la IA sin necesidad de conocimientos técnicos avanzados."
        },
        {
          q: "¿Cómo garantizan la seguridad de los datos con IA?",
          a: "Implementamos las mejores prácticas de seguridad: encriptación end-to-end, acceso basado en roles, auditorías regulares y cumplimiento con GDPR. Todos los datos permanecen bajo tu control y nunca se comparten sin autorización."
        },
        {
          q: "¿La IA puede integrarse con nuestros sistemas existentes?",
          a: "Sí, diseñamos todas las soluciones para integrarse perfectamente con tu infraestructura actual. Trabajamos con APIs, webhooks y conectores personalizados para asegurar una integración fluida sin interrumpir tus operaciones."
        }
      ]
    },
    {
      title: "Automatización y Herramientas",
      icon: Wrench,
      questions: [
        {
          q: "¿Qué es n8n y por qué lo recomiendan?",
          a: "n8n es una plataforma de automatización open-source que permite conectar cualquier sistema o servicio. La recomendamos porque es altamente flexible, cost-effective, y permite crear automatizaciones complejas sin limitaciones de conectores o volumen."
        },
        {
          q: "¿GoHighLevel es mejor que HubSpot o Salesforce?",
          a: "Depende de tus necesidades. GoHighLevel es excelente para marketing agencies y pequeñas-medianas empresas por su relación precio-valor. Para empresas grandes con necesidades complejas, HubSpot o Salesforce pueden ser más apropiados. Evaluamos cada caso individualmente."
        },
        {
          q: "¿Pueden migrar datos de nuestro sistema actual?",
          a: "Sí, manejamos migraciones de datos de cualquier sistema (CRMs, spreadsheets, bases de datos, etc.). Garantizamos integridad de datos al 100% y cero tiempo de inactividad durante la migración."
        },
        {
          q: "¿Qué pasa si la herramienta que usan deja de existir?",
          a: "Elegimos herramientas estables con buen soporte y comunidad activa. Para casos críticos, también preparamos planes de contingencia y alternativas. Además, muchas automatizaciones pueden migrarse fácilmente entre plataformas."
        }
      ]
    },
    {
      title: "Precios y ROI",
      icon: DollarSign,
      questions: [
        {
          q: "¿Cómo calculan los precios de sus servicios?",
          a: "Los precios se basan en la complejidad del proyecto, tiempo estimado y valor generado. Ofrecemos tres modelos: proyecto fijo, retainer mensual, o revenue-share para casos especiales. Siempre proporcionamos presupuestos detallados sin sorpresas."
        },
        {
          q: "¿Garantizan ROI en sus implementaciones?",
          a: "Sí, para proyectos superiores a €10,000 ofrecemos garantía de ROI mínimo del 200% en el primer año. Si no se alcanza, trabajamos gratis hasta conseguirlo o devolvemos la diferencia."
        },
        {
          q: "¿Ofrecen financiación para proyectos grandes?",
          a: "Para proyectos superiores a €50,000 ofrecemos planes de pago personalizados y en algunos casos revenue-share. También podemos ayudarte a conseguir financiación a través de programas de digitalización empresarial."
        },
        {
          q: "¿Cuál es el costo de mantenimiento post-implementación?",
          a: "El mantenimiento básico (actualizaciones, soporte técnico) está incluido los primeros 6 meses. Después, ofrecemos planes desde €200/mes dependiendo de la complejidad. Muchos clientes prefieren nuestros retainers que incluyen mejoras continuas."
        }
      ]
    },
    {
      title: "Proceso y Tiempos",
      icon: Clock,
      questions: [
        {
          q: "¿Cómo es el proceso de trabajo típico?",
          a: "1) Consulta inicial gratuita (1h), 2) Análisis detallado y propuesta (1-2 semanas), 3) Desarrollo/implementación (2-12 semanas según proyecto), 4) Testing y formación (1 semana), 5) Lanzamiento y soporte post-go-live."
        },
        {
          q: "¿Necesito dedicar mucho tiempo de mi equipo al proyecto?",
          a: "Minimizamos el tiempo requerido de tu equipo. Necesitamos acceso inicial para entender procesos (4-8 horas), feedback durante desarrollo (2-3 horas semanales), y tiempo para formación final (4-6 horas). El resto lo manejamos nosotros."
        },
        {
          q: "¿Pueden trabajar durante horarios específicos para no interrumpir operaciones?",
          a: "Absolutamente. Podemos trabajar en horarios fuera de oficina, fines de semana, o durante períodos de menor actividad. Para implementaciones críticas, también ofrecemos despliegues nocturnos o escalonados."
        },
        {
          q: "¿Qué sucede si necesito cambios durante el desarrollo?",
          a: "Los cambios menores están incluidos. Para cambios significativos, evaluamos el impacto y acordamos ajustes al cronograma/presupuesto antes de proceder. Mantenemos comunicación constante para minimizar estos casos."
        }
      ]
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
                <span className="text-brand-purple">Preguntas </span>
                <span className="font-bold text-foreground">Frecuentes</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto mb-8">
                Encuentra respuestas a las dudas más comunes sobre nuestros servicios de IA, automatización y consultoría
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-brand-purple mb-2">95%</div>
                <div className="text-muted-foreground">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-purple mb-2">48h</div>
                <div className="text-muted-foreground">Tiempo respuesta promedio</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-purple mb-2">340%</div>
                <div className="text-muted-foreground">ROI promedio conseguido</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon
                return (
                  <div key={categoryIndex} className="card p-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-lg bg-brand-purple text-white flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border border-border rounded-lg px-6"
                        >
                          <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center card p-12 max-w-4xl mx-auto">
              <HelpCircle className="w-16 h-16 mx-auto mb-6 text-brand-purple" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                ¿No encuentras tu respuesta?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nuestro equipo está aquí para ayudarte. Agenda una consulta gratuita o contáctanos directamente
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-outline h-12 px-8 text-lg group"
                  onClick={() => router.push('/contacto')}
                >
                  Contactar Ahora
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  className="bg-brand-purple hover:bg-brand-purple/90 text-white h-12 px-8 text-lg"
                  onClick={() => router.push('/booking')}
                >
                  Agendar Consulta Gratis
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 tracking-tight">
              Recursos Adicionales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Blog Técnico</h3>
                <p className="text-muted-foreground mb-6">Artículos detallados sobre IA, automatización y mejores prácticas</p>
                <Button variant="outline" size="sm" onClick={() => router.push('/blog')}>
                  Leer Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Casos de Éxito</h3>
                <p className="text-muted-foreground mb-6">Estudios detallados de proyectos reales con resultados medibles</p>
                <Button variant="outline" size="sm" onClick={() => router.push('/casos-estudio')}>
                  Ver Casos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="card card-hover p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-lg bg-purple-100 text-brand-purple flex items-center justify-center">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Documentación</h3>
                <p className="text-muted-foreground mb-6">Guías técnicas y documentación de nuestras herramientas</p>
                <Button variant="outline" size="sm" onClick={() => router.push('/contacto')}>
                  Solicitar Acceso
                  <ArrowRight className="ml-2 h-4 w-4" />
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