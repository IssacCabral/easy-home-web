import { DollarSign } from "lucide-react";

interface PropertyCardProps {
  title: string;
  street: string;
  number: number;
  price: number;
  image: string;
}

export function PropertyCard(props: PropertyCardProps) {
  return (
    <div className="max-h-[283px] max-w-[297px] rounded-sm shadow-lg">
      <img src={props.image} className="max-h-[205px] w-full object-cover" />
      <div className="flex flex-col gap-2 p-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-landing">{props.title}</p>
          <div className="flex items-center text-primary">
            <span className="text-sm font-bold text-landing">
              {props.price}
            </span>
            <DollarSign className="text-landing" size={14} />
          </div>
        </div>
        <span className="text-sm text-[#A7A7A7]">
          {props.street}, {props.number}
        </span>
      </div>
    </div>
  );
}
