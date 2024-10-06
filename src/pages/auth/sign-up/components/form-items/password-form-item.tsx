import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ControllerRenderProps } from "react-hook-form";

interface PasswordFormItemProps {
  field: ControllerRenderProps<
    {
      name: string;
      phone: string;
      user: string;
      email: string;
      password: string;
      confirmPassword: string;
    },
    "password"
  >;
}

export function PasswordFormItem({ field }: PasswordFormItemProps) {
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
    </FormItem>
  );
}
