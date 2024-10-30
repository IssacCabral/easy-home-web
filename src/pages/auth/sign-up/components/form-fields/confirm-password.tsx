import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { SignUpForm } from "@/pages/auth/sign-up/schema";

interface ConfirmPasswordFormItemProps {
  form: UseFormReturn<SignUpForm, any, undefined>;
}

export function ConfirmPasswordFormItem({ form }: ConfirmPasswordFormItemProps) {
  return (
    <FormField
      control={form.control}
      name="confirmPassword"
      render={({ field, fieldState }) => (
        <FormItem className="mb-2 space-y-0">
          <FormLabel className="text-landing">Repetir a senha*</FormLabel>
          <FormControl>
            <Input
              id="confirmPassword"
              type="password"
              className="border-2 border-border text-foreground placeholder:text-muted"
              placeholder="Repita a senha"
              {...field}
            />
          </FormControl>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}
