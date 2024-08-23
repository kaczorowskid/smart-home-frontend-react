import { CardWithHeader } from "@/components/common/CardWithHeader/CardWithHeader";
import { Dropdown } from "@/components/common/Dropdown/Dropdown";
import { CircleEllipsis, Thermometer } from "lucide-react";
import { ThermometerCardProps } from "./ThermometerCard.types";

export const ThermometerCard = ({
  name,
  thermometers,
  items,
}: ThermometerCardProps) => {
  return (
    <CardWithHeader
      cardClassName="flex-grow"
      title={name}
      extra={<Dropdown items={items} triggerIcon={CircleEllipsis} />}
      hasSmallHeader
    >
      <div className="flex justify-between items-center">
        <div className="text-6xl font-bold mb-5">
          {thermometers?.temperature}
        </div>
        <Thermometer className="text-muted-foreground" />
      </div>
      <p className="text-xs text-muted-foreground">
        Humidity: {thermometers?.humidity}%
      </p>
    </CardWithHeader>
  );
};
