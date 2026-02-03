# Create Next.js Portfolio Website

Create a Next.js 14 portfolio website for Patrick McKowen with Framer Motion animations and Tailwind CSS styling.

## Step 1: Initialize Project

```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --no-src-dir --import-alias "@/*"
cd portfolio
```

Select these options when prompted:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- App Router: Yes
- Customize default import alias: No

## Step 2: Install Dependencies

```bash
npm install framer-motion lucide-react
```

## Step 3: Create Files

### `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 241 241 243;
    --foreground: 0 0 0;
  }

  body {
    font-family: var(--font-geist-sans);
    background: linear-gradient(135deg, 
      rgba(220, 210, 230, 0.8) 0%, 
      rgba(230, 230, 210, 0.8) 25%, 
      rgba(210, 230, 240, 0.8) 50%, 
      rgba(200, 240, 230, 0.8) 75%, 
      rgba(210, 240, 220, 0.8) 100%
    );
    background-attachment: fixed;
    min-height: 100vh;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

.font-serif {
  font-family: "Tiempos Headline", Georgia, "Times New Roman", serif;
  font-weight: 300;
}
```

### `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Patrick McKowen · Portfolio",
  description: "A digital product designer based in Oakland, CA with 10 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
```

### `app/page.tsx`

```tsx
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCards from "@/components/ProjectCards";
import WhatIOffer from "@/components/WhatIOffer";
import Gallery from "@/components/Gallery";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import Background from "@/components/Background";
import Approach from "@/components/Approach";
import Praise from "@/components/Praise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ProjectCards />
      <WhatIOffer />
      <Gallery />
      <Testimonial />
      <About />
      <Background />
      <Approach />
      <Praise />
      <Contact />
      <Footer />
    </main>
  );
}
```

### `components/Navigation.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-base font-medium text-gray-800 hover:text-black transition-colors"
        >
          Patrick McKowen
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => scrollToSection("work")}
            className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="px-6 py-2.5 rounded-full bg-gray-200/70 backdrop-blur-sm text-gray-800 text-sm font-medium hover:bg-gray-300/70 transition-all"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2.5 rounded-full bg-gray-200/70 backdrop-blur-sm text-gray-800 text-sm font-medium hover:bg-gray-300/70 transition-all"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
```

### `components/Hero.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-balance">
          <span className="text-gray-900">Hi there, I'm Patrick</span>
          <span className="text-gray-900">—</span>
          <span className="text-gray-500">a product designer working</span>
          <br />
          <span className="text-gray-500">to uplift people with humane technology.</span>
        </h1>
      </motion.div>
    </section>
  );
}
```

### `components/ProjectCards.tsx`

```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Connecting brands and star creators with Cameo for Business.",
    link: "/cameo-licensing",
    icon: "🎭",
  },
  {
    title: "Fundraising tools to change the world with JDRF International.",
    link: "/jdrf-fundraising",
    icon: "💙",
  },
];

export default function ProjectCards() {
  return (
    <section id="work" className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group block"
          >
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/60 transition-all duration-300 h-full flex flex-col">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
                <span className="text-6xl">{project.icon}</span>
              </div>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">{project.icon}</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 leading-snug flex-1">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-gray-700 group-hover:gap-3 transition-all mt-auto">
                <span className="text-sm font-medium">View story</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
```

### `components/WhatIOffer.tsx`

```tsx
"use client";

import { motion } from "framer-motion";
import { Compass, Palette, MousePointer, Map, Beaker, MessageSquare, Users, Book } from "lucide-react";

const offerings = [
  { icon: Compass, label: "Strategy" },
  { icon: Palette, label: "Visual Design" },
  { icon: MousePointer, label: "Prototyping" },
  { icon: Map, label: "UX Design" },
  { icon: Beaker, label: "0-to-1 Projects" },
  { icon: MessageSquare, label: "User Research" },
  { icon: Users, label: "Mentoring" },
  { icon: Book, label: "Design Systems" },
];

export default function WhatIOffer() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl text-center mb-16 text-gray-900"
        >
          What I offer
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/60 transition-all"
            >
              <item.icon className="w-8 h-8 text-gray-700 mb-4" />
              <p className="text-base font-medium text-gray-900">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `components/Gallery.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl text-center mb-16 text-gray-900"
        >
          Gallery of recent work
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `components/Testimonial.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="text-6xl text-gray-400">"</div>
          <p className="font-serif text-4xl md:text-5xl leading-tight text-gray-900">
            Patrick helped elevate the work of everyone around him.
          </p>
          <p className="text-gray-600 text-lg">VP of Design, Cameo</p>
        </motion.div>
      </div>
    </section>
  );
}
```

### `components/About.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

const facts = [
  { label: "My better half and I", value: "My wife Alena", image: "👫" },
  { label: "Hometown", value: "Palo Alto, CA", image: "🌳" },
  { label: "Current town", value: "Oakland, CA", image: "🌴" },
  { label: "Favorite town", value: "New York City", image: "🗽" },
  { label: "Favorite musician", value: "Frank Ocean", image: "🎵" },
  { label: "Favorite show", value: "Parts Unknown", image: "🎬" },
  { label: "Favorite filmmaker", value: "Stanley Kubrick", image: "🎥" },
  { label: "Favorite cuisine", value: "Southeast Asian", image: "🍜" },
];

export default function About() {
  return (
    <section id="about" className="bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">About</h2>
          <p className="text-xl text-gray-300">
            <span className="text-white font-medium">Hey, I'm Patrick.</span> A digital product designer based in Oakland, CA with 10 years of experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center text-5xl">
                {fact.image}
              </div>
              <p className="text-sm text-gray-400">{fact.label}</p>
              <p className="text-base text-white font-medium">{fact.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `components/Background.tsx`

```tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Background() {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl text-white mb-12"
        >
          Background
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 text-lg leading-relaxed"
        >
          <p>
            <span className="text-white font-medium">I'm a self-taught designer with an insatiable curiosity about people and technology.</span> I have business acumen, use system thinking to solve ambiguous problems, and find joy in the pursuit of craft.
          </p>

          <p>
            Most recently, I led design on a new B2B marketing platform for the unicorn startup Cameo. I also led their design system team and helped with the creator app.
          </p>

          <p>
            Previously, I established the first design and product management teams at JDRF, a fundraising and support organization for Type 1 Diabetes. I served in a player-coach role, designing their consumer products while managing a group of designers and product managers.
          </p>

          <p>
            I'm a life-long learner, currently learning new prototyping tools (Origami Studio, Rive), code (SwiftUI, React), and how to be more productive with generative AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-4 mt-12"
        >
          <a
            href="https://www.read.cv/patrickmckowen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
          >
            Resume <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/pmckowen/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
          >
            LinkedIn <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

### `components/Approach.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Start together.",
    description: "Products are best created collaboratively, with iterative feedback from teammates.",
  },
  {
    number: "02",
    title: "Talk to customers.",
    description: "The best way to find product-market-fit is to deeply understand the people you are building for.",
  },
  {
    number: "03",
    title: "Think in systems.",
    description: "Understanding the big picture helps to design solutions that address the root problem.",
  },
  {
    number: "04",
    title: "Tackle risks early.",
    description: "Discover asap if customers find your idea valuable and usable, if it's feasible to build, and viable to maintain.",
  },
  {
    number: "05",
    title: "Focus on impact.",
    description: "It's not about implementing features, it's about solving problems for people and delivering measurable results.",
  },
  {
    number: "06",
    title: "Stay curious.",
    description: "Continuous learning, and keeping an open mind, are the foundational elements for growth.",
  },
];

export default function Approach() {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl text-white mb-16"
        >
          Approach
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="text-gray-600 text-sm">{principle.number}</div>
              <h3 className="text-white text-xl font-medium">{principle.title}</h3>
              <p className="text-gray-400 leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `components/Praise.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Patrick helped elevate the work of everyone around him.",
    highlight: "His thoughtful approach to design and exceptional communication skills made complex projects feel simple.",
    name: "Jason Culbertson",
    title: "VP of Design",
  },
  {
    quote: "Patrick's deep commitment to understanding our customers led to some of our most valuable insights, and",
    highlight: "his collaborative spirit makes him a joy to work with.",
    name: "Prajit Gopal",
    title: "Head of Product",
  },
  {
    quote: "Patrick's ability to connect the dots across multiple projects",
    highlight: "and deliver thoughtful, impactful results makes him an invaluable asset to any team.",
    name: "Nikki Bodnar",
    title: "VP of Design",
  },
  {
    quote: "I learned so much from Patrick's design process;",
    highlight: "he really made me a better designer.",
    description: "He also gives the best feedback on projects.",
    name: "Colin Zyrek",
    title: "Senior Product Designer",
  },
  {
    quote: "Patrick is unnaturally good at asking first-principle questions",
    highlight: "to ensure his team are on the right path. He is an incredible designer, a diligent student of product development, and a wonderful human being.",
    name: "Prescott Rynewicz",
    title: "Engineering Manager",
  },
  {
    quote: "Patrick is a skilled designer who asks thoughtful questions, leads with grace, and always has valuable critique to offer.",
    highlight: "He chases excellence in all that he does and makes everyone around him better.",
    name: "Ali Forrest",
    title: "Content Designer",
  },
];

export default function Praise() {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl text-white mb-16"
        >
          Praise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="text-6xl text-gray-700">"</div>
              <p className="text-gray-400 leading-relaxed">
                {testimonial.quote}{" "}
                <span className="text-white font-medium">{testimonial.highlight}</span>
                {testimonial.description && ` ${testimonial.description}`}
              </p>
              <div className="pt-4">
                <p className="text-white font-medium">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `components/Contact.tsx`

```tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/40 via-purple-100/40 to-cyan-100/40"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative max-w-2xl mx-auto text-center"
      >
        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-12 shadow-xl">
          <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6">Contact</h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Interested in working together? Send me an email at{" "}
            <span className="font-medium">patrick.mckowen@gmail.com</span>
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href="mailto:patrick.mckowen@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 rounded-full transition-all shadow-sm"
            >
              Email <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/pmckowen/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 rounded-full transition-all shadow-sm"
            >
              LinkedIn <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
```

### `components/Footer.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-6 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="text-4xl text-gray-700">✍️</div>
        <p className="text-gray-600 font-mono text-sm">Thanks for stopping by!</p>
      </motion.div>
    </footer>
  );
}
```

### `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        serif: ['"Tiempos Headline"', 'Georgia', '"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

## Step 4: Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Step 5: Deploy to Vercel

```bash
npm i -g vercel
vercel login
vercel
```

## Notes

- Replace placeholder emojis with actual project images in the `/public` folder
- The gradient background mimics the original Framer site aesthetic
- All animations use Framer Motion for smooth transitions
- The site is fully responsive
- Navigation uses smooth scroll to sections
