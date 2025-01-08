import { type Role, type Permission } from "./common.types";

export type GetOneRoleResponse = Role;

export type CreateRoleResponse = Role;

export type UpdateRoleResponse = Role;

export type DeleteRoleResponse = Role;

export type GetAllRolesResponse = Role[];

export type GetOneRolePayload = Pick<Role, "id">;

export type DeleteRolePayload = Pick<Role, "id">;

export type GetAllPermissionsResponse = Permission[];

export type UpdateRolePayload = Pick<Role, "id"> & Partial<CreateRolePayload>;

export type CreateRolePayload = Pick<Role, "name"> & {
  permissions: Permission[];
};
