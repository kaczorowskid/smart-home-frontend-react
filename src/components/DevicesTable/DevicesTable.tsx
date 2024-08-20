import { CardWithHeader } from "../common/CardWithHeader/CardWithHeader";
import { Pagination } from "../common/Pagination/Pagination";
import { Accordion, AccordionItem } from "../ui/accordion";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableItem } from "./TableItem/TableItem";
import { useState } from "react";
import { ExtraButton } from "./ExtraButton/ExtraButton";
import { DevicesTableProps } from "./DevicesTable.types";
import { useGetAllDevices } from "./DevicesTable.hooks";

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
        {data?.map(({ id, name, type }) => (
          <AccordionItem key={id} value={id}>
            <TableHeader id={id} name={name} status="online" type={type} />
            <TableItem
              id={id}
              name={name}
              type={type}
              selectedValue={selectedValue}
              isDashboardPart={!!isDashboardPart}
            />
          </AccordionItem>
        ))}
      </Accordion>
      <Pagination />
    </CardWithHeader>
  );
};
