import { FormattedMessage } from "react-intl";
import { Settings as SettingsIcon } from "lucide-react";
import { PageWrapper } from "@/components/common/PageWrapper";
import { ChangeTheme } from "./ChangeTheme";
import { ChangeLanguage } from "./ChangeLanguage";

export const Settings = () => (
  <PageWrapper
    icon={SettingsIcon}
    title={<FormattedMessage id="view.settings" />}
  >
    <ChangeTheme />
    <ChangeLanguage />
  </PageWrapper>
);
