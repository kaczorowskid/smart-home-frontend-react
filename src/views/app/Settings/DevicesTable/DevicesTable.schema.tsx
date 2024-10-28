import {
  Blinds as BlindsIcon,
  Thermometer as ThermometerIcon,
} from "lucide-react";
import { ColumnType } from "../../../../components/common/Table/Table.types";
import { Blind, Thermometer } from "@/api/types/common.types";
import { InfoBadge } from "@/components/common/InfoBadge";

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
    dataIndex: "status", //TODO: add status type
    key: "status",
    render: () => <InfoBadge type="success">online</InfoBadge>,
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
