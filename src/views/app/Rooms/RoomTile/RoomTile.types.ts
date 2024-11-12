import { RoomType } from "@/types/common.types";

export type RoomTileProps = {
  name: string;
  roomType: RoomType;
  onClick: () => void;
};
