import { Card } from "@/components/ui/card";
import { formatSensorValue } from "@/utils/formatSensorValueutil";
import { Droplet, ArrowUp, ArrowDown, Thermometer } from "lucide-react";

type SensorMinMaxProps = {
  minHumidity: number | undefined;
  maxHumidity: number | undefined;
  minTemperature: number | undefined;
  maxTemperature: number | undefined;
};

export const SensorMinMax = ({
  maxHumidity,
  minHumidity,
  maxTemperature,
  minTemperature,
}: SensorMinMaxProps) => (
  <Card className="px-3 py-3 my-3">
    <>
      <div className="flex justify-between gap-5">
        <div className="flex gap-1 text-red-500 ">
          <ArrowDown />
          <span>{formatSensorValue(minTemperature)}</span>
        </div>
        <Thermometer />
        <div className="flex gap-1 text-green-500">
          <span>{formatSensorValue(maxTemperature)}</span>
          <ArrowUp />
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex gap-1 text-red-500">
          <ArrowDown />
          <span>{formatSensorValue(minHumidity)}</span>
        </div>
        <Droplet />
        <div className="flex gap-1 text-green-500">
          <span>{formatSensorValue(maxHumidity)}</span>
          <ArrowUp />
        </div>
      </div>
    </>
  </Card>
);
