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
      <div className="bg w-1/3 max-w-[350px] rounded-xl pl-14 pr-2 pt-3">
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
      <div className="w-full border border-solid border-green-400">
        <h1>Eae</h1>
      </div>
    </div>
  );
}
