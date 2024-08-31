import { ReactNode } from "react";
import { ItemType } from "../Pagination.types";

export type PaginationItemProps = {
  type: ItemType;
  onClick: () => void;
  page: number | undefined;
  isActive: boolean;
  disabled: boolean;
  children: ReactNode;
};
