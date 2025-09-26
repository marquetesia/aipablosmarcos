"use client"

import { useState } from "react"
import { Download, FileText, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NavPill from "@/components/NavPill"
import Footer from "@/components/Footer"

export default function PresentacionPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = () => {
    setIsLoading(true)
    const link = document.createElement('a')
    link.href = '/Presentación.pdf'
    link.download = 'Presentación-IAconsultora.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <NavPill />
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Presentación Corporativa
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conoce nuestra propuesta de valor y servicios de consultoría en IA
            </p>
          </div>

          {/* PDF Viewer Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Presentación IAconsultora
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <iframe
                  src="/Presentación.pdf"
                  className="w-full h-96 md:h-[600px] rounded border"
                  title="Presentación IAconsultora"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleDownload}
                  disabled={isLoading}
                  className="flex items-center gap-2"
                  size="lg"
                >
                  <Download className="w-5 h-5" />
                  {isLoading ? "Descargando..." : "Descargar Presentación"}
                </Button>

                <Button
                  variant="outline"
                  onClick={() => window.open('/Presentación.pdf', '_blank')}
                  className="flex items-center gap-2"
                  size="lg"
                >
                  <FileText className="w-5 h-5" />
                  Ver en Pantalla Completa
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                ¿Interesado en nuestros servicios?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Agenda una reunión para discutir cómo podemos ayudar a transformar tu negocio
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open('/contacto', '_self')}
                className="font-semibold"
              >
                Contactar Ahora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}