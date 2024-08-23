import { CardWithHeader } from "@/components/common/CardWithHeader/CardWithHeader";
import { TemperatureCardProps } from "./TemperatureCard.types";
import { Dropdown } from "@/components/common/Dropdown/Dropdown";
import { CircleEllipsis } from "lucide-react";
import { useGetDeviceToDisplay } from "./TemperatureCard.hooks";

export const TemperatureCard = ({ order, items }: TemperatureCardProps) => {
  const { data } = useGetDeviceToDisplay({ order: String(order) });

  return (
    <CardWithHeader
      cardClassName="flex-grow"
      title={data?.name || ""}
      extra={<Dropdown items={items} triggerIcon={CircleEllipsis} />}
      hasSmallHeader
    >
      <div className="text-2xl font-bold">
        {data?.thermometers?.temperature}
      </div>
      <p className="text-xs text-muted-foreground">
        Humidity: {data?.thermometers?.humidity}%
      </p>
    </CardWithHeader>
  );
};
