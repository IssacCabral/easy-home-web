import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ControllerRenderProps } from "react-hook-form";

interface ConfirmPasswordFormItemProps {
  field: ControllerRenderProps<
    {
      name: string;
      phone: string;
      user: string;
      email: string;
      password: string;
      confirmPassword: string;
    },
    "confirmPassword"
  >;
}

export function ConfirmPasswordFormItem({
  field,
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
    </FormItem>
  );
}
