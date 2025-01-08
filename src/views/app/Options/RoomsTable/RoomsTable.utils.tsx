import { FormattedMessage } from "react-intl";
import { type RoomType } from "@/api/types/common.types";

export const roomTypeMapper: Record<RoomType, JSX.Element> = {
  BEDROOM: <FormattedMessage id="option.bedroom" />,
  KITCHEN: <FormattedMessage id="option.kitchen" />,
  BACKYARD: <FormattedMessage id="option.backyard" />,
  BATHROOM: <FormattedMessage id="option.bathroom" />,
  LIVINGROOM: <FormattedMessage id="option.living-room" />,
};
