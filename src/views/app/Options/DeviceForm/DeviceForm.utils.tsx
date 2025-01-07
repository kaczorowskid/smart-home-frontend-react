import { DeviceType } from "@/api/types/common.types";
import { FormTitle } from "@/components/app/FormTitle";
import { Blinds, Thermometer } from "lucide-react";
import { FormattedMessage } from "react-intl";

export const formTitleMapper: Record<DeviceType, JSX.Element> = {
  BLIND: (
    <FormTitle title={<FormattedMessage id="view.blind" />} icon={Blinds} />
  ),
  THERMOMETER: (
    <FormTitle
      title={<FormattedMessage id="view.thermometer" />}
      icon={Thermometer}
    />
  ),
};
