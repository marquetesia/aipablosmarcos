'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Clock, ArrowRight } from "lucide-react";
// @ts-ignore - Firebase db may be null during build
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import NavPill from "@/components/NavPill";

export default function BookingPage() {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    time: "",
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    objetivo: "",
    experiencia: "",
    ciudad: "",
    presupuesto: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !formData.time) {
      toast.error("Por favor selecciona una fecha y hora");
      return;
    }

    if (!db) {
      toast.error("Error de conexión. Por favor recarga la página.");
      return;
    }

    // @ts-ignore - Firebase db type handled in configuration
    try {
      const bookingData = {
        ...formData,
        date: date.toISOString(),
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, "bookings"), bookingData);
      
      toast.success("¡Reserva confirmada! Te contactaremos pronto.");
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al guardar la reserva. Intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background">
      <NavPill />
      
      <main className="flex-grow pt-24 overflow-x-hidden w-full">
        {/* Hero Section */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                <span className="text-brand-purple">Agenda tu </span>
                <span>llamada</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Reserva tu consultoría personalizada y descubre cómo podemos transformar tu negocio
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Date and Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                      <CalendarIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Selecciona una fecha</h3>
                  </div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    className="rounded-md border-border [&]:text-foreground [&_*]:text-foreground [&_.rdp-caption_label]:text-foreground [&_.rdp-caption_label]:font-semibold [&_.rdp-nav_button]:text-foreground [&_.rdp-weekday]:text-muted-foreground [&_.rdp-weekday]:font-medium [&_.rdp-day_selected]:bg-brand-purple [&_.rdp-day_selected]:text-white [&_.rdp-day_today]:bg-accent [&_.rdp-day_today]:text-accent-foreground [&_.rdp-day:hover]:bg-accent [&_.rdp-day:hover]:text-accent-foreground [&_.rdp-day_disabled]:text-muted-foreground [&_.rdp-day_disabled]:opacity-50"
                    showOutsideDays={false}
                  />
                </div>

                <div className="card p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Selecciona una hora</h3>
                  </div>
                  <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Elige una hora" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((hour) => (
                        <SelectItem key={hour} value={`${hour}:00 PM`}>
                          {hour}:00 PM
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Form Fields */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Información de contacto</h3>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="nombre" className="text-foreground font-medium">1. Nombre completo</Label>
                    <p className="text-sm text-muted-foreground mb-3">Para personalizar mensajes y llamadas</p>
                    <Input
                      id="nombre"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      className="h-12"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">2. Correo electrónico</Label>
                    <p className="text-sm text-muted-foreground mb-3">Para seguimiento y envío de información</p>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefono" className="text-foreground font-medium">3. Teléfono (con WhatsApp)</Label>
                    <p className="text-sm text-muted-foreground mb-3">✅ Muy importante para cerrar por llamada o nota de voz</p>
                    <Input
                      id="telefono"
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      className="h-12"
                      placeholder="+34 600 000 000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="servicio" className="text-foreground font-medium">4. Selecciona el servicio que te interesa</Label>
                    <Select required value={formData.servicio} onValueChange={(value) => setFormData({...formData, servicio: value})}>
                      <SelectTrigger className="h-12 mt-3">
                        <SelectValue placeholder="Elige un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asesoria-inmobiliaria">Asesoría inmobiliaria</SelectItem>
                        <SelectItem value="carsharing">Carsharing y rentabilidad de coches</SelectItem>
                        <SelectItem value="automatizacion-ia">Automatización con IA para tu negocio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="objetivo" className="text-foreground font-medium">5. ¿Qué objetivo quieres alcanzar?</Label>
                    <p className="text-sm text-muted-foreground mb-3">Ejemplo: "Quiero empezar a invertir en propiedades con poco capital"</p>
                    <Textarea
                      id="objetivo"
                      required
                      value={formData.objetivo}
                      onChange={(e) => setFormData({...formData, objetivo: e.target.value})}
                      rows={4}
                      placeholder="Describe tu objetivo principal..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="experiencia" className="text-foreground font-medium">6. ¿Tienes alguna experiencia previa en este ámbito? (opcional)</Label>
                    <p className="text-sm text-muted-foreground mb-3">✅ Esto ayuda a adaptar la consultoría a tu nivel</p>
                    <Textarea
                      id="experiencia"
                      value={formData.experiencia}
                      onChange={(e) => setFormData({...formData, experiencia: e.target.value})}
                      rows={3}
                      placeholder="Describe tu experiencia previa..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="ciudad" className="text-foreground font-medium">7. ¿En qué ciudad vives? (para carsharing o inmobiliaria)</Label>
                    <Input
                      id="ciudad"
                      value={formData.ciudad}
                      onChange={(e) => setFormData({...formData, ciudad: e.target.value})}
                      className="h-12 mt-3"
                      placeholder="Madrid, Barcelona, Valencia..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="presupuesto" className="text-foreground font-medium">8. ¿Cuál es tu presupuesto aproximado para iniciar?</Label>
                    <Select required value={formData.presupuesto} onValueChange={(value) => setFormData({...formData, presupuesto: value})}>
                      <SelectTrigger className="h-12 mt-3">
                        <SelectValue placeholder="Selecciona un rango" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="menos-500">Menos de 500 €</SelectItem>
                        <SelectItem value="500-1000">500 – 1.000 €</SelectItem>
                        <SelectItem value="1000-5000">1.000–5.000 €</SelectItem>
                        <SelectItem value="mas-5000">Más de 5.000 €</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold text-lg group"
                  >
                    Confirmar reserva
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </form>
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
  );
} 