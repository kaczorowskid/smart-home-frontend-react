import { SelectProps } from "@/components/common/Select/Select.types";
import { FormattedMessage } from "react-intl";

export const roomsItems: SelectProps["items"] = [
  {
    name: <FormattedMessage id="option.backyard" />,
    value: "BACKYARD",
  },
  {
    name: <FormattedMessage id="option.bathroom" />,
    value: "BATHROOM",
  },
  {
    name: <FormattedMessage id="option.bedroom" />,
    value: "BEDROOM",
  },
  {
    name: <FormattedMessage id="option.kitchen" />,
    value: "KITCHEN",
  },
  {
    name: <FormattedMessage id="option.living-room" />,
    value: "LIVINGROOM",
  },
];
