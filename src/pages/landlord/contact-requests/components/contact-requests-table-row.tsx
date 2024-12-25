import { Badge, BadgeProps } from "@/components/badge";
import { TableRow, TableCell } from "@/components/ui/table";
import { ContactRequestStatus } from "@/shared/contact-request";
import { formatDate } from "@/utils/format-date";
import { DollarSign } from "lucide-react";
import { RentPropertyConfirm } from "./rent-property-confirm";
import { CloseContactConfirm } from "./close-contact-confirm";

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
        <RentPropertyConfirm contactRequestStatus={props.status} />
        <CloseContactConfirm contactRequestStatus={props.status} />
      </TableCell>
    </TableRow>
  );
}
