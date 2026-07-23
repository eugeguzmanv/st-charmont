import Hero from "./components/Hero/Hero";
import StCharmontIntro from "./components/StCharmontIntro/StCharmontIntro";
import Vision from "./components/Vision/Vision";
import Offerings from "./components/Offerings/Offerings";
import Visionarios from "./components/Visionarios/Visionarios";
import TheSoul from "./components/TheSoul/TheSoul";
import Wellness from "./components/Wellness/Wellness";
import Hospitality from "./components/Hospitality/Hospitality";
import Location from "./components/Location/Location";
import Legacy from "./components/Legacy/Legacy";
import FooterCTA from "./components/FooterCTA/FooterCTA";
import Footer from "./components/Footer";
import ContactPopup from "./components/ContactPopup/ContactPopup";

export default function Home() {
  return (
    <main>
      <Hero />
      <StCharmontIntro />
      <Vision />
      <Offerings />
      <Visionarios />
      <TheSoul />
      <Wellness />
      <Hospitality />
      <Location />
      <Legacy />
      <FooterCTA />
      <Footer />
      <ContactPopup />
    </main>
  );
}
