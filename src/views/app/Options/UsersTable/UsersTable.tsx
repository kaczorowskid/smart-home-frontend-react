import { FormattedMessage } from "react-intl";
import { Table } from "@/components/common/Table";
import { useGetAllUsers } from "@/api/hooks/user.hooks";
import { Searchbar } from "@/components/common/Searchbar";
import { usePagination } from "@/hooks/usePagination.hook";
import { Pagination } from "@/components/common/Pagination";
import { useFilteredData } from "@/hooks/useFilteredData.hook";
import { CardWithHeader } from "@/components/common/CardWithHeader";
import { columns } from "./UsersTable.schema";
import { type UsersTableProps } from "./UsersTable.types";

export const UsersTable = ({ setSelectedId }: UsersTableProps) => {
  const { data } = useGetAllUsers();

  const { filteredData, searchbarValue, setSearchbarValue } =
    useFilteredData(data);

  const { paginationData, handlePaginationChange } = usePagination({
    data: filteredData,
  });

  return (
    <CardWithHeader
      title={<FormattedMessage id="view.users" />}
      description={<FormattedMessage id="view.users-description" />}
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
