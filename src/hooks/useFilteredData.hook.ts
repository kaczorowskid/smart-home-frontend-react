import { useEffect, useState } from "react";

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
