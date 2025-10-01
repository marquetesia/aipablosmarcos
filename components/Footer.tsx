'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Servicios */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">SERVICIOS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/consultoria-ia" className="text-gray-300 hover:text-white transition-colors underline">
                  Consultoría en IA
                </Link>
              </li>
              <li>
                <Link href="/n8n" className="text-gray-300 hover:text-white transition-colors underline">
                  Automatización con n8n
                </Link>
              </li>
              <li>
                <Link href="/gohighlevel" className="text-gray-300 hover:text-white transition-colors underline">
                  Desarrollo con GoHighLevel
                </Link>
              </li>
              <li>
                <Link href="/notion" className="text-gray-300 hover:text-white transition-colors underline">
                  Integración con Notion
                </Link>
              </li>
              <li>
                <Link href="/desarrollo-web" className="text-gray-300 hover:text-white transition-colors underline">
                  Desarrollo de webs
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">EMPRESA</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre-mi" className="text-gray-300 hover:text-white transition-colors underline">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors underline">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-white transition-colors underline">
                  Reservar consulta
                </Link>
              </li>
              <li>
                <Link href="/presentacion" className="text-gray-300 hover:text-white transition-colors underline">
                  Presentación
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">RECURSOS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors underline">
                  Blog
                </Link>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  Casos de estudio (próximamente)
                </span>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-gray-300 hover:text-white transition-colors underline">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">CONTACTO</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-purple flex-shrink-0" />
                <span className="text-gray-300">(+34) 916 20 59 22</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-purple flex-shrink-0" />
                <a href="mailto:info@iaconsultora.com" className="text-gray-300 hover:text-white transition-colors">
                  info@iaconsultora.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p>Av. de Europa</p>
                  <p>19, 28108 Madrid-España</p>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="mt-6">
              <div className="w-32 h-32 flex items-center justify-center">
                <img
                  src="/iaconsultora.png"
                  alt="IAconsultora Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <Link href="/aviso-legal" className="text-yellow-500 hover:text-yellow-400 transition-colors underline">
                Aviso legal
              </Link>
              <Link href="/politica-cookies" className="text-yellow-500 hover:text-yellow-400 transition-colors underline">
                Política de Cookies
              </Link>
              <Link href="/politica-privacidad" className="text-yellow-500 hover:text-yellow-400 transition-colors underline">
                Política de Privacidad
              </Link>
              <Link href="/preguntas-frecuentes" className="text-yellow-500 hover:text-yellow-400 transition-colors underline">
                Preguntas frecuentes
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>Copyright © 2025 IAconsultora. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}