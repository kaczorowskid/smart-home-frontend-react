import { User } from "./common.types";

export type GetAllUsersResponse = User[];

export type GetOneUserPayload = Pick<User, "id">;

export type GetOneUserResponse = User;

export type CreateUserByAdminPayload = Pick<User, "email" | "roleId">;

export type CreateUserByAdminResponse = User;

export type GetUserByTokenPayload = {
  token: string;
};

export type GetUserByTokenResponse = User;

export type RegisterAndVerifyUserPayload = Pick<
  User,
  "id" | "name" | "surname"
> & {
  password: string;
};

export type RegisterAndVerifyUserResponse = User;

export type DeleteUserPayload = Pick<User, "id">;

export type DeleteUserResponse = User;

export type UpdateUserPayload = Pick<
  User,
  "id" | "name" | "surname" | "roleId"
>;

export type UpdateUserResponse = User;
