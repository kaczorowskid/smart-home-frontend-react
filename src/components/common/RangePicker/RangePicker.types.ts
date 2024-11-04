import { Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";

export type RangePickerProps = {
  date: DateRange | undefined;
  setDate: Dispatch<SetStateAction<DateRange | undefined>>;
};
