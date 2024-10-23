import { Badge } from "@/components/ui/badge";
import { SelectedItemsProps } from "./SelectedItems.types";
import { forwardRef } from "react";

export const SelectedItems = forwardRef<
  HTMLDivElement,
  SelectedItemsProps & React.HTMLProps<HTMLDivElement>
>(({ label, noSelectedItemsText, items, selectedIds, ...props }, ref) => {
  const itemsToRender = items?.filter((item) => selectedIds.includes(item.id));

  return (
    <>
      <span className="font-medium">{label}</span>
      <div
        ref={ref}
        {...props}
        className="border rounded-md min-h-10 flex flex-wrap items-center my-2 cursor-pointer"
      >
        {!itemsToRender?.length ? (
          <span className="ml-2">{noSelectedItemsText}</span>
        ) : (
          itemsToRender?.map((item) => (
            <Badge className="mx-1 my-1">{item.label}</Badge>
          ))
        )}
      </div>
    </>
  );
});
