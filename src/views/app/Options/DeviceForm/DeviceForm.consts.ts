import { SelectProps } from "@/components/common/Select/Select.types";
import { IntlShape } from "react-intl";

export const itemsType = (formatMessage: IntlShape["formatMessage"]) =>
  [
    {
      name: formatMessage({ id: "option.thermometer" }),
      value: "THERMOMETER",
    },
    {
      name: formatMessage({ id: "option.blind" }),
      value: "BLIND",
    },
  ] as const satisfies SelectProps["items"];
