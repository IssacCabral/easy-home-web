import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";

interface AmenitiesFormFieldProps {
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
}

const items = [
  {
    id: "Ar Condicionado",
    label: "Ar Condicionado",
  },
  {
    id: "TV",
    label: "TV",
  },
  {
    id: "Wifi",
    label: "Wifi",
  },
  {
    id: "Elevador",
    label: "Elevador",
  },
  {
    id: "Estacionamento",
    label: "Estacionamento",
  },
] as const;

export function AmenitiesFormField({ form }: AmenitiesFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name="amenities"
      render={({ fieldState }) => (
        <FormItem className="mb-4 space-y-3">
          <FormLabel className="text-sm font-semibold text-landing">
            Comodidades (Selecione uma ou mais)
          </FormLabel>
          {items.map((item) => (
            <FormField
              key={item.id}
              control={form.control}
              name="amenities"
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(
                                field.value?.filter(
                                  (value) => value !== item.id,
                                ),
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel>{item.label}</FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}
