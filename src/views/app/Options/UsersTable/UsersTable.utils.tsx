import { FormattedMessage } from "react-intl";

export const userVerifyMapper = (isVerify: boolean) => {
  if (isVerify) {
    return <FormattedMessage id="table.verified" />;
  }

  return <FormattedMessage id="table.not-verified" />;
};
