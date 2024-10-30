import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PropertyManagementFormReturn } from "../schema";

interface TitleFormFieldProps {
  form: PropertyManagementFormReturn;
}

export function TitleFormField({ form }: TitleFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              id="title"
              type="text"
              placeholder="Título do Imóvel"
              className="h-8 w-auto placeholder:text-xs placeholder:text-muted"
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
