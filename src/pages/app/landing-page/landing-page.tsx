import { Helmet } from "react-helmet-async";
import { AboutUs } from "./about-us";
import { BestHouses } from "./best-houses";
import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";

export function LandingPage() {
  return (
    <>
      <Helmet title="Início" />
      <div className="flex flex-col">
        <Hero />
        <AboutUs />
        <BestHouses />
        <HowItWorks />
      </div>
    </>
  );
}
