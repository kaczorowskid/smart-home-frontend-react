import { useState } from "react";

export const useFilteredData = <T extends Record<string, unknown>>(
  data?: T[]
) => {
  const [searchbarValue, setSearchbarValue] = useState("");

  const filteredData = data?.filter((item) =>
    Object.values(item).some((value) =>
      value
        ?.toString()
        .trim()
        .toLowerCase()
        .includes(searchbarValue.trim().toLowerCase())
    )
  );

  return {
    filteredData,
    searchbarValue,
    setSearchbarValue,
  };
};
