import { LocationInfo } from "@/components/location-info";
import { Map } from "@/components/map";
import { Button } from "@/components/ui/button";
import { INITIAL_COORDS } from "@/utils/initial-coords";

export function Location() {
  return (
    <section className="flex flex-col gap-4 rounded-xl border border-solid border-border px-5 py-4">
      <h2 className="text-lg font-semibold text-landing">Localização</h2>
      <LocationInfo
        street="R. Damasceno Monteiro"
        addressNumber="1170"
        district="Lisboa"
      />
      <Map
        coords={INITIAL_COORDS}
        foundProperties={[]}
        foundStreet="R. Damasceno Monteiro"
      />
      <Button className="w-24">Contatar</Button>
    </section>
  );
}
