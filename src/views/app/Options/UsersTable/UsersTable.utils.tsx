import { FormattedMessage } from "react-intl";

export const userVerifyMapper = (isVerify: boolean) => {
  if (isVerify) {
    return <FormattedMessage id="option.verified" />;
  }

  return <FormattedMessage id="option.not-verified" />;
};
