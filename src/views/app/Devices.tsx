import { DevicesTableV2 } from "@/components/app/DevicesTableV2/DevicesTable";
import { PageWrapper } from "@/components/common/PageWrapper";
import { RadioTower } from "lucide-react";

export const Devices = () => (
  <PageWrapper title="Devices" icon={RadioTower}>
    <DevicesTableV2 />
  </PageWrapper>
);
