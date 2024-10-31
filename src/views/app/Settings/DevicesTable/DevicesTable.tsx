import { useFilteredData } from "@/hooks/useFilteredData.hook";
import { CardWithHeader } from "../../../../components/common/CardWithHeader";
import { Pagination } from "../../../../components/common/Pagination";
import { Table } from "../../../../components/common/Table";
import { useGetAllDevices } from "./DevicesTable.hooks";
import { columns } from "./DevicesTable.schema";
import { DevicesTableProps } from "./DevicesTable.types";
import { ExtraButton } from "./ExtraButton";
import { usePagination } from "@/hooks/usePagination.hook";

export const DevicesTable = ({
  setSelectedId,
  isDashboardPart,
}: DevicesTableProps) => {
  const { data } = useGetAllDevices(true);

  const { filteredData, searchbarValue, setSearchbarValue } =
    useFilteredData(data);

  const { paginationData, handlePaginationChange } = usePagination({
    data: filteredData,
  });

  return (
    <CardWithHeader
      title="Devices"
      description="Table of devices"
      extra={
        <ExtraButton
          isDashboardPart={!!isDashboardPart}
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
      {!isDashboardPart && (
        <Pagination
          className="pt-5"
          count={paginationData.pagination.count}
          defaultPage={paginationData.pagination.defaultPage}
          onPaginationChange={handlePaginationChange}
        />
      )}
    </CardWithHeader>
  );
};
