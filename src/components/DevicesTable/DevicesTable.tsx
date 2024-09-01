import { CardWithHeader } from "../common/CardWithHeader";
import { Pagination } from "../common/Pagination";
import { Accordion, AccordionItem } from "../ui/accordion";
import { TableHeader } from "./TableHeader";
import { TableItem } from "./TableItem";
import { useState } from "react";
import { ExtraButton } from "./ExtraButton";
import { DevicesTableProps } from "./DevicesTable.types";
import {
  useFilteredData,
  useGetAllDevices,
  usePagination,
} from "./DevicesTable.hooks";
import { NewDeviceItem } from "./NewDeviceItem";

export const DevicesTable = ({ isDashboardPart }: DevicesTableProps) => {
  const [selectedValue, setSelectedValue] = useState("");
  const { data } = useGetAllDevices();

  const { filteredData, searchbarValue, setSearchbarValue } =
    useFilteredData(data);

  const { paginationData, handlePaginationChange } = usePagination({
    data: filteredData,
    defaultPage: 1,
    pageSize: 5,
  });

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };

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
      <Accordion
        collapsible
        type="single"
        value={selectedValue}
        onValueChange={handleValueChange}
      >
        <NewDeviceItem
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          isDashboardPart={!!isDashboardPart}
        />
        {paginationData?.data?.map(({ id, name, type, deviceId }) => (
          <AccordionItem key={id} value={id}>
            <TableHeader id={id} name={name} status="online" type={type} />
            <TableItem
              id={id}
              name={name}
              type={type}
              deviceId={deviceId}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              isDashboardPart={!!isDashboardPart}
            />
          </AccordionItem>
        ))}
      </Accordion>
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
