'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/firebase'
import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore'
import { Loader2 } from 'lucide-react'

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Por favor, introduce un email válido')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      if (!db) {
        throw new Error('Firebase no está configurado correctamente')
      }

      // Check if email already exists
      const subscribersRef = collection(db, 'newsletter_subscribers')
      const q = query(subscribersRef, where('email', '==', email.toLowerCase()))
      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {
        setStatus('error')
        setMessage('Este email ya está suscrito')
        return
      }

      // Add new subscriber
      await addDoc(subscribersRef, {
        email: email.toLowerCase(),
        subscribedAt: serverTimestamp(),
        active: true
      })

      setStatus('success')
      setMessage('¡Suscripción exitosa! Gracias por unirte.')
      setEmail('')

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (error) {
      console.error('Error subscribing:', error)
      setStatus('error')
      setMessage('Hubo un error. Por favor, inténtalo de nuevo.')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
          disabled={status === 'loading'}
          className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-3 h-auto disabled:opacity-50"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Suscribiendo...
            </>
          ) : (
            'Suscribirse'
          )}
        </Button>
      </form>

      {message && (
        <p className={`text-center mt-4 text-sm ${
          status === 'success' ? 'text-green-600' : 'text-red-600'
        }`}>
          {message}
        </p>
      )}
    </div>
  )
}
