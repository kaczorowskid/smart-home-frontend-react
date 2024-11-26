import {
  Blinds as BlindsIcon,
  Thermometer as ThermometerIcon,
} from "lucide-react";
import { ColumnType } from "../../../../components/common/Table/Table.types";
import { Blind, Thermometer } from "@/api/types/common.types";
import { FormattedMessage } from "react-intl";

export const columns: ColumnType<Thermometer | Blind>[] = [
  {
    title: <FormattedMessage id="table.type" />,
    dataIndex: "type",
    key: "type",
    render: (type: string) => {
      const icon = type === "BLIND" ? <BlindsIcon /> : <ThermometerIcon />;

      return <div className="flex justify-center">{icon}</div>;
    },
  },
  {
    title: <FormattedMessage id="table.name" />,
    dataIndex: "name",
    key: "name",
  },
  {
    title: <FormattedMessage id="table.id" />,
    key: "id",
    dataIndex: "id",
  },
  {
    title: <FormattedMessage id="table.device-id" />,
    key: "deviceId",
    dataIndex: "deviceId",
  },
];
