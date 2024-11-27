import { PageWrapper } from "@/components/common/PageWrapper";
import { Settings as SettingsIcon } from "lucide-react";
import { ChangeTheme } from "./ChangeTheme";
import { ChangeLanguage } from "./ChangeLanguage";
import { FormattedMessage } from "react-intl";

export const Settings = () => (
  <PageWrapper
    title={<FormattedMessage id="view.settings" />}
    icon={SettingsIcon}
  >
    <ChangeTheme />
    <ChangeLanguage />
  </PageWrapper>
);
