import { SelectProps } from "@/components/common/Select/Select.types";
import { FormattedMessage } from "react-intl";

export const itemsType: SelectProps["items"] = [
  {
    name: <FormattedMessage id="option.thermometer" />,
    value: "THERMOMETER",
  },
  {
    name: <FormattedMessage id="option.blind" />,
    value: "BLIND",
  },
];
