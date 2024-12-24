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
import { IPropertyEntity } from "@/shared/property";
import { formatPhoneNumber } from "@/utils/format-phone-number";

interface LocationProps {
  property: IPropertyEntity;
}

export function Location({ property }: LocationProps) {
  const street = property.address.street;

  function handleContact() {
    const rawPhoneNumber = property.landlord!.phone;
    const whatsappNumber = formatPhoneNumber(rawPhoneNumber);
    const message = encodeURIComponent("Olá, estou interessado no seu imóvel!");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <section className="flex flex-col gap-4 rounded-xl border border-solid border-border px-5 py-4">
      <h2 className="text-lg font-semibold text-landing">Localização</h2>
      <LocationInfo
        street={street}
        addressNumber={property.address.addressNumber.toString()}
        district="Lisboa" // todo: pegar dinamicamente
      />
      <Map
        coords={{ lat: property.address.lat, lon: property.address.lon }}
        foundProperties={[]}
        foundStreet={`${street}, ${property.address.addressNumber}`}
      />
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="w-24">Contatar</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Contatar Locador</AlertDialogTitle>
            <AlertDialogDescription className="text-landing">
              O dashboard do locador irá registrar que você está fazendo uma solicitação de contato. Você também será
              redirecionado para o WhatsApp para contatar o locador. Deseja continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleContact}>Continuar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
