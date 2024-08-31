import { useState } from "react";
import { ItemType, PaginationProps } from "./Pagination.types";

const BOUNDARY_COUNT = 1;
const SIBLING_COUNT = 1;

export const itemType: Record<string, ItemType> = {
  previous: "previous",
  startEllipsis: "start-ellipsis",
  page: "page",
  endEllipsis: "end-ellipsis",
  next: "next",
};

export type UsePaginationItemsProps = Pick<
  PaginationProps,
  "count" | "defaultPage" | "onPaginationChange"
>;

export type UsePaginationItems = {
  items: {
    onClick: () => void;
    type: ItemType;
    page: number | undefined;
    isActive: boolean;
    disabled: boolean;
  }[];
};

export const usePaginationItems = ({
  count,
  defaultPage,
  onPaginationChange,
}: UsePaginationItemsProps): UsePaginationItems => {
  const [page, setPageState] = useState(defaultPage);

  const handleClick = (value: any) => {
    onPaginationChange(value);
    setPageState(value);
  };

  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(BOUNDARY_COUNT, count));

  const endPages = range(
    Math.max(count - BOUNDARY_COUNT + 1, BOUNDARY_COUNT + 1),
    count
  );

  const siblingsStart = Math.max(
    Math.min(
      page - SIBLING_COUNT,
      count - BOUNDARY_COUNT - SIBLING_COUNT * 2 - 1
    ),

    BOUNDARY_COUNT + 2
  );

  const siblingsEnd = Math.min(
    Math.max(page + SIBLING_COUNT, BOUNDARY_COUNT + SIBLING_COUNT * 2 + 2),

    count - BOUNDARY_COUNT - 1
  );

  const itemList = [
    itemType.previous,
    ...startPages,

    ...(siblingsStart > BOUNDARY_COUNT + 2
      ? [itemType.startEllipsis]
      : BOUNDARY_COUNT + 1 < count - BOUNDARY_COUNT
      ? [BOUNDARY_COUNT + 1]
      : []),

    ...range(siblingsStart, siblingsEnd),

    ...(siblingsEnd < count - BOUNDARY_COUNT - 1
      ? [itemType.endEllipsis]
      : count - BOUNDARY_COUNT > BOUNDARY_COUNT
      ? [count - BOUNDARY_COUNT]
      : []),

    ...endPages,
    itemType.next,
  ];

  const getButtonType = (item: ItemType | number) => {
    if (typeof item === "number") {
      return item;
    } else if (item === "previous") {
      return page - 1;
    } else if (item === "next") {
      return page + 1;
    }
  };

  const getPageType = (item: ItemType | number) =>
    typeof item === "number" ? "page" : item;

  const getActiveButton = (item: ItemType | number) =>
    typeof item === "number" ? item === page : false;

  const getDisabledButton = (item: ItemType | number) => {
    const disablePrviousButton = item === "previous" && page <= 1;
    const disableNextButton = item === "next" && page >= count;

    if (disablePrviousButton || disableNextButton) {
      return true;
    }

    return false;
  };

  const items = itemList.map((item) => ({
    onClick: () => {
      handleClick(getButtonType(item));
    },
    type: getPageType(item),
    page: getButtonType(item),
    isActive: getActiveButton(item),
    disabled: getDisabledButton(item),
  }));

  return {
    items,
  };
};
