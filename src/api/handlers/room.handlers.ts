import { apiUrls } from "../apiUrls";
import { Request } from "../Request";
import {
  type CreateRoomPayload,
  type DeleteRoomPayload,
  type GetOneRoomPayload,
  type UpdateRoomPayload,
  type CreateRoomResponse,
  type DeleteRoomResponse,
  type GetOneRoomResponse,
  type UpdateRoomResponse,
  type GetAllRoomsResponse,
} from "../types/room.types";

const request = new Request();

export const getAllRooms = async (): Promise<GetAllRoomsResponse> =>
  request.get(apiUrls.room.base);

export const getOneRoom = async (
  payload: GetOneRoomPayload
): Promise<GetOneRoomResponse> => request.get(apiUrls.room.getRoom(payload.id));

export const createRoom = async (
  payload: CreateRoomPayload
): Promise<CreateRoomResponse> => request.post(apiUrls.room.base, payload);

export const updateRoom = async (
  payload: UpdateRoomPayload
): Promise<UpdateRoomResponse> =>
  request.patch(apiUrls.room.getRoom(payload.id), payload);

export const deleteRoom = async (
  payload: DeleteRoomPayload
): Promise<DeleteRoomResponse> =>
  request.delete(apiUrls.room.getRoom(payload.id), payload);
