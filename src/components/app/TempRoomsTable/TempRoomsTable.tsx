import { useFilteredData } from "@/hooks/useFilteredData.hook";
import { CardWithHeader } from "../../common/CardWithHeader";
import { Pagination } from "../../common/Pagination";
import { Table } from "../../common/Table";
import { ExtraButton } from "./ExtraButton";
import { usePagination } from "@/hooks/usePagination.hook";
import { TempRoomsTableProps } from "./TempRoomsTable.types";
import { useGetAllRooms } from "./TempRoomsTable.hooks";
import { columns } from "./TempRoomsTable.schema";

export const TempRoomsTable = ({ setSelectedId }: TempRoomsTableProps) => {
  const { data } = useGetAllRooms();

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
      <Table
        columns={columns}
        data={paginationData.data || []}
        rowKey={(record) => record.id}
        onRowClick={({ id }) => setSelectedId?.(id)}
      />
      <Pagination
        className="pt-5"
        count={paginationData.pagination.count}
        defaultPage={paginationData.pagination.defaultPage}
        onPaginationChange={handlePaginationChange}
      />
    </CardWithHeader>
  );
};
