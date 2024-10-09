import { AboutUs } from "./about-us";
import { Hero } from "./hero";

export function LandingPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutUs />
      {/* Melhores Casas */}
      <div></div>
      {/* Rápido e Intuitivo */}
      <div></div>
    </div>
  );
}
