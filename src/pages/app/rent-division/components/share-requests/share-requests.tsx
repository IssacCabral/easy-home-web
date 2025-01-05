import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShareRequestTableRow } from "./share-request-table-row";
import { IShareRequestEntity } from "@/shared/share-request";

interface ShareRequestsProps {
  items: IShareRequestEntity[];
}

export function ShareRequests(props: ShareRequestsProps) {
  return (
    <div className="w-full gap-3 rounded-xl border border-solid border-border p-5">
      <Table className="border border-solid border-border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[500px] text-xs text-foreground">Solicitantes</TableHead>
            <TableHead className="w-[180px] text-xs text-foreground">Data da Solicitação</TableHead>
            <TableHead className="w-[140px] text-xs text-foreground">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.items.map((item) => (
            <ShareRequestTableRow
              key={item.id}
              id={item.id}
              applicant={item.tenant.name}
              requestDate={new Date(item.requestDate)}
              status={item.status}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
