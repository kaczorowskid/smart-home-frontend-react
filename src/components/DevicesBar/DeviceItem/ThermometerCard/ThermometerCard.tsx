import { CardWithHeader } from "@/components/common/CardWithHeader/CardWithHeader";
import { Dropdown } from "@/components/common/Dropdown/Dropdown";
import { Thermometer } from "lucide-react";
import { ThermometerCardProps } from "./ThermometerCard.types";

export const ThermometerCard = ({
  name,
  thermometers,
  items,
}: ThermometerCardProps) => {
  return (
    <CardWithHeader
      cardClassName="flex-grow"
      icon={Thermometer}
      title={
        <Dropdown
          items={items}
          triggerComponent={
            <div className="cursor-pointer hover:text-muted-foreground">
              {name}
            </div>
          }
        />
      }
      hasSmallHeader
    >
      <div className="text-6xl font-bold mb-5">
        {thermometers?.[0]?.temperature}
      </div>
      <p className="text-xs text-muted-foreground">
        Humidity: {thermometers?.[0]?.humidity}%
      </p>
    </CardWithHeader>
  );
};
