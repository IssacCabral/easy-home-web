import { LocationInfo } from "@/components/location-info";
import { PropertyInfoSummary } from "@/components/property-info-summary";
import { Button } from "@/components/ui/button";
import { PropertyStatus, PropertyTypes } from "@/shared/property";
import { DollarSign } from "lucide-react";

export function DivisionControlPanel() {
  return (
    <div className="flex w-full flex-col rounded-xl border border-solid border-border py-10 pl-20">
      <div className="flex items-start gap-3">
        <h1 className="text-xl font-bold text-landing">Room 3 in Casa Monteiro II</h1>
        <PropertyInfoSummary status={PropertyStatus.BUSY} type={PropertyTypes.HOUSE} rating={1} />
        <div className="flex items-center">
          <DollarSign size={24} className="text-landing" />
          <span className="text-xl font-semibold text-landing">450</span>
          <span className="text-lg font-normal">/ mês</span>
        </div>
      </div>
      <LocationInfo addressNumber="1170" street="R. Damasceno Monteiro" district="Lisboa" />
      <Button className="mt-3 w-32">Abrir divisão</Button>
    </div>
  );
}
