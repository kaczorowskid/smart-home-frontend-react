import { Blind, Room, Thermometer } from "./common.types";

export type GetAllRoomsResponse = Room[];

export type GetOneRoomPayload = {
  id: Room["id"];
};

export type GetOneRoomResponse = Room;

export type CreateRoomPayload = {
  name: Room["name"];
  thermometer?: {
    connect: { id: Thermometer["id"] }[];
  };
  blind?: {
    connect: { id: Blind["id"] }[];
  };
};

export type CreateRoomResponse = Room;

export type UpdateRoomPayload = {
  id: Room["id"];
} & Partial<CreateRoomPayload>;

export type UpdateRoomResponse = Room;

export type DeleteRoomPayload = {
  id: Room["id"];
};

export type DeleteRoomResponse = Room;
