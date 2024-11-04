import { DateSelectorProps } from "./DateSelector.types";
import { RangePicker } from "@/components/common/RangePicker";
import { chartTypeIconMapper } from "./DateSelector.utils";
import { Cloud, Droplet, Thermometer } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ChartType } from "@/types/common.types";

export const DateSelector = ({
  chartType,
  setChartType,
  date,
  setDate,
}: DateSelectorProps) => {
  const Icon = chartTypeIconMapper[chartType];

  const handleSetChartType = (value: string) => {
    setChartType?.(value as ChartType);
  };

  return (
    <div className="flex items-center gap-14">
      <RangePicker date={date} setDate={setDate} />
      <Popover>
        <PopoverTrigger>
          <Icon className="cursor-pointer text-muted-foreground hover:text-primary" />
        </PopoverTrigger>
        <PopoverContent className="w-full">
          <ToggleGroup
            type="single"
            defaultValue={chartType}
            onValueChange={handleSetChartType}
          >
            <ToggleGroupItem value="temperature" aria-label="Thermometer">
              <Thermometer className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="humidity" aria-label="Droplet">
              <Droplet className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="all" aria-label="Cloud">
              <Cloud className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </PopoverContent>
      </Popover>
    </div>
  );
};
