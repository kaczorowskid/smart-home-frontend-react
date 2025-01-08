import { FormattedMessage } from "react-intl";
import { type Blind, type Thermometer } from "@/api/types/common.types";
import { type ColumnType } from "@/components/common/Table/Table.types";
import {
  Blinds as BlindsIcon,
  Thermometer as ThermometerIcon,
} from "lucide-react";

export const columns: ColumnType<Blind | Thermometer>[] = [
  {
    key: "type",
    dataIndex: "type",
    title: <FormattedMessage id="table.type" />,
    render: (type: string) => {
      const icon = type === "BLIND" ? <BlindsIcon /> : <ThermometerIcon />;

      return <div className="flex justify-center">{icon}</div>;
    },
  },
  {
    key: "name",
    dataIndex: "name",
    title: <FormattedMessage id="table.name" />,
  },
  {
    key: "id",
    dataIndex: "id",
    title: <FormattedMessage id="table.id" />,
  },
  {
    key: "deviceId",
    dataIndex: "deviceId",
    title: <FormattedMessage id="table.device-id" />,
  },
];
