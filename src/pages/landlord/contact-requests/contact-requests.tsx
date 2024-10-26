import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination } from "@/components/pagination";
import { ContactRequestsTableFilters } from "./contact-requests-table-filters";
import { ContactRequestsTableRow } from "./contact-requests-table-row";

export function ContactRequests() {
  return (
    <main className="flex flex-1 flex-col gap-3 rounded-xl border border-solid border-border p-5">
      <ContactRequestsTableFilters />
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
              Data da Solicitação
            </TableHead>
            <TableHead className="text-xs text-foreground">Preço</TableHead>
            <TableHead className="text-xs text-foreground">
              Solicitante
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <ContactRequestsTableRow />
          <ContactRequestsTableRow />
          <ContactRequestsTableRow />
          <ContactRequestsTableRow />
          <ContactRequestsTableRow />
          <ContactRequestsTableRow />
          <ContactRequestsTableRow />
          <ContactRequestsTableRow />
          <ContactRequestsTableRow />
          <ContactRequestsTableRow />
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
