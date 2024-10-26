import { Badge } from "@/components/badge";
import { TableRow, TableCell } from "@/components/ui/table";
import { DollarSign, MessageSquareOff, UserRoundCheck } from "lucide-react";

export function ContactRequestsTableRow() {
  return (
    <TableRow>
      <TableCell className="text-sm text-landing">Casa da alegria</TableCell>
      <TableCell className="text-sm text-landing">
        Avenida Francisco Pinheiro de Almeida, 42
      </TableCell>
      <TableCell>
        <Badge badge="Em contato" variant="inProgress" />
      </TableCell>
      <TableCell className="text-landing">01-01-2024</TableCell>
      <TableCell>
        <div className="flex items-center text-sm text-landing">
          <span>300</span>
          <DollarSign size={14} />
        </div>
      </TableCell>
      <TableCell className="text-sm text-landing">Matheus Pereira</TableCell>

      <TableCell colSpan={2} className="flex gap-1">
        <button className="flex items-center gap-2 rounded border border-transparent bg-accent p-2 text-background transition hover:border-accent hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent">
          <UserRoundCheck size={14} />
          <span className="text-sm">Alugar</span>
        </button>
        <button className="flex items-center gap-2 rounded border border-transparent bg-destructive p-2 text-background transition hover:border-destructive hover:bg-destructive/80 focus:outline-none focus:ring-2 focus:ring-destructive">
          <MessageSquareOff size={14} />
          <span className="text-sm">Encerrar</span>
        </button>
      </TableCell>
    </TableRow>
  );
}
