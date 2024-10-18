import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SearchFormValues } from "../../schema";

interface RadiusFormFieldProps {
  form: SearchFormValues;
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
