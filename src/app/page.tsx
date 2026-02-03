import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProjectCards from "@/components/sections/ProjectCards";
import WhatIOffer from "@/components/sections/WhatIOffer";
import Gallery from "@/components/sections/Gallery";
import Testimonial from "@/components/sections/Testimonial";
import About from "@/components/sections/About";
import Background from "@/components/sections/Background";
import Approach from "@/components/sections/Approach";
import Praise from "@/components/sections/Praise";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      {/* Gradient Background - Light Sections */}
      <div className="gradient-bg">
        <Navigation />
        <Hero />
        <ProjectCards />
        <WhatIOffer />
        <Gallery />
        <Testimonial />
      </div>

      {/* Dark Sections */}
      <About />
      <Background />
      <Approach />
      <Praise />

      {/* Light Sections - Contact & Footer */}
      <Contact />
      <Footer />
    </main>
  );
}
