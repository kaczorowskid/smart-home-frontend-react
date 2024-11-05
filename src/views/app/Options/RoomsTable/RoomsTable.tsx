import { useFilteredData } from "@/hooks/useFilteredData.hook";
import { CardWithHeader } from "../../../../components/common/CardWithHeader";
import { Pagination } from "../../../../components/common/Pagination";
import { Table } from "../../../../components/common/Table";
import { usePagination } from "@/hooks/usePagination.hook";
import { RoomsTableProps } from "./RoomsTable.types";
import { columns } from "./RoomsTable.schema";
import { useGetAllRooms } from "@/api/hooks/room.hooks";
import { Searchbar } from "@/components/common/Searchbar";

export const RoomsTable = ({ setSelectedId }: RoomsTableProps) => {
  const { data } = useGetAllRooms();

  const { filteredData, searchbarValue, setSearchbarValue } =
    useFilteredData(data);

  const { paginationData, handlePaginationChange } = usePagination({
    data: filteredData,
  });

  return (
    <CardWithHeader
      title="Rooms"
      description="Table of rooms"
      extra={
        <Searchbar
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
