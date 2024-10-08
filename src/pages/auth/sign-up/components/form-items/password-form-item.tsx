import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

interface PasswordFormItemProps {
  field: ControllerRenderProps<
    {
      name: string;
      phone: string;
      user: "landlord" | "tenant" | "";
      email: string;
      password: string;
      confirmPassword: string;
    },
    "password"
  >;
  fieldState: ControllerFieldState;
}

export function PasswordFormItem({ field, fieldState }: PasswordFormItemProps) {
  return (
    <FormItem className="space-y-1">
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
  );
}
