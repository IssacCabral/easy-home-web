import PropertyDetailsImg from "@/assets/property-details.png";
import { Badge } from "@/components/badge";
import { LocationInfo } from "@/components/location-info";
import { PropertyInfoSummary } from "@/components/property-info-summary";
import { IPropertyEntity } from "@/shared/property";
import { DollarSign } from "lucide-react";

interface DetailsProps {
  property: IPropertyEntity;
}

export function Details(props: DetailsProps) {
  return (
    <section className="flex w-[745px] flex-col gap-3">
      <img src={PropertyDetailsImg} alt="Property Details" className="w-full" />
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-landing">
          {props.property.title}
        </h1>
        <div className="flex gap-5">
          <PropertyInfoSummary status={props.property.status} type={props.property.type} />
          <div className="flex items-center">
            <DollarSign size={32} className="text-landing" />
            <span className="text-3xl font-semibold text-landing">
              {props.property.price}
            </span>
            <span className="text-xl font-normal">/ mês</span>
          </div>
        </div>
      </div>
      <LocationInfo
        street={props.property.address.street}
        addressNumber={props.property.address.addressNumber.toString()}
        district="Lisboa" // todo: pegar dinamicamente
      />
      <div className="rounded-xl border border-solid border-border px-5 py-4">
        <h2 className="mb-3 text-lg font-semibold text-landing">Descrição</h2>
        <p className="text-sm leading-6 text-landing">
          {props.property.description}
        </p>
      </div>
      <div className="mb-9 rounded-xl border border-solid border-border px-5 py-4">
        <h2 className="mb-3 text-lg font-semibold text-landing">Comodidades</h2>
        <div className="flex gap-2">
          {props.property.amenities.map((amenity) => (
            <Badge badge={amenity.label} variant="amenity" />
          ))}
        </div>
      </div>
    </section>
  );
}
