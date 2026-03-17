import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VisionMission from "@/components/VisionMission";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
export default function Home() {
  return (
    <>

      <ParticlesBackground />

      <Hero />
      <Features />
      <VisionMission />

      <Footer />
    </>
  );
}