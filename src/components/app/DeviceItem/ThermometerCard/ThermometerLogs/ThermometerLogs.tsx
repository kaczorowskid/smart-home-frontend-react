import { useState } from "react";
import { useIntl } from "react-intl";
import { Sheet } from "@/components/common/Sheet";
import { dateFormatter } from "@/utils/date.utils";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Logs, Droplet, Thermometer } from "lucide-react";
import { formatSensorValue } from "@/utils/formatSensorValueutil";
import { useGetOneSensorDataLogs } from "@/api/hooks/thermometerData.hooks";
import { SensorMinMax } from "./SensorMinMax/SensorMinMax";
import { type ThermometerLogsProps } from "./ThermometerLogs.types";

const { hourAndDate } = dateFormatter;

export const ThermometerLogs = ({ deviceId }: ThermometerLogsProps) => {
  const { formatMessage } = useIntl();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetOneSensorDataLogs({ id: deviceId || "" }, isOpen);

  const { max, min, data: sensorData } = data || {};

  const handleOpenSheet = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Sheet
      open={isOpen}
      triggerComponent={<Logs />}
      onOpenChange={handleOpenSheet}
      title={formatMessage({ id: "component.logs" })}
    >
      <ScrollArea className="h-full py-5">
        {sensorData?.length ? (
          <>
            <SensorMinMax
              maxHumidity={max?.humidity}
              minHumidity={min?.humidity}
              maxTemperature={max?.temperature}
              minTemperature={min?.temperature}
            />
            {sensorData.map(({ id, date, humidity, temperature }) => (
              <div key={id}>
                <div className="flex justify-between">
                  <span>{hourAndDate(date)}</span>

                  <div className="flex gap-1">
                    <span className="font-bold">
                      {formatSensorValue(temperature)}&deg;C
                    </span>
                    <Thermometer />
                  </div>
                  <div className="flex gap-1">
                    <span className="font-bold">
                      {formatSensorValue(humidity)}%
                    </span>
                    <Droplet />
                  </div>
                </div>
                <Separator className="my-2" />
              </div>
            ))}
          </>
        ) : (
          <span>No data</span>
        )}
      </ScrollArea>
    </Sheet>
  );
};
