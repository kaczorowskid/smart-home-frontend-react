import { RoomType } from "@/types/common.types";
import { ColumnType } from "../../../../components/common/Table/Table.types";
import { Room } from "@/api/types/common.types";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnType<Room>[] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Room Type",
    dataIndex: "roomType",
    key: "roomType",
    render: (roomType: RoomType) => <Badge variant="outline">{roomType}</Badge>,
  },
  {
    title: "Thermometer",
    dataIndex: "thermometers",
    key: "thermometers",
    render: (val) => val?.length || "-",
  },
  {
    title: "Blind",
    dataIndex: "blinds",
    key: "blinds",
    render: (val) => val?.length || "-",
  },
];
