import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { SignUpForm } from "@/pages/auth/sign-up/schema";

interface UserFormFieldProps {
  form: UseFormReturn<SignUpForm, any, undefined>;
}

export function UserFormField({ form }: UserFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name="user"
      render={({ field, fieldState }) => (
        <FormItem className="space-y-0">
          <FormLabel className="text-landing">Tipo de Usuário*</FormLabel>
          <Select onValueChange={field.onChange} value={field.value} defaultValue="">
            <FormControl>
              <SelectTrigger className="w-[360px] border-2 border-border text-foreground placeholder:text-muted">
                <SelectValue placeholder="Você está..." />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem className="focus:bg-popover-foreground" value="tenant">
                Buscando imóveis para alugar
              </SelectItem>
              <SelectItem className="focus:bg-popover-foreground" value="landlord">
                Disponibilizando imóveis para aluguel
              </SelectItem>
            </SelectContent>
          </Select>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}
