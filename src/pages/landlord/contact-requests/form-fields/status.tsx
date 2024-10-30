import { Controller } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ContactRequestsFormReturn } from "../schema";

interface StatusFormFieldProps {
  form: ContactRequestsFormReturn;
}

export function StatusFormField({ form }: StatusFormFieldProps) {
  return (
    <Controller
      name="status"
      control={form.control}
      render={({ field: { name, onChange, value, disabled } }) => {
        return (
          <Select defaultValue="all" name={name} onValueChange={onChange} value={value} disabled={disabled}>
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos status</SelectItem>
              <SelectItem value="RENTED">Alugado</SelectItem>
              <SelectItem value="FINISHED">Finalizado</SelectItem>
              <SelectItem value="IN_CONTACT">Em contato</SelectItem>
            </SelectContent>
          </Select>
        );
      }}
    />
  );
}
