import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { TitleFormField } from "./form-fields/title";
import { TenantFormField } from "./form-fields/tenant";
import { StatusFormField } from "./form-fields/status";
import { contactRequestsForm, ContactRequestsForm } from "./schema";

export function ContactRequestsTableFilters() {
  const form = useForm<ContactRequestsForm>({
    resolver: zodResolver(contactRequestsForm),
    defaultValues: {
      status: "all",
      applicant: "",
      title: "",
    },
  });

  function handleFilter(data: ContactRequestsForm) {
    console.log(data);
  }

  function handleClearFilters() {
    form.reset({
      title: "",
      applicant: "",
      status: "all",
    });
  }

  return (
    <Form {...form}>
      <form className="flex items-center gap-2" onSubmit={form.handleSubmit(handleFilter)}>
        <span className="text-sm font-semibold">Filtros:</span>
        <TitleFormField form={form} />
        <TenantFormField form={form} />
        <StatusFormField form={form} />
        <Button type="submit" variant="fetch" size="xs">
          <Search className="mr-2 h-4 w-4" />
          Filtrar resultados
        </Button>
        <Button onClick={handleClearFilters} type="button" variant="removeFilters" size="xs">
          <X className="mr-2 h-4 w-4" />
          Remover filtros
        </Button>
      </form>
    </Form>
  );
}
