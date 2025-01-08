import { FormattedMessage } from "react-intl";
import { type SelectProps } from "@/components/common/Select/Select.types";

export const roomsItems: SelectProps["items"] = [
  {
    value: "BACKYARD",
    name: <FormattedMessage id="option.backyard" />,
  },
  {
    value: "BATHROOM",
    name: <FormattedMessage id="option.bathroom" />,
  },
  {
    value: "BEDROOM",
    name: <FormattedMessage id="option.bedroom" />,
  },
  {
    value: "KITCHEN",
    name: <FormattedMessage id="option.kitchen" />,
  },
  {
    value: "LIVINGROOM",
    name: <FormattedMessage id="option.living-room" />,
  },
];
