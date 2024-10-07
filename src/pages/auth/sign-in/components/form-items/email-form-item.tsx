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
    "email"
  >;
  fieldState: ControllerFieldState;
}

export function EmailFormItem({ field, fieldState }: EmailFormItemProps) {
  return (
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
  );
}
