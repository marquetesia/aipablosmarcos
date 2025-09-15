'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Mail, Phone, MapPin, Calendar as CalendarIcon, Clock, Users, Target } from "lucide-react"
import { useState } from "react"
// @ts-ignore - Firebase db may be null during build
import { db } from "@/lib/firebase"
import { collection, addDoc } from "firebase/firestore"
import { toast } from "sonner"
import NavPill from "@/components/NavPill"

export default function ContactoPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Blocked dates (can be updated as needed)
  const blockedDates = [
    new Date(2024, 11, 25), // Christmas Day
    new Date(2024, 11, 31), // New Year's Eve
    new Date(2025, 0, 1),   // New Year's Day
    new Date(2025, 0, 6),   // Epiphany
    // Add more blocked dates as needed
  ];
  
  const [contactFormData, setContactFormData] = useState({
    empresa: '',
    email: '',
    telefono: '',
    ciudad: '',
    servicio: '',
    objetivo: '',
    presupuesto: ''
  });

  const [bookingFormData, setBookingFormData] = useState({
    time: "",
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    objetivo: "",
    ciudad: "",
    presupuesto: ""
  });

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSelectChange = (field: string, value: string) => {
    setContactFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!db) {
      toast.error("Error de conexión. Por favor recarga la página.");
      return;
    }

    try {
      const contactData = {
        ...contactFormData,
        type: 'contact',
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, "contacts"), contactData);
      
      toast.success("¡Mensaje enviado! Te contactaremos pronto.");
      setContactFormData({
        empresa: '',
        email: '',
        telefono: '',
        ciudad: '',
        servicio: '',
        objetivo: '',
        presupuesto: ''
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al enviar el mensaje. Intenta de nuevo.");
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !bookingFormData.time) {
      toast.error("Por favor selecciona una fecha y hora");
      return;
    }

    if (!db) {
      toast.error("Error de conexión. Por favor recarga la página.");
      return;
    }

    try {
      const bookingData = {
        ...bookingFormData,
        date: date.toISOString(),
        type: 'booking',
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, "bookings"), bookingData);
      
      toast.success("¡Reserva confirmada! Te contactaremos pronto.");
      setBookingFormData({
        time: "",
        nombre: "",
        email: "",
        telefono: "",
        servicio: "",
        objetivo: "",
        ciudad: "",
        presupuesto: ""
      });
      setDate(undefined);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al guardar la reserva. Intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <NavPill />
      
      <main className="flex-grow pt-24 overflow-x-hidden w-full">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hablemos de tu <span className="text-primary">Proyecto</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Agenda una llamada y descubre cómo podemos transformar tu empresa con automatización e IA
              </p>
              
              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg"
                  onClick={() => setShowBookingForm(true)}
                >
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  Agendar Reunión
                </Button>
                <p className="text-sm text-muted-foreground">
                  O envíanos un mensaje abajo
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

        {/* Booking Form Modal */}
        {showBookingForm && (
          <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Agenda tu Reunión Gratuita</h2>
                  <p className="text-lg text-muted-foreground">
                    Reserva tu consultoría personalizada de 30 minutos
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowBookingForm(false)}
                    className="mt-4"
                  >
                    Volver a contacto normal
                  </Button>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-8">
                  {/* Date and Time Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            <CalendarIcon className="h-5 w-5" />
                          </div>
                          <h3 className="text-xl font-bold">Selecciona una fecha</h3>
                        </div>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) =>
                            date < new Date() ||
                            date.getDay() === 0 ||
                            date.getDay() === 6 ||
                            blockedDates.some(blockedDate =>
                              date.getDate() === blockedDate.getDate() &&
                              date.getMonth() === blockedDate.getMonth() &&
                              date.getFullYear() === blockedDate.getFullYear()
                            )
                          }
                          className="rounded-md border-border [&]:text-foreground [&_*]:text-foreground [&_.rdp-caption_label]:text-foreground [&_.rdp-caption_label]:font-semibold [&_.rdp-nav_button]:text-foreground [&_.rdp-weekday]:text-muted-foreground [&_.rdp-weekday]:font-medium [&_.rdp-day_selected]:bg-primary [&_.rdp-day_selected]:text-primary-foreground [&_.rdp-day_today]:bg-accent [&_.rdp-day_today]:text-accent-foreground [&_.rdp-day:hover]:bg-accent [&_.rdp-day:hover]:text-accent-foreground [&_.rdp-day_disabled]:text-muted-foreground [&_.rdp-day_disabled]:opacity-50"
                          showOutsideDays={false}
                        />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                            <Clock className="h-5 w-5" />
                          </div>
                          <h3 className="text-xl font-bold">Selecciona una hora</h3>
                        </div>
                        <Select value={bookingFormData.time} onValueChange={(value) => setBookingFormData({...bookingFormData, time: value})}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Elige una hora" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10:00 - 11:00">10:00 - 11:00</SelectItem>
                            <SelectItem value="17:00 - 18:00">17:00 - 18:00</SelectItem>
                            <SelectItem value="18:00 - 19:00">18:00 - 19:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Booking Form Fields */}
                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="booking-nombre">Empresa (o Nombre completo) *</Label>
                          <Input
                            id="booking-nombre"
                            required
                            value={bookingFormData.nombre}
                            onChange={(e) => setBookingFormData({...bookingFormData, nombre: e.target.value})}
                            className="h-12 mt-2"
                            placeholder="Nombre de tu empresa o tu nombre completo"
                          />
                        </div>

                        <div>
                          <Label htmlFor="booking-email">Email *</Label>
                          <Input
                            id="booking-email"
                            type="email"
                            required
                            value={bookingFormData.email}
                            onChange={(e) => setBookingFormData({...bookingFormData, email: e.target.value})}
                            className="h-12 mt-2"
                            placeholder="tu@email.com"
                          />
                        </div>

                        <div>
                          <Label htmlFor="booking-telefono">Teléfono (WhatsApp) *</Label>
                          <Input
                            id="booking-telefono"
                            type="tel"
                            required
                            value={bookingFormData.telefono}
                            onChange={(e) => setBookingFormData({...bookingFormData, telefono: e.target.value})}
                            className="h-12 mt-2"
                            placeholder="+34 600 000 000"
                          />
                        </div>

                        <div>
                          <Label htmlFor="booking-servicio">Servicio de interés *</Label>
                          <Select required value={bookingFormData.servicio} onValueChange={(value) => setBookingFormData({...bookingFormData, servicio: value})}>
                            <SelectTrigger className="h-12 mt-2">
                              <SelectValue placeholder="Elige un servicio" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="automatizacion-completa">Automatización completa</SelectItem>
                              <SelectItem value="workflows-n8n">Workflows con N8N</SelectItem>
                              <SelectItem value="gohighlevel">Automatizaciones con GoHighLevel</SelectItem>
                              <SelectItem value="notion">Implementaciones en Notion</SelectItem>
                              <SelectItem value="desarrollo-webs">Desarrollo de Webs</SelectItem>
                              <SelectItem value="consultoria-general">Consultoría general</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="booking-objetivo">¿Qué objetivo quieres alcanzar? *</Label>
                          <Textarea
                            id="booking-objetivo"
                            required
                            value={bookingFormData.objetivo}
                            onChange={(e) => setBookingFormData({...bookingFormData, objetivo: e.target.value})}
                            rows={4}
                            className="mt-2"
                            placeholder="Describe tu objetivo principal..."
                          />
                        </div>


                        <div>
                          <Label htmlFor="booking-ciudad">Ciudad *</Label>
                          <Input
                            id="booking-ciudad"
                            required
                            value={bookingFormData.ciudad}
                            onChange={(e) => setBookingFormData({...bookingFormData, ciudad: e.target.value})}
                            className="h-12 mt-2"
                            placeholder="Madrid, Barcelona, Valencia..."
                          />
                        </div>

                        <div>
                          <Label htmlFor="booking-presupuesto">Presupuesto aproximado *</Label>
                          <Select required value={bookingFormData.presupuesto} onValueChange={(value) => setBookingFormData({...bookingFormData, presupuesto: value})}>
                            <SelectTrigger className="h-12 mt-2">
                              <SelectValue placeholder="Selecciona un rango" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="menos-1000">Menos de 1.000 €</SelectItem>
                              <SelectItem value="1000-5000">1.000 - 5.000 €</SelectItem>
                              <SelectItem value="5000-10000">5.000 - 10.000 €</SelectItem>
                              <SelectItem value="mas-10000">Más de 10.000 €</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button
                          type="submit"
                          className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg font-semibold"
                        >
                          Confirmar Reserva
                          <ArrowRight className="ml-3 h-5 w-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* Contact Form Section */}
        {!showBookingForm && (
          <section className="py-20 bg-secondary">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                
                {/* Contact Form */}
                <Card className="overflow-hidden">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="empresa" className="block text-sm font-medium mb-2">
                          Empresa (o Nombre completo) *
                        </label>
                        <Input
                          id="empresa"
                          name="empresa"
                          type="text"
                          required
                          value={contactFormData.empresa}
                          onChange={handleContactInputChange}
                          placeholder="Nombre de tu empresa o tu nombre completo"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={contactFormData.email}
                            onChange={handleContactInputChange}
                            placeholder="tu@empresa.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                            Teléfono *
                          </label>
                          <Input
                            id="telefono"
                            name="telefono"
                            type="tel"
                            required
                            value={contactFormData.telefono}
                            onChange={handleContactInputChange}
                            placeholder="+34 600 000 000"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="ciudad" className="block text-sm font-medium mb-2">
                          Ciudad *
                        </label>
                        <Input
                          id="ciudad"
                          name="ciudad"
                          type="text"
                          required
                          value={contactFormData.ciudad}
                          onChange={handleContactInputChange}
                          placeholder="Madrid, Barcelona, Valencia..."
                        />
                      </div>

                      <div>
                        <label htmlFor="servicio" className="block text-sm font-medium mb-2">
                          Servicio de interés *
                        </label>
                        <Select required value={contactFormData.servicio} onValueChange={(value) => handleContactSelectChange('servicio', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Elige un servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="automatizacion-completa">Automatización completa</SelectItem>
                            <SelectItem value="workflows-n8n">Workflows con N8N</SelectItem>
                            <SelectItem value="gohighlevel">Automatizaciones con GoHighLevel</SelectItem>
                            <SelectItem value="notion">Implementaciones en Notion</SelectItem>
                            <SelectItem value="desarrollo-webs">Desarrollo de Webs</SelectItem>
                            <SelectItem value="consultoria-general">Consultoría general</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="objetivo" className="block text-sm font-medium mb-2">
                          Objetivo que quieres lograr en tu empresa *
                        </label>
                        <Textarea
                          id="objetivo"
                          name="objetivo"
                          required
                          rows={4}
                          value={contactFormData.objetivo}
                          onChange={handleContactInputChange}
                          placeholder="Describe el objetivo principal que quieres alcanzar..."
                        />
                      </div>

                      <div>
                        <label htmlFor="presupuesto" className="block text-sm font-medium mb-2">
                          Presupuesto aproximado *
                        </label>
                        <Select required value={contactFormData.presupuesto} onValueChange={(value) => handleContactSelectChange('presupuesto', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Selecciona un rango" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="menos-1000">Menos de 1.000 €</SelectItem>
                            <SelectItem value="1000-5000">1.000 - 5.000 €</SelectItem>
                            <SelectItem value="5000-10000">5.000 - 10.000 €</SelectItem>
                            <SelectItem value="mas-10000">Más de 10.000 €</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button type="submit" className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Enviar Mensaje
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Email</p>
                            <a href="mailto:contacto@iaconsultora.net" className="text-primary hover:underline">
                              contacto@iaconsultora.net
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Teléfono</p>
                            <a href="tel:+34916205922" className="text-primary hover:underline">
                              +34 916 205 922
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Ubicación</p>
                            <p className="text-muted-foreground">Madrid, España</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">¿Cómo Trabajamos?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                            1
                          </div>
                          <div>
                            <p className="font-medium">Consulta Inicial</p>
                            <p className="text-sm text-muted-foreground">Llamada gratuita de 30 minutos para entender tus necesidades</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                            2
                          </div>
                          <div>
                            <p className="font-medium">Propuesta Personalizada</p>
                            <p className="text-sm text-muted-foreground">Análisis detallado y propuesta de solución</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                            3
                          </div>
                          <div>
                            <p className="font-medium">Implementación</p>
                            <p className="text-sm text-muted-foreground">Desarrollo y configuración de tu solución</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                            4
                          </div>
                          <div>
                            <p className="font-medium">Capacitación y Soporte</p>
                            <p className="text-sm text-muted-foreground">Training completo y soporte continuo</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Disponibilidad</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">Lunes a Viernes</p>
                            <p className="text-sm text-muted-foreground">9:00 - 18:00</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <CalendarIcon className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">Tiempo de Respuesta</p>
                            <p className="text-sm text-muted-foreground">Máximo 24 horas</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Respuestas a las dudas más comunes sobre nuestros servicios
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">¿Cuánto cuesta una implementación?</h3>
                  <p className="text-muted-foreground">
                    El precio varía según la complejidad del proyecto. Ofrecemos una consulta gratuita 
                    para evaluar tus necesidades y proporcionar un presupuesto personalizado.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">¿Cuánto tiempo toma una implementación?</h3>
                  <p className="text-muted-foreground">
                    Dependiendo del proyecto, entre 2-8 semanas. Proyectos simples como configuración 
                    de Notion pueden tomar 1-2 semanas, mientras que automatizaciones complejas más tiempo.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">¿Ofrecen soporte post-implementación?</h3>
                  <p className="text-muted-foreground">
                    Sí, incluimos capacitación completa del equipo y 30 días de soporte gratuito. 
                    También ofrecemos planes de mantenimiento mensual.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">¿Trabajan con empresas de cualquier tamaño?</h3>
                  <p className="text-muted-foreground">
                    Absolutamente. Desde startups hasta grandes empresas. Adaptamos nuestras 
                    soluciones al tamaño y necesidades específicas de cada organización.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12 pt-6">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Pablos & Marcos - Consultoría IA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}