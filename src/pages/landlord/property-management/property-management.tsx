import { Badge } from "@/components/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DollarSign, Pencil, Trash2 } from "lucide-react";

export function PropertyManagement() {
  return (
    <main className="flex-1">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[140px] text-xs text-foreground">
                Status
              </TableHead>
              <TableHead className="text-xs text-foreground">Imóvel</TableHead>
              <TableHead className="w-[180px] text-xs text-foreground">
                Publicado em
              </TableHead>
              <TableHead className="text-xs text-foreground">Preço</TableHead>
              <TableHead className="text-xs text-foreground">
                Inquilino
              </TableHead>
              <TableHead className="text-xs text-foreground">
                Localização
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Badge badge="Livre" variant="available" />
              </TableCell>
              <TableCell className="text-sm text-landing">
                Casa da alegria
              </TableCell>
              <TableCell>01-01-2024</TableCell>
              <TableCell>
                <div className="flex items-center text-sm text-landing">
                  <span>300</span>
                  <DollarSign size={14} />
                </div>
              </TableCell>
              <TableCell className="text-sm text-landing">
                Matheus Pereira
              </TableCell>
              <TableCell className="text-sm text-landing">
                Rua dos amores, 42
              </TableCell>
              <TableCell>
                <button className="rounded border border-transparent p-2 transition hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary">
                  <Pencil size={14} />
                </button>
              </TableCell>
              <TableCell>
                <button className="rounded border border-transparent p-2 transition hover:border-destructive focus:outline-none focus:ring-2 focus:ring-destructive">
                  <Trash2 size={14} />
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
