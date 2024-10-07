import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

interface NameFormItemProps {
  field: ControllerRenderProps<
    {
      name: string;
      phone: string;
      user: "landlord" | "tenant";
      email: string;
      password: string;
      confirmPassword: string;
    },
    "name"
  >;
  fieldState: ControllerFieldState;
}

export function NameFormItem({ field, fieldState }: NameFormItemProps) {
  return (
    <FormItem className="space-y-1">
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
  );
}
