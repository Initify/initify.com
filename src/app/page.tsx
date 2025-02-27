import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Founders from "@/components/Founders";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <TechStack />
      <Testimonials />
      <Founders />
      <CTA />
      <Footer />
    </main>
  );
}
