import { SetStateAction } from "react";

export type TableItemProps = {
  id?: string;
  name?: string;
  type?: "THERMOMETER" | "BLIND";
  deviceId?: string;
  selectedValue: string;
  setSelectedValue: (value: SetStateAction<string>) => void;
  isDashboardPart: boolean;
};
