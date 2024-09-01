import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationItem as ShadcnPaginationItem,
} from "@/components/ui/pagination";
import { PaginationProps } from "./Pagination.types";
import { PaginationItem } from "./PaginationItem";
import { usePaginationItems } from "./Pagination.hooks";

export const Pagination = ({
  count,
  defaultPage,
  onPaginationChange,
  ...props
}: PaginationProps) => {
  const { items } = usePaginationItems({
    count,
    defaultPage,
    onPaginationChange,
  });

  return (
    <ShadcnPagination {...props}>
      <PaginationContent>
        {items.map((item) => (
          <ShadcnPaginationItem>
            <PaginationItem {...item}>{item.page}</PaginationItem>
          </ShadcnPaginationItem>
        ))}
      </PaginationContent>
    </ShadcnPagination>
  );
};
