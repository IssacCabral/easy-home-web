import { Badge, BadgeProps } from "@/components/badge";
import { TableRow, TableCell } from "@/components/ui/table";
import { PropertyStatus } from "@/shared/property";
import { formatDate } from "@/utils/format-date";
import { DollarSign, Pencil, Trash2 } from "lucide-react";

interface PropertyManegementTableRowProps {
  title: string;
  street: string;
  addressNumber: number;
  publishedAt: Date;
  price: number;
  tenantName: string;
  status: PropertyStatus;
}

export function PropertyManagementTableRow(props: PropertyManegementTableRowProps) {
  const badgeValues: BadgeProps = {
    badge: "",
    variant: "available",
  };

  switch (props.status) {
    case PropertyStatus.FREE:
      badgeValues.badge = "Livre";
      badgeValues.variant = "available";
      break;
    case PropertyStatus.BUSY:
      badgeValues.badge = "Ocupado";
      badgeValues.variant = "unavailable";
      break;
    case PropertyStatus.SPLIT:
      badgeValues.badge = "Dividir";
      badgeValues.variant = "inProgress";
      break;
  }

  return (
    <TableRow>
      <TableCell className="text-sm text-landing">{props.title}</TableCell>
      <TableCell className="text-sm text-landing">
        {props.street}, {props.addressNumber}
      </TableCell>
      <TableCell>
        <Badge badge={badgeValues.badge} variant={badgeValues.variant} />
      </TableCell>
      <TableCell className="text-landing">{formatDate(props.publishedAt)}</TableCell>
      <TableCell>
        <div className="flex items-center text-sm text-landing">
          <span>{props.price}</span>
          <DollarSign size={14} />
        </div>
      </TableCell>
      <TableCell className="text-sm text-landing">{props.tenantName ?? "-"}</TableCell>

      <TableCell colSpan={2} className="flex gap-1">
        <button className="rounded border border-transparent p-2 transition hover:border-foreground hover:bg-foreground hover:text-background focus:outline-none focus:ring-2 focus:ring-foreground">
          <Pencil size={14} />
        </button>
        <button className="rounded border border-transparent p-2 transition hover:border-foreground hover:bg-foreground hover:text-background focus:outline-none focus:ring-2 focus:ring-foreground">
          <Trash2 size={14} />
        </button>
      </TableCell>
    </TableRow>
  );
}
