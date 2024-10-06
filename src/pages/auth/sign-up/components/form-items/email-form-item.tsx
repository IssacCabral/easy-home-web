import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ControllerRenderProps } from "react-hook-form";

interface EmailFormItemProps {
  field: ControllerRenderProps<
    {
      name: string;
      phone: string;
      user: string;
      email: string;
      password: string;
      confirmPassword: string;
    },
    "email"
  >;
}

export function EmailFormItem({ field }: EmailFormItemProps) {
  return (
    <FormItem className="space-y-1">
      <FormLabel className="text-landing">Email*</FormLabel>
      <FormControl>
        <Input
          id="email"
          type="email"
          placeholder="Insira seu email"
          className="border-2 border-border text-foreground placeholder:text-muted"
          {...field}
        />
      </FormControl>
    </FormItem>
  );
}
