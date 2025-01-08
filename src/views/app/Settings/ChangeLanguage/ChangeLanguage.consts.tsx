import { FormattedMessage } from "react-intl";
import { type SelectProps } from "@/components/common/Select/Select.types";

export const languageItems: SelectProps["items"] = [
  {
    value: "en",
    name: <FormattedMessage id="option.en" />,
  },
  {
    value: "pl",
    name: <FormattedMessage id="option.pl" />,
  },
];
