import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  form: any;
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
