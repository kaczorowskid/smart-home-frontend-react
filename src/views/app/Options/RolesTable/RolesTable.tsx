import { FormattedMessage } from "react-intl";
import { Table } from "@/components/common/Table";
import { useGetAllRoles } from "@/api/hooks/role.hooks";
import { Searchbar } from "@/components/common/Searchbar";
import { usePagination } from "@/hooks/usePagination.hook";
import { Pagination } from "@/components/common/Pagination";
import { useFilteredData } from "@/hooks/useFilteredData.hook";
import { CardWithHeader } from "@/components/common/CardWithHeader";
import { columns } from "./RolesTable.schema";
import { type RolesTableProps } from "./RolesTable.types";

export const RolesTable = ({ setSelectedId }: RolesTableProps) => {
  const { data } = useGetAllRoles();

  const { filteredData, searchbarValue, setSearchbarValue } =
    useFilteredData(data);

  const { paginationData, handlePaginationChange } = usePagination({
    data: filteredData,
  });

  return (
    <CardWithHeader
      title={<FormattedMessage id="view.roles" />}
      description={<FormattedMessage id="view.roles-description" />}
      extra={
        <Searchbar
          searchbarValue={searchbarValue}
          setSearchbarValue={setSearchbarValue}
        />
      }
    >
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        data={paginationData.data || []}
        onRowClick={({ id }) => setSelectedId(id)}
      />
      <Pagination
        className="pt-5"
        count={paginationData.pagination.count}
        onPaginationChange={handlePaginationChange}
        defaultPage={paginationData.pagination.defaultPage}
      />
    </CardWithHeader>
  );
};
