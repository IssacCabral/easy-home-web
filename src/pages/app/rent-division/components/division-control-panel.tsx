import { LocationInfo } from "@/components/location-info";
import { PropertyInfoSummary } from "@/components/property-info-summary";
import { Button } from "@/components/ui/button";
import { IPropertyEntity, PropertyStatus } from "@/shared/property";
import { DollarSign } from "lucide-react";

interface DivisionControlPanelProps {
  property: IPropertyEntity;
  rating: number;
}

export function DivisionControlPanel(props: DivisionControlPanelProps) {
  const panelButtonsMap: Record<PropertyStatus, JSX.Element> = {
    [PropertyStatus.BUSY]: <Button className="mt-3 w-32">Abrir divisão</Button>,
    [PropertyStatus.SPLIT]: (
      <>
        <Button className="mt-3 w-32">Concluir divisão</Button>
        <Button className="mt-3 w-32 bg-type hover:bg-type/90">Cancelar divisão</Button>
      </>
    ),
    [PropertyStatus.FREE]: <></>,
  };

  return (
    <div className="flex w-full flex-col rounded-xl border border-solid border-border py-10 pl-20">
      <div className="flex items-center gap-5">
        <h1 className="text-xl font-bold text-landing">{props.property.title}</h1>
        <PropertyInfoSummary status={props.property.status} type={props.property.type} rating={props.rating} />
        <div className="flex items-center">
          <DollarSign size={24} className="text-landing" />
          <span className="text-xl font-semibold text-landing">{props.property.price}</span>
          <span className="text-lg font-normal">/ mês</span>
        </div>
      </div>
      <LocationInfo
        addressNumber={props.property.address.addressNumber.toString()}
        street={props.property.address.street}
        district="Lisboa"
      />
      <div className="flex gap-3">{panelButtonsMap[props.property.status]}</div>
    </div>
  );
}
