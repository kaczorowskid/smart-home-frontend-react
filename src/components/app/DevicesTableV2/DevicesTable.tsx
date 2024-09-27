import { CardWithHeader } from "../../common/CardWithHeader";
import { Pagination } from "../../common/Pagination";
import { Table } from "../../common/Table";
import {
  useFilteredData,
  useGetAllDevices,
  usePagination,
} from "./DevicesTable.hooks";
import { columns } from "./DevicesTable.schema";
import { DevicesTableProps } from "./DevicesTable.types";
import { ExtraButton } from "./ExtraButton";

export const DevicesTableV2 = ({ isDashboardPart }: DevicesTableProps) => {
  const { data } = useGetAllDevices();

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
          isDashboardPart={!!isDashboardPart}
          searchbarValue={searchbarValue}
          setSearchbarValue={setSearchbarValue}
        />
      }
    >
      <Table columns={columns} data={paginationData.data || []} />
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
