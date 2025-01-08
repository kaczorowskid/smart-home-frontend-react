import { type User } from "./common.types";

export type LoginUserResponse = User;

export type RegisterUserResponse = User;

export type AuthorizeUserResponse = User;

export type RefreshUserAccessTokenResponse = User;

export type LogoutUserResponse = {
  result: boolean;
};

export type LoginUserPayload = {
  email: string;
  password: string;
};

export type RegisterUserPayload = {
  email: string;
  password: string;
};
