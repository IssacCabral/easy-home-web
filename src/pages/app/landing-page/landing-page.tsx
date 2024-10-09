import { AboutUs } from "./about-us";
import { BestHouses } from "./best-houses";
import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";

export function LandingPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutUs />
      <BestHouses />
      <HowItWorks />
    </div>
  );
}
