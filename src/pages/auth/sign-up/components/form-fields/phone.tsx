import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { normalizePhoneNumber } from "@/utils/phone-mask";
import { ChangeEvent } from "react";
import { useFormContext, UseFormReturn } from "react-hook-form";
import { SignUpForm } from "@/pages/auth/sign-up/schema";

interface PhoneFormFieldProps {
  form: UseFormReturn<SignUpForm, any, undefined>;
}

export function PhoneFormField({ form }: PhoneFormFieldProps) {
  const { setValue } = useFormContext();

  function phoneMask(event: ChangeEvent<HTMLInputElement>) {
    const newPhoneValue = normalizePhoneNumber(event.target.value);
    setValue("phone", newPhoneValue);
  }

  return (
    <FormField
      control={form.control}
      name="phone"
      render={({ field, fieldState }) => (
        <FormItem className="space-y-0">
          <FormLabel className="text-landing">Número para contato*</FormLabel>
          <FormControl onChange={phoneMask}>
            <Input
              id="phone"
              type="tel"
              className="border-2 border-border text-foreground placeholder:text-muted"
              placeholder="Digite seu telefone"
              autoComplete="off"
              {...field}
            />
          </FormControl>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}
