import { SelectProps } from "@/components/common/Select/Select.types";
import { FormattedMessage } from "react-intl";

export const languageItems: SelectProps["items"] = [
  {
    name: <FormattedMessage id="option.en" />,
    value: "en",
  },
  {
    name: <FormattedMessage id="option.pl" />,
    value: "pl",
  },
];
