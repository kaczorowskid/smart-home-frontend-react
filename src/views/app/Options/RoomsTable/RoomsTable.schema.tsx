import { Badge } from "@/components/ui/badge";
import { FormattedMessage } from "react-intl";
import { type Room, type RoomType } from "@/api/types/common.types";
import { type ColumnType } from "@/components/common/Table/Table.types";
import { roomTypeMapper } from "./RoomsTable.utils";

export const columns: ColumnType<Room>[] = [
  {
    key: "id",
    dataIndex: "id",
    title: <FormattedMessage id="table.id" />,
  },
  {
    key: "name",
    dataIndex: "name",
    title: <FormattedMessage id="table.name" />,
  },
  {
    key: "roomType",
    dataIndex: "roomType",
    title: <FormattedMessage id="table.room-type" />,
    render: (roomType: RoomType) => (
      <Badge variant="outline">{roomTypeMapper[roomType]}</Badge>
    ),
  },
  {
    key: "thermometers",
    dataIndex: "thermometers",
    render: (val) => val?.length || "-",
    title: <FormattedMessage id="table.thermometer" />,
  },
  {
    key: "blinds",
    dataIndex: "blinds",
    render: (val) => val?.length || "-",
    title: <FormattedMessage id="table.blind" />,
  },
];
