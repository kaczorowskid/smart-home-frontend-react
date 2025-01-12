import { Badge } from "@/components/ui/badge";
import { FormattedMessage } from "react-intl";
import { type Room } from "@/api/types/common.types";
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
    render: (roomType: Room["roomType"]) => (
      <Badge variant="outline">{roomTypeMapper[roomType]}</Badge>
    ),
  },
  {
    key: "thermometers",
    dataIndex: "thermometers",
    title: <FormattedMessage id="table.thermometer" />,
    render: (thermometers: Room["thermometers"]) => thermometers?.length || "-",
  },
  {
    key: "blinds",
    dataIndex: "blinds",
    title: <FormattedMessage id="table.blind" />,
    render: (blinds: Room["blinds"]) => blinds?.length || "-",
  },
];
