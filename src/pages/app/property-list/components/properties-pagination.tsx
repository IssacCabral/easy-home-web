import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PropertiesPaginationProps {
  // foundPropertiesCount: number;
}

export function PropertiesPagination(props: PropertiesPaginationProps) {
  return (
    <div>
      <Pagination className="mb-7">
        <PaginationContent className="flex w-full justify-between bg-background p-1 text-foreground">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="bg-checked hover:bg-primary"
            />
          </PaginationItem>
          <PaginationContent className="flex items-center justify-center gap-2">
            <PaginationItem>
              <PaginationLink href="#" className="hover:bg-primary" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="hover:bg-primary">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="hover:bg-primary">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </PaginationContent>
          <PaginationItem>
            <PaginationNext href="#" className="bg-checked hover:bg-primary" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
