import { LocationInfo } from "@/components/location-info";
import { PropertyInfoSummary } from "@/components/property-info-summary";
import { IPropertyEntity, PropertyStatus } from "@/shared/property";
import { DollarSign } from "lucide-react";
import { OpenDivisionDialog } from "./open-division-dialog";
import { CancelDivisionDialog } from "./cancel-division-dialog";
import { CompleteDivisionDialog } from "./complete-division-dialog";

interface DivisionControlPanelProps {
  property: IPropertyEntity;
  rating: number;
}

export function DivisionControlPanel(props: DivisionControlPanelProps) {
  const panelButtonsMap: Record<PropertyStatus, JSX.Element> = {
    [PropertyStatus.BUSY]: <OpenDivisionDialog />,
    [PropertyStatus.SPLIT]: (
      <>
        <CompleteDivisionDialog />
        <CancelDivisionDialog />
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
      />
      <div className="flex gap-3">{panelButtonsMap[props.property.status]}</div>
    </div>
  );
}
