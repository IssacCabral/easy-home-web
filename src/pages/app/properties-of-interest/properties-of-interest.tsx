import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PropertiesOfInteresTableRow } from "./components/properties-of-interest-table-row";
import { usePropertiesOfInterest } from "./use-properties-of-interest";

export function PropertiesOfInterest() {
  const { foundPropertiesOfInterest, isLoading } = usePropertiesOfInterest();

  return (
    <div className="m-auto flex max-w-[1050px] flex-col items-center justify-start gap-3">
      <h1 className="text-3xl font-semibold text-landing">Imóveis Aplicados</h1>
      <main className="flex w-full flex-1 rounded-xl border border-solid border-border p-5">
        <Table className="border border-solid border-border">
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs text-foreground">Tipo</TableHead>
              <TableHead className="text-xs text-foreground">Imóvel</TableHead>
              <TableHead className="w-[140px] text-xs text-foreground">Status</TableHead>
              <TableHead className="w-[180px] text-xs text-foreground">Solicitado em</TableHead>
              <TableHead className="text-xs text-foreground">Preço</TableHead>
              <TableHead className="text-xs text-foreground">Responsável</TableHead>
              <TableHead className="text-xs text-foreground">Mais</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading
              ? Array.from({ length: 5 }).map((_, index) => (
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
                  </TableRow>
                ))
              : foundPropertiesOfInterest.map((item) => (
                  <PropertiesOfInteresTableRow
                    key={item.id}
                    id={item.id}
                    landlord={item.property.landlord!.name}
                    price={item.property.price}
                    requestedAt={new Date(item.requestDate)}
                    status={item.status}
                    title={item.property.title}
                    type={item.type}
                    finalizationReason={item.finalizationReason}
                  />
                ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
