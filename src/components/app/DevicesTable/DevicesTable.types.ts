import { Dispatch, SetStateAction } from "react";

export type DevicesTableProps = {
  setSelectedId?: Dispatch<SetStateAction<string>>;
  isDashboardPart?: boolean;
};
