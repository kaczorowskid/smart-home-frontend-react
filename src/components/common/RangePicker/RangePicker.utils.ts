import { format } from "date-fns";
import { DateRange } from "react-day-picker";

export const displayDate = (date: DateRange | undefined) => {
  switch (true) {
    case !date?.from:
      return "Pick a date";
    case !date?.to:
      return format(date.from, "LLL dd, y");
    default:
      return `${format(date.from, "LLL dd, y")} - ${format(
        date.to,
        "LLL dd, y"
      )}`;
  }
};
