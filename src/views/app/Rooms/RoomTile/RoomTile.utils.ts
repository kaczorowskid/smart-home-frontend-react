import bedroom from "@/assets/images/bedroom.jpg";
import kitchen from "@/assets/images/kitchen.jpg";
import backyard from "@/assets/images/backyard.jpg";
import bathroom from "@/assets/images/bathroom.jpg";
import { type RoomType } from "@/api/types/common.types";
import livingRoom from "@/assets/images/living-room.jpg";

export const imageRoomTileMapper: Record<RoomType, string> = {
  BEDROOM: bedroom,
  KITCHEN: kitchen,
  BACKYARD: backyard,
  BATHROOM: bathroom,
  LIVINGROOM: livingRoom,
};
