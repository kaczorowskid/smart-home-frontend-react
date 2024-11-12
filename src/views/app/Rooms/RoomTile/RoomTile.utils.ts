import backyard from "@/assets/images/backyard.jpg";
import bathroom from "@/assets/images/bathroom.jpg";
import bedroom from "@/assets/images/bedroom.jpg";
import kitchen from "@/assets/images/kitchen.jpg";
import livingRoom from "@/assets/images/living-room.jpg";
import { RoomType } from "@/types/common.types";

export const imageRoomTileMapper: Record<RoomType, string> = {
  BACKYARD: backyard,
  BATHROOM: bathroom,
  BEDROOM: bedroom,
  KITCHEN: kitchen,
  LIVINGROOM: livingRoom,
};
