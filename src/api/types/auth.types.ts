import { User } from "./common.types";

export type RegisterUserPayload = {
  email: string;
  password: string;
};

export type RegisterUserResponse = User;

export type LoginUserPayload = {
  email: string;
  password: string;
};

export type LoginUserResponse = User;

export type AuthorizeUserResponse = User;

export type LogoutUserResponse = {
  result: boolean;
};
