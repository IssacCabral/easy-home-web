import { Form } from "@/components/ui/form";
import { FindPropertiesForm } from "../schema";
import { Button } from "@/components/ui/button";
import { AmenitiesFormField } from "./form-fields/amenities";
import { BedroomsFormField } from "./form-fields/bedrooms";
import { LocationFormField } from "./form-fields/location";
import { MaxPriceFormField } from "./form-fields/max-price";
import { PropertyStatusFormField } from "./form-fields/property-status";
import { PropertyTypesFormField } from "./form-fields/property-types";
import { RadiusFormField } from "./form-fields/radius";
import { UseFormReturn } from "react-hook-form";

interface SearchFormProps {
  form: UseFormReturn<
    {
      location: string;
      radiusInMeters: number;
      maxPrice: number;
      minBedrooms: number;
      maxBedrooms: number;
      propertyStatus: "FREE" | "BUSY" | "SPLIT";
      propertyTypes: "HOUSE" | "DUPLEX" | "APARTMENT";
      amenities: string[];
    },
    any,
    undefined
  >;
  onFindProperties: (data: FindPropertiesForm) => void;
}

export function SearchForm({ form, onFindProperties }: SearchFormProps) {
  return (
    <div className="bg h-[calc(100vh-5.5rem)] w-1/3 max-w-[350px] overflow-y-auto rounded-xl pl-12 pr-2 pt-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onFindProperties)}
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
  );
}
