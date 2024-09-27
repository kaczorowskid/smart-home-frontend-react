import { CardWithHeader } from "@/components/common/CardWithHeader";
import { Pagination } from "@/components/common/Pagination";
import { Table } from "@/components/common/Table";
import { useFilteredData } from "@/hooks/useFilteredData.hook";
import { usePagination } from "@/hooks/usePagination.hook";
import { ExtraButton } from "./ExtraButton";
import { useGetAllusers } from "./UsersTable.hooks";
import { columns } from "./UsersTable.schema";

export const UsersTable = () => {
  const { data } = useGetAllusers();

  const { filteredData, searchbarValue, setSearchbarValue } =
    useFilteredData(data);

  const { paginationData, handlePaginationChange } = usePagination({
    data: filteredData,
    defaultPage: 1,
    pageSize: 5,
  });

  return (
    <CardWithHeader
      title="Devices"
      description="Table of devices"
      extra={
        <ExtraButton
          searchbarValue={searchbarValue}
          setSearchbarValue={setSearchbarValue}
        />
      }
    >
      <Table columns={columns} data={paginationData.data || []} />
      <Pagination
        className="pt-5"
        count={paginationData.pagination.count}
        defaultPage={paginationData.pagination.defaultPage}
        onPaginationChange={handlePaginationChange}
      />
    </CardWithHeader>
  );
};
