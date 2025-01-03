import { CardWithHeader } from "@/components/common/CardWithHeader";
import { Pagination } from "@/components/common/Pagination";
import { Table } from "@/components/common/Table";
import { useFilteredData } from "@/hooks/useFilteredData.hook";
import { usePagination } from "@/hooks/usePagination.hook";
import { Searchbar } from "@/components/common/Searchbar";
import { FormattedMessage } from "react-intl";
import { RolesTableProps } from "./RolesTable.types";
import { columns } from "./RolesTable.schema";
import { useGetAllRoles } from "@/api/hooks/role.hooks";

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
        data={paginationData.data || []}
        rowKey={(record) => record.id}
        onRowClick={({ id }) => setSelectedId(id)}
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
