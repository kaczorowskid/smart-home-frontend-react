import { RoomTileProps } from "./RoomTile.types";
import { imageRoomTileMapper } from "./RoomTile.utils";

export const RoomTile = ({ name, roomType, onClick }: RoomTileProps) => {
  return (
    <div
      className="h-[300px] my-5 relative hover:scale-105 transition-transform cursor-pointer lg:m-0"
      onClick={onClick}
    >
      <img
        className="object-cover h-full w-full rounded-xl"
        src={imageRoomTileMapper[roomType]}
      />
      <div className="absolute top-0 w-full h-full text-4xl">
        <div className="bg-black text-white h-full opacity-30 flex items-end justify-end p-2 rounded-xl">
          {name}
        </div>
      </div>
    </div>
  );
};
