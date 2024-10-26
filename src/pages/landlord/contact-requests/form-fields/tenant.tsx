import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactRequestsFormReturn } from "../schema";

interface TenantFormFieldProps {
  form: ContactRequestsFormReturn;
}

export function TenantFormField({ form }: TenantFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name="applicant"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              id="applicant"
              type="text"
              placeholder="Nome do Solicitante"
              className="h-8 w-auto placeholder:text-xs placeholder:text-muted"
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
