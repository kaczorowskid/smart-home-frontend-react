import { RoomType } from "@/types/common.types";
import { ColumnType } from "../../../../components/common/Table/Table.types";
import { Room } from "@/api/types/common.types";
import { Badge } from "@/components/ui/badge";
import { FormattedMessage } from "react-intl";
import { roomTypeMapper } from "./RoomsTable.utils";

export const columns: ColumnType<Room>[] = [
  {
    title: <FormattedMessage id="table.id" />,
    dataIndex: "id",
    key: "id",
  },
  {
    title: <FormattedMessage id="table.name" />,
    dataIndex: "name",
    key: "name",
  },
  {
    title: <FormattedMessage id="table.room-type" />,
    dataIndex: "roomType",
    key: "roomType",
    render: (roomType: RoomType) => (
      <Badge variant="outline">{roomTypeMapper[roomType]}</Badge>
    ),
  },
  {
    title: <FormattedMessage id="table.thermometer" />,
    dataIndex: "thermometers",
    key: "thermometers",
    render: (val) => val?.length || "-",
  },
  {
    title: <FormattedMessage id="table.blind" />,
    dataIndex: "blinds",
    key: "blinds",
    render: (val) => val?.length || "-",
  },
];
