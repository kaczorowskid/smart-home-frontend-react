import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { type RangePickerProps } from "./RangePicker.types";

export const RangePicker = ({ date, setDate }: RangePickerProps) => {
  return (
    <div className="grid gap-2 text-muted-foreground">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-[50px] overflow-hidden justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            required
            autoFocus
            mode="range"
            selected={date}
            onSelect={setDate}
            defaultMonth={date?.from}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
