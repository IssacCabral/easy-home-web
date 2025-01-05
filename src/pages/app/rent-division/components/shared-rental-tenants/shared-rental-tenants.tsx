import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ITenantEntity } from "@/shared/tenant";
import { ShareRentalTenantTableRow } from "./shared-rental-tenant-table-row";
import { AuthContext } from "@/contexts/auth-context";
import { useContext } from "react";

interface SharedRentalTenantsProps {
  items: ITenantEntity[];
}

export function SharedRentalTenants(props: SharedRentalTenantsProps) {
  const { userSession } = useContext(AuthContext);

  return (
    <div className="w-full gap-3 rounded-xl border border-solid border-border p-5">
      <Table className="border border-solid border-border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-full text-xs text-foreground">Colegas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.items.map((item) => {
            if (item.id !== userSession?.userId) {
              return <ShareRentalTenantTableRow key={item.id} tenant={item.name} />;
            }
          })}
        </TableBody>
      </Table>
    </div>
  );
}
