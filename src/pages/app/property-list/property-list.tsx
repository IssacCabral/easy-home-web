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
import { fetchCoordinatesFromAddress } from "@/utils/geocoding";
import { SearchForm } from "./components/search-form";
import { INITIAL_COORDS } from "@/utils/initial-coords";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { findProperties } from "@/api/find-properties";
import { PropertyStatus, PropertyTypes } from "@/shared/property";
import { toast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();

  const centralLat = searchParams.get("centralLat");
  const centralLon = searchParams.get("centralLon");
  const page = searchParams.get("page");
  const radiusInMeters = searchParams.get("radiuInMeters");
  const minBedrooms = searchParams.get("minBedrooms");
  const maxBedrooms = searchParams.get("maxBedrooms");
  const status = searchParams.get("status");
  const maxPrice = searchParams.get("maxPrice");
  const type = searchParams.get("type");

  const form = useForm<FindPropertiesForm>({
    resolver: zodResolver(findPropertiesForm),
    defaultValues,
  });

  const { data: result } = useQuery({
    queryKey: [
      "property-list",
      centralLat,
      centralLon,
      page,
      radiusInMeters,
      minBedrooms,
      maxBedrooms,
      status,
      maxPrice,
    ],
    queryFn: () =>
      findProperties({
        centralLat: centralLat ? Number(centralLat) : INITIAL_COORDS.lat,
        centralLon: centralLon ? Number(centralLon) : INITIAL_COORDS.lon,
        page: page ? Number(page) : 1,
        radiusInMeters: radiusInMeters
          ? Number(radiusInMeters)
          : defaultValues.radiusInMeters,
        minBedrooms: minBedrooms
          ? Number(minBedrooms)
          : defaultValues.minBedrooms,
        maxBedrooms: maxBedrooms
          ? Number(maxBedrooms)
          : defaultValues.maxBedrooms,
        maxPrice: maxPrice ? Number(maxPrice) : defaultValues.maxPrice,
        status: status
          ? PropertyStatus[status as PropertyStatus]
          : PropertyStatus[defaultValues.propertyStatus],
        type: type
          ? PropertyTypes[type as PropertyTypes]
          : PropertyTypes[defaultValues.propertyTypes],
      }),
  });

  function handleFilter(data: FindPropertiesForm, lat: number, lon: number) {
    setSearchParams((state) => {
      state.set("centralLat", lat.toString());
      state.set("centralLon", lon.toString());
      state.set("page", (1).toString());
      state.set("radiusInMeters", data.radiusInMeters.toString());
      state.set("minBedrooms", data.minBedrooms.toString());
      state.set("maxBedrooms", data.maxBedrooms.toString());
      state.set("status", data.propertyStatus);
      state.set("maxPrice", data.maxPrice.toString());
      state.set("type", data.propertyTypes);

      return state;
    });
  }

  async function handleFindProperties(data: FindPropertiesForm) {
    try {
      const { lat, lon } = await fetchCoordinatesFromAddress(data.location);
      handleFilter(data, lat, lon);
    } catch (err) {
      console.log("err:", err);
      toast({
        variant: "destructive",
        description: "Erro ao buscar imóveis",
      });
    }
  }

  return (
    <>
      <Helmet title="Imóveis" />
      <div className="flex">
        <SearchForm form={form} onFindProperties={handleFindProperties} />
        <div className="flex w-full flex-col gap-3 pl-5 pr-14 pt-6">
          <Map
            coords={{
              lat: centralLat ? Number(centralLat) : INITIAL_COORDS.lat,
              lon: centralLon ? Number(centralLon) : INITIAL_COORDS.lon,
            }}
          />
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
    </>
  );
}
