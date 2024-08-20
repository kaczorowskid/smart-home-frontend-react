export type TableItemProps = {
  id: string;
  name: string;
  type: "THERMOMETER" | "BLIND";
  selectedValue: string;
  isDashboardPart: boolean;
};
