import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface BedroomsFormFieldProps {
  form: UseFormReturn<
    {
      location: string;
      radiusInMeters: number;
      maxPrice: number;
      minBedrooms: number;
      maxBedrooms: number;
      propertyStatus?: "FREE" | "BUSY" | "SPLIT";
      propertyTypes: "HOUSE" | "DUPLEX" | "APARTMENT";
      amenities?: string[];
    },
    any,
    undefined
  >;
}

export function BedroomsFormField({ form }: BedroomsFormFieldProps) {
  return (
    <>
      <span className="font-bold">Número de quartos</span>
      <div className="grid grid-cols-2 items-center gap-4">
        <FormField
          control={form.control}
          name="minBedrooms"
          render={({ field, fieldState }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-semibold text-landing">
                Mínimo
              </FormLabel>
              <FormControl>
                <Input
                  id="minBedrooms"
                  type="number"
                  placeholder="Min."
                  className="border-2 border-border text-foreground placeholder:text-muted"
                  min={1}
                  max={9}
                  {...field}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxBedrooms"
          render={({ field, fieldState }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-semibold text-landing">
                Máximo
              </FormLabel>
              <FormControl>
                <Input
                  id="maxBedrooms"
                  type="number"
                  placeholder="Max."
                  min={2}
                  max={10}
                  className="border-2 border-border text-foreground placeholder:text-muted"
                  {...field}
                />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
