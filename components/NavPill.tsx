"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, BookOpen, Phone } from "lucide-react";

const items = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/sobre-mi", label: "Sobre mí", icon: User },
  { href: "/servicios", label: "Servicios", icon: Briefcase },
  { href: "/casos-de-uso", label: "Casos de uso", icon: BookOpen },
  { href: "/contacto", label: "Contacto", icon: Phone },
];

export default function NavPill() {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6">
      <nav className="flex items-center gap-3 glass py-1 px-1 rounded-full">
        {items.map((it) => {
          const active = pathname === it.href;
          const IconComponent = it.icon;
          return (
            <Link
              key={it.href}
              href={it.href}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                active
                  ? "bg-muted text-brand-purple"
                  : "text-foreground/80 hover:text-brand-purple"
              )}
            >
              <span className="hidden md:inline">{it.label}</span>
              <span className="md:hidden">
                <IconComponent className="w-4 h-4" />
              </span>

              {active && (
                <span className="absolute inset-0 w-full bg-brand-purple/5 rounded-full -z-10">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-brand-purple rounded-t-full">
                    <span className="absolute w-12 h-6 bg-brand-purple/20 rounded-full blur-md -top-2 -left-2"></span>
                    <span className="absolute w-8 h-6 bg-brand-purple/20 rounded-full blur-md -top-1"></span>
                    <span className="absolute w-4 h-4 bg-brand-purple/20 rounded-full blur-sm top-0 left-2"></span>
                  </span>
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}