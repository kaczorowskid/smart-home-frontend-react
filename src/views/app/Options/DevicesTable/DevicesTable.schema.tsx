import { FormattedMessage } from "react-intl";
import { Badge } from "@/components/ui/badge";
import { type CommonDevice } from "@/api/types/common.types";
import { type ColumnType } from "@/components/common/Table/Table.types";
import {
  deviceStatusMapper,
  deviceTypeIconMapper,
  deviceStatusColorMapper,
} from "./DevicesTable.utils";

export const columns: ColumnType<CommonDevice>[] = [
  {
    key: "type",
    dataIndex: "type",
    title: <FormattedMessage id="table.type" />,
    render: (type: CommonDevice["type"]) => (
      <div className="flex justify-center">{deviceTypeIconMapper[type]}</div>
    ),
  },
  {
    key: "name",
    dataIndex: "name",
    title: <FormattedMessage id="table.name" />,
  },
  {
    key: "status",
    dataIndex: "status",
    title: <FormattedMessage id="table.status" />,
    render: (status: undefined | CommonDevice["status"]) => {
      //Temporary solution until the blinds device has a functioning status field
      const badgeColor =
        deviceStatusColorMapper[status as CommonDevice["status"]] ||
        deviceStatusColorMapper.offline;
      const deviceStatus =
        deviceStatusMapper[status as CommonDevice["status"]] ||
        deviceStatusMapper.offline;

      return (
        <Badge variant="outline" className={badgeColor}>
          {deviceStatus}
        </Badge>
      );
    },
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
