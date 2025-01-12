import { FormattedMessage } from "react-intl";
import { BlindsIcon, ThermometerIcon } from "lucide-react";
import { type CommonDevice } from "@/api/types/common.types";

export const deviceTypeIconMapper: Record<CommonDevice["type"], JSX.Element> = {
  BLIND: <BlindsIcon />,
  THERMOMETER: <ThermometerIcon />,
};

export const deviceStatusMapper: Record<CommonDevice["status"], JSX.Element> = {
  online: <FormattedMessage id="table.online" />,
  offline: <FormattedMessage id="table.offline" />,
};

export const deviceStatusColorMapper: Record<CommonDevice["status"], string> = {
  offline: "text-red-500 border-red-500",
  online: "text-green-500 border-green-500",
};
