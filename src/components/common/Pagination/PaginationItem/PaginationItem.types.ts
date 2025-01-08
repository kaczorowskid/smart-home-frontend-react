import { type ReactNode } from "react";
import { type ItemType } from "../Pagination.types";

export type PaginationItemProps = {
  type: ItemType;
  isActive: boolean;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
  page: number | undefined;
};
