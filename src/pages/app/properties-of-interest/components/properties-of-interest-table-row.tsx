import { Badge, BadgeProps } from "@/components/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { PropertiesOfInterestStatus } from "@/shared/properties-of-interest";
import { formatDate } from "@/utils/format-date";
import { DollarSign } from "lucide-react";

interface PropertiesOfInteresTableRowProps {
  type: "shared" | "individual";
  title: string;
  status: PropertiesOfInterestStatus;
  requestedAt: Date;
  price: number;
  landlord: string;
}

export function PropertiesOfInteresTableRow(props: PropertiesOfInteresTableRowProps) {
  const typeMap: Record<PropertiesOfInteresTableRowProps["type"], string> = {
    individual: "Individual",
    shared: "Compartilhado",
  };

  const statusBadgeMap: Record<PropertiesOfInterestStatus, BadgeProps> = {
    [PropertiesOfInterestStatus.SELECTED]: { badge: "Selecionado", variant: "available" },
    [PropertiesOfInterestStatus.FINISHED]: { badge: "Finalizado", variant: "unavailable" },
    [PropertiesOfInterestStatus.IN_CONTACT]: { badge: "Em contato", variant: "inProgress" },
    [PropertiesOfInterestStatus.RENTED]: { badge: "Alugado", variant: "available" },
  };

  const type = typeMap[props.type];
  const badgeValues = statusBadgeMap[props.status];

  return (
    <TableRow>
      <TableCell className="text-sm text-landing">{type}</TableCell>
      <TableCell className="text-sm text-landing">{props.title}</TableCell>
      <TableCell className="text-sm text-landing">
        <Badge badge={badgeValues.badge} variant={badgeValues.variant} />
      </TableCell>
      <TableCell className="text-landing">{formatDate(props.requestedAt)}</TableCell>
      <TableCell>
        <div className="flex items-center text-sm text-landing">
          <span>{props.price}</span>
          <DollarSign size={14} />
        </div>
      </TableCell>
      <TableCell className="text-sm text-landing">{props.landlord}</TableCell>
    </TableRow>
  );
}
