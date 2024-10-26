import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { PropertyManagementFormReturn } from "../schema";
import { Input } from "@/components/ui/input";

interface TenantFormFieldProps {
  form: PropertyManagementFormReturn;
}

export function TenantFormField({ form }: TenantFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name="tenant"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              id="tenant"
              type="text"
              placeholder="Nome do Inquilino"
              className="h-8 w-auto placeholder:text-xs placeholder:text-muted"
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
