import { CardWithHeader } from "@/components/common/CardWithHeader/CardWithHeader";
import { TemperatureCardProps } from "./TemperatureCard.types";
import { Thermometer } from "lucide-react";
import { useGetTemperatureDevice } from "./TemperatureCard.hooks";

export const TemperatureCard = ({ id, icon }: TemperatureCardProps) => {
  const { data } = useGetTemperatureDevice(id);

  return (
    <CardWithHeader
      cardClassName="flex-grow"
      title={data?.name as string}
      icon={Thermometer || icon}
      hasSmallHeader
    >
      <div className="text-2xl font-bold">{data?.temperature}</div>
      <p className="text-xs text-muted-foreground">
        Humidity: {data?.humidity}%
      </p>
    </CardWithHeader>
  );
};
