import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { addPropertyDrawerFormSchema, AddPropertyDrawerFormType, defaultValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useContext, useEffect } from "react";
import { Title } from "./fields/title";
import { Attributes } from "./fields/attributes";
import { Description } from "./fields/description";
import { Amenities } from "./fields/amenities";
import { FetchAddress } from "./fields/fetchAddress";
import { fetchCoordinatesFromAddress } from "@/utils/geocoding";
import { AuthContext } from "@/contexts/auth-context";
import { createProperty, CreatePropertyInput } from "@/api/create-property";
import { PropertyTypes } from "@/shared/property";
import { Toast, toast } from "@/hooks/use-toast";
import { isAxiosError } from "axios";
import { PropertyErrors } from "@/shared/property-errors";
import { CheckCircle } from "lucide-react";
import { queryClient } from "@/lib/react-query";

interface Props {
  isOpen: boolean;
  openChange: (value: boolean) => void;
}

export function AddPropertyDrawer({ isOpen, openChange }: Props) {
  const { userSession } = useContext(AuthContext);

  const form = useForm<AddPropertyDrawerFormType>({
    resolver: zodResolver(addPropertyDrawerFormSchema),
    defaultValues,
  });

  async function onSubmit(data: AddPropertyDrawerFormType) {
    const { street, randomPoint } = await fetchCoordinatesFromAddress(data.location);

    const address = {
      addressNumber: data.addressNumber,
      street,
      lat: randomPoint.lat,
      lon: randomPoint.lon,
    };

    const payload: CreatePropertyInput = {
      landlordId: userSession!.userId,
      title: data.title,
      type: data.type as PropertyTypes,
      description: data.description,
      price: data.price,
      bedrooms: data.bedroomsAmount,
      bathrooms: data.bathroomsAmount,
      depth: data.depth,
      width: data.width,
      address,
      amenityIds: data.amenities,
    };

    try {
      await createProperty(payload);
      await queryClient.invalidateQueries({ queryKey: ["landlord-properties"] });

      toast({
        description: (
          <div className="flex items-center gap-2">
            <CheckCircle /> Imóvel cadastrado com sucesso.
          </div>
        ),
        className: "bg-green-500 text-muted-foreground border-0",
      });

      form.reset();
      openChange(false);
    } catch (err) {
      const toastData: Toast = {
        variant: "destructive",
        description: "Erro ao cadastrar o imóvel.",
      };

      if (isAxiosError(err)) {
        if (err.response?.data?.code === PropertyErrors.ADDRESS_NOT_AVAILABLE) {
          toastData.description = "Esse endereço já existe.";
        }
      }

      toast(toastData);
    }
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
            <Button disabled={form.formState.isSubmitting} type="submit">
              Adicionar
            </Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
}
