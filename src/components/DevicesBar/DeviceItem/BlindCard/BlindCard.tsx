import { CardWithHeader } from "@/components/common/CardWithHeader/CardWithHeader";
import { Dropdown } from "@/components/common/Dropdown/Dropdown";
import { Blinds } from "lucide-react";
import { BlindCardProps } from "./BlindCard.types";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export const BlindCard = ({ name, blinds, items }: BlindCardProps) => {
  const [val, setVal] = useState(0);

  const handleChangeBlind = (value: [number]) => {
    setVal(value[0]);
  };

  return (
    <CardWithHeader
      cardClassName="flex-grow"
      icon={Blinds}
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
      <div className="text-6xl font-bold mb-5">{val}%</div>
      <Slider onValueChange={handleChangeBlind} max={100} step={25} />
    </CardWithHeader>
  );
};
