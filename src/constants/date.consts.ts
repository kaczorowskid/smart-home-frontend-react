import { endOfDay, startOfDay } from "date-fns";
import { DateRange } from "react-day-picker";

export const dateLastDay: DateRange = {
  from: startOfDay(new Date()),
  to: endOfDay(new Date()),
};
