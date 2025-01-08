import { type User } from "./common.types";

export type GetOneUserResponse = User;

export type DeleteUserResponse = User;

export type UpdateUserResponse = User;

export type GetAllUsersResponse = User[];

export type GetUserByTokenResponse = User;

export type CreateUserByAdminResponse = User;

export type GetOneUserPayload = Pick<User, "id">;

export type RegisterAndVerifyUserResponse = User;

export type DeleteUserPayload = Pick<User, "id">;

export type GetUserByTokenPayload = {
  token: string;
};

export type CreateUserByAdminPayload = Pick<User, "email" | "roleId">;

export type UpdateUserPayload = Pick<
  User,
  "id" | "name" | "roleId" | "surname"
>;

export type RegisterAndVerifyUserPayload = {
  password: string;
} & Pick<User, "id" | "name" | "surname">;
