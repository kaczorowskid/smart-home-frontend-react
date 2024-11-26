import { SelectProps } from "@/components/common/Select/Select.types";
import { IntlShape } from "react-intl";

export const languageItems = (
  formatMessage: IntlShape["formatMessage"]
): SelectProps["items"] => [
  {
    name: formatMessage({ id: "option.en" }),
    value: "en",
  },
  {
    name: formatMessage({ id: "option.pl" }),
    value: "pl",
  },
];
