import { endOfDay, startOfDay, subDays } from "date-fns";
import { DateRange } from "react-day-picker";

export const dateLastDay: DateRange = {
  from: startOfDay(subDays(new Date(), 1)),
  to: endOfDay(new Date()),
};
