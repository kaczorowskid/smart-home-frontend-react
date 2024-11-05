import { PageWrapper } from "@/components/common/PageWrapper";
import { Settings as SettingsIcon } from "lucide-react";
import { ChangeThemeSection } from "./ChangeThemeSection";

export const Settings = () => {
  return (
    <PageWrapper title="Settings" icon={SettingsIcon}>
      <ChangeThemeSection />
    </PageWrapper>
  );
};
