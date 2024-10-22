import { LocationInfo } from "@/components/location-info";
import { Map } from "@/components/map";
import { Button } from "@/components/ui/button";
import { IPropertyEntity } from "@/shared/property";

interface LocationProps {
  property: IPropertyEntity;
}

export function Location({ property }: LocationProps) {
  const street = property.address.street;

  return (
    <section className="flex flex-col gap-4 rounded-xl border border-solid border-border px-5 py-4">
      <h2 className="text-lg font-semibold text-landing">Localização</h2>
      <LocationInfo
        street={street}
        addressNumber={property.address.addressNumber.toString()}
        district="Lisboa"
      />
      <Map
        coords={{ lat: property.address.lat, lon: property.address.lon }}
        foundProperties={[]}
        foundStreet={street}
      />
      <Button className="w-24">Contatar</Button>
    </section>
  );
}
