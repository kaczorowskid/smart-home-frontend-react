import { Pagination } from "@/components/ui/pagination";
import { ComponentProps } from "react";

export type PaginationProps = {
  count: number;
  defaultPage: number;
  onPaginationChange: (value: number) => void;
} & ComponentProps<typeof Pagination>;

export type ItemType =
  | "previous"
  | "start-ellipsis"
  | "page"
  | "end-ellipsis"
  | "next";
