import { Form } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { TitleFormField } from "./form-fields/title";
import { TenantFormField } from "./form-fields/tenant";
import { StatusFormField } from "./form-fields/status";
import { PropertyManagementForm, PropertyManagementFormReturn } from "../schema";

interface PropertyManagementTableFiltersProps {
  form: PropertyManagementFormReturn;
  onFindLandlordProperties: (data: PropertyManagementForm) => void;
  onClearFilters: () => void;
}

export function PropertyManagementTableFilters({
  form,
  onFindLandlordProperties,
  onClearFilters,
}: PropertyManagementTableFiltersProps) {
  return (
    <Form {...form}>
      <form className="flex items-center gap-2" onSubmit={form.handleSubmit(onFindLandlordProperties)}>
        <span className="text-sm font-semibold">Filtros:</span>
        <TitleFormField form={form} />
        <TenantFormField form={form} />
        <StatusFormField form={form} />
        <Button type="submit" variant="fetch" size="xs">
          <Search className="mr-2 h-4 w-4" />
          Filtrar resultados
        </Button>
        <Button onClick={onClearFilters} type="button" variant="removeFilters" size="xs">
          <X className="mr-2 h-4 w-4" />
          Remover filtros
        </Button>
      </form>
    </Form>
  );
}
