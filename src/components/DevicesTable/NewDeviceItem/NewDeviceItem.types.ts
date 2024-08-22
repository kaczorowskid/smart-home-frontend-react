import { SetStateAction } from "react";

export type NewDeviceItemProps = {
  selectedValue: string;
  setSelectedValue: (value: SetStateAction<string>) => void;
  isDashboardPart: boolean;
};
