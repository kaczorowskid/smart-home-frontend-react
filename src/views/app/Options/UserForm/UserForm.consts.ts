import { SelectProps } from "@/components/common/Select/Select.types";
import { IntlShape } from "react-intl";

export const roleItems = (
  formatMessage: IntlShape["formatMessage"]
): SelectProps["items"] => [
  {
    name: formatMessage({ id: "option.user" }),
    value: "USER",
  },
  {
    name: formatMessage({ id: "option.admin" }),
    value: "ADMIN",
  },
];
