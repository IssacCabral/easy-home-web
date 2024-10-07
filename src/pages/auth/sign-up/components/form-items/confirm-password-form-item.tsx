import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

interface ConfirmPasswordFormItemProps {
  field: ControllerRenderProps<
    {
      name: string;
      phone: string;
      user: "landlord" | "tenant";
      email: string;
      password: string;
      confirmPassword: string;
    },
    "confirmPassword"
  >;
  fieldState: ControllerFieldState;
}

export function ConfirmPasswordFormItem({
  field,
  fieldState,
}: ConfirmPasswordFormItemProps) {
  return (
    <FormItem className="mb-2 space-y-1">
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
  );
}
