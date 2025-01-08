import { FormattedMessage } from "react-intl";
import { Button } from "@/components/ui/button";
import { Dropdown } from "@/components/common/Dropdown";
import { CardWithHeader } from "@/components/common/CardWithHeader";
import { type EmptyDeviceProps } from "./EmptyDevice.types";

export const EmptyDevice = ({ items }: EmptyDeviceProps) => (
  <CardWithHeader
    hasSmallHeader
    contentClassName="h-full"
    title={<FormattedMessage id="component.empty-device" />}
  >
    <div className="w-full h-[70%] flex justify-center items-center">
      <Dropdown
        items={items}
        triggerComponent={
          <Button variant="outline">
            <FormattedMessage id="component.click-to-attach-device" />
          </Button>
        }
      />
    </div>
  </CardWithHeader>
);
