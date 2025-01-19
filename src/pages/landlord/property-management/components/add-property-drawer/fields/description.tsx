import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { AddPropertyDrawerFormType } from "../schema";

interface Props {
  form: UseFormReturn<AddPropertyDrawerFormType>;
}

export function Description({ form }: Props) {
  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-landing">Descrição</FormLabel>
          <FormControl>
            <Textarea
              className="placeholder:text-landing/70"
              placeholder="Insira uma descrição para o imóvel..."
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
