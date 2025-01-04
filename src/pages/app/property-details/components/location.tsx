import { LocationInfo } from "@/components/location-info";
import { Map } from "@/components/map";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/auth-context";
import { Toast, toast } from "@/hooks/use-toast";
import { ContactRequestErrors } from "@/shared/contact-request-errors";
import { IPropertyEntity, PropertyStatus } from "@/shared/property";
import { formatPhoneNumber } from "@/utils/format-phone-number";
import { isAxiosError } from "axios";
import { CheckCircle } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

interface LocationProps {
  property: IPropertyEntity;
  onConfirmContactRequest: (data: { propertyId: string; tenantId: string }) => Promise<any>;
  onConfirmShareRequest: (data: { propertyId: string; tenantId: string }) => Promise<any>;
}

export function Location({ property, onConfirmContactRequest, onConfirmShareRequest }: LocationProps) {
  const { userSession } = useContext(AuthContext);
  const navigate = useNavigate();

  const street = property.address.street;

  async function handleConfirmContact() {
    try {
      if (property.status === PropertyStatus.SPLIT) {
        await onConfirmShareRequest({
          propertyId: property.id,
          tenantId: userSession!.userId,
        });
      } else {
        await onConfirmContactRequest({
          propertyId: property.id,
          tenantId: userSession!.userId,
        });
      }

      const rawPhoneNumber = property.landlord!.phone;
      const whatsappNumber = formatPhoneNumber(rawPhoneNumber);
      const message = encodeURIComponent("Olá, estou interessado no seu imóvel!");

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

      window.open(whatsappUrl, "_blank");
      navigate("/properties-of-interest");
      toast({
        description: (
          <div className="flex items-center gap-2">
            <CheckCircle /> Solicitação de contato enviada com sucesso.
          </div>
        ),
        className: "bg-green-500 text-muted-foreground border-0",
        duration: Infinity,
      });
    } catch (err: any) {
      const toastData: Toast = {
        variant: "destructive",
        description: "algum erro ocorreu",
      };

      if (isAxiosError(err)) {
        if (err.response?.data?.code === ContactRequestErrors.CONTACT_REQUEST_ALREADY_EXISTS) {
          toastData.description = "Você já possui um contato para esse imóvel.";
        }
      }

      toast(toastData);
    }
  }

  const alertDialogIsDisabled = property.status === PropertyStatus.BUSY || userSession?.property === property.id;
  const alertDialogTriggerContent =
    userSession?.property === property.id ? (
      <span className="font-semibold text-type">Você mora aqui</span>
    ) : (
      <AlertDialogTrigger asChild>
        <Button className="w-24" disabled={alertDialogIsDisabled}>
          Contatar
        </Button>
      </AlertDialogTrigger>
    );

  return (
    <section className="flex flex-col gap-4 rounded-xl border border-solid border-border px-5 py-4">
      <h2 className="text-lg font-semibold text-landing">Localização</h2>
      <LocationInfo street={street} addressNumber={property.address.addressNumber.toString()} />
      <Map
        coords={{ lat: property.address.lat, lon: property.address.lon }}
        foundProperties={[]}
        foundStreet={`${street}, ${property.address.addressNumber}`}
      />
      <AlertDialog>
        {alertDialogTriggerContent}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Contatar Locador</AlertDialogTitle>
            <AlertDialogDescription className="text-landing">
              O dashboard do locador irá registrar que você está fazendo uma solicitação de contato. Você também será
              redirecionado para o WhatsApp para contatar o locador. <br /> <br /> Deseja continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmContact}>Continuar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
