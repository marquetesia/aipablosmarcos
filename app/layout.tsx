import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Pablos Marcos',
  description: 'Consultoría en IA, asesoría inmobiliaria y carsharing con Pablos Marcos',
  generator: 'Next.js',
  icons: {
    icon: '/favicon1.ico',
    shortcut: '/favicon1.ico',
    apple: '/favicon1.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
