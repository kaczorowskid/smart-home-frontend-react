import { useEffect, useState } from "react";

type PaginationData<T> = {
  data?: T[];
  pagination: {
    count: number;
    defaultPage: number;
  };
};

type UsePaginationProps<T> = {
  data?: T[];
  pageSize?: number;
  defaultPage?: number;
};

export const usePagination = <T>({
  data,
  pageSize = 10,
  defaultPage = 1,
}: UsePaginationProps<T>) => {
  const count = Math.ceil((data || [])?.length / pageSize);

  const [paginationData, setPaginationData] = useState<PaginationData<T>>({
    data,
    pagination: {
      count,
      defaultPage,
    },
  });

  useEffect(() => {
    handlePaginationChange(defaultPage);
  }, [data]);

  const handlePaginationChange = (value: number) => {
    const start = pageSize * (value - 1);
    const end = start + pageSize;

    setPaginationData((prevState) => ({
      ...prevState,
      data: data?.slice(start, end),
      pagination: {
        ...prevState.pagination,
        count,
        defaultPage: value,
      },
    }));
  };

  return {
    paginationData,
    handlePaginationChange,
  };
};
