import { useIntl } from "react-intl";
import { Sheet } from "@/components/common/Sheet";
import { dateFormatter } from "@/utils/date.utils";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Logs, Droplet, Thermometer } from "lucide-react";
import { type ThermometerLogsProps } from "./ThermometerLogs.types";

const { hourAndDate } = dateFormatter;

export const ThermometerLogs = ({ thermometerData }: ThermometerLogsProps) => {
  const { formatMessage } = useIntl();

  return (
    <Sheet
      triggerComponent={<Logs />}
      title={formatMessage({ id: "component.logs" })}
    >
      <ScrollArea className="h-full py-5">
        {thermometerData?.map(({ id, humidity, createdAt, temperature }) => (
          <div key={id}>
            <div className="flex justify-between">
              <span>{hourAndDate(createdAt)}</span>

              <div className="flex gap-1">
                <span className="font-bold">{temperature}&deg;C</span>
                <Thermometer />
              </div>
              <div className="flex gap-1">
                <span className="font-bold">{humidity}%</span>
                <Droplet />
              </div>
            </div>
            <Separator className="my-2" />
          </div>
        ))}
      </ScrollArea>
    </Sheet>
  );
};
