import { LandingPropertyCard } from "@/components/landing-property-card";
import House1Img from "@/assets/landing-houses/house-1.png";
import House2Img from "@/assets/landing-houses/house-2.png";
import House3Img from "@/assets/landing-houses/house-3.png";
import House4Img from "@/assets/landing-houses/house-4.png";
import House5Img from "@/assets/landing-houses/house-5.png";
import House6Img from "@/assets/landing-houses/house-6.png";

// 1920 x 1080
// 2560 x 1080

export function BestHouses() {
  return (
    <div className="flex min-w-full flex-col gap-6 pb-20 pl-20 pr-20 pt-24">
      <h1 className="text-2xl font-bold leading-tight tracking-tight text-landing 2xl:text-center">
        Encontre As Melhores Casas
      </h1>
      <div className="flex flex-wrap gap-14 2xl:mx-auto 2xl:w-full 2xl:max-w-[1440px] 2xl:justify-center">
        <LandingPropertyCard
          image={House1Img}
          number={123}
          street="Avenida da liberdade"
          title="Riverside Retreat"
          price={500}
        />
        <LandingPropertyCard
          image={House2Img}
          number={456}
          street="Rua Augusta, Lisbon"
          title="Sunset Serenity Suite"
          price={700}
        />
        <LandingPropertyCard
          image={House3Img}
          number={101}
          street="Praça do Comércio"
          title="Chiado Charm"
          price={430}
        />
        <LandingPropertyCard
          image={House4Img}
          number={234}
          street="Castelo São Jorge"
          title="Panoramic Penthouse"
          price={800}
        />
        <LandingPropertyCard
          image={House5Img}
          number={567}
          street="Av. Almirante Reis"
          title="Marquês Master"
          price={445}
        />
        <LandingPropertyCard
          image={House6Img}
          number={789}
          street="Beco do Carneiro"
          title="Alfama Hideaway"
          price={700}
        />
      </div>
    </div>
  );
}
