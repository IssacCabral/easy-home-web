import { AboutUs } from "./about-us";
import { BestHouses } from "./best-houses";
import { Hero } from "./hero";

export function LandingPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutUs />
      <BestHouses />
      {/* Rápido e Intuitivo */}
      <div></div>
    </div>
  );
}
