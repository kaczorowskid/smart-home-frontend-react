import { FormattedMessage } from "react-intl";
import { type SelectProps } from "@/components/common/Select/Select.types";

export const roleItems: SelectProps["items"] = [
  {
    value: "USER",
    name: <FormattedMessage id="option.user" />,
  },
  {
    value: "ADMIN",
    name: <FormattedMessage id="option.admin" />,
  },
];
