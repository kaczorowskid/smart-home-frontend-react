import { RoomTileProps } from "./RoomTile.types";
import { imageRoomTileMapper } from "./RoomTile.utils";

export const RoomTile = ({ name, image, onClick }: RoomTileProps) => {
  return (
    <div
      className="h-[300px] relative hover:scale-105 transition-transform cursor-pointer"
      onClick={onClick}
    >
      <img
        className="object-cover h-full w-full rounded-xl"
        src={imageRoomTileMapper[image]}
      />
      <div className="absolute top-0 w-full h-full text-4xl">
        <div className="bg-black text-white h-full opacity-30 flex items-end justify-end p-2">
          {name}
        </div>
      </div>
    </div>
  );
};
