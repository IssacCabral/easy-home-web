import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { SignUpForm } from "@/pages/auth/sign-up/schema";

interface NameFormFieldProps {
  form: UseFormReturn<SignUpForm, any, undefined>;
}

export function NameFormField({ form }: NameFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name="name"
      render={({ field, fieldState }) => (
        <FormItem className="space-y-0">
          <FormLabel className="text-landing">Nome*</FormLabel>
          <FormControl>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              className="border-2 border-border text-foreground placeholder:text-muted"
              {...field}
            />
          </FormControl>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}
