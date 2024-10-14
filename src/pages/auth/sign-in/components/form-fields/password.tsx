import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface EmailFormFieldProps {
  form: UseFormReturn<
    {
      email: string;
      password: string;
    },
    any,
    undefined
  >;
}

export function PasswordFormField({ form }: EmailFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field, fieldState }) => (
        <FormItem className="space-y-2">
          <FormLabel className="text-landing">Senha</FormLabel>
          <FormControl>
            <Input
              id="password"
              type="password"
              className="placeholder: border-2 border-border text-foreground placeholder:text-muted"
              placeholder="••••••••"
              {...field}
            />
          </FormControl>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
}
