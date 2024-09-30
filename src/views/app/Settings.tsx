import { LogoutSection } from "@/components/app/LogoutSection";
import { PageWrapper } from "@/components/common/PageWrapper";
import { Settings as SettingsIcon } from "lucide-react";

export const Settings = () => {
  return (
    <PageWrapper title="Settings" icon={SettingsIcon}>
      <LogoutSection />
    </PageWrapper>
  );
};
