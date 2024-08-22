import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TableItem } from "../TableItem/TableItem";
import { NewDeviceItemProps } from "./NewDeviceItem.types";

export const NewDeviceItem = ({
  selectedValue,
  setSelectedValue,
  isDashboardPart,
}: NewDeviceItemProps) => (
  <AccordionItem className={`${isDashboardPart && "hidden"}`} value="new item">
    <AccordionTrigger className="w-full flex justify-center">
      <div className="px-5">Create new item</div>
    </AccordionTrigger>
    <TableItem
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      isDashboardPart={!!isDashboardPart}
    />
  </AccordionItem>
);
