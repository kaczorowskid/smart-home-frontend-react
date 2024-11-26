import { UserRole } from "@/types/common.types";
import { FormattedMessage } from "react-intl";

export const userRoleMapper: Record<UserRole, JSX.Element> = {
  ADMIN: <FormattedMessage id="option.admin" />,
  USER: <FormattedMessage id="option.user" />,
};

export const userVerifyMapper = (isVerify: boolean) => {
  if (isVerify) {
    return <FormattedMessage id="option.verified" />;
  }

  return <FormattedMessage id="option.not-verified" />;
};
