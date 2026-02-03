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
