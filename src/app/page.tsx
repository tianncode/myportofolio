import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/bento/AboutSection";
import Projects from "@/components/projects/Projects";
import Journey from "@/components/journey/Journey";
import Certificates from "@/components/certificates/Certificates";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Hero />
        <AboutSection />
        <Projects />
        <Journey />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
