import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface RadiusFormFieldProps {
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

export function RadiusFormField({ form }: RadiusFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name="radiusInMeters"
      render={({ field, fieldState }) => (
        <FormItem className="space-y-2">
          <FormLabel className="text-sm font-semibold text-landing">
            Raio De Pesquisa (em metros)
          </FormLabel>
          <FormControl>
            <Input
              id="radiusInMeters"
              type="number"
              step={50}
              className="w-1/3 border-2 border-border text-foreground placeholder:text-muted"
              {...field}
            />
          </FormControl>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}
