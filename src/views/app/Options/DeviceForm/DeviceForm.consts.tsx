import { FormattedMessage } from "react-intl";
import { type SelectProps } from "@/components/common/Select/Select.types";

export const itemsType: SelectProps["items"] = [
  {
    value: "THERMOMETER",
    name: <FormattedMessage id="option.thermometer" />,
  },
  {
    value: "BLIND",
    name: <FormattedMessage id="option.blind" />,
  },
];
