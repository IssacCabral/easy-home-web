import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PropertyManagementTableRow } from "./property-management-table-row";

export function PropertyManagement() {
  return (
    <main className="flex-1 flex-col gap-8 rounded-xl border border-solid border-border p-5">
      <Table className="border border-solid border-border">
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
            <TableHead className="text-xs text-foreground">Inquilino</TableHead>
            <TableHead className="text-xs text-foreground">
              Localização
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <PropertyManagementTableRow />
          <PropertyManagementTableRow />
          <PropertyManagementTableRow />
          <PropertyManagementTableRow />
          <PropertyManagementTableRow />
          <PropertyManagementTableRow />
          <PropertyManagementTableRow />
        </TableBody>
      </Table>
    </main>
  );
}
