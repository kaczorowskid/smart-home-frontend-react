import { Blind, Room, Thermometer } from "./common.types";

export type GetAllRoomsResponse = Room[];

export type GetOneRoomPayload = Pick<Room, "id">;

export type GetOneRoomResponse = Room;

export type CreateRoomPayload = Pick<Room, "name" | "roomType"> & {
  thermometers?: { id: Thermometer["id"] }[];
  blinds?: { id: Blind["id"] }[];
};

export type CreateRoomResponse = Room;

export type UpdateRoomPayload = Pick<Room, "id"> & Partial<CreateRoomPayload>;

export type UpdateRoomResponse = Room;

export type DeleteRoomPayload = Pick<Room, "id">;

export type DeleteRoomResponse = Room;
