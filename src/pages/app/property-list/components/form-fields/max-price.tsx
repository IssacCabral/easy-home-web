import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { SearchFormValues } from "../../schema";

interface MaxPriceFormFieldProps {
  form: SearchFormValues;
}

export function MaxPriceFormField({ form }: MaxPriceFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name="maxPrice"
      render={({ field: { value, onChange }, fieldState }) => (
        <FormItem className="space-y-2">
          <FormLabel className="text-sm font-semibold text-landing">
            <span>Aluguel - Máximo</span>
          </FormLabel>
          <FormControl>
            <>
              <Slider
                min={100}
                max={2000}
                step={50}
                defaultValue={[value]}
                onValueChange={(value) => onChange(value[0])}
                className="w-[60%]"
              />
              <span className="text-sm font-semibold text-landing">R$ {value}</span>
            </>
          </FormControl>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}
