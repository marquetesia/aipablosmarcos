'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Sparkles, ArrowRight, Phone } from "lucide-react"
import { useRouter } from "next/navigation"
import NavPill from "@/components/NavPill"

export default function ServiciosPage() {
  const router = useRouter();
  const [showROAResult, setShowROAResult] = useState(false);
  const [roaData, setROAData] = useState({
    timeHours: '',
    frequency: '',
    months: '',
    hourlyRate: '',
    setupCost: '',
    monthlyCost: ''
  });

  const calculateROA = () => {
    const timeHours = parseFloat(roaData.timeHours) || 0;
    const frequency = parseFloat(roaData.frequency) || 0;
    const months = parseFloat(roaData.months) || 0;
    const hourlyRate = parseFloat(roaData.hourlyRate) || 0;
    const setupCost = parseFloat(roaData.setupCost) || 0;
    const monthlyCost = parseFloat(roaData.monthlyCost) || 0;

    const totalTimeHours = timeHours * frequency * months;
    const totalSavings = totalTimeHours * hourlyRate;
    const totalCost = setupCost + (monthlyCost * months);
    const roa = totalSavings - totalCost;

    setROAData(prev => ({
      ...prev,
      calculatedROA: roa,
      calculatedTimeHours: totalTimeHours,
      calculatedSavings: totalSavings
    }));
    setShowROAResult(true);
  };
  
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
                No estás limitado a 4 automatizaciones. <b>Podemos construir lo que tengas en la cabeza</b>. 
                Aquí verás 4 ejemplos en vídeo (90s) y <a href="#proceso" className="text-brand-purple font-semibold hover:underline">nuestro proceso</a>: Auditoría → Boceto → Construcción → Mejora continua.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="bg-brand-purple text-white font-semibold rounded-xl hover:bg-brand-purple/90 shadow-lg h-10 px-5">
                  Ver los 4 vídeos
                </Button>
                <Button className="btn-outline border font-semibold rounded-xl hover:bg-secondary h-10 px-5" onClick={() => router.push('/booking')}>
                  Hablar conmigo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section id="demos" className="bg-secondary py-14">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between gap-6 mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Ejemplos en 90 segundos</h2>
              <Button className="btn-outline border font-semibold rounded-xl hover:bg-accent hidden md:inline-flex h-10 px-4 py-2 text-sm" onClick={() => router.push('/booking')}>
                Contactar
              </Button>
            </div>
            <p className="mt-2 text-muted-foreground mb-6">
              Estos 4 vídeos son <b>ejemplos</b>. No son límites: si puedes explicarlo, podemos automatizarlo.
            </p>
            
            <div className="space-y-12">
              {/* App Interna */}
              <div className="flex flex-col md:flex-row items-stretch gap-8">
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
              <div className="flex flex-col md:flex-row-reverse items-stretch gap-8">
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
              <div className="flex flex-col md:flex-row items-stretch gap-8">
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
              <div className="flex flex-col md:flex-row-reverse items-stretch gap-8">
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

        {/* ROA Calculator Section */}
        <section id="roa" className="bg-secondary py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Calcula el ROA (Return On Automation)</h2>
            <div className="mt-2 text-muted-foreground">
              <p><b>ROA en tiempo</b> = Tiempo manual × Frecuencia × Meses</p>
              <p><b>Ahorro monetario</b> = ROA en tiempo × Sueldo por hora bruto</p>
              <p><b>ROA</b> = Ahorro monetario − (Coste de montarlo + Coste mensual × Meses)</p>
              <p className="mt-1 text-sm">Automatiza cuando <b>ROA &gt; 0</b>.</p>
            </div>
            
            <div className="mt-6">
              <div className="card p-5 border bg-white max-w-2xl mx-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-medium text-sm">Tiempo manual por ejecución (h)</label>
                    <input 
                      type="number" 
                      className="flex h-10 w-full border bg-background text-base rounded-lg p-2 mt-1" 
                      step="0.1" 
                      placeholder="1.5"
                      value={roaData.timeHours}
                      onChange={(e) => setROAData(prev => ({...prev, timeHours: e.target.value}))}
                    />
                  </div>
                  <div>
                    <label className="font-medium text-sm">Frecuencia (veces/mes)</label>
                    <input 
                      type="number" 
                      className="flex h-10 w-full border bg-background text-base rounded-lg p-2 mt-1" 
                      placeholder="60"
                      value={roaData.frequency}
                      onChange={(e) => setROAData(prev => ({...prev, frequency: e.target.value}))}
                    />
                  </div>
                  <div>
                    <label className="font-medium text-sm">Meses (horizonte)</label>
                    <input 
                      type="number" 
                      className="flex h-10 w-full border bg-background text-base rounded-lg p-2 mt-1" 
                      placeholder="3"
                      value={roaData.months}
                      onChange={(e) => setROAData(prev => ({...prev, months: e.target.value}))}
                    />
                  </div>
                  <div>
                    <label className="font-medium text-sm">Sueldo bruto por hora (€)</label>
                    <input 
                      type="number" 
                      className="flex h-10 w-full border bg-background text-base rounded-lg p-2 mt-1" 
                      placeholder="25"
                      value={roaData.hourlyRate}
                      onChange={(e) => setROAData(prev => ({...prev, hourlyRate: e.target.value}))}
                    />
                  </div>
                  <div>
                    <label className="font-medium text-sm">Coste de montarlo (€)</label>
                    <input 
                      type="number" 
                      className="flex h-10 w-full border bg-background text-base rounded-lg p-2 mt-1" 
                      placeholder="1800"
                      value={roaData.setupCost}
                      onChange={(e) => setROAData(prev => ({...prev, setupCost: e.target.value}))}
                    />
                  </div>
                  <div>
                    <label className="font-medium text-sm">Coste mensual (€)</label>
                    <input 
                      type="number" 
                      className="flex h-10 w-full border bg-background text-base rounded-lg p-2 mt-1" 
                      placeholder="150"
                      value={roaData.monthlyCost}
                      onChange={(e) => setROAData(prev => ({...prev, monthlyCost: e.target.value}))}
                    />
                  </div>
                </div>
                <Button 
                  onClick={calculateROA}
                  className="mt-4 w-full bg-brand-purple text-white font-semibold rounded-xl py-2.5 hover:bg-brand-purple/90 h-10 px-4"
                >
                  Calcular ROA
                </Button>
              </div>
              
              {showROAResult && (
                <div className="card p-5 border bg-white max-w-2xl mx-auto mt-6">
                  <div className="text-muted-foreground">Resultado estimado (horizonte de {roaData.months} meses):</div>
                  <div className="mt-2 text-3xl font-black text-foreground">
                    {roaData.calculatedROA >= 0 ? '+' : ''}{roaData.calculatedROA?.toLocaleString('es-ES')}€
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {roaData.calculatedROA >= 0 ? 'ROA positivo - Vale la pena automatizar' : 'ROA negativo - Revisar números'}
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground">
                    ROA en tiempo: {roaData.calculatedTimeHours?.toLocaleString('es-ES')} horas
                  </div>
                  <div className="mt-3 font-semibold">
                    Ahorro monetario: {roaData.calculatedSavings?.toLocaleString('es-ES')}€
                  </div>
                </div>
              )}
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-foreground">Agendar llamada</h2>
            <p className="text-muted-foreground mb-8">3 pasos rápidos. Si encaja, bloqueamos semana de inicio.</p>
            
            <div className="text-center">
              <Button 
                size="lg"
                className="btn-outline h-12 px-12 text-lg group"
                onClick={() => router.push('/booking')}
              >
                Agenda tu llamada gratuita
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12 pt-6">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Consultoría IA - Pablos Marcos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}