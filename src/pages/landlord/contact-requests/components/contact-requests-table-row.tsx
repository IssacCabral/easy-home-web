import { Badge, BadgeProps } from "@/components/badge";
import { TableRow, TableCell } from "@/components/ui/table";
import { ContactRequestStatus } from "@/shared/contact-request";
import { formatDate } from "@/utils/format-date";
import { DollarSign, MessageSquareOff, UserRoundCheck } from "lucide-react";

interface ContactRequestsTableRowProps {
  title: string;
  street: string;
  addressNumber: number;
  price: number;
  requestDate: Date;
  applicant: string;
  status: ContactRequestStatus;
}

export function ContactRequestsTableRow(props: ContactRequestsTableRowProps) {
  const badValues: BadgeProps = {
    badge: "",
    variant: "amenity",
  };

  switch (props.status) {
    case ContactRequestStatus.RENTED:
      badValues.badge = "Alugado";
      badValues.variant = "available";
      break;
    case ContactRequestStatus.FINISHED:
      badValues.badge = "Finalizado";
      badValues.variant = "unavailable";
      break;
    case ContactRequestStatus.IN_CONTACT:
      badValues.badge = "Em contato";
      badValues.variant = "inProgress";
      break;
  }

  return (
    <TableRow>
      <TableCell className="text-sm text-landing">{props.title}</TableCell>
      <TableCell className="text-sm text-landing">
        {props.street}, {props.addressNumber}
      </TableCell>
      <TableCell>
        <Badge badge={badValues.badge} variant={badValues.variant} />
      </TableCell>
      <TableCell className="text-landing">{formatDate(props.requestDate)}</TableCell>
      <TableCell>
        <div className="flex items-center text-sm text-landing">
          <span>{props.price}</span>
          <DollarSign size={14} />
        </div>
      </TableCell>
      <TableCell className="text-sm text-landing">{props.applicant}</TableCell>

      <TableCell colSpan={2} className="flex gap-2">
        <button className="flex items-center gap-2 rounded border border-transparent bg-cyan-600 p-2 text-xs text-background transition hover:border-cyan-600 hover:bg-cyan-600/80 focus:outline-none focus:ring-2 focus:ring-cyan-600">
          <UserRoundCheck size={14} />
          <span>Alugar</span>
        </button>
        <button className="flex items-center gap-2 rounded border border-transparent bg-rose-500 p-2 text-xs text-background transition hover:border-rose-500 hover:bg-rose-500/80 focus:outline-none focus:ring-2 focus:ring-rose-500">
          <MessageSquareOff size={14} />
          <span>Encerrar</span>
        </button>
      </TableCell>
    </TableRow>
  );
}
