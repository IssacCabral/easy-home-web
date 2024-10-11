import { DollarSign } from "lucide-react";

interface LandingPropertyCardProps {
  title: string;
  street: string;
  number: number;
  price: number;
  image: string;
}

export function LandingPropertyCard(props: LandingPropertyCardProps) {
  return (
    <div className="rounded-sm shadow-lg">
      <img src={props.image} className="h-52 w-72" />
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-lg font-semibold text-foreground">{props.title}</h3>
        <p className="text-lg text-foreground">
          {props.number} {props.street}
        </p>
        <div className="flex items-center text-primary">
          <span className="text-lg">{props.price}</span>
          <DollarSign />
        </div>
      </div>
    </div>
  );
}
