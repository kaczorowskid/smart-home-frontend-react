import { FormattedMessage } from "react-intl";
import { Rules } from "./PasswordChecker.types";

const passwordRules: Record<Rules, RegExp> = {
  upperCaseLetter: /(?=.*[A-Z])/g,
  lowerCaseLetter: /(?=.*[a-z])/g,
  specialCharacter: /[\^$*.\[\]{}\(\)?\-\"!@#%&\/,><\':;|_~`]/g,
  number: /[0-9]/g,
};

export const passwordChecks: Record<Rules, JSX.Element> = {
  upperCaseLetter: <FormattedMessage id="view.upper-case" />,
  lowerCaseLetter: <FormattedMessage id="view.lower-case" />,
  specialCharacter: <FormattedMessage id="view.special-character" />,
  number: <FormattedMessage id="view.number" />,
};

export const renderColorMapper: Record<number, string> = {
  0: "bg-red-500",
  1: "bg-orange-500",
  2: "bg-blue-500",
  3: "bg-green-500",
};

export const checkPassword = (password: string) => {
  const checks = Object.keys(passwordChecks)
    .map((item) => {
      const itemVal = item as Rules;

      if (password.match(passwordRules[itemVal]) !== null) {
        return passwordChecks[itemVal];
      }
    })
    .filter(Boolean);

  return checks;
};
