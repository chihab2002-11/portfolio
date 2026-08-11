import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageBackground } from "@/components/layout/PageBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <PageBackground />
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Work />
        <Skills />
        <ExperienceSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
