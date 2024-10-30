import { CardWithHeader } from "@/components/common/CardWithHeader";
import { Dropdown } from "@/components/common/Dropdown";
import { Blinds } from "lucide-react";
import { BlindCardProps } from "./BlindCard.types";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export const BlindCard = ({ name, blindValue, items }: BlindCardProps) => {
  const [value, setValue] = useState(blindValue);

  const handleChangeBlind = (value: [number]) => {
    setValue(value[0]);
  };

  return (
    <CardWithHeader
      cardClassName="flex-grow"
      icon={Blinds}
      title={
        items ? (
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
      <div className="text-6xl font-bold mb-5">{value}%</div>
      <Slider
        onValueChange={handleChangeBlind}
        defaultValue={[value]}
        max={100}
        step={25}
      />
    </CardWithHeader>
  );
};
