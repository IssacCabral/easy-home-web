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

export function EmailFormField({ form }: EmailFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field, fieldState }) => (
        <FormItem className="space-y-2">
          <FormLabel className="text-landing">Email</FormLabel>
          <FormControl>
            <Input
              id="email"
              type="text"
              placeholder="Insira seu email"
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
