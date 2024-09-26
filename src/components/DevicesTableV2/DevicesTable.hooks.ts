import { getAllDevices } from "@/api/handlers/devices.handlers";
import { GetAllDevicesResponse } from "@/api/types/devices.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type UsePaginationProps<T> = {
  data?: T[];
  pageSize: number;
  defaultPage: number;
};

type PaginationData<T> = {
  data?: T[];
  pagination: {
    count: number;
    defaultPage: number;
  };
};

export const usePagination = <T>({
  data,
  pageSize,
  defaultPage,
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

export const useFilteredData = <T extends Record<string, unknown>>(
  data?: T[]
) => {
  const [searchbarValue, setSearchbarValue] = useState("");
  const [filteredData, setFilteredData] = useState<T[]>();

  useEffect(() => {
    setFilteredData(
      data?.filter((item) =>
        Object.values(item).some((value) =>
          value
            ?.toString()
            .trim()
            .toLowerCase()
            .includes(searchbarValue.trim().toLowerCase())
        )
      )
    );
  }, [data, searchbarValue]);

  return {
    filteredData,
    searchbarValue,
    setSearchbarValue,
  };
};

export const useGetAllDevices = (): UseQueryResult<GetAllDevicesResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllDevices],
    queryFn: getAllDevices,
  });
