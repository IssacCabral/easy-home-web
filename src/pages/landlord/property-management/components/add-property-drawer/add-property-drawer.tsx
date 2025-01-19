import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { addPropertyDrawerFormSchema, AddPropertyDrawerFormType, defaultValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useEffect } from "react";
import { Title } from "./fields/title";
import { Attributes } from "./fields/attributes";
import { Description } from "./fields/description";
import { Amenities } from "./fields/amenities";
import { FetchAddress } from "./fields/fetchAddress";

interface Props {
  isOpen: boolean;
}

export function AddPropertyDrawer({ isOpen }: Props) {
  const form = useForm<AddPropertyDrawerFormType>({
    resolver: zodResolver(addPropertyDrawerFormSchema),
    defaultValues,
  });

  function onSubmit(data: AddPropertyDrawerFormType) {
    console.log({ data });
  }

  // evita a barra de rolagem e compensa com padding, quando abre o drawer
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Evita a rolagem.
      document.body.style.paddingRight = "15px"; // Compensa a barra de rolagem.
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [isOpen]);

  return (
    <DialogContent className="min-w-[600px]">
      <DialogHeader>
        <DialogTitle className="text-3xl font-semibold text-primary">Adição de Imóvel</DialogTitle>
        <DialogDescription hidden>Make changes to your profile here. Click save when you're done.</DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <Title form={form} />
          <FetchAddress form={form} />
          <Attributes form={form} />
          <Description form={form} />
          <Amenities form={form} isOpen={isOpen} />
          <div className="flex justify-end">
            <Button type="submit">Adicionar</Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
}
