import { ChartType } from "@/types/common.types";
import { Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";

export type DateSelectorProps = {
  disabledTypeChange?: boolean;
  chartType: ChartType;
  setChartType: Dispatch<SetStateAction<ChartType>> | undefined;
  date: DateRange | undefined;
  setDate: Dispatch<SetStateAction<DateRange | undefined>>;
};
