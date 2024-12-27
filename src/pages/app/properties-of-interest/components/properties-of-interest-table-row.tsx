import { closeContactRequest } from "@/api/close-contact-request";
import { finishShareRequest } from "@/api/finish-share-request";
import { Badge, BadgeProps } from "@/components/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { clearCache } from "@/lib/react-query";
import { PropertiesOfInterestStatus } from "@/shared/properties-of-interest";
import { formatDate } from "@/utils/format-date";
import { CircleAlert, DollarSign } from "lucide-react";

interface PropertiesOfInteresTableRowProps {
  id: string;
  type: "shared" | "individual";
  title: string;
  status: PropertiesOfInterestStatus;
  requestedAt: Date;
  price: number;
  landlord: string;
  finalizationReason?: string;
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

  async function handleFinishContactConfirm() {
    if (props.type === "individual") {
      await closeContactRequest({
        id: props.id,
        reason: "Encerrado pelo locatário.",
      });
    } else {
      await finishShareRequest({
        id: props.id,
        reason: "Encerrado pelo locatário.",
      });
    }

    clearCache();
    window.location.reload();
  }

  const actionMap: Record<PropertiesOfInterestStatus, JSX.Element> = {
    [PropertiesOfInterestStatus.IN_CONTACT]: (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="hover:bg-slate-50 hover:text-slate-950">
            Finalizar
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Finalizar Contato</AlertDialogTitle>
            <AlertDialogDescription className="text-landing">
              Tem certeza que deseja encerrar contato para esse imóvel? <br />
              Você vai poder enviar novamente uma outra solicitação depois.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleFinishContactConfirm}>Continuar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
    [PropertiesOfInterestStatus.FINISHED]: (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <button
              className={
                "focus:[#FEF3F2] flex items-center gap-2 rounded border border-transparent bg-[#FEF3F2] p-2 text-xs text-destructive transition hover:bg-[#FEF3F2]/80 focus:outline-none"
              }
            >
              <CircleAlert size={14} />
              <span>Motivo</span>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{props.finalizationReason}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    [PropertiesOfInterestStatus.RENTED]: <></>,
    [PropertiesOfInterestStatus.SELECTED]: <></>,
  };

  const action = actionMap[props.status];

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
      <TableCell className="text-sm text-landing">{action}</TableCell>
    </TableRow>
  );
}
