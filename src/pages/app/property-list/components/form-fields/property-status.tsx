import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";

interface PropertyStatusFormFieldProps {
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

export function PropertyStatusFormField({
  form,
}: PropertyStatusFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name="propertyStatus"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel className="text-sm font-semibold text-landing">
            Status Do Imóvel
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
                    value="FREE"
                    className={cn(
                      "border border-solid border-muted",
                      field.value === "FREE" ? "bg-checked" : "bg-transparent",
                    )}
                  />
                </FormControl>
                <FormLabel className="text-sm text-landing">Livre</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem
                    value="SPLIT"
                    className={cn(
                      "border border-solid border-muted",
                      field.value === "SPLIT" ? "bg-checked" : "bg-transparent",
                    )}
                  />
                </FormControl>
                <FormLabel className="text-sm text-landing">Dividir</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem
                    value="BUSY"
                    className={cn(
                      "border border-solid border-muted",
                      field.value === "BUSY" ? "bg-checked" : "bg-transparent",
                    )}
                  />
                </FormControl>
                <FormLabel className="text-sm text-landing">Ocupado</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
