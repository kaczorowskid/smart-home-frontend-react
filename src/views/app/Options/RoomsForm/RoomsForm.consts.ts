import { SelectProps } from "@/components/common/Select/Select.types";
import { IntlShape } from "react-intl";

export const roomsItems = (
  formatMessage: IntlShape["formatMessage"]
): SelectProps["items"] => [
  {
    name: formatMessage({ id: "option.backyard" }),
    value: "BACKYARD",
  },
  {
    name: formatMessage({ id: "option.bathroom" }),
    value: "BATHROOM",
  },
  {
    name: formatMessage({ id: "option.bedroom" }),
    value: "BEDROOM",
  },
  {
    name: formatMessage({ id: "option.kitchen" }),
    value: "KITCHEN",
  },
  {
    name: formatMessage({ id: "option.living-room" }),
    value: "LIVINGROOM",
  },
];
