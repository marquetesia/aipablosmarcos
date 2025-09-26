'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Sparkles, ArrowRight, Phone } from "lucide-react"
import { useRouter } from "next/navigation"
import NavPill from "@/components/NavPill"
import Footer from "@/components/Footer"

export default function ServiciosPage() {
  const router = useRouter();

  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <NavPill />
      
      <main className="flex-grow pt-24 overflow-x-hidden w-full">
        {/* Hero Services Section */}
        <section className="relative py-12 md:py-18">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-foreground">
                Trae la idea. La convertimos en un sistema real.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                <b>Podemos construir lo que tengas en la cabeza</b>. 
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="btn-outline border font-semibold rounded-xl hover:bg-secondary h-10 px-5" onClick={() => router.push('/booking')}>
                  Hablar con nosotros
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section id="demos" className="bg-secondary py-14">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between gap-6 mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Ejemplos</h2>
              <Button className="btn-outline border font-semibold rounded-xl hover:bg-accent hidden md:inline-flex h-10 px-4 py-2 text-sm" onClick={() => router.push('/booking')}>
                Contactar
              </Button>
            </div>

            
            <div className="space-y-12">
              {/* Desarrollo Web */}
              <div className="flex flex-col md:flex-row items-stretch gap-8">
                <div className="w-full md:w-1/3 flex flex-col">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Desarrollo de webs modernas</h3>
                  <p className="text-muted-foreground flex-grow">
                    Webs rápidas, responsive y optimizadas para conversión. Desde landing pages hasta plataformas complejas con bases de datos.
                  </p>
                </div>
                <div className="w-full md:w-2/3 flex">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg flex items-center w-full">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Qué hace:</strong> desarrollo completo desde diseño hasta deploy.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Problema que quita:</strong> webs lentas, no responsive o difíciles de mantener.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Resultado:</strong> web profesional que convierte y es fácil de actualizar.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* App Interna */}
              <div className="flex flex-col md:flex-row-reverse items-stretch gap-8">
                <div className="w-full md:w-1/3 flex flex-col">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">App Interna para optimizar procesos</h3>
                  <p className="text-muted-foreground flex-grow">
                    Una app interna para que las tareas y solicitudes fluyan por un sitio único. Cada equipo ve lo suyo, con estados y avisos.
                  </p>
                </div>
                <div className="w-full md:w-2/3 flex">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg flex items-center w-full">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Qué hace:</strong> centraliza solicitudes, tareas y aprobaciones.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Problema que quita:</strong> idas y vueltas, tareas perdidas.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Resultado:</strong> alta de solicitud → asignación → cierre con KPIs.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Resúmenes Automáticos */}
              <div className="flex flex-col md:flex-row items-stretch gap-8">
                <div className="w-full md:w-1/3 flex flex-col">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Resúmenes automáticos para ventas</h3>
                  <p className="text-muted-foreground flex-grow">
                    Cada reunión se transcribe y resume para AE, CSM y dirección. Salen tareas y próximos pasos directos al CRM.
                  </p>
                </div>
                <div className="w-full md:w-2/3 flex">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg flex items-center w-full">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Qué hace:</strong> transcribe, resume y reparte por rol/etapa.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Problema que quita:</strong> "¿quién hace qué?" y notas perdidas.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Resultado:</strong> de la llamada a las tareas en tu CRM.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Wiki con Chatbot */}
              <div className="flex flex-col md:flex-row-reverse items-stretch gap-8">
                <div className="w-full md:w-1/3 flex flex-col">
                  <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Wiki de empresa con Chatbot</h3>
                  <p className="text-muted-foreground flex-grow">
                    Cargamos tu documentación y el bot responde dudas 24/7 según permisos. Menos interrupciones, más foco.
                  </p>
                </div>
                <div className="w-full md:w-2/3 flex">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg flex items-center w-full">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Qué hace:</strong> Q&A sobre tus procesos, plantillas y políticas.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Problema que quita:</strong> preguntas repetidas y dependencia de "la persona que sabe".</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Resultado:</strong> respuestas útiles y enlaces instantáneos.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Precalificación Dinámica */}
              <div className="flex flex-col md:flex-row items-stretch gap-8">
                <div className="w-full md:w-1/3 flex flex-col">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Precalificación dinámica</h3>
                  <p className="text-muted-foreground flex-grow">
                    Un formulario que adapta preguntas según lo que responden. Califica, agenda y envía el prework automáticamente.
                  </p>
                </div>
                <div className="w-full md:w-2/3 flex">
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg flex items-center w-full">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Qué hace:</strong> lógica condicional, scoring y agenda.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Problema que quita:</strong> reuniones con cero contexto y sin filtro.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>Resultado:</strong> flujo completo hasta el calendario.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-muted-foreground">
              ¿Tu idea es otra? <button className="font-semibold text-brand-purple hover:underline" onClick={() => router.push('/booking')}>Cuéntamela</button> y te digo cómo la montaríamos.
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="proceso" className="py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">Nuestro proceso (rápido y sin humo)</h2>
            
            <div className="grid md:grid-cols-4 gap-5">
              <div className="card p-5 bg-white border">
                <div className="text-xs font-semibold text-brand-purple">1 · Auditoría</div>
                <h3 className="font-bold mt-1 text-foreground">Entender y priorizar</h3>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• Mapeo de procesos y cuellos de botella</li>
                  <li>• Señales/datos disponibles y herramientas</li>
                  <li>• Elegimos el MVP de mayor impacto</li>
                </ul>
              </div>
              
              <div className="card p-5 bg-white border">
                <div className="text-xs font-semibold text-brand-purple">2 · Boceto</div>
                <h3 className="font-bold mt-1 text-foreground">Diseño en papel</h3>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• Wireflow simple (entradas → reglas → salidas)</li>
                  <li>• Aprobación contigo en 24–48 h</li>
                  <li>• Checklist de acciones</li>
                </ul>
              </div>
              
              <div className="card p-5 bg-white border">
                <div className="text-xs font-semibold text-brand-purple">3 · Construcción</div>
                <h3 className="font-bold mt-1 text-foreground">Lo hacemos real</h3>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• Sprint de 7–14 días</li>
                  <li>• Conexión entre apps, seguridad y logs</li>
                  <li>• Demo operativa + handover</li>
                </ul>
              </div>
              
              <div className="card p-5 bg-white border">
                <div className="text-xs font-semibold text-brand-purple">4 · Mejora</div>
                <h3 className="font-bold mt-1 text-foreground">Iterar y afinar</h3>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• Medimos → ajustes rápidos</li>
                  <li>• A/B cuando tiene sentido</li>
                  <li>• Entrenamiento al equipo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* Fit Section */}
        <section id="fit" className="py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">¿Esto es para ti?</h2>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="card p-5 bg-white border space-y-2 text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Tienes llamadas que llegan sin contexto o sin filtro.</li>
                  <li>• Tu equipo repite las mismas preguntas internas cada semana.</li>
                  <li>• Las tareas/solicitudes vuelan por WhatsApp y se pierden.</li>
                  <li>• Salís de reuniones sin responsables ni próximos pasos claros.</li>
                </ul>
              </div>
              
              <div className="card p-5 bg-white border space-y-2 text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Quieres ver ejemplos antes de decidir.</li>
                  <li>• Prefieres soluciones sencillas que ya hayan funcionado.</li>
                  <li>• Necesitas ahorrar tiempo, no comprar "consultoría eterna".</li>
                  <li>• Trabajas con equipos de ventas, operaciones o soporte.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="resultados" className="bg-secondary py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Resultados típicos</h2>
            
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="card p-5 bg-white border text-center">
                <div className="text-3xl font-black text-foreground">−2 h/día</div>
                <div className="text-sm text-muted-foreground">menos tiempo en coordinación</div>
              </div>
              
              <div className="card p-5 bg-white border text-center">
                <div className="text-3xl font-black text-foreground">+30–50%</div>
                <div className="text-sm text-muted-foreground">más respuestas útiles en ventas</div>
              </div>
              
              <div className="card p-5 bg-white border text-center">
                <div className="text-3xl font-black text-foreground">SLA &lt; 24 h</div>
                <div className="text-sm text-muted-foreground">en tareas internas clave</div>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mt-3">* Sustituye por tus números cuando tengas los casos.</p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="calendar-section" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-foreground">Agendar Reunión</h2>
            <p className="text-muted-foreground mb-8">3 pasos rápidos. Si encaja, bloqueamos semana de inicio.</p>
            
            <div className="text-center">
              <Button 
                size="lg"
                className="btn-outline h-12 px-12 text-lg group"
                onClick={() => router.push('/booking')}
              >
                Agenda tu Reunión
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