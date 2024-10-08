import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

interface PhoneFormItemProps {
  field: ControllerRenderProps<
    {
      name: string;
      phone: string;
      user: "landlord" | "tenant" | "";
      email: string;
      password: string;
      confirmPassword: string;
    },
    "phone"
  >;
  fieldState: ControllerFieldState;
}

export function PhoneFormItem({ field, fieldState }: PhoneFormItemProps) {
  return (
    <FormItem className="space-y-1">
      <FormLabel className="text-landing">Número para contato*</FormLabel>
      <FormControl>
        <Input
          id="phone"
          type="tel"
          className="border-2 border-border text-foreground placeholder:text-muted"
          placeholder="Digite seu telefone"
          {...field}
        />
      </FormControl>
      <FormMessage>{fieldState.error?.message}</FormMessage>
    </FormItem>
  );
}
