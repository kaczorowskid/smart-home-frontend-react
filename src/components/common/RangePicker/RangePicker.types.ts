import { type DateRange } from "react-day-picker";
import { type Dispatch, type SetStateAction } from "react";

export type RangePickerProps = {
  date: DateRange | undefined;
  setDate: Dispatch<SetStateAction<DateRange | undefined>>;
};
