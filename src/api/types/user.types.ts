import { User } from "./common.types";

export type GetAllUsersResponse = User[];

export type GetOneUserPayload = {
  email: User["email"];
};

export type GetOneUserResponse = User;

export type CreateUserByAdminPayload = {
  email: User["email"];
  role: User["role"];
};

export type CreateUserByAdminResponse = User;

export type GetUserByTokenPayload = {
  token: string;
};

export type GetUserByTokenResponse = User;

export type RegisterAndVerifyUserPayload = {
  id: User["id"];
  name: User["name"];
  surname: User["surname"];
  password: string;
};

export type RegisterAndVerifyUserResponse = User;

export type DeleteUserPayload = {
  id: User["id"];
};

export type DeleteUserResponse = User;

export type UpdateUserPayload = {
  id: User["id"];
  name: User["name"];
  surname: User["surname"];
  role: User["role"];
};

export type UpdateUserResponse = User;
