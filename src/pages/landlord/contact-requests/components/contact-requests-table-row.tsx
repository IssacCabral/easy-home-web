import { Badge, BadgeProps } from "@/components/badge";
import { TableRow, TableCell } from "@/components/ui/table";
import { ContactRequestStatus } from "@/shared/contact-request";
import { formatDate } from "@/utils/format-date";
import { DollarSign } from "lucide-react";
import { RentPropertyConfirm } from "./rent-property-confirm";
import { CloseContactConfirm } from "./close-contact-confirm";

interface ContactRequestsTableRowProps {
  id: string;
  title: string;
  street: string;
  addressNumber: number;
  price: number;
  requestDate: Date;
  applicant: string;
  status: ContactRequestStatus;
}

export function ContactRequestsTableRow(props: ContactRequestsTableRowProps) {
  const badgeValues: BadgeProps = {
    badge: "",
    variant: "amenity",
  };

  switch (props.status) {
    case ContactRequestStatus.RENTED:
      badgeValues.badge = "Alugado";
      badgeValues.variant = "available";
      break;
    case ContactRequestStatus.FINISHED:
      badgeValues.badge = "Finalizado";
      badgeValues.variant = "unavailable";
      break;
    case ContactRequestStatus.IN_CONTACT:
      badgeValues.badge = "Em contato";
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
      <TableCell className="text-landing">{formatDate(props.requestDate)}</TableCell>
      <TableCell>
        <div className="flex items-center text-sm text-landing">
          <span>{props.price}</span>
          <DollarSign size={14} />
        </div>
      </TableCell>
      <TableCell className="text-sm text-landing">{props.applicant}</TableCell>
      <TableCell colSpan={2} className="flex gap-2">
        <CloseContactConfirm id={props.id} status={props.status} />
        <RentPropertyConfirm id={props.id} status={props.status} />
      </TableCell>
    </TableRow>
  );
}
