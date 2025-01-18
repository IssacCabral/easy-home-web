import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PropertyManagementTableRow } from "./components/property-management-table-row";
import { Pagination } from "@/components/pagination";
import { PropertyManagementTableFilters } from "./components/property-management-table-filters";
import { usePropertyManagement } from "./use-property-management";
import { perPageLimit } from "@/api/find-landlord-properties";
import { Skeleton } from "@/components/ui/skeleton";
import { AddPropertyDrawer } from "./components/add-property-drawer/add-property-drawer";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function PropertyManagement() {
  const { form, handleFindLandlordProperties, handleClearFilters, foundProperties, handlePaginate, result, isLoading } =
    usePropertyManagement();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main className="flex flex-1 flex-col gap-3 rounded-xl border border-solid border-border p-5">
      <div className="flex items-center justify-between">
        <PropertyManagementTableFilters
          form={form}
          onFindLandlordProperties={handleFindLandlordProperties}
          onClearFilters={handleClearFilters}
        />
        <Button onClick={() => setIsDrawerOpen(true)}>Adicionar Imóvel</Button>
      </div>
      <AddPropertyDrawer isOpen={isDrawerOpen} setOpen={setIsDrawerOpen} />
      <Table className="border border-solid border-border">
        <TableHeader>
          <TableRow>
            <TableHead className="text-xs text-foreground">Imóvel</TableHead>
            <TableHead className="text-xs text-foreground">Localização</TableHead>
            <TableHead className="w-[140px] text-xs text-foreground">Status</TableHead>
            <TableHead className="w-[180px] text-xs text-foreground">Publicado em</TableHead>
            <TableHead className="text-xs text-foreground">Preço</TableHead>
            <TableHead className="text-xs text-foreground">Inquilino</TableHead>
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
            : foundProperties.map((item) => (
                <PropertyManagementTableRow
                  key={item.id}
                  addressNumber={item.addressNumber}
                  price={item.price}
                  publishedAt={item.publishedAt!}
                  street={item.street}
                  tenantName={item.tenantName}
                  title={item.title}
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
