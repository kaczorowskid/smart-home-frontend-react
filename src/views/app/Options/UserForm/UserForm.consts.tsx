import { SelectProps } from "@/components/common/Select/Select.types";
import { FormattedMessage } from "react-intl";

export const roleItems: SelectProps["items"] = [
  {
    name: <FormattedMessage id="option.user" />,
    value: "USER",
  },
  {
    name: <FormattedMessage id="option.admin" />,
    value: "ADMIN",
  },
];
