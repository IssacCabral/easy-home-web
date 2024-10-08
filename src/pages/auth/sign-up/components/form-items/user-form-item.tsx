import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

interface UserFormItemProps {
  field: ControllerRenderProps<
    {
      name: string;
      phone: string;
      user: "landlord" | "tenant" | "";
      email: string;
      password: string;
      confirmPassword: string;
    },
    "user"
  >;
  fieldState: ControllerFieldState;
}

export function UserFormItem({ field, fieldState }: UserFormItemProps) {
  return (
    <FormItem className="space-y-1">
      <FormLabel className="text-landing">Tipo de Usuário*</FormLabel>
      <Select
        onValueChange={field.onChange}
        value={field.value}
        defaultValue=""
      >
        <FormControl>
          <SelectTrigger className="w-[360px] border-2 border-border text-foreground placeholder:text-muted">
            <SelectValue placeholder="Você está..." />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem className="focus:bg-popover-foreground" value="tenant">
            Buscando imóveis para alugar
          </SelectItem>
          <SelectItem className="focus:bg-popover-foreground" value="landlord">
            Disponibilizando imóveis para aluguel
          </SelectItem>
        </SelectContent>
      </Select>
      <FormMessage>{fieldState.error?.message}</FormMessage>
    </FormItem>
  );
}
