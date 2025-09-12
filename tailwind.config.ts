import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        // Brand + utility colors
        "brand-purple": "#f36e64",
        "notion-gray": "#F7F7F7",
        "notion-yellow": "#FFE082",
        "notion-blue": "#D6E4FF",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      boxShadow: {
        "soft": "0 6px 20px rgba(0,0,0,0.06)",
        "soft-lg": "0 10px 30px rgba(0,0,0,0.08)",
      },
      backdropBlur: { xs: "2px" },
      keyframes: {
        wordfade: {
          "0%": { opacity: "0", filter: "blur(6px)", transform: "translateY(8px)" },
          "100%": { opacity: "1", filter: "blur(0)", transform: "translateY(0)" }
        },
        glow: {
          "0%,100%": { opacity: "0.6", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(-1px)" }
        },
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        wordfade: "wordfade .5s ease-out",
        glow: "glow 2.4s ease-in-out infinite",
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      letterSpacing: {
        tightest: "-.035em",
        tighter: "-.03em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
