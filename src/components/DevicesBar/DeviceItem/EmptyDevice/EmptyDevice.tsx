import { CardWithHeader } from "@/components/common/CardWithHeader/CardWithHeader";
import { EmptyDeviceProps } from "./EmptyDevice.types";
import { Dropdown } from "@/components/common/Dropdown/Dropdown";
import { Button } from "@/components/ui/button";

export const EmptyDevice = ({ items }: EmptyDeviceProps) => {
  return (
    <CardWithHeader
      cardClassName="flex-grow"
      title="Empty device"
      contentClassName="h-full"
      hasSmallHeader
    >
      <div className="w-full h-[70%] flex justify-center items-center">
        <Dropdown
          items={items}
          triggerComponent={<Button variant="outline">Attach device</Button>}
        />
      </div>
    </CardWithHeader>
  );
};
