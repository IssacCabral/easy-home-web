import { MapPin } from "lucide-react";

interface LocationInfoProps {
  street: string;
  addressNumber: string;
}

export function LocationInfo({ street, addressNumber }: LocationInfoProps) {
  return (
    <div className="flex items-center gap-2">
      <MapPin enableBackground={"#6C6B6B"} size={16} />
      <span className="text-sm font-normal text-landing">{`${street}, ${addressNumber}`}</span>
    </div>
  );
}
