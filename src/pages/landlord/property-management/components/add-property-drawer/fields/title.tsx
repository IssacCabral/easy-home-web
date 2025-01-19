import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { AddPropertyDrawerFormType } from "../schema";

interface Props {
  form: UseFormReturn<AddPropertyDrawerFormType>;
}

export function Title({ form }: Props) {
  return (
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-landing">Título</FormLabel>
          <FormControl>
            <Input
              id="title"
              type="text"
              className="placeholder:text-landing/70"
              placeholder="Insira o título do imóvel..."
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
