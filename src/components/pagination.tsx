import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./ui/button";

export interface PaginationProps {
  pageIndex: number; // página atual, começa em 0
  totalCount: number; // número total de registros
  perPage: number; // numero de registros por página
  onPageChange: (pageIndex: number) => Promise<void> | void;
}

export function Pagination(props: PaginationProps) {
  const pages = Math.ceil(props.totalCount / props.perPage) || 1;

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-foreground">
        Total de {props.totalCount} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {props.pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => props.onPageChange(0)}
            variant="outline"
            className="h-8 w-8 p-0 hover:bg-primary"
            disabled={props.pageIndex === 0}
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>

          <Button
            onClick={() => props.onPageChange(props.pageIndex - 1)}
            variant="outline"
            className="h-8 w-8 p-0 hover:bg-primary"
            disabled={props.pageIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>

          <Button
            onClick={() => props.onPageChange(props.pageIndex + 1)}
            variant="outline"
            className="h-8 w-8 p-0 hover:bg-primary"
            disabled={pages <= props.pageIndex + 1}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próxima página</span>
          </Button>

          <Button
            onClick={() => props.onPageChange(pages - 1)}
            variant="outline"
            className="h-8 w-8 p-0 hover:bg-primary"
            disabled={pages <= props.pageIndex + 1}
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
