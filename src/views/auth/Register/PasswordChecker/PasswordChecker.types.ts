export type PasswordCheckerProps = {
  password: string;
};

export type Rules =
  | "number"
  | "upperCaseLetter"
  | "lowerCaseLetter"
  | "specialCharacter";
