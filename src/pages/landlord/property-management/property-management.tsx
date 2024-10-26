import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PropertyManagementTableRow } from "./property-management-table-row";
import { Pagination } from "@/components/pagination";
import { PropertyManagementTableFilters } from "./property-management-table-filters";
import { Button } from "@/components/ui/button";

export function PropertyManagement() {
  return (
    <main className="flex flex-1 flex-col gap-3 rounded-xl border border-solid border-border p-5">
      <div className="flex items-center justify-between">
        <PropertyManagementTableFilters />
        <Button>Adicionar Imóvel</Button>
      </div>
      <Table className="border border-solid border-border">
        <TableHeader>
          <TableRow>
            <TableHead className="text-xs text-foreground">Imóvel</TableHead>
            <TableHead className="text-xs text-foreground">
              Localização
            </TableHead>
            <TableHead className="w-[140px] text-xs text-foreground">
              Status
            </TableHead>
            <TableHead className="w-[180px] text-xs text-foreground">
              Publicado em
            </TableHead>
            <TableHead className="text-xs text-foreground">Preço</TableHead>
            <TableHead className="text-xs text-foreground">Inquilino</TableHead>
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
          <PropertyManagementTableRow />
          <PropertyManagementTableRow />
          <PropertyManagementTableRow />
        </TableBody>
      </Table>
      <div>
        <Pagination
          onPageChange={(page) => console.log(page)}
          pageIndex={1}
          perPage={10}
          totalCount={30}
        />
      </div>
    </main>
  );
}
