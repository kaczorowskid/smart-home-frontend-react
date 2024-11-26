import { PageWrapper } from "@/components/common/PageWrapper";
import { Settings as SettingsIcon } from "lucide-react";
import { ChangeTheme } from "./ChangeTheme";
import { ChangeLanguage } from "./ChangeLanguage";
import { useIntl } from "react-intl";

export const Settings = () => {
  const { formatMessage } = useIntl();
  return (
    <PageWrapper
      title={formatMessage({ id: "view.settings" })}
      icon={SettingsIcon}
    >
      <ChangeTheme />
      <ChangeLanguage />
    </PageWrapper>
  );
};
