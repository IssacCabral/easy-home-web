import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ControllerRenderProps } from "react-hook-form";

interface EmailFormItemProps {
  field: ControllerRenderProps<
    {
      email: string;
      password: string;
    },
    "password"
  >;
}

export function PasswordFormItem({ field }: EmailFormItemProps) {
  return (
    <FormItem className="space-y-2">
      <FormLabel>Senha</FormLabel>
      <FormControl>
        <Input
          id="password"
          type="password"
          className="placeholder: border-2 border-border text-foreground placeholder:text-muted"
          placeholder="••••••••"
          {...field}
        />
      </FormControl>
    </FormItem>
  );
}
