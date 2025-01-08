import { type DateRange } from "react-day-picker";
import { type ChartType } from "@/types/common.types";
import { type Dispatch, type SetStateAction } from "react";

export type DateSelectorProps = {
  chartType: ChartType;
  date: DateRange | undefined;
  disabledTypeChange?: boolean;
  setDate: Dispatch<SetStateAction<DateRange | undefined>>;
  setChartType: undefined | Dispatch<SetStateAction<ChartType>>;
};
