import { RoomType } from "@/api/types/common.types";
import { FormattedMessage } from "react-intl";

export const roomTypeMapper: Record<RoomType, JSX.Element> = {
  BACKYARD: <FormattedMessage id="option.backyard" />,
  BATHROOM: <FormattedMessage id="option.bathroom" />,
  BEDROOM: <FormattedMessage id="option.bedroom" />,
  KITCHEN: <FormattedMessage id="option.kitchen" />,
  LIVINGROOM: <FormattedMessage id="option.living-room" />,
};
