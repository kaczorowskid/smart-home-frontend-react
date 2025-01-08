import { endOfDay, startOfDay } from "date-fns";
import { type DateRange } from "react-day-picker";

export const dateLastDay: DateRange = {
  to: endOfDay(new Date()),
  from: startOfDay(new Date()),
};
