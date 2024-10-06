import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ControllerRenderProps } from "react-hook-form";

interface PhoneFormItemProps {
  field: ControllerRenderProps<
    {
      name: string;
      phone: string;
      user: string;
      email: string;
      password: string;
      confirmPassword: string;
    },
    "phone"
  >;
}

export function PhoneFormItem(props: PhoneFormItemProps) {
  return (
    <FormItem className="space-y-1">
      <FormLabel className="text-landing">Número para contato*</FormLabel>
      <FormControl>
        <Input
          id="phone"
          type="tel"
          className="border-2 border-border text-foreground placeholder:text-muted"
          placeholder="Digite seu telefone"
          {...props.field}
        />
      </FormControl>
    </FormItem>
  );
}
