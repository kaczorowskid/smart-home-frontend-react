import { type Room, type Blind, type Thermometer } from "./common.types";

export type GetOneRoomResponse = Room;

export type CreateRoomResponse = Room;

export type UpdateRoomResponse = Room;

export type DeleteRoomResponse = Room;

export type GetAllRoomsResponse = Room[];

export type GetOneRoomPayload = Pick<Room, "id">;

export type DeleteRoomPayload = Pick<Room, "id">;

export type UpdateRoomPayload = Pick<Room, "id"> & Partial<CreateRoomPayload>;

export type CreateRoomPayload = Pick<Room, "name" | "roomType"> & {
  blinds?: { id: Blind["id"] }[];
  thermometers?: { id: Thermometer["id"] }[];
};
