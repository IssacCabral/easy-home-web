import { useForm } from "react-hook-form";
import {
  defaultValues,
  findPropertiesForm,
  FindPropertiesForm,
} from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import House1Img from "@/assets/landing-houses/house-1.png";
import House2Img from "@/assets/landing-houses/house-2.png";
import House3Img from "@/assets/landing-houses/house-3.png";
import House4Img from "@/assets/landing-houses/house-4.png";
import House5Img from "@/assets/landing-houses/house-5.png";
import House6Img from "@/assets/landing-houses/house-6.png";
import { PropertyCard } from "@/components/property-card";
import { Map } from "@/components/map";
import { useState } from "react";
import { fetchCoordinatesFromAddress } from "@/utils/geocoding";
import { SearchForm } from "./components/search-form";
import { INITIAL_COORDS } from "@/utils/initial-coords";

const items = [
  {
    image: House1Img,
    number: 123,
    street: "Avenida da liberdade",
    title: "Riverside Retreat",
    price: 1200,
  },
  {
    image: House2Img,
    number: 456,
    street: "Rua Augusta, Lisbon",
    title: "Sunset Serenity Suite",
    price: 500,
  },
  {
    image: House3Img,
    number: 789,
    street: "Praça do Comércio",
    title: "Riverside Retreat",
    price: 400,
  },
  {
    image: House4Img,
    number: 234,
    street: "Castelo São Jorge",
    title: "River Palace",
    price: 890,
  },
  {
    image: House5Img,
    number: 321,
    street: "Av. Almirante Reis",
    title: "Fernando Dutra",
    price: 445,
  },
  {
    image: House6Img,
    number: 789,
    street: "Beco do Carneiro",
    title: "Carrascal 2",
    price: 500,
  },
] as const;

export function PropertyList() {
  const [coords, setCoords] = useState(INITIAL_COORDS);

  const form = useForm<FindPropertiesForm>({
    resolver: zodResolver(findPropertiesForm),
    defaultValues,
  });

  async function handleFindProperties(data: FindPropertiesForm) {
    console.log("Data: ", data);

    const { lat, lon } = await fetchCoordinatesFromAddress(data.location);

    setCoords({ lat, lon });
  }

  return (
    <div className="flex">
      <SearchForm form={form} onFindProperties={handleFindProperties} />
      <div className="flex w-full flex-col gap-3 pl-5 pr-14 pt-6">
        <Map coords={coords} />
        <span className="text-sm">344 Imóveis</span>
        <div className="mb-3 flex flex-wrap gap-6 px-10">
          {items.map((item, index) => (
            <PropertyCard
              image={item.image}
              number={item.number}
              price={item.price}
              street={item.street}
              title={item.title}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
