import { Permission, Role } from "./common.types";

export type GetAllRolesResponse = Role[];

export type GetOneRolePayload = Pick<Role, "id">;

export type GetOneRoleResponse = Role;

export type CreateRolePayload = Pick<Role, "name"> & {
  permissions: Permission[];
};

export type CreateRoleResponse = Role;

export type UpdateRolePayload = Pick<Role, "id"> & Partial<CreateRolePayload>;

export type UpdateRoleResponse = Role;

export type DeleteRolePayload = Pick<Role, "id">;

export type DeleteRoleResponse = Role;

export type GetAllPermissionsResponse = Permission[];
