import { useState } from "react";
import { type ItemType, type PaginationProps } from "./Pagination.types";

const BOUNDARY_COUNT = 1;
const SIBLING_COUNT = 1;

export const itemType: Record<string, ItemType> = {
  page: "page",
  next: "next",
  previous: "previous",
  endEllipsis: "end-ellipsis",
  startEllipsis: "start-ellipsis",
};

export type UsePaginationItemsProps = Pick<
  PaginationProps,
  "count" | "defaultPage" | "onPaginationChange"
>;

export type UsePaginationItems = {
  items: {
    type: ItemType;
    isActive: boolean;
    disabled: boolean;
    onClick: () => void;
    page: number | undefined;
  }[];
};

export const usePaginationItems = ({
  count,
  defaultPage,
  onPaginationChange,
}: UsePaginationItemsProps): UsePaginationItems => {
  const [page, setPageState] = useState(defaultPage);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  const getButtonType = (item: number | ItemType) => {
    if (typeof item === "number") {
      return item;
    } else if (item === "previous") {
      return page - 1;
    } else if (item === "next") {
      return page + 1;
    }
  };

  const getPageType = (item: number | ItemType) =>
    typeof item === "number" ? "page" : item;

  const getActiveButton = (item: number | ItemType) =>
    typeof item === "number" ? item === page : false;

  const getDisabledButton = (item: number | ItemType) => {
    const disablePrviousButton = item === "previous" && page <= 1;
    const disableNextButton = item === "next" && page >= count;

    if (disablePrviousButton || disableNextButton) {
      return true;
    }

    return false;
  };

  const items = itemList.map((item) => ({
    type: getPageType(item),
    page: getButtonType(item),
    isActive: getActiveButton(item),
    disabled: getDisabledButton(item),
    onClick: () => {
      handleClick(getButtonType(item));
    },
  }));

  return {
    items,
  };
};
