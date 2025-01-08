import { FormattedMessage } from "react-intl";
import { Table } from "@/components/common/Table";
import { Searchbar } from "@/components/common/Searchbar";
import { usePagination } from "@/hooks/usePagination.hook";
import { Pagination } from "@/components/common/Pagination";
import { useGetAllDevices } from "@/api/hooks/devices.hooks";
import { useFilteredData } from "@/hooks/useFilteredData.hook";
import { CardWithHeader } from "@/components/common/CardWithHeader";
import { columns } from "./DevicesTable.schema";
import { type DevicesTableProps } from "./DevicesTable.types";

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
      title={<FormattedMessage id="view.devices" />}
      description={<FormattedMessage id="view.devices-description" />}
      extra={
        isDashboardPart ? null : (
          <Searchbar
            searchbarValue={searchbarValue}
            setSearchbarValue={setSearchbarValue}
          />
        )
      }
    >
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        data={paginationData.data || []}
        onRowClick={({ id }) => setSelectedId?.(id)}
      />
      {!isDashboardPart && (
        <Pagination
          className="pt-5"
          count={paginationData.pagination.count}
          onPaginationChange={handlePaginationChange}
          defaultPage={paginationData.pagination.defaultPage}
        />
      )}
    </CardWithHeader>
  );
};
