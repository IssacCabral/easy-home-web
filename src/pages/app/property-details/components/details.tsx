import { Badge } from "@/components/badge";
import { LocationInfo } from "@/components/location-info";
import { PropertyInfoSummary } from "@/components/property-info-summary";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { IPropertyEntity } from "@/shared/property";
import { DollarSign } from "lucide-react";

interface DetailsProps {
  property: IPropertyEntity;
  rating: number;
}

const images = [
  "/src/assets/carousel/carousel-1.jpg",
  "/src/assets/carousel/carousel-2.jpg",
  "/src/assets/carousel/carousel-3.jpg",
  "/src/assets/carousel/carousel-4.jpg",
  "/src/assets/carousel/carousel-5.jpg",
];

export function Details(props: DetailsProps) {
  return (
    <section className="flex w-[745px] flex-col gap-3">
      <Carousel>
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} className="flex h-[464px] w-[745px] items-center justify-center overflow-hidden">
              <img src={img} alt={`Property Slide ${index + 1}`} className="h-full w-full rounded-xl object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-landing">{props.property.title}</h1>
        <div className="flex gap-5">
          <PropertyInfoSummary status={props.property.status} type={props.property.type} rating={props.rating} />
          <div className="flex items-center">
            <DollarSign size={32} className="text-landing" />
            <span className="text-3xl font-semibold text-landing">{props.property.price}</span>
            <span className="text-xl font-normal">/ mês</span>
          </div>
        </div>
      </div>
      <LocationInfo
        street={props.property.address.street}
        addressNumber={props.property.address.addressNumber.toString()}
      />
      <div className="rounded-xl border border-solid border-border px-5 py-4">
        <h2 className="mb-3 text-lg font-semibold text-landing">Descrição</h2>
        <p className="text-sm leading-6 text-landing">{props.property.description}</p>
      </div>
      <div className="mb-9 rounded-xl border border-solid border-border px-5 py-4">
        <h2 className="mb-3 text-lg font-semibold text-landing">Comodidades</h2>
        <div className="flex gap-2">
          {props.property.amenities.map((amenity) => (
            <Badge key={amenity.id} badge={amenity.label} variant="amenity" />
          ))}
        </div>
      </div>
    </section>
  );
}
