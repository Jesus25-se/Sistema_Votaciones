import HeroSection from "../components/landing/HeroSection";
import ComoFunciona from "../components/landing/ComoFunciona";
import Transparencia from "../components/landing/Transparencia";
import Contacto from "../components/landing/Contacto";
import Footer from "../components/layout/Footer";
import QueElegiremos from "../components/landing/QueElegiremos";
import FinalCard from "../components/landing/FinalCard";

export default function Landing() {
  return (
    <>
      <HeroSection />
      <ComoFunciona />
      <Transparencia />
      <QueElegiremos />
      <Contacto />
      <FinalCard />
      <Footer />
    </>
  );
}
