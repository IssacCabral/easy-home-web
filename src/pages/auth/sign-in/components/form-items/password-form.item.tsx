import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

interface EmailFormItemProps {
  field: ControllerRenderProps<
    {
      email: string;
      password: string;
    },
    "password"
  >;
  fieldState: ControllerFieldState;
}

export function PasswordFormItem({ field, fieldState }: EmailFormItemProps) {
  return (
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
  );
}
