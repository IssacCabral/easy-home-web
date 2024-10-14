import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { SignUpForm } from "@/pages/auth/sign-up/schema";

interface PasswordFormFieldProps {
  form: UseFormReturn<SignUpForm, any, undefined>;
}

export function PasswordFormField({ form }: PasswordFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field, fieldState }) => (
        <FormItem className="space-y-0">
          <FormLabel className="text-landing">Senha*</FormLabel>
          <FormControl>
            <Input
              id="password"
              type="password"
              className="border-2 border-border text-foreground placeholder:text-muted"
              placeholder="Crie uma senha"
              {...field}
            />
          </FormControl>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}
