import {
  PaginationNext,
  PaginationButton,
  PaginationEllipsis,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { type ItemType } from "../Pagination.types";
import { type PaginationItemProps } from "./PaginationItem.types";

export const PaginationItem = ({ type, ...props }: PaginationItemProps) => {
  const getItem = (type: ItemType) => {
    switch (type) {
      case "next":
        return <PaginationNext {...props} />;
      case "page":
        return <PaginationButton {...props} />;
      case "previous":
        return <PaginationPrevious {...props} />;
      case "end-ellipsis":
      case "start-ellipsis":
        return <PaginationEllipsis />;

      default:
        return <PaginationButton {...props} />;
    }
  };

  return getItem(type);
};
