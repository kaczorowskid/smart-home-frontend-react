import { CardWithHeader } from "@/components/common/CardWithHeader/CardWithHeader";
import { Dropdown } from "@/components/common/Dropdown/Dropdown";
import { Blinds, CircleEllipsis } from "lucide-react";
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
      title={name}
      extra={<Dropdown items={items} triggerIcon={CircleEllipsis} />}
      hasSmallHeader
    >
      <div className="flex justify-between items-center">
        <div className="text-6xl font-bold mb-5">{val}%</div>
        <Blinds className="text-muted-foreground" />
      </div>
      <Slider onValueChange={handleChangeBlind} max={100} step={25} />
    </CardWithHeader>
  );
};
