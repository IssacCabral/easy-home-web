import { useForm } from "react-hook-form";
import {
  defaultValues,
  findPropertiesForm,
  FindPropertiesForm,
} from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { LocationFormField } from "./components/form-fields/location";
import { RadiusFormField } from "./components/form-fields/radius";
import { MaxPriceFormField } from "./components/form-fields/max-price";
import { BedroomsFormField } from "./components/form-fields/bedrooms";
import { PropertyStatusFormField } from "./components/form-fields/property-status";
import { PropertyTypesFormField } from "./components/form-fields/property-types";
import { AmenitiesFormField } from "./components/form-fields/amenities";
import House1Img from "@/assets/landing-houses/house-1.png";
import House2Img from "@/assets/landing-houses/house-2.png";
import House3Img from "@/assets/landing-houses/house-3.png";
import House4Img from "@/assets/landing-houses/house-4.png";
import House5Img from "@/assets/landing-houses/house-5.png";
import House6Img from "@/assets/landing-houses/house-6.png";
import { PropertyCard } from "@/components/property-card";

export function PropertyList() {
  const form = useForm<FindPropertiesForm>({
    resolver: zodResolver(findPropertiesForm),
    defaultValues,
  });

  function handleFindProperties(data: FindPropertiesForm) {
    console.log("Data: ", data);
  }

  return (
    <div className="flex">
      {/* Coluna dos filtros */}
      <div className="bg w-1/3 max-w-[350px] rounded-xl pl-12 pr-2 pt-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFindProperties)}
            className="mb-5 flex flex-col gap-3"
          >
            <LocationFormField form={form} />
            <RadiusFormField form={form} />
            <MaxPriceFormField form={form} />
            <BedroomsFormField form={form} />
            <PropertyStatusFormField form={form} />
            <PropertyTypesFormField form={form} />
            <AmenitiesFormField form={form} />
            <Button className="w-1/3" type="submit">
              Pesquisar
            </Button>
          </form>
        </Form>
      </div>

      {/* Mapa e listagem das casas */}
      <div className="flex w-full flex-col gap-3 border border-solid border-green-400 pl-5 pr-14 pt-6">
        {/* div do mapa */}
        <div className="h-80 w-full rounded-xl bg-zinc-600"></div>
        <span className="text-sm">344 Imóveis</span>
        <div className="mb-20 flex flex-wrap gap-14 px-10">
          <PropertyCard
            image={House1Img}
            number={123}
            street="Avenida da liberdade"
            title="Riverside Retreat"
            price={500}
          />
          <PropertyCard
            image={House2Img}
            number={456}
            street="Rua Augusta, Lisbon"
            title="Sunset Serenity Suite"
            price={700}
          />
          <PropertyCard
            image={House3Img}
            number={101}
            street="Praça do Comércio"
            title="Chiado Charm"
            price={430}
          />
          <PropertyCard
            image={House4Img}
            number={234}
            street="Castelo São Jorge"
            title="Panoramic Penthouse"
            price={800}
          />
          <PropertyCard
            image={House5Img}
            number={567}
            street="Av. Almirante Reis"
            title="Marquês Master"
            price={445}
          />
          <PropertyCard
            image={House6Img}
            number={789}
            street="Beco do Carneiro"
            title="Alfama Hideaway"
            price={700}
          />
        </div>
      </div>
    </div>
  );
}
