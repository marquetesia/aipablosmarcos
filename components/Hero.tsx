"use client";
import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";

const WORDS = ["negocio", "equipo", "sistema", "proyectos", "analítica", "dashboard"];

export default function Hero() {
  const [index, setIndex] = useState(1); // start at "equipo"
  const spanRef = useRef<HTMLSpanElement>(null);

  // cycle words gently
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="flex items-center justify-center w-full overflow-x-hidden">
      <div className="w-full bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 pt-20">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-normal">
                <span className="text-brand-purple">Automatiza tu </span>
                {/* invisible width measure to fix width */}
                <div aria-hidden className="absolute opacity-0 pointer-events-none">
                  {WORDS.map((w) => (
                    <span key={w} className="font-bold text-foreground">{w}</span>
                  ))}
                </div>
                <span className="relative inline-block">
                  <span
                    ref={spanRef}
                    className="inline-block font-bold text-foreground animate-wordfade"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {WORDS[index]}
                  </span>
                </span>{" "}
                <span className="text-brand-purple">y enfócate en lo importante</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center mx-auto">
                Implemento Notion, GoHighLevel y n8n para que tu equipo trabaje un 30% más rápido
              </p>
            </div>

            <div className="flex flex-row gap-3 mt-2">
              <a href="/booking" className="btn btn-outline h-11 px-8 gap-4">
                Agendar llamada
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}