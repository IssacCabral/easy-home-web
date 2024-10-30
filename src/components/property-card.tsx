import { DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  title: string;
  street: string;
  addressNumber: number;
  price: number;
  image: string;
  isPopup?: boolean;
}

export function PropertyCard({ image, title, price, street, addressNumber, isPopup, id }: PropertyCardProps) {
  const cardContent = (
    <div className={`rounded-sm shadow-lg ${isPopup ? "min-w-48 max-w-48" : ""}`}>
      <img src={image} className={`${isPopup ? "max-h-28 min-h-28 min-w-48 max-w-48" : "h-52 w-72"}`} />
      <div className="flex flex-col gap-2 p-3">
        <div className="flex items-center justify-between">
          <p className={`text-${isPopup ? "xs" : "sm"} text-landing`}>{title}</p>
          <div className="flex items-center text-primary">
            <span className={`${isPopup ? "text-xs" : "text-sm"} font-bold text-landing`}>{price}</span>
            <DollarSign className="text-landing" size={isPopup ? 12 : 14} />
          </div>
        </div>
        <span className={`text-${isPopup ? "xs" : "sm"} text-[#A7A7A7]`}>
          {street}, {addressNumber}
        </span>
        {isPopup && (
          <Link to={`/properties/${id}`}>
            <p className="text-center text-xs font-medium text-foreground">Clique para ver detalhes</p>
          </Link>
        )}
      </div>
    </div>
  );

  return isPopup ? cardContent : <Link to={`/properties/${id}`}>{cardContent}</Link>;
}
