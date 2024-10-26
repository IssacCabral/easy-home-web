import { Badge } from "@/components/badge";
import { TableRow, TableCell } from "@/components/ui/table";
import { DollarSign, Pencil, Trash2 } from "lucide-react";

export function PropertyManagementTableRow() {
  return (
    <TableRow>
      <TableCell className="text-sm text-landing">Casa da alegria</TableCell>
      <TableCell className="text-sm text-landing">Rua dos amores, 42</TableCell>
      <TableCell>
        <Badge badge="Livre" variant="available" />
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
