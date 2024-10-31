import { CardWithHeader } from "@/components/common/CardWithHeader";
import { Dropdown } from "@/components/common/Dropdown";
import { Thermometer } from "lucide-react";
import { ThermometerCardProps } from "./ThermometerCard.types";

export const ThermometerCard = ({
  name,
  thermometerData,
  items,
  isLocalKey,
}: ThermometerCardProps) => {
  return (
    <CardWithHeader
      cardClassName="flex-grow"
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
      hasSmallHeader
    >
      <div className="text-6xl font-bold mb-5">
        {thermometerData?.[0]?.temperature}
      </div>
      <p className="text-xs text-muted-foreground">
        Humidity: {thermometerData?.[0]?.humidity}%
      </p>
    </CardWithHeader>
  );
};
