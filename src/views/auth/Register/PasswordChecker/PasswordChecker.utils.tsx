import { FormattedMessage } from "react-intl";
import { type Rules } from "./PasswordChecker.types";

const passwordRules: Record<Rules, RegExp> = {
  number: /[0-9]/g,
  upperCaseLetter: /(?=.*[A-Z])/g,
  lowerCaseLetter: /(?=.*[a-z])/g,
  // eslint-disable-next-line no-useless-escape
  specialCharacter: /[\^$*.\[\]{}\(\)?\-\"!@#%&\/,><\':;|_~`]/g,
};

export const passwordChecks: Record<Rules, JSX.Element> = {
  number: <FormattedMessage id="view.number" />,
  upperCaseLetter: <FormattedMessage id="view.upper-case" />,
  lowerCaseLetter: <FormattedMessage id="view.lower-case" />,
  specialCharacter: <FormattedMessage id="view.special-character" />,
};

export const renderColorMapper: Record<number, string> = {
  0: "bg-red-500",
  2: "bg-blue-500",
  3: "bg-green-500",
  1: "bg-orange-500",
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
