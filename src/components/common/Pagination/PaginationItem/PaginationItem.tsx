import {
  PaginationButton,
  PaginationEllipsis,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationItemProps } from "./PaginationItem.types";
import { ItemType } from "../Pagination.types";

export const PaginationItem = ({ type, ...props }: PaginationItemProps) => {
  const getItem = (type: ItemType) => {
    switch (type) {
      case "previous":
        return <PaginationPrevious {...props} />;
      case "next":
        return <PaginationNext {...props} />;
      case "page":
        return <PaginationButton {...props} />;
      case "end-ellipsis":
      case "start-ellipsis":
        return <PaginationEllipsis />;

      default:
        return <PaginationButton {...props} />;
    }
  };

  return getItem(type);
};
