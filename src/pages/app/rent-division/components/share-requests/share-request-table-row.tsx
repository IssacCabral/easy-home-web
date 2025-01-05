import { Badge, BadgeProps } from "@/components/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { ShareRequestStatus } from "@/shared/share-request";
import { formatDate } from "@/utils/format-date";
import { FinishShareRequestConfirm } from "./finish-share-request-confirm";
import { SelectShareRequestConfirm } from "./select-share-request-confirm";

interface ShareRequestTableRowProps {
  applicant: string;
  requestDate: Date;
  status: ShareRequestStatus;
}

export function ShareRequestTableRow(props: ShareRequestTableRowProps) {
  const badgeValues: BadgeProps = {
    badge: "",
    variant: "amenity",
  };

  switch (props.status) {
    case ShareRequestStatus.IN_CONTACT:
      badgeValues.badge = "Em contato";
      badgeValues.variant = "inProgress";
      break;
    case ShareRequestStatus.SELECTED:
      badgeValues.badge = "Selecionado";
      badgeValues.variant = "available";
      break;
    case ShareRequestStatus.FINISHED:
      badgeValues.badge = "Finalizado";
      badgeValues.variant = "unavailable";
      break;
  }

  return (
    <TableRow>
      <TableCell className="text-xs text-landing">{props.applicant}</TableCell>
      <TableCell className="text-xs text-landing">{formatDate(props.requestDate)}</TableCell>
      <TableCell>
        <Badge badge={badgeValues.badge} variant={badgeValues.variant} />
      </TableCell>
      <TableCell colSpan={2} className="flex gap-2">
        <FinishShareRequestConfirm />
        <SelectShareRequestConfirm />
      </TableCell>
    </TableRow>
  );
}
