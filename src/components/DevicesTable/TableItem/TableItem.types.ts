export type TableItemProps = {
  id: string;
  name: string;
  type: "THERMOMETER" | "BLIND";
  deviceId: string;
  selectedValue: string;
  isDashboardPart: boolean;
};
