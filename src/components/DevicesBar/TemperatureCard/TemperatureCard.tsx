import { CardWithHeader } from "@/components/common/CardWithHeader/CardWithHeader";
import { TemperatureCardProps } from "./TemperatureCard.types";
import { Thermometer } from "lucide-react";
import { useGetTemperatureDevice } from "./TemperatureCard.hooks";

export const TemperatureCard = ({ id }: TemperatureCardProps) => {
  const { data } = useGetTemperatureDevice({ id });

  const values = data?.thermometers[0];

  return (
    <CardWithHeader
      cardClassName="flex-grow"
      title={data?.name || ""}
      icon={Thermometer}
      hasSmallHeader
    >
      <div className="text-2xl font-bold">{values?.temperature || "-"}</div>
      <p className="text-xs text-muted-foreground">
        Humidity: {values?.humidity || "-"}%
      </p>
    </CardWithHeader>
  );
};
