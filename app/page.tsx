import Hero from "./components/Hero/Hero";
import StCharmontIntro from "./components/StCharmontIntro/StCharmontIntro";
import Vision from "./components/Vision/Vision";
import TheSoul from "./components/TheSoul/TheSoul";
import Wellness from "./components/Wellness/Wellness";
import Hospitality from "./components/Hospitality/Hospitality";
import Location from "./components/Location/Location";
import Legacy from "./components/Legacy/Legacy";
import FooterCTA from "./components/FooterCTA/FooterCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <StCharmontIntro />
      <Vision />
      <TheSoul />
      <Wellness />
      <Hospitality />
      <Location />
      <Legacy />
      <FooterCTA />
    </main>
  );
}
