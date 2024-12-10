export type Rules =
  | "upperCaseLetter"
  | "lowerCaseLetter"
  | "specialCharacter"
  | "number";

export type PasswordCheckerProps = {
  password: string;
};
