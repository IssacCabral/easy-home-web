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
    <div className="max-w-[330px] rounded-sm">
      <img src={props.image} />
      <div className="flex flex-col gap-4 p-5">
        <h3 className="text-2xl font-semibold text-foreground">
          {props.title}
        </h3>
        <p className="text-xl text-foreground">
          {props.number} {props.street}
        </p>
        <div className="flex items-center text-primary">
          <span className="text-xl">{props.price}</span>
          <DollarSign />
        </div>
      </div>
    </div>
  );
}
