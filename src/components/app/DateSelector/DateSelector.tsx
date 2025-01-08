import { cn } from "@/lib/utils";
import { type ChartType } from "@/types/common.types";
import { Cloud, Droplet, Thermometer } from "lucide-react";
import { RangePicker } from "@/components/common/RangePicker";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { chartTypeIconMapper } from "./DateSelector.utils";
import { type DateSelectorProps } from "./DateSelector.types";

export const DateSelector = ({
  date,
  setDate,
  chartType,
  setChartType,
  disabledTypeChange,
}: DateSelectorProps) => {
  const Icon = chartTypeIconMapper[chartType];

  const handleSetChartType = (value: string) => {
    setChartType?.(value as ChartType);
  };

  return (
    <div className="flex items-center gap-5">
      <RangePicker date={date} setDate={setDate} />
      <Popover>
        <PopoverTrigger disabled={disabledTypeChange}>
          <Icon
            className={cn(
              "cursor-pointer text-muted-foreground",
              disabledTypeChange
                ? "cursor-default"
                : "cursor-pointer hover:text-primary"
            )}
          />
        </PopoverTrigger>
        <PopoverContent className="w-full">
          <ToggleGroup
            type="single"
            defaultValue={chartType}
            onValueChange={handleSetChartType}
          >
            <ToggleGroupItem
              value="temperature"
              aria-label="Thermometer"
              disabled={chartType === "temperature"}
            >
              <Thermometer className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="humidity"
              aria-label="Droplet"
              disabled={chartType === "humidity"}
            >
              <Droplet className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="all"
              aria-label="Cloud"
              disabled={chartType === "all"}
            >
              <Cloud className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </PopoverContent>
      </Popover>
    </div>
  );
};
