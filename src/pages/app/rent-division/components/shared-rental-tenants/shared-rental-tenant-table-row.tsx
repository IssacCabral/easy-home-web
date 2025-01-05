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
import { TableCell, TableRow } from "@/components/ui/table";
import { Trash2 } from "lucide-react";

interface ShareRentalTenantTableRowProps {
  tenant: string;
}

export function ShareRentalTenantTableRow(props: ShareRentalTenantTableRowProps) {
  return (
    <TableRow>
      <TableCell className="text-xs text-landing">{props.tenant}</TableCell>
      <TableCell>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="rounded border border-transparent p-2 transition hover:border-foreground hover:bg-foreground hover:text-background focus:outline-none focus:ring-2 focus:ring-foreground">
              <Trash2 size={12} />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Encerrar Divisão</AlertDialogTitle>
              <AlertDialogDescription className="text-landing">
                Deseja parar de compartilhar aluguel com esse colega de imóvel?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction>Continuar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
  );
}
