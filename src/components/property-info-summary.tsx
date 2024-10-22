import { Star } from "lucide-react";
import { Badge, BadgeProps } from "./badge";
import { PropertyStatus, PropertyTypes } from "@/shared/property";

interface PropertyInfoSummaryProps {
  type: PropertyTypes;
  status: PropertyStatus;
}

type PropertyInfoMap = {
  types: Record<PropertyTypes, string>;
  status: Record<
    PropertyStatus,
    {
      badge: string;
      variant: BadgeProps["variant"];
    }
  >;
};

const TypeAndStatusMapper: PropertyInfoMap = {
  types: {
    HOUSE: "Casa",
    APARTMENT: "Apartamento",
    DUPLEX: "Duplex",
  },
  status: {
    FREE: {
      badge: "Livre",
      variant: "available",
    },
    BUSY: {
      badge: "Ocupado",
      variant: "unavailable",
    },
    SPLIT: {
      badge: "Dividir",
      variant: "inProgress",
    },
  },
} as const;

export function PropertyInfoSummary({
  type,
  status,
}: PropertyInfoSummaryProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        <Star color="#FCDE40" size={16} fill="#FCDE40" />
        <Star color="#FCDE40" size={16} fill="#FCDE40" />
        <Star color="#FCDE40" size={16} fill="#FCDE40" />
        <Star color="#FCDE40" size={16} />
        <Star color="#FCDE40" size={16} />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold text-type">
          {TypeAndStatusMapper.types[type]}
        </span>
        <Badge
          badge={TypeAndStatusMapper.status[status].badge}
          variant={TypeAndStatusMapper.status[status].variant}
        />
      </div>
    </div>
  );
}
