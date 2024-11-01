import { Controller } from "react-hook-form";
import { PropertyManagementFormReturn } from "../../schema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface StatusFormFieldProps {
  form: PropertyManagementFormReturn;
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
              <SelectItem value="FREE">Livre</SelectItem>
              <SelectItem value="BUSY">Ocupado</SelectItem>
              <SelectItem value="SPLIT">Dividir</SelectItem>
            </SelectContent>
          </Select>
        );
      }}
    />
  );
}
