import { PageWrapper } from "@/components/common/PageWrapper";
import { Settings as SettingsIcon } from "lucide-react";
import { LogoutSection } from "./LogoutSection";

export const Settings = () => {
  return (
    <PageWrapper title="Settings" icon={SettingsIcon}>
      <LogoutSection />
    </PageWrapper>
  );
};
