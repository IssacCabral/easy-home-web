import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination } from "@/components/pagination";
import { ContactRequestsTableRow } from "./components/contact-requests-table-row";
import { ContactRequestsTableFilters } from "./components/contact-requests-table-filters";
import { useContactRequests } from "./use-contact-requests";
import { Skeleton } from "@/components/ui/skeleton";
import { perPageLimit } from "@/api/find-landlord-contact-requests";

export function ContactRequests() {
  const {
    form,
    handleFindLandlordContactRequests,
    handleClearFilters,
    isLoading,
    foundContactRequests,
    handlePaginate,
    result,
  } = useContactRequests();

  return (
    <main className="flex flex-1 flex-col gap-3 rounded-xl border border-solid border-border p-5">
      <ContactRequestsTableFilters
        form={form}
        onFindContactRequests={handleFindLandlordContactRequests}
        onClearFilters={handleClearFilters}
      />
      <Table className="border border-solid border-border">
        <TableHeader>
          <TableRow>
            <TableHead className="text-xs text-foreground">Imóvel</TableHead>
            <TableHead className="text-xs text-foreground">Localização</TableHead>
            <TableHead className="w-[140px] text-xs text-foreground">Status</TableHead>
            <TableHead className="w-[180px] text-xs text-foreground">Data da Solicitação</TableHead>
            <TableHead className="text-xs text-foreground">Preço</TableHead>
            <TableHead className="text-xs text-foreground">Solicitante</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading
            ? Array.from({ length: 12 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                </TableRow>
              ))
            : foundContactRequests.map((item) => (
                <ContactRequestsTableRow
                  key={item.id}
                  id={item.id}
                  addressNumber={item.addressNumber}
                  price={item.price}
                  street={item.street}
                  title={item.propertyTitle}
                  requestDate={item.requestDate}
                  applicant={item.applicant}
                  status={item.status}
                />
              ))}
        </TableBody>
      </Table>
      <div>
        {!isLoading && (
          <Pagination
            onPageChange={handlePaginate}
            pageIndex={result!.meta.page}
            perPage={perPageLimit}
            totalCount={result!.meta.total}
          />
        )}
      </div>
    </main>
  );
}
