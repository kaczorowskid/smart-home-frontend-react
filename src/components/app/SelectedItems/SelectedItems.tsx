import { forwardRef } from "react";
import { Badge } from "@/components/ui/badge";
import { type SelectedItemsProps } from "./SelectedItems.types";

export const SelectedItems = forwardRef<
  HTMLDivElement,
  SelectedItemsProps & React.HTMLProps<HTMLDivElement>
>(({ label, items, selectedIds, noSelectedItemsText, ...props }, ref) => {
  const itemsToRender = items?.filter((item) => selectedIds?.includes(item.id));

  return (
    <>
      <span className="font-medium block text-start pt-2">{label}</span>
      <div
        ref={ref}
        {...props}
        className="border rounded-md min-h-10 flex flex-wrap items-center my-2 cursor-pointer"
      >
        {!itemsToRender?.length ? (
          <span className="ml-2">{noSelectedItemsText}</span>
        ) : (
          itemsToRender?.map((item) => (
            <Badge key={item.id} className="mx-1 my-1">
              {item.label}
            </Badge>
          ))
        )}
      </div>
    </>
  );
});
