import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";

interface PropertyTypesFormFieldProps {
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

export function PropertyTypesFormField({ form }: PropertyTypesFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name="propertyTypes"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel className="text-sm font-semibold text-landing">
            Tipo De Imóvel
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem
                    value="HOUSE"
                    className={cn(
                      "border border-solid border-muted",
                      field.value === "HOUSE" ? "bg-checked" : "bg-transparent",
                    )}
                  />
                </FormControl>
                <FormLabel>Casa</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem
                    value="APARTMENT"
                    className={cn(
                      "border border-solid border-muted",
                      field.value === "APARTMENT"
                        ? "bg-checked"
                        : "bg-transparent",
                    )}
                  />
                </FormControl>
                <FormLabel>Apartamento</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem
                    value="DUPLEX"
                    className={cn(
                      "border border-solid border-muted",
                      field.value === "DUPLEX"
                        ? "bg-checked"
                        : "bg-transparent",
                    )}
                  />
                </FormControl>
                <FormLabel>Duplex</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
