import { apiUrls } from "../apiUrls";
import { Request } from "../Request";
import {
  type CreateRolePayload,
  type DeleteRolePayload,
  type GetOneRolePayload,
  type UpdateRolePayload,
  type CreateRoleResponse,
  type DeleteRoleResponse,
  type GetOneRoleResponse,
  type UpdateRoleResponse,
  type GetAllRolesResponse,
  type GetAllPermissionsResponse,
} from "../types/role.types";

const request = new Request();

export const getAllRoles = async (): Promise<GetAllRolesResponse> =>
  request.get(apiUrls.role.base);

export const getOneRole = async (
  payload: GetOneRolePayload
): Promise<GetOneRoleResponse> => request.get(apiUrls.role.getRole(payload.id));

export const createRole = async (
  payload: CreateRolePayload
): Promise<CreateRoleResponse> => request.post(apiUrls.role.base, payload);

export const updateRole = async (
  payload: UpdateRolePayload
): Promise<UpdateRoleResponse> =>
  request.patch(apiUrls.role.getRole(payload.id), payload);

export const deleteRole = async (
  payload: DeleteRolePayload
): Promise<DeleteRoleResponse> =>
  request.delete(apiUrls.role.getRole(payload.id), payload);

export const getAllPermissions = async (): Promise<GetAllPermissionsResponse> =>
  request.get(apiUrls.role.permissions);
