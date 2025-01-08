import { FormattedMessage } from "react-intl";
import { Blinds, Thermometer } from "lucide-react";
import { FormTitle } from "@/components/app/FormTitle";
import { type DeviceType } from "@/api/types/common.types";

export const formTitleMapper: Record<DeviceType, JSX.Element> = {
  BLIND: (
    <FormTitle icon={Blinds} title={<FormattedMessage id="view.blind" />} />
  ),
  THERMOMETER: (
    <FormTitle
      icon={Thermometer}
      title={<FormattedMessage id="view.thermometer" />}
    />
  ),
};
