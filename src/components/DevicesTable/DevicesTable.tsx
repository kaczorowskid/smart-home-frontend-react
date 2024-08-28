import { CardWithHeader } from "../common/CardWithHeader/CardWithHeader";
import { Pagination } from "../common/Pagination/Pagination";
import { Accordion, AccordionItem } from "../ui/accordion";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableItem } from "./TableItem/TableItem";
import { useState } from "react";
import { ExtraButton } from "./ExtraButton/ExtraButton";
import { DevicesTableProps } from "./DevicesTable.types";
import { useGetAllDevices } from "./DevicesTable.hooks";
import { NewDeviceItem } from "./NewDeviceItem/NewDeviceItem";

export const DevicesTable = ({ isDashboardPart }: DevicesTableProps) => {
  const [selectedValue, setSelectedValue] = useState("");
  const { data } = useGetAllDevices();

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <CardWithHeader
      title="Devices"
      description="Table of devices"
      extra={<ExtraButton isDashboardPart={!!isDashboardPart} />}
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
        {data?.map(({ id, name, type, deviceId }) => (
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
      <Pagination />
    </CardWithHeader>
  );
};
