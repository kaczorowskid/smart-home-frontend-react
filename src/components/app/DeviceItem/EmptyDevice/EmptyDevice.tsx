import { CardWithHeader } from "@/components/common/CardWithHeader";
import { EmptyDeviceProps } from "./EmptyDevice.types";
import { Dropdown } from "@/components/common/Dropdown";
import { Button } from "@/components/ui/button";
import { FormattedMessage, useIntl } from "react-intl";

export const EmptyDevice = ({ items }: EmptyDeviceProps) => {
  const intl = useIntl();

  return (
    <CardWithHeader
      title={intl.formatMessage({ id: "component.empty-device" })}
      contentClassName="h-full"
      hasSmallHeader
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
};
