import { type ComponentProps } from "react";
import { type Pagination } from "@/components/ui/pagination";

export type ItemType =
  | "page"
  | "next"
  | "previous"
  | "end-ellipsis"
  | "start-ellipsis";

export type PaginationProps = ComponentProps<typeof Pagination> & {
  count: number;
  defaultPage: number;
  onPaginationChange: (value: number) => void;
};
