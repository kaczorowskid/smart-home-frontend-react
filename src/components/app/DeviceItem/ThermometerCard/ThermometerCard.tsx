import { FormattedMessage } from "react-intl";
import { dateFormatter } from "@/utils/date.utils";
import { Loader2, Thermometer } from "lucide-react";
import { Dropdown } from "@/components/common/Dropdown";
import { CardWithHeader } from "@/components/common/CardWithHeader";
import { ThermometerLogs } from "./ThermometerLogs";
import { type ThermometerCardProps } from "./ThermometerCard.types";
import { DeviceStatusNotification } from "./DeviceStatusNotification";

const { onlyHour } = dateFormatter;

export const ThermometerCard = ({
  name,
  date,
  items,
  battery,
  humidity,
  deviceId,
  isLocalKey,
  temperature,
  deviceStatus,
}: ThermometerCardProps) => (
  <CardWithHeader
    hasSmallHeader
    icon={Thermometer}
    title={
      isLocalKey ? (
        <Dropdown
          items={items}
          triggerComponent={
            <div className="cursor-pointer hover:text-muted-foreground">
              {name}
            </div>
          }
        />
      ) : (
        <span>{name}</span>
      )
    }
  >
    {!temperature ? (
      <div className="flex justify-center items-center">
        <Loader2 className="h-20 w-20 animate-spin" />
      </div>
    ) : (
      <>
        <div className="flex items-end mb-5">
          <div className="mb-2 mr-2">
            <DeviceStatusNotification deviceStatus={deviceStatus} />
          </div>
          <div className="w-full flex items-end justify-between">
            <div className="text-6xl font-bold">{temperature}</div>
            <ThermometerLogs deviceId={deviceId} />
          </div>
        </div>

        <p className="flex text-xs text-muted-foreground justify-between">
          <span>
            <FormattedMessage id="component.humidity" />
            {humidity}%
          </span>
          <span>
            <FormattedMessage id="component.last" />
            {onlyHour(date)}
          </span>
          <span>
            <FormattedMessage id="component.battery" />
            {battery}%
          </span>
        </p>
      </>
    )}
  </CardWithHeader>
);
