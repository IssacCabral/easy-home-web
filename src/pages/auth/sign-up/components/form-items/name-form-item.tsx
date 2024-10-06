import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ControllerRenderProps } from "react-hook-form";

interface NameFormItemProps {
  field: ControllerRenderProps<
    {
      name: string;
      phone: string;
      user: "landlord" | "tenant" | null;
      email: string;
      password: string;
      confirmPassword: string;
    },
    "name"
  >;
}

export function NameFormItem(props: NameFormItemProps) {
  return (
    <FormItem className="space-y-1">
      <FormLabel className="text-landing">Nome*</FormLabel>
      <FormControl>
        <Input
          id="name"
          type="text"
          placeholder="Digite seu nome"
          className="border-2 border-border text-foreground placeholder:text-muted"
          {...props.field}
        />
      </FormControl>
    </FormItem>
  );
}
