import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DivisionControlPanel } from "./components/division-control-panel/division-control-panel";
import { ShareRequests } from "./components/share-requests/share-requests";
import { UseRentDivision } from "./use-rent-division";
import { SharedRentalTenants } from "./components/shared-rental-tenants/shared-rental-tenants";

export function RentDivision() {
  const {
    property,
    loading,
    propertyRatingResult,
    loadingShareRequests,
    shareRequestsResult,
    loadingSharedRentalTenants,
    sharedRentalTenantsResult,
  } = UseRentDivision();

  return (
    <div className="m-auto flex max-w-[1050px] flex-col items-center gap-3">
      <h1 className="text-xl font-semibold text-landing">Divisão de Aluguel</h1>
      {loading || <DivisionControlPanel property={property!} rating={propertyRatingResult?.rating ?? 0} />}
      {loadingShareRequests || (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Solicitações</AccordionTrigger>
            <AccordionContent>
              <ShareRequests items={shareRequestsResult!} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
      {loadingSharedRentalTenants || (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-2">
            <AccordionTrigger>Dividindo com</AccordionTrigger>
            <AccordionContent>
              <SharedRentalTenants items={sharedRentalTenantsResult!} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}
