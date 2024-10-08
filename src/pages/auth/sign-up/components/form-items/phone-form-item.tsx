import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { normalizePhoneNumber } from "@/utils/phone-mask";
import { ChangeEvent } from "react";
import {
  ControllerFieldState,
  ControllerRenderProps,
  useFormContext,
} from "react-hook-form";

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
  const { setValue } = useFormContext();

  function phoneMask(event: ChangeEvent<HTMLInputElement>) {
    const newPhoneValue = normalizePhoneNumber(event.target.value);
    setValue("phone", newPhoneValue);
  }

  return (
    <FormItem className="space-y-1">
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
  );
}
