# CLAUDE.md - IAConsultora Website Complete Documentation

## CRITICAL RULES - READ FIRST ⚠️

### **NEVER DO THESE THINGS:**
1. **NEVER add author names or reading time to blog posts** - They were specifically removed
2. **NEVER use `'use client'` with `generateStaticParams()`** - Causes build errors
3. **NEVER forget to update both blog listing AND individual post pages** when adding content
4. **NEVER use prose classes** - Use custom `.blog-content` styling only
5. **NEVER assume Tailwind typography plugin is installed** - It's not
6. **NEVER add placeholder/example blog posts** - Only real content from client documents
7. **NEVER forget to add new slugs to `generateStaticParams()`** for static export
8. **NEVER use port 3000 if 3001 is running** - Check which port the dev server uses

### **ALWAYS DO THESE THINGS:**
1. **ALWAYS check dev server port** before giving URLs (could be 3000 or 3001)
2. **ALWAYS use custom CSS in globals.css** for blog styling
3. **ALWAYS update images in both blog files** when changing them
4. **ALWAYS use Link components** for navigation in server components
5. **ALWAYS add proper meta tags** using `generateMetadata()` function
6. **ALWAYS test changes** on the correct localhost port

---

## Project Overview

**Website**: IAConsultora.net
**Owner**: Pablos Marcos
**Type**: AI Consultancy for Spanish SMEs
**Tech**: Next.js 15, TypeScript, Tailwind CSS
**Deployment**: Static export to Vercel
**Language**: Spanish
**Target**: Small-medium businesses (15-60 employees)

---

## Complete Architecture & Technical Setup

### Framework Configuration
```json
// package.json key dependencies
{
  "next": "15.2.4",
  "react": "^19.0.0",
  "typescript": "^5.6.3",
  "tailwindcss": "^3.4.17",
  "@types/node": "^22.9.0",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "lucide-react": "^0.462.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.4"
}
```

### Next.js Configuration (`next.config.js`)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // CRITICAL: Static export
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

### Tailwind Configuration (`tailwind.config.ts`)
```typescript
// IMPORTANT: NO typography plugin installed
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-purple": "#f36e64", // Primary brand color
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        // ... rest of color system
      }
    }
  },
  plugins: [require("tailwindcss-animate")] // NO typography plugin
}
```

### Build & Development Commands
```bash
npm run dev     # Development server (port 3000 or 3001)
npm run build   # Production build
npm run export  # Static export to /out
npm run start   # Production server (not used with static export)
```

---

## Complete Site Structure & Pages

### Root Layout (`app/layout.tsx`)
- Global HTML structure
- Font loading (Inter)
- Theme provider
- CSS variables

### Navigation System

#### NavPill Component (`components/NavPill.tsx`)
```typescript
// Fixed top navigation with glassmorphism
const items = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/sobre-mi", label: "Sobre Nosotros", icon: User },
  { href: "/servicios", label: "Servicios", icon: Briefcase },
  { href: "/contacto", label: "Contacto", icon: Phone }
]
```

#### Footer Component (`components/Footer.tsx`)
- **Services Section**: Links to all service pages
- **Company Section**: About, contact, booking, presentation
- **Resources Section**: Blog (active), case studies (coming soon), FAQ
- **Contact Section**: Phone, email, address, logo
- **Legal Section**: All legal pages in yellow links

### Complete Page List

#### Main Pages
- `/` - Homepage with hero and services overview
- `/sobre-mi` - About page (personal/company info)
- `/servicios` - Services overview page
- `/contacto` - Contact form and information
- `/booking` - Consultation booking page
- `/presentacion` - Company presentation page

#### Service Pages (Detailed)
- `/consultoria-ia` - AI consulting services
- `/n8n` - n8n automation consulting
- `/gohighlevel` - GoHighLevel development
- `/notion` - Notion integration services
- `/desarrollo-web` - Web development services

#### Legal & Compliance
- `/aviso-legal` - Legal notice
- `/politica-privacidad` - Privacy policy
- `/politica-cookies` - Cookie policy
- `/terminos-servicio` - Terms of service
- `/preguntas-frecuentes` - FAQ page

#### Resources
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual blog posts
- `/casos-estudio` - Case studies (coming soon)

---

## Complete Blog System Documentation

### Blog Architecture (CRITICAL SECTION)

#### Blog Listing Page (`app/blog/page.tsx`)
```typescript
'use client' // CLIENT COMPONENT - uses useRouter

const blogPosts = [
  {
    id: 1,
    title: "Inteligencia artificial para pymes: Cómo automatizar procesos, ahorrar tiempo y ganar ventaja competitiva",
    excerpt: "Descubre cómo aplicar inteligencia artificial en tu pyme para automatizar tareas repetitivas, ahorrar tiempo y mejorar la productividad con herramientas prácticas y pasos claros.",
    category: "Transformación Empresarial con IA",
    date: "29 Septiembre 2024",
    image: "/IAparapymes.png",
    slug: "inteligencia-artificial-para-pymes"
  },
  {
    id: 2,
    title: "Reuniones sin actas manuales: así funcionan los resúmenes automáticos con IA",
    excerpt: "Implementa resúmenes automáticos con IA para automatizar tus reuniones comerciales. Mejora el seguimiento de ventas, ahorra tiempo y aumenta la conversión.",
    category: "Ventas & Clientes",
    date: "27 Septiembre 2024",
    image: "/reuniones.png",
    slug: "reuniones-resumenes-automaticos-ia"
  }
]

// REMOVED FIELDS (DO NOT ADD BACK):
// - author: "Pablos Marcos" (removed from display)
// - readTime: "X min" (removed from display)
```

#### Individual Blog Posts (`app/blog/[slug]/page.tsx`)
```typescript
// SERVER COMPONENT - NO 'use client'
// Uses generateStaticParams() for static export

export function generateStaticParams() {
  return [
    { slug: 'inteligencia-artificial-para-pymes' },
    { slug: 'reuniones-resumenes-automaticos-ia' }
  ]
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article'
    }
  }
}
```

### Blog Categories (EXACT NAMES)
1. **"Automatización de Procesos"** - AI automation, integrations, workflows
2. **"Aplicaciones Internas & Herramientas"** - Internal apps (Notion, n8n, GoHighLevel)
3. **"Ventas & Clientes"** - Sales automation, CRM, client management
4. **"Conocimiento Corporativo"** - Knowledge management, internal chatbots
5. **"Desarrollo Digital"** - Web development, digital platforms
6. **"Transformación Empresarial con IA"** - AI strategy, ROI, business transformation

### Current Blog Posts (COMPLETE DATA)

#### Post 1: "Inteligencia artificial para pymes"
- **Slug**: `inteligencia-artificial-para-pymes`
- **Category**: "Transformación Empresarial con IA"
- **Date**: "29 Septiembre 2024"
- **Image**: `/IAparapymes.png`
- **Meta Title**: "Inteligencia Artificial para Pymes | Automatiza procesos y gana eficiencia"
- **Meta Description**: "Descubre cómo aplicar inteligencia artificial en tu pyme para automatizar tareas repetitivas, ahorrar tiempo y mejorar la productividad. Herramientas prácticas y pasos claros."
- **Keywords**: "Inteligencia artificial para pymes"

#### Post 2: "Reuniones sin actas manuales"
- **Slug**: `reuniones-resumenes-automaticos-ia`
- **Category**: "Ventas & Clientes"
- **Date**: "27 Septiembre 2024"
- **Image**: `/reuniones.png`
- **Meta Title**: "Reuniones sin actas manuales | Resúmenes automáticos con IA para ventas"
- **Meta Description**: "Implementa resúmenes automáticos con IA para automatizar tus reuniones comerciales. Mejora el seguimiento de ventas, ahorra tiempo y aumenta la conversión. Descúbrelo aquí."
- **Keywords**: "resúmenes con IA"

### Blog Content Format (CRITICAL)

#### HTML Content Structure
```html
<h2>Main Section Title</h2>
<p>Paragraph content with proper spacing...</p>

<h3>Subsection Title</h3>
<p>More paragraph content...</p>

<p><strong>Bold text for emphasis</strong><br>
Regular text continues...</p>
```

#### CSS Styling (`.blog-content` class)
```css
/* In /app/globals.css */
.blog-content {
  @apply text-lg leading-relaxed;
}
.blog-content h2 {
  @apply text-3xl font-bold text-foreground mt-8 mb-4 leading-tight;
}
.blog-content h3 {
  @apply text-xl font-semibold text-foreground mt-6 mb-3 leading-tight;
}
.blog-content p {
  @apply text-muted-foreground mb-4 leading-relaxed;
}
.blog-content strong {
  @apply text-foreground font-semibold;
}
.blog-content ul {
  @apply list-disc list-inside mb-4 text-muted-foreground;
}
.blog-content li {
  @apply mb-2;
}
```

### Blog Publishing Schedule
- **Frequency**: Tuesdays and Fridays
- **Purpose**: Consistent Google signals for SEO
- **Content Source**: Client provides Word documents
- **Process**: Extract content → Convert to HTML → Add to both blog files

---

## Complete Design System

### Color System (CSS Variables in `/app/globals.css`)
```css
:root {
  --background: 0 0% 100%;           /* #FFFFFF */
  --foreground: 222 33% 12%;         /* #1C1C1E */
  --muted: 0 0% 98%;                 /* #FAFAFA */
  --muted-foreground: 220 10% 46%;   /* #6B7280 */
  --border: 220 14% 90%;             /* #E5E7EB */
  --input: 220 14% 90%;              /* #E5E7EB */
  --ring: 4 85% 67%;                 /* #f36e64 */
  --primary: 4 85% 67%;              /* #f36e64 */
  --primary-foreground: 0 0% 100%;   /* #FFFFFF */
  --secondary: 0 0% 97%;             /* #F7F7F7 */
  --secondary-foreground: 222 33% 12%; /* #1C1C1E */
  --accent: 0 0% 96%;                /* #F5F5F5 */
  --accent-foreground: 222 33% 12%;  /* #1C1C1E */
  --card: 0 0% 100%;                 /* #FFFFFF */
  --card-foreground: 222 33% 12%;    /* #1C1C1E */
  --popover: 0 0% 100%;              /* #FFFFFF */
  --popover-foreground: 222 33% 12%; /* #1C1C1E */
  --destructive: 0 84.2% 60.2%;      /* #EF4444 */
  --destructive-foreground: 0 0% 98%; /* #FAFAFA */
  --radius: 0.5rem;
}

/* Brand Colors */
.brand-purple { color: #f36e64; }
.bg-brand-purple { background-color: #f36e64; }
```

### Typography Scale
```css
/* Base Typography */
html { scroll-behavior: smooth; }
body { @apply bg-background text-foreground antialiased; }
h1,h2,h3 { @apply tracking-tight; }

/* Blog Typography */
.blog-content { @apply text-lg leading-relaxed; }          /* 18px */
.blog-content h2 { @apply text-3xl font-bold; }           /* 30px */
.blog-content h3 { @apply text-xl font-semibold; }        /* 20px */
.blog-content p { @apply leading-relaxed mb-4; }          /* Relaxed line height */
```

### Component System
```css
/* Card Components */
.card {
  @apply bg-white border border-border rounded-xl shadow-sm transition-shadow;
}
.card-hover {
  @apply hover:shadow-md;
}

/* Button Components */
.btn {
  @apply inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors;
}
.btn-outline {
  @apply border border-input bg-background hover:bg-accent hover:text-accent-foreground;
}
.btn-primary {
  @apply bg-primary text-primary-foreground hover:bg-primary/90;
}

/* Utility Components */
.pill {
  @apply inline-flex items-center rounded-full text-xs font-semibold px-3 py-1.5;
}
.glass {
  @apply bg-background/5 backdrop-blur-lg border border-border shadow-lg;
}
```

### Layout & Spacing
- **Container**: `mx-auto px-4` with responsive max-widths
- **Sections**: `py-16` for large sections, `py-8` for smaller
- **Cards**: `p-6` internal padding
- **Gaps**: `gap-4` for small, `gap-8` for large

---

## Assets & Media Management

### Image Assets (`/public/` directory)
```
/public/
├── iaconsultora.png          # Main logo
├── favicon.png               # Favicon
├── favicon1.ico              # Alternative favicon
├── IAparapymes.png           # Blog post 1 image
├── reuniones.png             # Blog post 2 image
├── n8n.png                   # n8n service image
├── notion.png                # Notion service image
├── gohighlevel.jpg           # GoHighLevel service image
├── pablos.jpeg               # Personal photo 1
├── marcos.jpeg               # Personal photo 2
├── pablosmarcos.jpeg         # Personal photo 3
├── hero-bg.png               # Hero background
├── modelogordo.png           # Model/design image
├── Presentación.pdf          # Company presentation
├── sitemap.xml               # SEO sitemap
├── googled7128d37a3c54521.html # Google verification
└── placeholder.* files       # Various placeholder images
```

### Image Usage Rules
- **Blog posts**: Use specific images (`/IAparapymes.png`, `/reuniones.png`)
- **Services**: Use corresponding service images (`/n8n.png`, `/notion.png`, etc.)
- **Fallback**: Use `/iaconsultora.png` for generic needs
- **Optimization**: All images should be web-optimized (not handled by Next.js due to static export)

---

## Complete Business Context

### Target Market Analysis
- **Primary**: Spanish SMEs (Small-Medium Enterprises)
- **Size**: 15-60 employees
- **Sectors**: Commerce, industry, health, services
- **Pain Points**: Manual processes, time-consuming tasks, inefficient workflows
- **Budget**: Limited but seeking ROI-focused solutions
- **Tech Level**: Basic to intermediate

### Service Offerings
1. **AI Consulting** (`/consultoria-ia`)
   - AI strategy development
   - Implementation roadmaps
   - ROI measurement

2. **Process Automation** (`/n8n`)
   - Workflow automation with n8n
   - API integrations
   - Data processing

3. **CRM Development** (`/gohighlevel`)
   - GoHighLevel setup and customization
   - Sales funnel automation
   - Lead management

4. **Productivity Tools** (`/notion`)
   - Notion workspace design
   - Knowledge management systems
   - Team collaboration setup

5. **Web Development** (`/desarrollo-web`)
   - Modern web applications
   - Database-driven platforms
   - Performance optimization

### Content Strategy & Messaging

#### Tone & Voice
- **Professional but approachable**
- **Results-focused and practical**
- **Avoids technical jargon**
- **Emphasizes ROI and measurable outcomes**
- **Spanish business language**

#### Key Messages
- AI is accessible and affordable for SMEs
- Focus on practical, implementable solutions
- Step-by-step guidance and support
- Measurable results within 1-6 months
- No need for technical expertise

#### Content Topics
- AI implementation guides
- Automation case studies
- Tool comparisons and tutorials
- ROI measurement and success metrics
- Industry-specific applications

---

## Development Guidelines & Best Practices

### File Organization
```
/app/
├── globals.css               # Global styles and blog content styles
├── layout.tsx                # Root layout with metadata
├── page.tsx                  # Homepage
├── blog/
│   ├── page.tsx              # Blog listing (client component)
│   └── [slug]/
│       └── page.tsx          # Individual posts (server component)
├── sobre-mi/
│   └── page.tsx              # About page
├── servicios/
│   └── page.tsx              # Services overview
├── contacto/
│   └── page.tsx              # Contact page
└── [service-name]/
    └── page.tsx              # Individual service pages

/components/
├── NavPill.tsx               # Main navigation
├── Footer.tsx                # Site footer
├── Hero.tsx                  # Hero section component
└── ui/                       # Shadcn UI components

/public/                      # Static assets
/lib/                        # Utilities
/hooks/                      # React hooks
```

### Adding New Blog Posts (STEP-BY-STEP)

#### 1. Update Blog Listing (`/app/blog/page.tsx`)
```typescript
const blogPosts = [
  // Add new post object
  {
    id: 3, // Increment ID
    title: "New Post Title",
    excerpt: "Post excerpt...",
    category: "One of the 6 categories",
    date: "DD Month YYYY",
    image: "/new-post-image.png",
    slug: "new-post-slug"
  },
  // ... existing posts
]
```

#### 2. Update Individual Posts (`/app/blog/[slug]/page.tsx`)
```typescript
// Add to generateStaticParams
export function generateStaticParams() {
  return [
    { slug: 'new-post-slug' }, // Add new slug
    { slug: 'inteligencia-artificial-para-pymes' },
    { slug: 'reuniones-resumenes-automaticos-ia' }
  ]
}

// Add to blogPosts object
const blogPosts = {
  'new-post-slug': {
    title: "New Post Title",
    excerpt: "Post excerpt...",
    category: "Category",
    date: "DD Month YYYY",
    image: "/new-post-image.png",
    content: `
      <h2>Section Title</h2>
      <p>Paragraph content...</p>
      <h3>Subsection</h3>
      <p>More content...</p>
    `,
    metaTitle: "SEO Title",
    metaDescription: "SEO description",
    keywords: "keyword"
  },
  // ... existing posts
}
```

#### 3. Add Image to `/public/`
- Upload image file to `/public/new-post-image.png`
- Ensure web-optimized format and size

### Component Development Rules

#### Server vs Client Components
```typescript
// SERVER COMPONENT (default)
// - Can use generateMetadata()
// - Can use generateStaticParams()
// - Cannot use useState, useRouter, onClick
// - Use Link components for navigation

// CLIENT COMPONENT
'use client'
// - Can use hooks (useState, useRouter, etc.)
// - Can use onClick handlers
// - Cannot use generateMetadata() or generateStaticParams()
```

#### Navigation Patterns
```typescript
// Server Component Navigation
<Link href="/path">
  <Button>Click me</Button>
</Link>

// Client Component Navigation
const router = useRouter()
<Button onClick={() => router.push('/path')}>
  Click me
</Button>
```

### Styling Guidelines

#### CSS Class Priority
1. **Tailwind utility classes** (preferred)
2. **Custom component classes** (`.card`, `.btn`, etc.)
3. **Custom CSS in globals.css** (for complex components)

#### Blog Content Styling
```typescript
// CORRECT: Use custom class
<div className="blog-content" dangerouslySetInnerHTML={{ __html: content }} />

// WRONG: Use prose classes (not installed)
<div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: content }} />
```

### SEO Requirements

#### Meta Tags (Required)
```typescript
export function generateMetadata(): Metadata {
  return {
    title: "Page Title | IAConsultora",
    description: "Page description under 160 characters",
    keywords: "relevant, keywords, spanish",
    openGraph: {
      title: "Social media title",
      description: "Social media description",
      images: ["/image.png"],
      type: "website" // or "article" for blog posts
    }
  }
}
```

#### Structured Data
- Use proper heading hierarchy (H1 → H2 → H3)
- Include schema markup where applicable
- Ensure proper internal linking

---

## Contact Information & Business Details

### Official Business Information
- **Company**: IAConsultora
- **Website**: IAConsultora.net
- **Email**: info@iaconsultora.net
- **Phone**: (+34) 916 20 59 22
- **Address**: C. del Mirador, 6, 28860, Madrid, Spain-España
- **Country**: España (Spain)
- **Language**: Spanish (primary business language)

### Business Registration & Legal
- Spanish business entity
- Madrid-based operations
- EU compliance requirements (GDPR, etc.)
- Spanish legal framework

---

## Error Prevention Checklist

### Before Making Changes
- [ ] Check which port dev server is running (3000 or 3001)
- [ ] Verify if component should be client or server
- [ ] Check if Tailwind classes are available
- [ ] Confirm image paths exist in `/public/`

### When Adding Blog Posts
- [ ] Update both blog listing AND individual post files
- [ ] Add slug to `generateStaticParams()`
- [ ] Use one of the 6 exact category names
- [ ] Don't add author or reading time fields
- [ ] Test on correct localhost port

### When Modifying Components
- [ ] Check if component uses hooks (needs 'use client')
- [ ] Verify navigation patterns (Link vs onClick)
- [ ] Test responsive design
- [ ] Validate accessibility

### Before Deployment
- [ ] Run `npm run build` successfully
- [ ] Check static export in `/out` directory
- [ ] Verify all images load correctly
- [ ] Test all navigation links
- [ ] Validate SEO meta tags

---

## Common Mistakes & Solutions

### Issue: Blog text not formatted
**Cause**: Using prose classes (not installed)
**Solution**: Use `.blog-content` custom class

### Issue: Build fails with generateStaticParams error
**Cause**: Using 'use client' with generateStaticParams
**Solution**: Remove 'use client', use Link components

### Issue: Navigation not working
**Cause**: Using onClick in server component
**Solution**: Use Link components or add 'use client'

### Issue: Dev server on wrong port
**Cause**: Port 3000 already in use
**Solution**: Check console output for actual port

### Issue: Images not loading
**Cause**: Incorrect path or missing file
**Solution**: Verify file exists in `/public/` with exact name

---

## Future Development Roadmap

### Immediate Priorities
1. **Content Expansion**: More blog posts following Tuesday/Friday schedule
2. **Case Studies**: Complete case studies section
3. **Performance**: Monitor and optimize Core Web Vitals
4. **SEO**: Ongoing content optimization

### Medium Term
1. **Interactive Features**: Enhanced contact forms
2. **Client Portal**: Private client area
3. **Booking System**: Advanced consultation scheduling
4. **Analytics**: Detailed user behavior tracking

### Long Term
1. **Multilingual**: English version for international clients
2. **E-commerce**: Digital product sales
3. **Community**: Client community platform
4. **Mobile App**: Companion mobile application

---

**Documentation Version**: 2.0 (Complete)
**Last Updated**: September 29, 2024
**Next Review**: November 2024
**Maintainer**: Development Team
**Status**: Production Ready