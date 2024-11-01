import { Badge } from "@/components/badge";
import { TableRow, TableCell } from "@/components/ui/table";
import { formatDate } from "@/utils/format-date";
import { DollarSign, Pencil, Trash2 } from "lucide-react";

interface PropertyManegementTableRowProps {
  title: string;
  street: string;
  addressNumber: number;
  publishedAt: Date;
  price: number;
  tenantName: string;
}

export function PropertyManagementTableRow(props: PropertyManegementTableRowProps) {
  return (
    <TableRow>
      <TableCell className="text-sm text-landing">{props.title}</TableCell>
      <TableCell className="text-sm text-landing">
        {props.street}, {props.addressNumber}
      </TableCell>
      <TableCell>
        <Badge badge="Livre" variant="available" />
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
