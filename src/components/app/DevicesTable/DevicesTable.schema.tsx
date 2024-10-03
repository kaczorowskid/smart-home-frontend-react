import {
  Blinds as BlindsIcon,
  Thermometer as ThermometerIcon,
} from "lucide-react";
import { ColumnType } from "../../common/Table/Table.types";
import { Badge } from "../../ui/badge";
import { Blind, Thermometer } from "@/api/types/common.types";

export const columns: ColumnType<Thermometer | Blind>[] = [
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (type: string) => {
      const icon = type === "BLIND" ? <BlindsIcon /> : <ThermometerIcon />;

      return <div className="flex justify-center">{icon}</div>;
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: () => <Badge variant="outline">online</Badge>,
  },
  {
    title: "ID",
    key: "id",
    dataIndex: "id",
  },
  {
    title: "Device ID",
    key: "deviceId",
    dataIndex: "deviceId",
  },
];
