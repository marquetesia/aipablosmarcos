'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, User } from "lucide-react";
// @ts-ignore - Firebase db may be null during build
import { db } from "@/lib/firebase";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { toast } from "sonner";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  // Load reviews from Firestore
  useEffect(() => {
    // @ts-ignore - Firebase db type
    if (!db) {
      console.error("Firebase not initialized");
      setLoading(false);
      return;
    }

    // @ts-ignore - Firebase db type handled in configuration
    const q = query(collection(db, "reviews"), orderBy("date", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reviewsData: Review[] = [];
      snapshot.forEach((doc) => {
        reviewsData.push({
          id: doc.id,
          ...doc.data()
        } as Review);
      });
      setReviews(reviewsData);
      setLoading(false);
    }, (error) => {
      console.error("Error loading reviews:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Submit new review
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // @ts-ignore - Firebase db type
    if (!db) {
      toast.error("Error de conexión. Por favor recarga la página.");
      return;
    }

    if (!formData.name.trim() || !formData.comment.trim()) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    try {
      // @ts-ignore - Firebase db type handled in configuration
      await addDoc(collection(db, "reviews"), {
        name: formData.name,
        rating: formData.rating,
        comment: formData.comment,
        date: new Date().toISOString()
      });
      
      toast.success("¡Gracias por tu reseña!");
      setFormData({ name: '', rating: 5, comment: '' });
    } catch (error) {
      console.error("Error saving review:", error);
      toast.error("Error al guardar la reseña. Intenta de nuevo.");
    }
  };

  // Render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-600'
        }`}
      />
    ));
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8 md:mb-12">
        Lo que dicen nuestros clientes
      </h2>

      {/* Add Review Form */}
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm max-w-2xl mx-auto mb-12">
        <CardHeader>
          <CardTitle className="text-white text-xl">Deja tu reseña</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-gray-300 text-sm mb-2 block">Tu nombre</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Juan Pérez"
                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm mb-2 block">Calificación</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({...formData, rating: star})}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`h-6 w-6 transition-colors ${
                        star <= formData.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-600 hover:text-yellow-400'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-sm mb-2 block">Tu comentario</label>
              <Textarea
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                placeholder="Cuéntanos tu experiencia..."
                rows={4}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold"
            >
              Publicar reseña
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Reviews List */}
      <div className="max-w-4xl mx-auto">
        {loading ? (
          <div className="text-center text-gray-400">Cargando reseñas...</div>
        ) : reviews.length === 0 ? (
          <div className="text-center text-gray-400">
            Sé el primero en dejar una reseña
          </div>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <Card 
                key={review.id} 
                className="bg-slate-800/30 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-white">{review.name}</h3>
                        <span className="text-sm text-gray-400">
                          {formatDate(review.date)}
                        </span>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 