import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShareRequestTableRow } from "./share-request-table-row";
import { ShareRequestStatus } from "@/shared/share-request";

export function ShareRequests() {
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
          <ShareRequestTableRow
            applicant="João Romeo"
            requestDate={new Date()}
            status={ShareRequestStatus.IN_CONTACT}
          />
          <ShareRequestTableRow applicant="João Romeo" requestDate={new Date()} status={ShareRequestStatus.FINISHED} />
          <ShareRequestTableRow applicant="João Romeo" requestDate={new Date()} status={ShareRequestStatus.SELECTED} />
        </TableBody>
      </Table>
    </div>
  );
}
