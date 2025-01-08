import {
  PaginationContent,
  Pagination as ShadcnPagination,
  PaginationItem as ShadcnPaginationItem,
} from "@/components/ui/pagination";
import { PaginationItem } from "./PaginationItem";
import { usePaginationItems } from "./Pagination.hooks";
import { type PaginationProps } from "./Pagination.types";

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
        {items.map((item, index) => (
          <ShadcnPaginationItem key={index}>
            <PaginationItem {...item}>{item.page}</PaginationItem>
          </ShadcnPaginationItem>
        ))}
      </PaginationContent>
    </ShadcnPagination>
  );
};
