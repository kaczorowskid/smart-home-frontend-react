import { FormattedMessage } from "react-intl";
import { type OptionsTab } from "./Options.types";

export const buttonNameMapper: Record<OptionsTab, JSX.Element> = {
  users: <FormattedMessage id="view.add-user" />,
  rooms: <FormattedMessage id="view.add-room" />,
  roles: <FormattedMessage id="view.add-role" />,
  devices: <FormattedMessage id="view.add-device" />,
};
