import { FormattedMessage } from "react-intl";
import { dateFormatter } from "@/utils/date.utils";
import { Dropdown } from "@/components/common/Dropdown";
import { formatSensorValue } from "@/utils/formatSensorValueutil";
import { CardWithHeader } from "@/components/common/CardWithHeader";
import { Loader2, ArrowUp, ArrowDown, Thermometer } from "lucide-react";
import { ThermometerLogs } from "./ThermometerLogs";
import { type ThermometerCardProps } from "./ThermometerCard.types";
import { DeviceStatusNotification } from "./DeviceStatusNotification";

const { onlyHour } = dateFormatter;

export const ThermometerCard = ({
  min,
  max,
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
            <div className="flex cursor-pointer hover:text-muted-foreground">
              <div className="ml-1 mt-1 mr-3">
                <DeviceStatusNotification deviceStatus={deviceStatus} />
              </div>
              {name}
            </div>
          }
        />
      ) : (
        <span>{name}</span>
      )
    }
  >
    {!(temperature && humidity) ? (
      <div className="flex justify-center items-center">
        <Loader2 className="h-20 w-20 animate-spin" />
      </div>
    ) : (
      <>
        <div className="flex items-end mb-5">
          <div className="mr-2">
            <div className="flex gap-1 text-green-500 ">
              <ArrowUp />
              <span>{formatSensorValue(max?.temperature)}</span>
            </div>
            <div className="flex gap-1 text-red-500 ">
              <ArrowDown />
              <span>{formatSensorValue(min?.temperature)}</span>
            </div>
          </div>
          <div className="w-full flex items-end justify-between">
            <div className="text-6xl font-bold">
              {formatSensorValue(temperature)}
            </div>
            <ThermometerLogs deviceId={deviceId} />
          </div>
        </div>

        <p className="flex text-xs text-muted-foreground justify-between">
          <span>
            <FormattedMessage id="component.humidity" />
            {formatSensorValue(humidity)}%
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
