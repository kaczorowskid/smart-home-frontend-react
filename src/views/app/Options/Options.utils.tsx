import { FormattedMessage } from "react-intl";
import { OptionsTab } from "./Options.types";

export const buttonNameMapper: Record<OptionsTab, JSX.Element> = {
  devices: <FormattedMessage id="view.add-device" />,
  users: <FormattedMessage id="view.add-user" />,
  rooms: <FormattedMessage id="view.add-room" />,
};
