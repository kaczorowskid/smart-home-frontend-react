import { useState } from "react";
import { Blinds } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Dropdown } from "@/components/common/Dropdown";
import { CardWithHeader } from "@/components/common/CardWithHeader";
import { type BlindCardProps } from "./BlindCard.types";

export const BlindCard = ({
  name,
  items,
  blindValue,
  isLocalKey,
}: BlindCardProps) => {
  const [value, setValue] = useState(blindValue);

  const handleChangeBlind = (value: [number]) => {
    setValue(value[0]);
  };

  return (
    <CardWithHeader
      icon={Blinds}
      hasSmallHeader
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
    >
      <div className="text-6xl font-bold mb-5">{value}%</div>
      <Slider
        max={100}
        step={25}
        defaultValue={[value]}
        onValueChange={handleChangeBlind}
      />
    </CardWithHeader>
  );
};
